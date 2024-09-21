import { z } from "zod";
import { DynamicAmountSchema } from "../../schemas/dynamicReward";
import testZodSchema from "../utils";

const shouldFail = [
  {},
  { operation: { type: "LINEAR" } },
  {
    operation: { type: "LINEARRR" },
    input: { type: "REQUIREMENT_AMOUNT", requirementId: 1 },
  },
  {
    operation: { type: "LINEAR" },
    input: { type: "REQUIREMENT_AMOUNT", requirementId: 1.2 },
  },
  {
    operation: { type: "LINEAR" },
    input: { type: "REQUIREMENT_AMOUNT", requirementId: -1 },
  },
  {
    operation: { type: "LINEAR" },
    input: { type: "REQUIREMENT_AMOUNT", requirementId: "1" },
  },
  {
    operation: { type: "LINEAR" },
    input: { type: "REQUIREMENT_AMOUNT", requirementId: [1] },
  },
  {
    operation: { type: "LINEAR" },
    input: { type: "REQUIREMENT_AMOUNT", requirementId: 1 },
    params: { m: "1" },
  },

  {
    operation: {
      type: "SUM",
      input: { type: "REQUIREMENT_AMOUNT", requirementId: 1 },
    },
  },
  {
    operation: {
      type: "SUM",
      input: { type: "REQUIREMENT_AMOUNT", requirementId: [1] },
    },
  },
];

const shouldPass: Array<
  [z.input<typeof DynamicAmountSchema>, z.output<typeof DynamicAmountSchema>]
> = [
  // ----- LINEAR
  // No params at all
  [
    {
      operation: {
        type: "LINEAR",
        input: { type: "REQUIREMENT_AMOUNT", requirementId: 1, roleId: 1 },
      },
    },
    {
      operation: {
        type: "LINEAR",
        params: { multiplier: 1, addition: 0 },
        input: [{ type: "REQUIREMENT_AMOUNT", requirementId: 1, roleId: 1 }],
      },
    },
  ],
  // Empty params
  [
    {
      operation: {
        type: "LINEAR",
        params: {},
        input: { type: "REQUIREMENT_AMOUNT", requirementId: 1, roleId: 1 },
      },
    },
    {
      operation: {
        type: "LINEAR",
        params: { multiplier: 1, addition: 0 },
        input: [{ type: "REQUIREMENT_AMOUNT", requirementId: 1, roleId: 1 }],
      },
    },
  ],
  // Only specify m
  [
    {
      operation: {
        type: "LINEAR",
        params: { multiplier: 2 },
        input: { type: "REQUIREMENT_AMOUNT", requirementId: 1, roleId: 1 },
      },
    },
    {
      operation: {
        type: "LINEAR",
        params: { multiplier: 2, addition: 0 },
        input: [{ type: "REQUIREMENT_AMOUNT", requirementId: 1, roleId: 1 }],
      },
    },
  ],
  // Only specify b
  [
    {
      operation: {
        type: "LINEAR",
        params: { addition: 2 },
        input: { type: "REQUIREMENT_AMOUNT", requirementId: 1, roleId: 1 },
      },
    },
    {
      operation: {
        type: "LINEAR",
        params: { multiplier: 1, addition: 2 },
        input: [{ type: "REQUIREMENT_AMOUNT", requirementId: 1, roleId: 1 }],
      },
    },
  ],
  // shouldFloorResult
  [
    {
      operation: {
        type: "LINEAR",
        params: { addition: 1, multiplier: 2, shouldFloorResult: true },
        input: { type: "REQUIREMENT_AMOUNT", requirementId: 1, roleId: 1 },
      },
    },
    {
      operation: {
        type: "LINEAR",
        params: { addition: 1, multiplier: 2, shouldFloorResult: true },
        input: [{ type: "REQUIREMENT_AMOUNT", requirementId: 1, roleId: 1 }],
      },
    },
  ],

  // ----- SUM
  [
    {
      operation: {
        type: "SUM",
        input: [
          { type: "REQUIREMENT_AMOUNT", requirementId: 1, roleId: 1 },
          { type: "REQUIREMENT_AMOUNT", requirementId: 2, roleId: 1 },
        ],
      },
    },
    {
      operation: {
        type: "SUM",
        input: [
          { type: "REQUIREMENT_AMOUNT", requirementId: 1, roleId: 1 },
          { type: "REQUIREMENT_AMOUNT", requirementId: 2, roleId: 1 },
        ],
      },
    },
  ],
];

testZodSchema({
  name: "Dynamic Amount Reward",
  schema: DynamicAmountSchema,
  shouldFail,
  shouldPass: shouldPass.map(([_]) => _),
  expectedOutput: shouldPass.map(([, _]) => _),
});
