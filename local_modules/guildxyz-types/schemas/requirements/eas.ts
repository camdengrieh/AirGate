import { z } from "zod";
import { EvmAddressSchema } from "../common";

const EasChains = z.enum([
  "ETHEREUM",
  "OPTIMISM",
  "ARBITRUM",
  "SEPOLIA",
  "BASE_GOERLI",
  "BASE_MAINNET",
  "BASE_SEPOLIA",
  "LINEA",
]);

const EasCommonFields = z
  .object({
    schemaId: z.string().min(1),
  })
  .and(
    z.object({ key: z.string().min(1), val: z.string().min(1) }).or(
      z
        .object({
          key: z.undefined().or(z.literal("")),
          val: z.undefined().or(z.literal("")),
        })
        .transform(() => ({ key: undefined, val: undefined }))
    )
  );

export default [
  z.object({
    type: z.enum(["EAS_ATTESTED_BY", "COINBASE_EAS_ATTESTED_BY"]),
    chain: EasChains.default("ETHEREUM"),
    data: EasCommonFields.and(
      z.object({
        attester: EvmAddressSchema,
      })
    ),
  }),
  z.object({
    chain: EasChains.default("ETHEREUM"),
    type: z.literal("EAS_ATTEST"),
    data: EasCommonFields.and(
      z.object({
        recipient: EvmAddressSchema,
      })
    ),
  }),
];
