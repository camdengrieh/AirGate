import { z } from "zod";
import { nonEmptyRefine } from "../utils";
import { VisibilitySchema } from "./common";
import { DynamicAmountSchema } from "./dynamicReward";
import { GuildRewardCreationSchema } from "./guildReward";

const BaseRoleRewardSchema = z.object({
  platformRoleId: z.string(),
  visibility: VisibilitySchema,
  platformRoleData: z.any().optional(),
  dynamicAmount: DynamicAmountSchema.optional(),
});

const GuildPlatformResolvableSchema = z.union([
  z.object({
    guildPlatform: GuildRewardCreationSchema.and(
      z.object({ roleIds: z.undefined() })
    ),
    guildPlatformId: z.undefined(),
  }),
  z.object({
    guildPlatformId: z.number().int().positive(),
    guildPlatform: z.undefined(),
  }),
]);

const GuildPlatformIndexableSchema = z.object({
  guildPlatformIndex: z.number().int().nonnegative(),
  guildPlatformId: z.undefined(),
  guildPlatform: z.undefined(),
});

export const RoleRewardCreationPayloadSchema = z.intersection(
  BaseRoleRewardSchema.partial(),
  GuildPlatformResolvableSchema
);

export const RoleRewardCreationForGuildCreationPayloadSchema = z.intersection(
  BaseRoleRewardSchema.partial(),
  GuildPlatformIndexableSchema
);

export const RoleRewardUpdatePayloadSchema =
  BaseRoleRewardSchema.partial().refine(...nonEmptyRefine());

export const RolePlatformClaimPayloadSchema = z.object({
  args: z.array(z.string()),
});
