import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { prisma } from "./prisma";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "~/pages/api/auth/[...nextauth]";

interface CreateContextOptions {
  session: Session | null;
}

export async function createContextInner({ session }: CreateContextOptions) {
  return {
    prisma,
    session,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;

export async function createContext({
  req,
  res,
}: trpcNext.CreateNextContextOptions): Promise<Context> {
  const session = await getServerSession(req, res, authOptions);
  return await createContextInner({
    session,
  });
}
