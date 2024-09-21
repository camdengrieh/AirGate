import { z } from "zod";
import { UniswapV3PositionsChains } from "../../consts";
import { ChainSchema, EvmAddressSchema } from "../common";
import { MinMaxAmount } from "./common";

const UniswapChains = ChainSchema.extract(UniswapV3PositionsChains);

const UniswapV3Positions = z.object({
  type: z.literal("UNISWAP_V3_POSITIONS"),
  data: z
    .object({
      token0: EvmAddressSchema,
      token1: EvmAddressSchema,
      baseCurrency: z.enum(["token0", "token1"]).default("token0"),
      countedPositions: z
        .enum(["ALL", "IN_RANGE", "FULL_RANGE"])
        .default("FULL_RANGE"),

      // Not used for requirement checking, only for UX purposes
      // Values taken from https://support.uniswap.org/hc/en-us/articles/21069524840589-What-is-a-tick-when-providing-liquidity
      // "Pool fee value" column
      defaultFee: z
        .union([
          z.literal(100),
          z.literal(500),
          z.literal(3000),
          z.literal(10000),
        ])
        .nullable()
        .optional(),
    })
    .and(MinMaxAmount),
  chain: UniswapChains,
});

export default UniswapV3Positions;
