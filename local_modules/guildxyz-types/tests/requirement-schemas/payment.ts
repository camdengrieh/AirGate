import { Schemas } from "../../types";

const shouldFail = [
  {
    type: "PAYMENT",
    data: {
      id: "1",
    },
    address: "0x0000000000000000000000000000000000000000",
    chain: "ETHEREUMMM",
  },
  {
    type: "PAYMENT",
    data: {
      id: "1",
    },
    chain: "ETHEREUMMM",
  },
  {
    type: "PAYMENT",
    data: {
      id: "1",
    },
    address: "0x0000000000000000000000000000000000000000",
  },
  {
    type: "PAYMENT",
    data: {
      id: 1,
    },
    address: "0x0000000000000000000000000000000000000000",
    chain: "ETHEREUM",
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "PAYMENT",
    data: {
      id: "1",
    },
    address: "0x0000000000000000000000000000000000000000",
    chain: "ETHEREUM",
  },
];

export default {
  name: "Payment",
  shouldPass,
  shouldFail,
};
