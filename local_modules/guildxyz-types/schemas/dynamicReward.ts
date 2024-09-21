import { z } from "zod";
import { PositiveInteger } from "./common";

const InputSourceSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("REQUIREMENT_AMOUNT"),
    roleId: PositiveInteger,
    requirementId: PositiveInteger,
  }),
  z.object({
    type: z.literal("REQUIREMENT_ACCESS"),
    roleId: PositiveInteger,
    requirementId: PositiveInteger,
    value: z.number().default(1),
  }),
  z.object({
    type: z.literal("POINTS"),
    guildId: PositiveInteger,
    guildPlatformId: PositiveInteger,
  }),
  z.object({
    type: z.literal("STATIC"),
    value: PositiveInteger,
  }),
]);

const Linear = z.object({
  type: z.literal("LINEAR"),
  params: z
    .object({
      multiplier: z.number().default(1),
      addition: z.number().default(0),
      shouldFloorResult: z.boolean().default(false).optional(),
    })
    .default({}),
  input: InputSourceSchema.or(z.tuple([InputSourceSchema])).transform((_) =>
    Array.isArray(_) ? _ : ([_] as [z.output<typeof InputSourceSchema>])
  ),
});

const DummyMultiInput = z.object({
  type: z.literal("SUM"),
  input: z.array(InputSourceSchema),
});

const DynamicRewardOperation = z.discriminatedUnion("type", [
  Linear,
  DummyMultiInput,
]);

export type InputSource = z.input<typeof InputSourceSchema>;

export const DynamicAmountSchema = z.object({
  operation: DynamicRewardOperation,
});

export type DynamicAmountToCreate = z.input<typeof DynamicAmountSchema>;

export type DynamicAmount = z.output<typeof DynamicAmountSchema> & {
  amount?: number;
};

export type DynamicAmountOperations = DynamicAmount["operation"]["type"];
