import { z } from "zod";
import { ChainSchema, EvmAddressSchema } from "../common";
import { PaymentSupportedChains } from "../../consts";

export default z.object({
  type: z.literal("PAYMENT"),
  data: z.object({
    id: z.string(),
  }),
  chain: ChainSchema.extract(PaymentSupportedChains),
  address: EvmAddressSchema,
});
