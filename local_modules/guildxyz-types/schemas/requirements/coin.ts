import { z } from "zod";
import { ChainSchema } from "../common";

export default z.object({
  type: z.literal("COIN"),
  chain: ChainSchema,
  data: z.object({
    minAmount: z.number(),
    maxAmount: z.number().optional(),
  }),
});
