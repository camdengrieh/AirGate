import { Schemas } from "../../types";

const shouldFail = [
  { type: "GALAXY", data: { galaxyId: "" } },
  { type: "GALAXY", data: { galaxyId: null } },
  { type: "GALAXY_PARTICIPATION", data: { galaxyId: "" } },
  { type: "GALAXY_PARTICIPATION", data: { galaxyId: null } },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  { type: "GALAXY", data: { galaxyId: "_" } },
  { type: "GALAXY_PARTICIPATION", data: { galaxyId: "_" } },
];

export default {
  name: "Galaxy",
  shouldPass,
  shouldFail,
};
