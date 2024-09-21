import { z } from "zod";

export default [
  z.object({
    type: z.literal("FUEL_BALANCE"),
    data: z.object({
      minAmount: z.number(),
      maxAmount: z.number().optional(),
    }),
  }),
  z.object({
    type: z.literal("FUEL_TRANSACTIONS"),
    data: z.object({
      id: z.enum(["script", "mint", "create"]).optional(),
      minAmount: z.number().int().optional(),
      maxAmount: z.number().int().optional(),
    }),
  }),
];
