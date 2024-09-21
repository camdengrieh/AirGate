import { z } from "zod";
import { AnyAddressSchema } from "./common";

const LinkParamsSchema = z.union([
  z.object({
    signature: z.string(),
    nonce: z.string(),
    timestamp: z.number().int().positive(),
  }),
  z.object({
    signature: z.undefined(),
    nonce: z.undefined(),
    timestamp: z.undefined(),
  }),
]);

export const UserAddressCreationPayloadSchema = z
  .object({
    address: AnyAddressSchema,
    isPrimary: z.boolean().default(false),
    isDelegated: z.boolean().default(false),
  })
  .and(LinkParamsSchema);

export const UserAddressUpdatePayloadSchema = z.object({
  isPrimary: z.boolean(),
});
