/* eslint-disable import/prefer-default-export */
import { z } from "zod";
import { AnyAddressSchema, GuildPinActionSchema } from "./common";

export const IssueGuildPinPayloadSchema = z.object({
  userAddress: AnyAddressSchema,
  guildAction: GuildPinActionSchema,
  chainId: z.number().int().positive(),
  contractAddress: AnyAddressSchema,
});
