import { z } from "zod";
import { nonEmptyRefine } from "../utils";
import { LogicSchema, VisibilitySchema } from "./common";
import { RequirementCreationPayloadSchema } from "./requirement";
import {
  RoleRewardCreationForGuildCreationPayloadSchema,
  RoleRewardCreationPayloadSchema,
} from "./roleReward";

const RoleBaseSchema = z.object({
  name: z.string().max(50),
  description: z.string().max(1000).optional(),
  imageUrl: z.string().max(500).optional(), // TODO: Check for .url() OR .regex(/\/guildLogos\/[0-285]\.svg/, "Invalid imageUrl")
  logic: LogicSchema.optional(),
  visibility: VisibilitySchema.optional(),
  anyOfNum: z.number().int().positive().optional(),
  hideFromEyes: z.boolean().optional(),
});

export const RoleCreationPayloadSchema = z.intersection(
  RoleBaseSchema,
  z.object({
    requirements: z.array(RequirementCreationPayloadSchema).min(1),
    rolePlatforms: z.array(RoleRewardCreationPayloadSchema).optional(),
  })
);

export const RoleCreationForGuildCreationPayloadSchema = z.intersection(
  RoleBaseSchema,
  z.object({
    requirements: z.array(RequirementCreationPayloadSchema).min(1),
    rolePlatforms: z
      .array(RoleRewardCreationForGuildCreationPayloadSchema)
      .optional(),
  })
);

export const RoleUpdatePayloadSchema = z
  .intersection(
    RoleBaseSchema.partial(),
    z.object({ position: z.number().int().positive().optional() })
  )
  .refine(...nonEmptyRefine());
