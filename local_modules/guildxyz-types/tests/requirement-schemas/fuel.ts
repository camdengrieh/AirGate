import { randomBytes } from "crypto";
import { Schemas } from "../../types";

const shouldFail = [
  {},
  // Invalid address
  { type: "FUEL_BALANCE", address: `0x00`, data: {} },
  {
    type: "FUEL_BALANCE",
    address: `0x${randomBytes(10).toString("hex")}`,
    data: {},
  },
  {
    type: "FUEL_BALANCE",
    data: {},
  },
  {
    type: "FUEL_TRANSACTIONS",
    data: {
      id: "randomText",
    },
  },
  {
    type: "FUEL_TRANSACTIONS",
    data: {
      minAmount: "randomText",
    },
  },
  {
    type: "FUEL_TRANSACTIONS",
    data: {
      maxAmount: "randomText",
    },
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "FUEL_BALANCE",
    address: `0x${randomBytes(32).toString("hex")}`,
    data: {
      minAmount: 1,
    },
  },
  {
    type: "FUEL_TRANSACTIONS",
    data: {
      id: "script",
    },
  },
  {
    type: "FUEL_TRANSACTIONS",
    data: {
      minAmount: 1,
    },
  },
  {
    type: "FUEL_TRANSACTIONS",
    data: {
      maxAmount: 2,
    },
  },
];

export default {
  name: "Fuel",
  shouldPass,
  shouldFail,
};
