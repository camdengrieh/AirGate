import { z } from "zod";
import { GuildPinAction, XPEventType } from "../consts";
import { PositiveInteger } from "./common";
import { ContractCallGuildRewardSchema } from "./guildReward";

const MAX_USERNAME_LENGTH = 28;
const MAX_NAME_LENGTH = 100;
const MAX_IMAGE_URL_LENGTH = 500;
const MAX_BIO_LENGTH = 1000;

export const ProfileUsernameSchema = z
  .string()
  .max(MAX_USERNAME_LENGTH, {
    message: `Username cannot exceed ${MAX_USERNAME_LENGTH} characters`,
  })
  .superRefine((value, ctx) => {
    const areCharactersLegal = /^[\w\-.]+$/.test(value);
    const isDigitOnly = value.replace(/[0-9]/g, "").length === 0;

    if (!areCharactersLegal) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Username can only contain alphanumeric characters, underscores, dots and hyphens",
      });
    }

    if (isDigitOnly) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Username must not consist of digits only",
      });
    }
  });

export const ProfileCreationSchema = z.object({
  username: ProfileUsernameSchema,
  name: z
    .string()
    .max(MAX_NAME_LENGTH, {
      message: `Name cannot exceed ${MAX_NAME_LENGTH} characters`,
    })
    .nullable()
    .optional(),
  bio: z
    .string()
    .max(MAX_BIO_LENGTH, {
      message: `Bio cannot exceed ${MAX_BIO_LENGTH} characters`,
    })
    .nullable()
    .optional(),
  profileImageUrl: z
    .string()
    .url({ message: "Profile image must be a valid URL" })
    .max(MAX_IMAGE_URL_LENGTH, {
      message: `Profile image URL cannot exceed ${MAX_IMAGE_URL_LENGTH} characters`,
    })
    .nullable()
    .optional(),
  backgroundImageUrl: z
    .string()
    .url({ message: "Background image must be a valid URL or color code" })
    .max(MAX_IMAGE_URL_LENGTH, {
      message: `Background image URL cannot exceed ${MAX_IMAGE_URL_LENGTH} characters`,
    })
    .nullable()
    .optional()
    .or(z.string().startsWith("#")),
  referrerUserId: PositiveInteger,
});

export const ProfileUpdateSchema = ProfileCreationSchema.extend({
  username: ProfileUsernameSchema.optional(),
}).omit({ referrerUserId: true });

export const ProfileSchema = ProfileCreationSchema.extend({
  userId: PositiveInteger,
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
});

export const ContributionCreationSchema = z.object({
  guildId: PositiveInteger,
  roleId: PositiveInteger,
});

export const ContributionUpdateSchema = z.object({
  guildId: PositiveInteger.optional(),
  roleId: PositiveInteger.optional(),
});

export const ContributionSchema = ContributionCreationSchema.extend({
  id: PositiveInteger,
  userId: PositiveInteger,
});

export const ContributionCollectionSchema = z.object({
  contributionId: PositiveInteger,
  guildId: PositiveInteger,
  NFTs: z.array(
    z.object({
      userRewardId: PositiveInteger,
      data: ContractCallGuildRewardSchema.shape.platformGuildData,
    })
  ),
  pins: z.array(
    z.object({
      action: z.enum(GuildPinAction),
      minted: z.boolean(),
    })
  ),
  points: z.array(
    z.object({
      guildId: PositiveInteger,
      guildPlatformId: PositiveInteger,
      totalPoints: z.number().int(),
      rank: z.number().int(),
      roleIds: z.array(PositiveInteger),
    })
  ),
});

export const ExperienceSchema = z.object({
  id: PositiveInteger,
  userId: PositiveInteger,
  auditLogId: PositiveInteger,
  eventType: z.enum(XPEventType),
  amount: PositiveInteger,
  createdAt: z.date().or(z.string()),
});
