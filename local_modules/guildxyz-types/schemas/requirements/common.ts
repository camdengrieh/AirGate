import { z } from "zod";

const RequirementCustomizationSchema = z.object({
  customName: z.string().optional(),
  customImage: z.string().optional(),
});

const MinMaxAmount = z
  .object({ minAmount: z.number(), maxAmount: z.undefined() })
  .or(
    z.object({
      minAmount: z.undefined(),
      maxAmount: z.number(),
    })
  )
  .or(
    z
      .object({
        minAmount: z.number(),
        maxAmount: z.number(),
      })
      .refine((input) => input.maxAmount >= input.minAmount, {
        message:
          "If both maxAmount and minAmount are defined, the former cannot be a smaller number",
      })
  )
  .or(
    z
      .object({
        minAmount: z.undefined(),
        maxAmount: z.undefined(),
      })
      .transform(() => ({ minAmount: 0, maxAmount: undefined }))
  );

export { MinMaxAmount, RequirementCustomizationSchema };
