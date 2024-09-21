import { z } from "zod";
import { AnyAddressSchema } from "../common";

export const AllowlistSchema = z
  .object({
    addresses: z.array(AnyAddressSchema).default([]),
    fileId: z.string().min(1).optional(),
    hideAllowlist: z.boolean().optional(),
  })
  .default({});

export default [
  z.object({
    type: z.literal("ALLOWLIST"),
    data: AllowlistSchema,
  }),
  z.object({
    type: z.literal("ALLOWLIST_EMAIL"),
    data: z
      .object({
        addresses: z.array(z.string().email().toLowerCase()).default([]),
        hideAllowlist: z.boolean().optional(),
        fileId: z.string().min(1).optional(),
      })
      .default({}),
  }),
];
