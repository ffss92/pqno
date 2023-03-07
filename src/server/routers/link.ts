import { TRPCError } from "@trpc/server";
import { nanoid } from "nanoid";
import { z } from "zod";
import { assignDefaultHttp, stringToUrl } from "~/utils/link";
import { authedProcedure, publicProcedure, router } from "../trpc";

const SUPPORTED_PROTOCOLS = ["https:", "http:"];

export const linkRouter = router({
  create: publicProcedure
    .input(z.object({ originalUrl: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const link = assignDefaultHttp(input.originalUrl);
      const url = stringToUrl(link);

      if (!SUPPORTED_PROTOCOLS.includes(url.protocol)) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Protocol is not supported",
        });
      }

      const code = nanoid(6);
      return await ctx.prisma.link.create({
        data: {
          code,
          originalUrl: url.href,
          userId: ctx.session?.user.id,
        },
      });
    }),
  userLinks: authedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    return ctx.prisma.link.findMany({
      where: {
        userId,
      },
    });
  }),
});
