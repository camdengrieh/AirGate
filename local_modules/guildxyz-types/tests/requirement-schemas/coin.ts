import { Schemas } from "../../types";

const shouldFail = [
  { type: "COIN", data: { minAmount: "" }, chain: "ETHEREUM" },
  { type: "COIN", data: { minAmount: 1 }, chain: "_" },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  { type: "COIN", data: { minAmount: 1 }, chain: "ETHEREUM" },
  { type: "COIN", data: { minAmount: 0.5 }, chain: "ETHEREUM" },
  { type: "COIN", data: { minAmount: 0 }, chain: "ETHEREUM" },
  { type: "COIN", data: { minAmount: -1 }, chain: "ETHEREUM" },
];

export default {
  name: "Coin",
  shouldPass,
  shouldFail,
};
