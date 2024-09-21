import { randomBytes } from "crypto";
import { Schemas } from "../../types";

const shouldFail = [
  {},
  // Invalid address
  { type: "ALLOWLIST", data: { addresses: [`0x00`] } },
  {
    type: "ALLOWLIST",
    data: {
      addresses: [`0x${randomBytes(20).toString("hex")}`],
      hideAllowlist: 12,
    },
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "ALLOWLIST",
    data: { addresses: [`0x${randomBytes(20).toString("hex")}`] },
  },
  {
    type: "ALLOWLIST",
    data: {
      addresses: [`0x${randomBytes(20).toString("hex")}`],
      hideAllowlist: true,
    },
  },
  {
    type: "ALLOWLIST",
    data: {
      addresses: [`0x${randomBytes(20).toString("hex")}`],
      hideAllowlist: false,
    },
  },

  {
    type: "ALLOWLIST",
    data: {
      addresses: [],
      hideAllowlist: true,
    },
  },
  {
    type: "ALLOWLIST",
    data: {
      customName: "Customized allowlist",
      customImage: "https://...",
    },
  },
  // These defaults to empty array as data.addresses
  { type: "ALLOWLIST", data: {} },
  { type: "ALLOWLIST" },

  // Email allowlist
  {
    type: "ALLOWLIST_EMAIL",
    data: {
      addresses: ["a@b.com"],
    },
  },
  {
    type: "ALLOWLIST_EMAIL",
    data: {
      addresses: ["a@b.com"],
      hideAllowlist: true,
    },
  },
  {
    type: "ALLOWLIST_EMAIL",
  },
  {
    type: "ALLOWLIST_EMAIL",
    data: {},
  },
  {
    type: "ALLOWLIST_EMAIL",
    data: { hideAllowlist: false },
  },
];

export default {
  name: "Allowlist",
  shouldPass,
  shouldFail,
};
