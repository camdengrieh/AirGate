import { z } from "zod";

const options = {
  EMAIL: z.object({ type: z.literal("EMAIL"), contact: z.string().email() }),
  TELEGRAM: z.object({ type: z.literal("TELEGRAM"), contact: z.string() }),
  // So we don't forget to update here in case ContactType changes
}; //  satisfies Record<typeof ContactType[number], any>

export const GuildContactCreationPayloadSchema = z.discriminatedUnion("type", [
  options.EMAIL,
  options.TELEGRAM,
]);

export const GuildContactUpdatePayloadSchema =
  GuildContactCreationPayloadSchema;
