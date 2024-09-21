import { Schemas } from "../../types";

const shouldFail = [
  {
    type: "GUILD_MEMBER",
    data: {
      guildId: -1,
    },
  },
  {
    type: "GUILD_ROLE",
    data: {
      guildId: -1,
      roleId: "1900",
    },
  },
  {
    type: "GUILD_ADMIN",
    data: {
      minAmount: -5,
    },
  },
  {
    type: "GUILD_USER_SINCE",
    data: {
      creationDate: "nolol",
    },
  },
  {
    type: "GUILD_MINGUILDS",
    data: {
      minAmount: -2,
    },
  },
  {
    type: "GUILD_ROLE",
    data: {
      guildId: 1985,
      roleId: 1900,
      minAmount: -1,
    },
  },
  {
    type: "GUILD_ROLE",
    data: {
      guildId: 1985,
      roleId: 1900,
      maxAmount: "10",
    },
  },
  {
    type: "GUILD_ROLE",
    data: {
      guildId: 1985,
      roleId: 1900,
      minAmount: -1,
      maxAmount: -10,
    },
  },
  {
    type: "GUILD_ROLE_RELATIVE",
    data: {
      guildId: 1985,
      roleId: 1900,
      minAmount: -1,
    },
  },
  {
    type: "GUILD_ROLE_RELATIVE",
    data: {
      guildId: 1985,
      roleId: 1900,
      maxAmount: -10,
    },
  },
  {
    type: "GUILD_ROLE_RELATIVE",
    data: {
      guildId: 1985,
      roleId: 1900,
      minAmount: "1",
      maxAmount: "10",
    },
  },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "GUILD_MEMBER",
    data: {
      guildId: 1985,
    },
  },
  {
    type: "GUILD_ROLE",
    data: {
      guildId: 1985,
      roleId: 1900,
    },
  },
  {
    type: "GUILD_ADMIN",
    data: {
      minAmount: 0,
    },
  },
  {
    type: "GUILD_ADMIN",
    data: {
      minAmount: 10,
    },
  },
  {
    type: "GUILD_USER_SINCE",
    data: {
      creationDate: new Date(),
    },
  },
  {
    type: "GUILD_USER_SINCE",
    data: {
      creationDate: new Date().toISOString(),
    },
  },
  {
    type: "GUILD_USER_SINCE",
    data: {
      creationDate: Date.now(),
    },
  },
  {
    type: "GUILD_MINGUILDS",
    data: {
      minAmount: 10,
    },
  },
  {
    type: "GUILD_ROLE",
    data: {
      guildId: 1985,
      roleId: 1900,
      minAmount: 1,
    },
  },
  {
    type: "GUILD_ROLE",
    data: {
      guildId: 1985,
      roleId: 1900,
      maxAmount: 10,
    },
  },
  {
    type: "GUILD_ROLE",
    data: {
      guildId: 1985,
      roleId: 1900,
      minAmount: 1,
      maxAmount: 10,
    },
  },
  {
    type: "GUILD_ROLE_RELATIVE",
    data: {
      guildId: 1985,
      roleId: 1900,
      minAmount: 1,
    },
  },
  {
    type: "GUILD_ROLE_RELATIVE",
    data: {
      guildId: 1985,
      roleId: 1900,
      maxAmount: 10,
    },
  },
  {
    type: "GUILD_ROLE_RELATIVE",
    data: {
      guildId: 1985,
      roleId: 1900,
      minAmount: 1,
      maxAmount: 10,
    },
  },
];

export default {
  name: "Guild",
  shouldPass,
  shouldFail,
};
