import { Schemas } from "../../types";

const shouldFail = [
  {},
  // Misses guildId field
  { type: "POINTS_AMOUNT", data: {} },
  { type: "POINTS_TOTAL_AMOUNT", data: {} },
  { type: "POINTS_RANK", data: {} },
  // Invalid guildId
  { type: "POINTS_AMOUNT", data: { guildId: "123" } },
  { type: "POINTS_RANK", data: { guildId: "123" } },
  { type: "POINTS_TOTAL_AMOUNT", data: { guildId: "123" } },
  // Smaller maxAmount then minAmount
  {
    type: "POINTS_AMOUNT",
    data: { guildId: 1, maxAmount: 9, minAmount: 10 },
  },
  {
    type: "POINTS_TOTAL_AMOUNT",
    data: { guildId: 1, maxAmount: 9, minAmount: 10 },
  },
  {
    type: "POINTS_RANK",
    data: { guildId: 1, maxAmount: 9, minAmount: 10 },
  },
  // Invalid platformGuildId
  { type: "POINTS_AMOUNT", data: { guildId: 1 } },
  { type: "POINTS_RANK", data: { guildId: 1 } },
  {
    type: "POINTS_AMOUNT",
    data: { guildId: 1, guildPlatformId: "123" },
  },
  {
    type: "POINTS_RANK",
    data: { guildId: 1, guildPlatformId: "123" },
  },
  // Invalid minAmount
  {
    type: "POINTS_AMOUNT",
    data: { guildId: 1, minAmount: "123" },
  },
  {
    type: "POINTS_TOTAL_AMOUNT",
    data: { guildId: 1, minAmount: "123" },
  },
  {
    type: "POINTS_RANK",
    data: { guildId: 1, minAmount: "123" },
  },
  // Invalid maxAmount
  {
    type: "POINTS_AMOUNT",
    data: { guildId: 1, maxAmount: "123" },
  },
  {
    type: "POINTS_TOTAL_AMOUNT",
    data: { guildId: 1, maxAmount: "123" },
  },
  {
    type: "POINTS_RANK",
    data: { guildId: 1, maxAmount: "123" },
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "POINTS_AMOUNT",
    data: { guildId: 1, guildPlatformId: 1, maxAmount: 10, minAmount: 1 },
  },
  {
    type: "POINTS_AMOUNT",
    data: { guildId: 1, guildPlatformId: 1, minAmount: 1 },
  },
  {
    type: "POINTS_AMOUNT",
    data: { guildId: 1, guildPlatformId: 1, maxAmount: 10 },
  },
  {
    type: "POINTS_TOTAL_AMOUNT",
    data: { guildId: 1, maxAmount: 10, minAmount: 1 },
  },
  {
    type: "POINTS_TOTAL_AMOUNT",
    data: { guildId: 1, minAmount: 1 },
  },
  {
    type: "POINTS_TOTAL_AMOUNT",
    data: { guildId: 1, maxAmount: 10 },
  },
  {
    type: "POINTS_RANK",
    data: { guildId: 1, guildPlatformId: 1, maxAmount: 10, minAmount: 1 },
  },
  {
    type: "POINTS_RANK",
    data: { guildId: 1, guildPlatformId: 1, minAmount: 1 },
  },
  {
    type: "POINTS_RANK",
    data: { guildId: 1, guildPlatformId: 1, maxAmount: 10 },
  },
  {
    type: "POINTS_AMOUNT",
    data: { guildId: 1, guildPlatformId: 1, maxAmount: 10, minAmount: 10 },
  },
  {
    type: "POINTS_AMOUNT",
    data: { guildId: 1, guildPlatformId: 1, minAmount: 10 },
  },
  {
    type: "POINTS_AMOUNT",
    data: { guildId: 1, guildPlatformId: 1, maxAmount: 10 },
  },
  {
    type: "POINTS_TOTAL_AMOUNT",
    data: { guildId: 1, maxAmount: 10, minAmount: 10 },
  },
  {
    type: "POINTS_TOTAL_AMOUNT",
    data: { guildId: 1, minAmount: 10 },
  },
  {
    type: "POINTS_TOTAL_AMOUNT",
    data: { guildId: 1, maxAmount: 10 },
  },
  {
    type: "POINTS_RANK",
    data: { guildId: 1, guildPlatformId: 1, maxAmount: 10, minAmount: 10 },
  },
  {
    type: "POINTS_RANK",
    data: { guildId: 1, guildPlatformId: 1, minAmount: 10 },
  },
  {
    type: "POINTS_RANK",
    data: { guildId: 1, guildPlatformId: 1, maxAmount: 10 },
  },
];

export default {
  name: "Points",
  shouldPass,
  shouldFail,
};
