import { Schemas } from "../../types";

// https://github.com/guildxyz/guild.xyz
const shouldFail = [
  {},
  { type: "GITHUB_STARRING" },
  { type: "GITHUB_STARRING", data: {} },
  { type: "GITHUB_STARRING", data: { id: "randomText" } },
  { type: "GITHUB_ACCOUNT_AGE", data: { minAmount: "randomText" } },
  { type: "GITHUB_ACCOUNT_AGE", data: { minAmount: -1 } },
  { type: "GITHUB_ACCOUNT_AGE", data: { minAmount: 12.34 } },
  { type: "GITHUB_COMMIT_COUNT" },
  { type: "GITHUB_COMMIT_COUNT", data: {} },
  // Note: id is the actual commit count here, min/maxAmount is the timeframe
  { type: "GITHUB_COMMIT_COUNT", data: { id: -1 } },
  { type: "GITHUB_COMMIT_COUNT", data: { id: 10, minAmount: "randomText" } },
  { type: "GITHUB_COMMIT_COUNT", data: { id: 10, minAmount: -1 } },
  { type: "GITHUB_COMMIT_COUNT", data: { id: 10, minAmount: 12.34 } },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "GITHUB_STARRING",
    data: { id: "https://github.com/guildxyz/guild.xyz" },
  },
  { type: "GITHUB_ACCOUNT_AGE", data: { minAmount: 15552000000 } },
  { type: "GITHUB_COMMIT_COUNT", data: { id: 10 } },
  { type: "GITHUB_COMMIT_COUNT", data: { id: 10, minAmount: 15552000000 } },
];

export default {
  name: "GitHub",
  shouldPass,
  shouldFail,
};
