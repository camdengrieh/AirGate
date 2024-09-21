import { Schemas } from "../../types";

const shouldFail = [{ type: "POLYGON_ID_QUERY", data: { maxAmount: 1 } }];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  { type: "POLYGON_ID_BASIC" },
  { type: "POLYGON_ID_BASIC", data: {} },
  { type: "POLYGON_ID_BASIC", data: { maxAmount: 1 } },
  { type: "POLYGON_ID_QUERY", data: { query: [] } },
  { type: "POLYGON_ID_QUERY", data: { query: [], maxAmount: 1 } },
];

export default {
  name: "Polygon ID",
  shouldPass,
  shouldFail,
};
