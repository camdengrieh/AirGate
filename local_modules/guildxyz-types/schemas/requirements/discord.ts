import { z } from "zod";

export default [
  z.object({
    type: z.literal("DISCORD_ROLE"),
    data: z.object({
      serverId: z.string().min(1),
      roleId: z.string().min(1),
      serverName: z.string().min(1).optional(),
      roleName: z.string().min(1).optional(),
    }),
  }),
  z.object({
    type: z.enum(["DISCORD_JOIN", "DISCORD_JOIN_FROM_NOW"]),
    data: z.object({
      memberSince: z.number(),
      // fromNow: z.boolean().optional(),
    }),
  }),
  z.object({
    type: z.literal("DISCORD_MEMBER_SINCE"),
    data: z.object({
      serverId: z.string().min(1),
      serverName: z.string().min(1).optional(),
      memberSince: z.number().optional(),
    }),
  }),
];
