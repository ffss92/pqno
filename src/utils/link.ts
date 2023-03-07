import { TRPCError } from "@trpc/server";

/**
 * Appends `http://` to the string if no `://` is present
 */
export const assignDefaultHttp = (link: string) => {
  if (link.split("://").length === 1) return `http://${link}`;
  return link;
};

/**
 * Tries to create a `URL` object from a string. Throws a `TRPCError` if fails.
 */
export const stringToUrl = (link: string) => {
  try {
    return new URL(link);
  } catch (err) {
    throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid URL" });
  }
};
