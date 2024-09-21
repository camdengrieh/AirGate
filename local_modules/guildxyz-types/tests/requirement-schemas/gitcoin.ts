import { Schemas } from "../../types";

const shouldFail = [
  {
    type: "GITCOIN_SCORE",
    data: {
      id: "asd",
    },
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  { type: "GITCOIN_PASS", data: {} },
  { type: "GITCOIN_PASS" },
  { type: "GITCOIN_STAMP", data: {} },
  { type: "GITCOIN_STAMP" },
  {
    type: "GITCOIN_STAMP",
    data: {
      stamp: "_",
      minAmount: 0,
    },
  },
  {
    type: "GITCOIN_SCORE",
    data: {
      id: "asd",
      score: 1,
    },
  },
];

export default {
  name: "Gitcoin",
  shouldPass,
  shouldFail,
};
