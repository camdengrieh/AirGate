import { Schemas } from "../../types";

const shouldFail = [
  {},
  {
    data: {
      app: "GUILD",
    },
  },
  {
    type: "WEB3INBOX_SUBSCRIBERS",
  },
  {
    type: "WEB3INBOX_SUBSCRIBERS",
    data: {
      app: "TEST",
    },
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "WEB3INBOX_SUBSCRIBERS",
    data: {
      app: "GUILD",
    },
  },
  {
    type: "WEB3INBOX_SUBSCRIBERS",
    data: {
      app: "WEB3INBOX",
    },
  },
  {
    type: "WEB3INBOX_SUBSCRIBERS",
    data: {
      app: "SHEFI",
    },
  },
];

export default {
  name: "Web3Inbox",
  shouldPass,
  shouldFail,
};
