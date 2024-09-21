import { Schemas } from "../../types";

const shouldFail = [
  { type: "SNAPSHOT_FOLLOW", data: { space: "" } },
  { type: "SNAPSHOT_FOLLOW_SINCE", data: { space: "_" } },
  { type: "SNAPSHOT_MAJORITY_VOTES", data: { minRatio: 1.1 } },
  { type: "SNAPSHOT_MAJORITY_VOTES", data: { minRatio: -1 } },
  { type: "SNAPSHOT_MAJORITY_VOTES", data: { minRatio: 2 } },
  { type: "SNAPSHOT_PROPOSALS", data: { minAmount: 1, state: "___" } },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  { type: "SNAPSHOT_FOLLOW", data: { space: "_" } },
  { type: "SNAPSHOT_FOLLOW_SINCE", data: { space: "_", since: 1 } },
  { type: "SNAPSHOT_MAJORITY_VOTES", data: { minRatio: 0 } },
  { type: "SNAPSHOT_MAJORITY_VOTES", data: { minRatio: 0.2 } },
  { type: "SNAPSHOT_MAJORITY_VOTES", data: { minRatio: 1 } },
  { type: "SNAPSHOT_PROPOSALS", data: { minAmount: 1 } },
  { type: "SNAPSHOT_PROPOSALS", data: { minAmount: 1, state: "active" } },
  { type: "SNAPSHOT_VOTES", data: { minAmount: 1 } },
];

export default {
  name: "Snapshot",
  shouldPass,
  shouldFail,
};
