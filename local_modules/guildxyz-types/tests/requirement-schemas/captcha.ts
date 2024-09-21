import { Schemas } from "../../types";

const shouldFail = [
  {
    type: "CAPTCHA",
    data: {
      maxAmount: -1,
    },
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "CAPTCHA",
    data: {
      maxAmount: 0,
    },
  },
  {
    type: "CAPTCHA",
    data: {
      maxAmount: 1,
    },
  },
  {
    type: "CAPTCHA",
    data: {},
  },
  {
    type: "CAPTCHA",
  },
];

export default {
  name: "Captcha",
  shouldPass,
  shouldFail,
};
