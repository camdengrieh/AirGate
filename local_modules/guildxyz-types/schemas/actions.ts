import { z } from "zod";

export const JoinActionPayloadSchema = z.object({
  guildId: z.number().int().positive(),
});

export const StatusUpdateActionPayloadSchema = z.object({
  roleIds: z.array(z.number().int().positive()),
  recheckAccess: z.boolean().optional(),
  updateMemberships: z.boolean().optional(),
  manageRewards: z.boolean().optional(),
  forceRewardActions: z.boolean().optional(),
  onlyForThisPlatform: z.boolean().optional(),
});
