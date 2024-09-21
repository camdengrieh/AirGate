import { Schemas } from "../../types";

const shouldFail = [{ type: "ALLOWLIST", data: { addresses: [1] } }];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  { type: "ERC1155", data: { someField: "someValue" } },
];

export default {
  name: "Unimplemented",
  shouldPass,
  shouldFail,
};
