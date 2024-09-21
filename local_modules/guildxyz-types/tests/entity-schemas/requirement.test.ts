import { z } from "zod";
import {
  RequirementCreationPayloadSchema,
  RequirementSchema,
  RequirementUpdatePayloadSchema,
} from "../../schemas";
import testZodSchema from "../utils";

const createdAt = new Date();
const updatedAt = new Date();

const shouldFail = [
  {},
  // Non-ISO datetime string
  {
    id: 1,
    roleId: 1,
    createdAt: createdAt.toString(),
    updatedAt: updatedAt.toISOString(),
  },
  // Invalid chain
  {
    id: 1,
    roleId: 1,
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
    chain: "MAINNET",
  },
  // Invalid isNegated
  {
    id: 1,
    roleId: 1,
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
    isNegated: 1,
  },
  // Invalid roleId
  {
    id: 1,
    roleId: "1",
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
  },
  // Invalid visibility
  {
    id: 1,
    roleId: 1,
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
    visibility: "ALMAFA",
  },
];

const shouldPass: [
  z.input<typeof RequirementSchema>,
  z.output<typeof RequirementSchema>,
][] = [
  // Partial input
  [
    {
      id: 1,
      roleId: 1,
      createdAt: createdAt.toISOString(),
      updatedAt: updatedAt.toISOString(),
      type: "FREE",
    },
    {
      id: 1,
      isNegated: false,
      createdAt,
      roleId: 1,
      updatedAt,
      visibility: "PUBLIC",
      type: "FREE",
      data: {},
    },
  ],
  // Complete input
  [
    {
      id: 1,
      isNegated: true,
      createdAt: createdAt.toISOString(),
      roleId: 1,
      updatedAt: createdAt.toISOString(),
      visibility: "HIDDEN",
      type: "ALLOWLIST",
      data: { addresses: ["0x0000000000000000000000000000000000000000"] },
    },
    {
      id: 1,
      isNegated: true,
      createdAt,
      roleId: 1,
      updatedAt,
      visibility: "HIDDEN",
      type: "ALLOWLIST",
      data: { addresses: ["0x0000000000000000000000000000000000000000"] },
    },
  ],
  // Customization
  [
    {
      id: 1,
      roleId: 1,
      createdAt: createdAt.toISOString(),
      updatedAt: updatedAt.toISOString(),
      type: "FREE",
      data: {
        customName: "some-custom-name",
        customImage: "https://some-custom.image",
      },
    },
    {
      id: 1,
      isNegated: false,
      createdAt,
      roleId: 1,
      updatedAt,
      visibility: "PUBLIC",
      type: "FREE",
      data: {
        customName: "some-custom-name",
        customImage: "https://some-custom.image",
      },
    },
  ],
];

testZodSchema({
  name: "Requirement entity",
  schema: RequirementSchema,
  shouldFail,
  shouldPass: shouldPass.map(([_]) => _),
  expectedOutput: shouldPass.map(([, _]) => _),
});

testZodSchema({
  name: "Requirement entity creation",
  schema: RequirementCreationPayloadSchema,
  shouldFail: [{}],
  shouldPass: [
    {
      type: "FREE",
      data: {
        customName: "some-custom-name",
        customImage: "https://some-custom.image",
      },
    },
  ],
});

testZodSchema({
  name: "Requirement entity update",
  schema: RequirementUpdatePayloadSchema,
  shouldFail: [{}],
  shouldPass: [
    {
      type: "FREE",
      data: {
        customName: "some-custom-name",
        customImage: "https://some-custom.image",
      },
    },
  ],
});
