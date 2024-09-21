import { Schemas } from "../../types";

const shouldFail = [
  {
    type: "CONTRACT",
    data: { expected: "_", id: "1", params: [], resultMatch: "_" },
    address: "0x0000000000000000000000000000000000000000",
    chain: "ETHEREUM",
  },
  {
    type: "CONTRACT",
    data: { expected: "_", id: "1", params: [], resultMatch: "=" },
    address: "0x0000000000000000000000000000000000000000",
    chain: "ETHEREUM_",
  },
  {
    type: "CONTRACT",
    data: { expected: "_", id: 1, params: [], resultMatch: "=" },
    address: "0x0000000000000000000000000000000000000000",
    chain: "ETHEREUM_",
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "CONTRACT",
    data: { expected: "_", id: "1", params: [], resultMatch: "<" },
    address: "0x0000000000000000000000000000000000000000",
    chain: "ETHEREUM",
  },
  {
    type: "CONTRACT",
    data: {
      expected: "_",
      id: "1",
      params: [],
      resultMatch: "<",
      resultIndex: 0,
    },
    address: "0x0000000000000000000000000000000000000000",
    chain: "ETHEREUM",
  },
  {
    type: "CONTRACT",
    data: {
      expected: "_",
      id: "1",
      params: ["_"],
      resultMatch: "=",
      resultIndex: 0,
    },
    address: "0x0000000000000000000000000000000000000000",
    chain: "ETHEREUM",
  },
  {
    type: "CONTRACT",
    data: {
      expected: "_",
      id: "1",
      params: [1],
      resultMatch: ">",
      resultIndex: 0,
    },
    address: "0x0000000000000000000000000000000000000000",
    chain: "ETHEREUM",
  },
  {
    type: "CONTRACT",
    data: {
      expected: "_",
      id: "1",
      params: [false],
      resultMatch: "<",
      resultIndex: 0,
    },
    address: "0x0000000000000000000000000000000000000000",
    chain: "ETHEREUM",
  },
  {
    type: "CONTRACT",
    data: {
      expected: "_",
      id: "1",
      params: [false, 12, "_"],
      resultMatch: "<",
      resultIndex: 0,
    },
    address: "0x0000000000000000000000000000000000000000",
    chain: "ETHEREUM",
  },
];

export default {
  name: "Contract",
  shouldPass,
  shouldFail,
};
