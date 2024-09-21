import { z } from "zod";

export default z.object({
  type: z.literal("CAPTCHA"),
  data: z
    .object({
      maxAmount: z.number().int().nonnegative().optional(),
    })
    .default({}),
});
