import { NextPage } from "next";
import { Page } from "~/components/page";
import { pageDescriptions } from "~/utils/meta";
import {
  ClipboardDocumentListIcon,
  InformationCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { trpc } from "~/utils/trpc";
import { toast } from "react-hot-toast";
import { useLinkActions, useLinkStore } from "~/store";

const Home: NextPage = () => {
  const actions = useLinkActions();
  const [link, setLink] = useState("");

  const createLink = trpc.link.create.useMutation({
    onError(err) {
      console.error(err);
      toast.error("Ocorreu um erro ao encurtar seu link");
    },
    onSuccess(link) {
      setLink(""); // Clear input
      actions.add(link); // Add to store
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createLink.mutate({ originalUrl: link });
  };

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
      <div className="container mx-auto max-w-xl p-4 bg-stone-200 rounded-lg shadow-md">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-2"
        >
          <input
            type="text"
            placeholder="Digite seu link aqui."
            autoComplete="off"
            value={link}
            onChange={handleChange}
            className="p-2 w-full rounded-lg shadow border border-transparent focus:shadow-none text-stone-800 focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-300 transition"
          />
          <button
            disabled={createLink.isLoading || link === ""}
            className="shrink-0 px-4 py-2 text-white bg-purple-500 disabled:bg-stone-500 rounded-lg hover:bg-purple-600 active:bg-purple-500 font-semibold focus:outline-none focus:ring focus:ring-purple-300 transition"
          >
            Encurtar
          </button>
        </form>
        <LinkSection />
      </div>
    </Page>
  );
};

const LinkSection: React.FC = () => {
  const totalLinks = useLinkStore((state) => state.links.length);

  return (
    <div className="mt-4">
      <div className="p-4 border border-stone-900/20 w-full rounded-md">
        {totalLinks === 0 ? <EmptyState /> : <RecentLinks />}
      </div>
    </div>
  );
};

const EmptyState: React.FC = () => {
  return (
    <>
      <p className="text-stone-500 text-sm">
        Utilize o campo acima para encurtar seu link. Eles aparecerão aqui para
        você copiar e compartilhar.
      </p>
    </>
  );
};

const RecentLinks: React.FC = () => {
  const links = useLinkStore((state) => state.links);
  const actions = useLinkActions();
  const createShortUrl = (code: string) => {
    return `${process.env.NEXT_PUBLIC_APP_URL}/${code}`;
  };
  const copyShortUrl = async (code: string) => {
    await navigator.clipboard.writeText(createShortUrl(code));
    toast.success("Link copiado");
  };
  return (
    <div className="text-sm text-stone-800">
      {links.map((link) => (
        <div
          className="flex items-center py-1"
          key={link.id}
        >
          {/* Info */}
          <div className="flex-1 overflow-auto">
            <p className="truncate font-semibold text-stone-600">
              {createShortUrl(link.code)}
            </p>
            <p className="truncate text-xs text-stone-500">
              {link.originalUrl}
            </p>
          </div>
          {/* Actions */}
          <div className="flex-shrink-0 ml-2 flex gap-1 items-center">
            <button onClick={() => copyShortUrl(link.code)}>
              <ClipboardDocumentListIcon className="w-6 h-6 fill-stone-600" />
            </button>
            <button onClick={() => actions.clear(link.id)}>
              <MinusCircleIcon className="w-6 h-6 fill-red-700" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
