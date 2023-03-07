import Head from "next/head";
import { Footer } from "./footer";
import { Nav } from "./nav";

type PageProps = {
  children?: React.ReactNode;
  title?: string;
  desciption?: string;
};

export const Page: React.FC<PageProps> = ({ children, title, desciption }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | pqno` : "pqno"}</title>
        {desciption && (
          <meta
            name="description"
            content={desciption}
          />
        )}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className="bg-stone-900 text-stone-100">
        <Nav />
        <main className="p-4 container mx-auto max-w-7xl min-h-screen shadow-md">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
