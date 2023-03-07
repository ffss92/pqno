import "~/styles/globals.css";
import { trpc } from "~/utils/trpc";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <>
      <SessionProvider session={session}>
        <Toaster />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default trpc.withTRPC(App);
