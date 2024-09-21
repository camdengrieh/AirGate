import { Schemas } from "../../types";

const shouldFail = [
  {
    type: "FARCASTER_FOLLOW",
    data: {
      id: "1",
    },
  },
  {
    type: "FARCASTER_FOLLOWED_BY",
    data: {},
  },
  {
    type: "FARCASTER_LIKE",
    data: {
      hash: 1,
    },
  },
  {
    type: "FARCASTER_RECAST",
    data: {},
  },
  {
    type: "FARCASTER_LIKE",
    data: {
      url: "https://google.com",
      hash: "-",
    },
  },
  {
    type: "FARCASTER_RECAST",
    data: {
      url: "_",
    },
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "FARCASTER_FOLLOW",
    data: {
      id: 1,
    },
  },
  {
    type: "FARCASTER_FOLLOWED_BY",
    data: {
      id: 1,
    },
  },
  {
    type: "FARCASTER_LIKE",
    data: {
      hash: "_",
    },
  },
  {
    type: "FARCASTER_LIKE",
    data: {
      url: "https://google.com",
    },
  },
  {
    type: "FARCASTER_TOTAL_FOLLOWERS",
    data: {
      min: 0,
    },
  },
  {
    type: "FARCASTER_TOTAL_FOLLOWERS",
    data: {
      min: 1,
    },
  },
  {
    type: "FARCASTER_TOTAL_FOLLOWERS",
    data: {
      min: -2,
    },
  },
  {
    type: "FARCASTER_PROFILE",
    data: {},
  },
  {
    type: "FARCASTER_PROFILE",
  },
  {
    type: "FARCASTER_USERNAME",
    data: {
      id: "1",
    },
  },
  {
    type: "FARCASTER_BIO",
    data: {
      id: "1",
    },
  },
];

export default {
  name: "Farcaster",
  shouldPass,
  shouldFail,
};
