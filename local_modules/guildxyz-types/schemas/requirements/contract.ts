import { z } from "zod";
import { ChainSchema, EvmAddressSchema } from "../common";

export default z.object({
  type: z.literal("CONTRACT"),
  data: z.object({
    id: z.string().trim().min(1),
    resultIndex: z.number().int().nonnegative().optional(),
    params: z.array(z.string().or(z.number()).or(z.boolean())),
    resultMatch: z.enum(["=", ">", "<", ">=", "<="]),
    expected: z.string(),
  }),
  address: EvmAddressSchema,
  chain: ChainSchema,
});
