import { z } from "zod";
import { AnyAddressSchema } from "./common";
import { ErrorMessages } from "../consts";

export const GuildAdminCreationPayloadSchema = z.object({
  address: AnyAddressSchema,
  isOwner: z.boolean().optional(),
});

export const GuildAdminUpdatePayloadSchema = z.object({
  isOwner: z.boolean().refine((value) => value === true, {
    message: ErrorMessages.ADMIN_UPDATE_IS_OWNER_FALSE,
  }),
});
