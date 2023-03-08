import { GetServerSideProps, NextPage } from "next";
import { Page } from "~/components/page";
import { prisma } from "~/server/prisma";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

const Redirect: NextPage<{ error: string }> = ({ error }) => {
  return (
    <Page
      title="Erro ao redirecionar"
      desciption="O link solicitado não existe."
    >
      <div className="container mx-auto max-w-sm bg-stone-100 rounded-lg p-4 text-stone-800 shadow-md mt-20">
        <div className="flex justify-center">
          <span className="p-1 rounded-full bg-red-500 shadow">
            <ExclamationTriangleIcon className="w-7 h-7 fill-stone-100" />
          </span>
        </div>
        <h2 className="text-center md:text-lg font-semibold mt-2">
          Não foi possível redirecionar.
        </h2>
        <p className="text-sm text-center text-stone-500">{error}</p>
      </div>
    </Page>
  );
};

export default Redirect;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { code } = ctx.query;

  const forwarded = ctx.req.headers["x-forwarded-for"];
  const ip =
    typeof forwarded === "string"
      ? forwarded.split(/, /)[0]
      : ctx.req.socket.remoteAddress;

  try {
    const link = await prisma.link.findUnique({
      where: {
        code: String(code),
      },
    });

    // Link not found
    if (!link) {
      return {
        props: {
          error: "O link solicitado não existe.",
        },
      };
    }

    // Link is blocked
    if (link.blocked) {
      return {
        props: {
          error: "O link solicitado se encontra bloqueado.",
        },
      };
    }

    // Save visit if link is not private
    if (!link.private) {
      await prisma.visits.create({
        data: {
          linkId: link.id,
          visitorIp: ip,
        },
      });
    }

    // Redirect
    return {
      redirect: {
        destination: link.originalUrl,
        permanent: false,
      },
    };
  } catch (err) {
    return {
      props: {
        error: "Erro interno do servidor. Tente novamente mais tarde.",
      },
    };
  }
};
