import { Schemas } from "../../types";

const shouldFail = [{}];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  { type: "FREE", data: {} },
  { type: "FREE" },
];

export default {
  name: "Free",
  shouldPass,
  shouldFail,
};
