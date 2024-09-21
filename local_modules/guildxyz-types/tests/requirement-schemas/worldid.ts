import { Schemas } from "../../types";

const shouldFail = [
  {},
  { type: "WORLD_ID_VERIFICATION" },
  {
    type: "WORLD_ID_VERIFICATION",
    data: { verificationLevel: "invalid-id" },
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "WORLD_ID_VERIFICATION",
    data: { verificationLevel: "device" },
  },
  {
    type: "WORLD_ID_VERIFICATION",
    data: { verificationLevel: "orb" },
  },
];

export default {
  name: "World ID",
  shouldPass,
  shouldFail,
};
