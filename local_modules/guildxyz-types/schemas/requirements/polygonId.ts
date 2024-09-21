import { z } from "zod";
import { ChainSchema } from "../common";

export default [
  z.object({
    type: z.literal("POLYGON_ID_QUERY"),
    data: z.object({
      query: z.array(z.any()),
      maxAmount: z.number().optional(),
    }),
    chain: ChainSchema.optional(),
  }),

  z.object({
    type: z.literal("POLYGON_ID_BASIC"),
    data: z
      .object({
        maxAmount: z.number().optional(),
      })
      .default({}),
    chain: ChainSchema.optional(),
  }),
];
