import { z } from "zod";
import { ErrorMessages, SocialLinks } from "../consts";
import { isNumeric, nonEmptyRefine } from "../utils";
import { GuildSortTypeSchema } from "./common";
import { GuildRewardCreationSchema } from "./guildReward";
import { RoleCreationForGuildCreationPayloadSchema } from "./role";
import { GuildContactCreationPayloadSchema } from "./contact";

const ThemeSchema = z.object({
  mode: z.enum(["DARK", "LIGHT"]),
  color: z.string().max(10),
  backgroundImage: z.string().max(100),
  backgroundCss: z.string().max(10),
});

const BaseGuildSchema = z.object({
  name: z.string().min(1).max(50),
  urlName: z.string().max(50),

  description: z.string().max(1500).optional(),
  imageUrl: z.string().max(500).optional(),
  // z
  //   .union([
  //     z.string().regex(/\/guildLogos\/[0-285]\.svg/, "Invalid imageUrl"),
  //     z.string().max(500).url(),
  //   ])
  //   .optional(),
  showMembers: z.boolean().optional(),
  hideFromExplorer: z.boolean().optional(),
  socialLinks: z.record(z.enum(SocialLinks), z.string().url()).optional(),
  onboardingComplete: z.boolean().optional(),
  theme: ThemeSchema.partial().optional(),
});

export const GuildCreationPayloadSchema = BaseGuildSchema.and(
  z.object({
    guildPlatforms: z.array(GuildRewardCreationSchema).optional(),
    roles: z.array(RoleCreationForGuildCreationPayloadSchema).min(1),
    contacts: z.array(GuildContactCreationPayloadSchema),
  })
).refine(
  (ctx) => {
    const hasGuildPlatforms =
      Array.isArray(ctx.guildPlatforms) && ctx.guildPlatforms.length > 0;

    return ctx.roles.every(
      (role) =>
        !role.rolePlatforms ||
        role.rolePlatforms.every(
          (rolePlatform) =>
            !rolePlatform?.guildPlatformIndex ||
            (hasGuildPlatforms &&
              rolePlatform?.guildPlatformIndex <
                (ctx.guildPlatforms?.length ?? 0))
        )
    );
  },
  { message: ErrorMessages.INVALID_GUILDPLATFORM_INDEX }
);

export const GuildUpdatePayloadSchema = BaseGuildSchema.partial().refine(
  ...nonEmptyRefine()
);

export const GuildSearchQueryParamsSchema = z.object({
  order: GuildSortTypeSchema.optional(),
  search: z.string().optional(),
  limit: z.number().int().positive(),
  offset: z.number().int().nonnegative(),
});

export const GuildGetManyQueryParamsSchema = z.object({
  guildIds: z.string().refine(
    (guildIdsParam) => {
      const splits = guildIdsParam.split(",");
      const allSplitsAreValid = splits.every((split) => isNumeric(split));
      return allSplitsAreValid;
    },
    { message: "Invalid guildIds, please provide comma-separated numbers" }
  ),
});
