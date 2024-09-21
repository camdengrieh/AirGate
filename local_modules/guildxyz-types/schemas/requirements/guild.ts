import { z } from "zod";

export default [
  z.object({
    type: z.literal("GUILD_MEMBER"),
    data: z.object({
      guildId: z.number().int().positive(),
    }),
  }),
  z.object({
    type: z.literal("GUILD_ROLE"),
    data: z.object({
      guildId: z.number().int().positive(),
      roleId: z.number().int().positive(),
      minAmount: z.number().int().positive().optional(),
      maxAmount: z.number().int().positive().optional(),
    }),
  }),
  z.object({
    type: z.literal("GUILD_ROLE_RELATIVE"),
    data: z.object({
      guildId: z.number().int().positive(),
      roleId: z.number().int().positive(),
      minAmount: z.number().int().positive().optional(),
      maxAmount: z.number().int().positive().optional(),
    }),
  }),
  z.object({
    type: z.literal("GUILD_ADMIN"),
    data: z.object({
      minAmount: z.number().int().nonnegative(),
    }),
  }),
  z.object({
    type: z.literal("GUILD_USER_SINCE"),
    data: z.object({
      creationDate: z.coerce
        .date()
        .or(z.number())
        .or(z.string())
        .pipe(z.coerce.date()),
    }),
  }),
  z.object({
    type: z.literal("GUILD_MINGUILDS"),
    data: z.object({
      minAmount: z.number().int().positive(),
    }),
  }),
];
