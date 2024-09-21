import { Schemas } from "../../types";

const shouldFail = [
  {
    type: "COVALENT_FIRST_TX",
    data: {
      timestamps: { minAmount: "2" },
    },
  },
  {
    type: "COVALENT_FIRST_TX",
    data: {
      timestamps: { minAmount: 2 },
    },
    chain: "GOERLI",
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "COVALENT_FIRST_TX",
    data: {
      timestamps: { maxAmount: 1, minAmount: 2 },
    },
  },
  {
    type: "COVALENT_FIRST_TX",
    data: {
      timestamps: { minAmount: 2 },
    },
  },
  {
    type: "COVALENT_FIRST_TX",
    data: {
      timestamps: { maxAmount: 2 },
    },
  },
  {
    type: "COVALENT_FIRST_TX",
    data: {
      timestamps: {},
    },
  },
  {
    type: "COVALENT_FIRST_TX",
    chain: "POLYGON",
  },
  {
    type: "COVALENT_CONTRACT_DEPLOY",
    data: { txCount: 1 },
  },
  {
    type: "COVALENT_TX_COUNT",
    address: "0x83007Eb59Ca5ccfb77bF20A54A75AAfb281FB79B",
    data: {
      txCount: 3,
      timestamps: {},
    },
  },
];

export default {
  name: "Covalent",
  shouldPass,
  shouldFail,
};
