import { z } from "zod";
import { EvmAddressSchema } from "../common";

const CovalentChains = z.enum([
  "ETHEREUM",
  "SCROLL_ALPHA",
  "POLYGON",
  "BASE_MAINNET",
  "BASE_GOERLI",
  "ZORA",
  "AVALANCHE",
  "ZKSYNC_ERA",
  "POLYGON_ZKEVM",
  "CRONOS",
  "NEON_EVM",
  "PGN",
  "OPTIMISM",
  "LINEA",
  "MANTLE",
  "SCROLL",
  "SCROLL_SEPOLIA",
  "RONIN",
  "ARBITRUM",
  "METIS",
  "TAIKO_KATLA",
  "BSC",
  "BASE_SEPOLIA",
  "OASIS_SAPPHIRE",
  "BLAST_MAINNET",
  "ZETACHAIN",
  "TAIKO",
  "FANTOM",
  "SEI",
  "ROOTSTOCK",
  "MODE",
  "LISK",
  "CRONOS_ZKEVM",
]);

const Timestamps = z
  .object({
    minAmount: z.number(),
    maxAmount: z.number(),
  })
  .partial()
  .default({});

export default [
  z.object({
    type: z.enum(["COVALENT_FIRST_TX", "COVALENT_FIRST_TX_RELATIVE"]),
    chain: CovalentChains.default("ETHEREUM"),
    data: z
      .object({
        timestamps: Timestamps,
      })
      .default({}),
  }),
  z.object({
    type: z.enum([
      "COVALENT_CONTRACT_DEPLOY",
      "COVALENT_CONTRACT_DEPLOY_RELATIVE",
      "COVALENT_TX_COUNT",
      "COVALENT_TX_COUNT_RELATIVE",
    ]),
    chain: CovalentChains.default("ETHEREUM"),
    address: EvmAddressSchema.nullable().optional(),
    data: z.object({
      txCount: z.number().int().nonnegative(),
      maxAmount: z.number().optional(),
      minAmount: z.number().optional(),
      timestamps: Timestamps,
    }),
  }),
  z.object({
    type: z.enum(["COVALENT_TX_VALUE", "COVALENT_TX_VALUE_RELATIVE"]),
    chain: CovalentChains.default("ETHEREUM"),
    address: EvmAddressSchema.nullable().optional(),
    data: z.object({
      txValue: z.number(),
      maxAmount: z.number().optional(),
      minAmount: z.number().optional(),
      timestamps: Timestamps,
    }),
  }),
];
