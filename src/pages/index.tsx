import { NextPage } from "next";
import { Page } from "~/components/page";
import { pageDescriptions } from "~/utils/meta";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

const Home: NextPage = () => {
  return (
    <Page
      title="Home"
      desciption={pageDescriptions.home}
    >
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="py-4 font-bold text-5xl md:text-6xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">
          Seu link, pqno.
        </h2>
      </div>
      <div className="container mx-auto max-w-lg p-4 bg-stone-200 rounded-lg shadow-md">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row gap-2"
        >
          <input
            type="text"
            placeholder="Digite seu link aqui."
            autoComplete="off"
            className="p-2 w-full rounded-lg shadow border border-transparent focus:shadow-none text-stone-800 focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-300 transition"
          />
          <button className="shrink-0 px-4 py-2 text-white bg-purple-600 rounded-lg shadow hover:bg-purple-700 active:bg-purple-800 font-semibold focus:outline-none focus:ring focus:ring-purple-300 transition">
            Encurtar
          </button>
        </form>
        <div className="mt-4">
          <div className="p-4 border border-stone-900/20 w-full rounded-md">
            <EmptyState />
          </div>
        </div>
      </div>
    </Page>
  );
};

const EmptyState: React.FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <InformationCircleIcon className="w-7 h-7 fill-stone-500" />
      </div>
      <p className="text-stone-700 text-sm mt-1">
        Utilize o campo acima para encurtar seu link. Eles aparecerão aqui para
        você copiar e compartilhar.
      </p>
    </>
  );
};

export default Home;
