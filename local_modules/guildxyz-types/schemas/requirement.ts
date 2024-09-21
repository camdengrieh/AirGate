import { z } from "zod";
import { unimplementedRequirementTypes } from "../consts";
import {
  isoDatetimeStringRefine,
  nonEmptyRefine,
  transformToDate,
} from "../utils";
import { AnyAddressSchema, ChainSchema, VisibilitySchema } from "./common";
import requirementDataSchemas from "./requirements";
import { RequirementCustomizationSchema } from "./requirements/common";

export const RequirementTypeAndDataSchema = z
  .discriminatedUnion("type", requirementDataSchemas)
  .or(
    z.object({
      type: z.enum(unimplementedRequirementTypes),
      data: z.any(),
    })
  )
  .and(z.object({ data: RequirementCustomizationSchema.optional() }));

const BaseRequirementSchema = z.object({
  isNegated: z.boolean().default(false),
  visibility: VisibilitySchema.default("PUBLIC"),
  visibilityRoleId: z.number().int().positive().optional().nullable(),
});

const AddressAndChainSchema = z.object({
  chain: ChainSchema.optional(),
  address: AnyAddressSchema.nullable().optional(),
});

export const RequirementCreationPayloadSchema = BaseRequirementSchema.and(
  AddressAndChainSchema
).and(RequirementTypeAndDataSchema);

export const RequirementUpdatePayloadSchema = BaseRequirementSchema.partial()
  .and(AddressAndChainSchema)
  .and(z.object({ data: z.any().optional() }))
  .refine(...nonEmptyRefine());

export const RequirementSchema = BaseRequirementSchema.and(
  RequirementTypeAndDataSchema
)
  .and(AddressAndChainSchema)
  .and(
    z.object({
      id: z.number().positive(),
      roleId: z.number().positive(),
      createdAt: z
        .string()
        .refine(...isoDatetimeStringRefine())
        .transform(transformToDate),
      updatedAt: z
        .string()
        .refine(...isoDatetimeStringRefine())
        .transform(transformToDate),
      name: z.string().max(150).nullable().optional(),
      symbol: z.string().max(100).nullable().optional(),
    })
  );

export const RequirementCreateResponseSchema = RequirementSchema.and(
  z.object({
    deletedRequirements: z.array(z.number()),
  })
);
