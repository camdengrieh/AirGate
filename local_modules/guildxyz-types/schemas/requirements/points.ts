import { z } from "zod";
import { MinMaxAmount } from "./common";

const PointsTotalAmountDataSchema = z
  .object({
    guildId: z.number().int().positive(),
  })
  .and(MinMaxAmount);

// Used for POINTS_RANK and POINTS_AMOUNT
const PointsAmountDataSchema = z
  .object({
    guildPlatformId: z.number().int().positive(),
    guildId: z.number().int().positive(),
  })
  .and(MinMaxAmount);

export default [
  z.object({
    type: z.literal("POINTS_TOTAL_AMOUNT"),
    data: PointsTotalAmountDataSchema,
  }),
  z.object({
    type: z.literal("POINTS_AMOUNT"),
    data: PointsAmountDataSchema,
  }),
  z.object({
    type: z.literal("POINTS_RANK"),
    data: PointsAmountDataSchema,
  }),
];
