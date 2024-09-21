import { z } from "zod";

export default [
  z.object({
    type: z.literal("GITCOIN_PASS"),
    data: z.object({}).default({}),
  }),
  z.object({
    type: z.literal("GITCOIN_STAMP"),
    data: z
      .object({
        stamp: z.string(),
        minAmount: z.number(),
        maxAmount: z.number(),
        credType: z.string(),
        issuer: z.string(),
      })
      .partial()
      .default({}),
  }),
  z.object({
    type: z.literal("GITCOIN_SCORE"),
    data: z.object({
      id: z.string().min(1),
      score: z.number(),
    }),
  }),
];
