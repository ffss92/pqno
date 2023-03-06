import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data, status } = useSession();
  const handleGoogleSignIn = () =>
    signIn("google", {
      callbackUrl: "/",
    });

  return (
    <div>
      <div className="p-8">
        {status === "unauthenticated" && (
          <button
            onClick={handleGoogleSignIn}
            className="px-4 py-2 border rounded-md font-semibold"
          >
            Entrar com Google
          </button>
        )}
        {status === "authenticated" && (
          <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};

export default Home;
