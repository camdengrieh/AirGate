import { Schemas } from "../../types";

const shouldFail = [
  { type: "LENS_COLLECT", data: {} },
  { type: "LENS_COLLECT" },
  { type: "LENS_TOTAL_FOLLOWERS", data: {} },
  { type: "LENS_TOTAL_FOLLOWERS" },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  { type: "LENS_COLLECT", data: { id: "_" } },
  { type: "LENS_FOLLOW", data: { id: "_" } },
  { type: "LENS_FOLLOWED_BY", data: { id: "_" } },
  { type: "LENS_PROFILE" },
  { type: "LENS_PROFILE", data: {} },
  { type: "LENS_TOTAL_FOLLOWERS", data: { min: 1 } },
  { type: "LENS_TOTAL_POSTS", data: { min: 1 } },
  { type: "LENS_REACT", data: { id: "_", reaction: "ANY" } },
  { type: "LENS_ACTION", data: { id: "_", action: "MIRROR" } },
];

export default {
  name: "Lens",
  shouldPass,
  shouldFail,
};
