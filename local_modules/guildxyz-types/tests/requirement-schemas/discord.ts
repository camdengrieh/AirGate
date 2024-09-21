import { Schemas } from "../../types";

const shouldFail = [
  { type: "DISCORD_ROLE", data: { serverId: "1", roleId: 1 } },
  { type: "DISCORD_MEMBER_SINCE", data: { serverId: 1 } },
  { type: "DISCORD_MEMBER_SINCE" },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  { type: "DISCORD_JOIN", data: { memberSince: 1 } },
  { type: "DISCORD_JOIN_FROM_NOW", data: { memberSince: 1 } },
  { type: "DISCORD_MEMBER_SINCE", data: { serverId: "1" } },
  { type: "DISCORD_MEMBER_SINCE", data: { serverId: "1", memberSince: 1 } },
  {
    type: "DISCORD_MEMBER_SINCE",
    data: { serverId: "1", memberSince: 1, serverName: "Server" },
  },
  { type: "DISCORD_ROLE", data: { serverId: "1", roleId: "1" } },
  {
    type: "DISCORD_ROLE",
    data: {
      serverId: "1",
      roleId: "1",
      roleName: "Role",
      serverName: "Server",
    },
  },
];

export default {
  name: "Discord",
  shouldPass,
  shouldFail,
};
