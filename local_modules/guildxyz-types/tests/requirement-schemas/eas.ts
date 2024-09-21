import { Schemas } from "../../types";

const shouldFail = [
  {
    type: "EAS_ATTEST",
    data: {
      key: "k",
      recipient: "0x0000000000000000000000000000000000000000",
      schemaId: "_",
      val: 1,
    },
  },
  {
    type: "EAS_ATTESTED_BY",
    data: {
      key: "k",
      attester: "0x0000000000000000000000000000000000000000",
      val: "v",
    },
  },
  {
    type: "COINBASE_EAS_ATTESTED_BY",
    data: {
      key: "k",
      attester: "0x0000000000000000000000000000000000000000",
      val: "v",
    },
  },
  {
    type: "EAS_ATTEST",
    data: {
      key: "k",
      recipient: "_",
      schemaId: "_",
      val: "v",
    },
  },
  {
    type: "COINBASE_EAS_ATTESTED_BY",
    data: {
      key: "k",
      attester: "0x0000000000000000000000000000000000000000",
      schemaId: "_",
    },
  },
  {
    type: "EAS_ATTEST",
    chain: "POLYGON",
    data: {
      key: "k",
      recipient: "0x0000000000000000000000000000000000000000",
      schemaId: "_",
      val: "v",
    },
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "EAS_ATTEST",
    data: {
      key: "k",
      recipient: "0x0000000000000000000000000000000000000000",
      schemaId: "_",
      val: "v",
    },
  },
  {
    type: "EAS_ATTEST",
    chain: "OPTIMISM",
    data: {
      key: "k",
      recipient: "0x0000000000000000000000000000000000000000",
      schemaId: "_",
      val: "v",
    },
  },
  {
    type: "EAS_ATTESTED_BY",
    data: {
      key: "k",
      attester: "0x0000000000000000000000000000000000000000",
      schemaId: "_",
      val: "v",
    },
  },
  {
    type: "COINBASE_EAS_ATTESTED_BY",
    data: {
      key: "k",
      attester: "0x0000000000000000000000000000000000000000",
      schemaId: "_",
      val: "v",
    },
  },
  {
    type: "COINBASE_EAS_ATTESTED_BY",
    data: {
      attester: "0x0000000000000000000000000000000000000000",
      schemaId: "_",
    },
  },
  {
    type: "COINBASE_EAS_ATTESTED_BY",
    data: {
      key: "",
      attester: "0x0000000000000000000000000000000000000000",
      schemaId: "_",
      val: "",
    },
  },
  {
    type: "COINBASE_EAS_ATTESTED_BY",
    data: {
      key: undefined,
      attester: "0x0000000000000000000000000000000000000000",
      schemaId: "_",
      val: undefined,
    },
  },
];

export default {
  name: "EAS",
  shouldPass,
  shouldFail,
};
