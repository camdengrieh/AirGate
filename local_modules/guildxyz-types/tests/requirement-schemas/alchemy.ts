import { Schemas } from "../../types";

const shouldFail = [
  {
    type: "ALCHEMY_FIRST_TX",
    data: {
      maxAmount: 1,
    },
    chain: "BASE",
  },
  {
    type: "ALCHEMY_TX_VALUE",
    data: {
      txValue: 1,
    },
    chain: "BASE_GOERLI",
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "ALCHEMY_FIRST_TX",
    data: {
      maxAmount: 1,
    },
    chain: "ETHEREUM",
  },
  {
    type: "ALCHEMY_FIRST_TX",
    data: {
      maxAmount: 1,
    },
  },
  {
    type: "ALCHEMY_FIRST_TX_RELATIVE",
    data: {
      maxAmount: 1,
    },
  },
  {
    type: "ALCHEMY_CONTRACT_DEPLOY",
    data: {
      txCount: 1,
    },
    chain: "OPTIMISM",
  },
  {
    type: "ALCHEMY_CONTRACT_DEPLOY",
    data: {
      txCount: 1,
      maxAmount: 1,
    },
    chain: "OPTIMISM",
  },
  {
    type: "ALCHEMY_TX_VALUE",
    data: {
      txValue: 1,
    },
    chain: "ARBITRUM",
  },
];

export default {
  name: "Alchemy",
  shouldPass,
  shouldFail,
};
