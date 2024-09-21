import { Schemas } from "../../types";

const shouldFail = [
  { type: "POAP" },
  { type: "GITPOAP" },
  { type: "POAP", data: {} },
  { type: "GITPOAP", data: {} },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  { type: "POAP", data: { id: "_" } },
  { type: "GITPOAP", data: { id: "_" } },
];

export default {
  name: "Poap",
  shouldPass,
  shouldFail,
};
