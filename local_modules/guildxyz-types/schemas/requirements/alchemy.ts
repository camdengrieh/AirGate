import { z } from "zod";
import { EvmAddressSchema } from "../common";

const AlchemyChains = z.enum([
  "ETHEREUM",
  "POLYGON",
  "ARBITRUM",
  "OPTIMISM",
  "GOERLI",
  "POLYGON_MUMBAI",
]);

const EthIndexerChains = z.enum(["BASE_GOERLI"]);

export default [
  z.object({
    type: z.enum(["ALCHEMY_FIRST_TX", "ALCHEMY_FIRST_TX_RELATIVE"]),
    chain: AlchemyChains.or(EthIndexerChains).default("ETHEREUM"),
    data: z.object({
      maxAmount: z.number(),
    }),
  }),
  z.object({
    type: z.enum([
      "ALCHEMY_CONTRACT_DEPLOY",
      "ALCHEMY_CONTRACT_DEPLOY_RELATIVE",
      "ALCHEMY_TX_COUNT",
      "ALCHEMY_TX_COUNT_RELATIVE",
    ]),
    chain: AlchemyChains.or(EthIndexerChains).default("ETHEREUM"),
    address: EvmAddressSchema.nullable().optional(),
    data: z.object({
      txCount: z.number(),
      maxAmount: z.number().optional(),
      minAmount: z.number().optional(),
    }),
  }),
  z.object({
    type: z.enum(["ALCHEMY_TX_VALUE", "ALCHEMY_TX_VALUE_RELATIVE"]),
    chain: AlchemyChains.default("ETHEREUM"),
    address: EvmAddressSchema.nullable().optional(),
    data: z.object({
      txValue: z.number(),
      maxAmount: z.number().optional(),
      minAmount: z.number().optional(),
    }),
  }),
];
