import { Context } from "./context";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const router = t.router;
export const middleware = t.middleware;
export const isAuthed = middleware(({ next, ctx }) => {
  if (!ctx.session) throw new TRPCError({ code: "UNAUTHORIZED" });

  return next({
    ctx: {
      session: ctx.session,
    },
  });
});
export const publicProcedure = t.procedure;
export const authedProcedure = t.procedure.use(isAuthed);
