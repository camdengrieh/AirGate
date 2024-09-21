import { Schemas } from "../../types";

const shouldFail = [
  {},
  { type: "TWITTER_FOLLOW" },
  { type: "TWITTER_FOLLOW", data: {} },
  { type: "TWITTER_FOLLOW", data: { id: "" } },
  { type: "TWITTER_FOLLOW", data: { id: 12345 } },
  { type: "TWITTER_FOLLOWER_COUNT" },
  { type: "TWITTER_FOLLOWER_COUNT", data: {} },
  { type: "TWITTER_FOLLOWER_COUNT", data: { minAmount: -1 } },
  { type: "TWITTER_FOLLOWER_COUNT", data: { minAmount: 12.34 } },
  { type: "TWITTER_FOLLOWER_COUNT", data: { minAmount: "randomText" } },
  { type: "TWITTER_ACCOUNT_AGE" },
  { type: "TWITTER_ACCOUNT_AGE", data: {} },
  { type: "TWITTER_ACCOUNT_AGE", data: { minAmount: -1 } },
  { type: "TWITTER_ACCOUNT_AGE", data: { minAmount: "10 days" } },
  { type: "TWITTER_ACCOUNT_AGE", data: { id: 12.34 } },
  { type: "TWITTER_ACCOUNT_VERIFIED" },
  { type: "TWITTER_ACCOUNT_VERIFIED", data: {} },
  { type: "TWITTER_ACCOUNT_VERIFIED", data: { id: "randomText" } },
  { type: "TWITTER_ACCOUNT_VERIFIED", data: { id: 12345 } },
  { type: "TWITTER_FOLLOW_V2", data: { id: 12345 } },
  { type: "TWITTER_FOLLOW_V2", data: { id: "" } },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  { type: "TWITTER_FOLLOW", data: { id: "janowastaken" } },
  { type: "TWITTER_FOLLOWER_COUNT", data: { minAmount: 100 } },
  { type: "TWITTER_ACCOUNT_AGE", data: { minAmount: 15552000000 } },
  {
    type: "TWITTER_ACCOUNT_AGE",
    data: { minAmount: 15552000000, fromNow: true },
  },
  { type: "TWITTER_ACCOUNT_VERIFIED", data: { id: "business" } },
  { type: "TWITTER_ACCOUNT_PROTECTED" },
  { type: "TWITTER_ACCOUNT_PROTECTED", data: {} },
  { type: "TWITTER_FOLLOW_V2", data: { id: "janowastaken" } },
];

export default {
  name: "Twitter",
  shouldPass,
  shouldFail,
};
