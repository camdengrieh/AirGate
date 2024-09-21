import { z } from "zod";

export const LinkParamsSchema = z.union([
  z.object({
    userId: z.number().int().positive(),
    signature: z.string(),
    nonce: z.string(),
  }),
  z.object({ isDelegated: z.boolean() }),
  z.object({
    userId: z.undefined(),
    signature: z.undefined(),
    nonce: z.undefined(),
    isDelegated: z.undefined(),
  }),
]);

export const VerifyKeyPayloadSchema = z
  .object({
    pubKey: z.string(),
    verificationParams: z.object({ reCaptcha: z.string() }).optional(),
  })
  .and(LinkParamsSchema);
