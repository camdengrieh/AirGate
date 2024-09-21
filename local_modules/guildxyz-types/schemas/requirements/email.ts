import { z } from "zod";

export default [
  z.object({
    type: z.literal("EMAIL_DOMAIN"),
    data: z.object({
      domain: z.string().toLowerCase(),
    }),
  }),
  z.object({
    type: z.literal("EMAIL_VERIFIED"),
    data: z.object({}).default({}),
  }),
];
