import type {
  AccessCheckParams,
  AccessCheckResult,
  AccessFlowResult,
  AccessJobContent,
  AccessLogicResult,
  AccessPreparationResult,
  AccessResultResult,
  BaseJobParams,
  CreateAccessJobOptions,
  ManagedJobFields,
  StatusUpdateJobContent,
} from "@guildxyz/queues";
import { z } from "zod";
import * as consts from "./consts";
import { RequirementSchema } from "./schemas";
import requirements from "./schemas/requirements";
import { RequirementCustomizationSchema } from "./schemas/requirements/common";

export type {
  DynamicAmount,
  DynamicAmountOperations,
  DynamicAmountToCreate,
  InputSource,
} from "./schemas/dynamicReward";

type SchemasImport = typeof import("./schemas");
type SchemaNames = keyof SchemasImport;
type TypeNames = SchemaNames extends `${infer TypeName}Schema`
  ? TypeName
  : SchemaNames;

// Contains every type for the zod schemas exported from "./schemas"
export type Schemas = {
  [Key in TypeNames]: z.input<SchemasImport[`${Key}Schema`]>;
};

const reqTypes = z
  .object({ data: RequirementCustomizationSchema.optional() })
  .and(z.discriminatedUnion("type", requirements));

export type RequirementUpdatePayload = Omit<
  Schemas["RequirementUpdatePayload"],
  "data"
> & { data?: z.input<typeof reqTypes>["data"] | Record<string, any> };

export type GetGuildMembersResponse = {
  roleId: number;
  members: string[];
}[];

export type GetGuildMemberAccessResponse = {
  roleId: number;
  access: boolean;
}[];

export type Chain = (typeof consts.Chain)[number];

export type Visibility = (typeof consts.Visibility)[number];

export type Logic = (typeof consts.Logic)[number];

export type SocialLinks = Partial<
  Record<(typeof consts.SocialLinks)[number], string>
>;

export type Requirement = z.output<typeof RequirementSchema> & {
  visibility: Visibility;
  id: number;
};

export type RoleReward = {
  id: number;
  guildPlatformId: number;
  platformRoleId: string;
  visibility: Visibility;
  platformRoleData?: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
};

export type Role = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  logic: Logic;
  memberCount: number;
  visibility: Visibility;
  hideFromEyes: boolean;
  position: number;
  anyOfNum: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Guild = {
  id: number;
  name: string;
  urlName: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  imageUrl: string;
  showMembers: boolean;
  hideFromExplorer: boolean;
  socialLinks: SocialLinks;
  onboardingComplete: boolean;
  memberCount: number;
  theme: {
    mode: "DARK" | "LIGHT";
    color: string;
    backgroundImage: string;
    backgroundCss: string;
    updatedAt: Date;
  };
};

export type PlatformGuildData = {
  // Discord
  inviteChannel?: string;
  invite?: string;
  joinButton?: boolean;
  needCaptcha?: boolean;
  // Google
  role?: "reader" | "commenter" | "writer";
  mimeType?: string;
  iconLink?: string;
  // Github
  platformUserId?: string;
  // Contract call
  chain?: Chain;
  contractAddress?: string;
  function?: string;
  argsToSign?: string[];
  name?: string;
  symbol?: string;
  imageUrl?: string;
  description?: string;
  // Unique text
  texts?: string[];
  // Text
  text?: string;
  // Poap
  eventId?: number;
  fancyId?: string;
  // Form
  formId?: number;
  // Gather Town
  gatherApiKey?: string;
  gatherSpaceId?: string;
  gatherRole?: string;
  gatherAffiliation?: string;
  // ERC20
  poolId?: number;
  tokenAddress?: string;
};

export type PlatformInfo = {
  name: string;
  invite: string;
};

export type GuildReward = {
  id: number;
  platformId: number;
  platformGuildId: string;
  platformGuildData: PlatformGuildData;
  platformGuildName?: string;
  invite?: string;
};

export type PinAction = (typeof consts.GuildPinAction)[number];

export type IssueGuildPinResponse = {
  userAddress: string;
  guildAction: number;
  userId: number;
  guildId: number;
  guildName: string;
  createdAt: Date;
  timestamp: number;
  cid: string;
  signature: string;
};

export type GuildAdmin = {
  guildId: number;
  userId: number;
  isOwner: boolean;
  createdAt: Date;
};

export type GuildContactType = (typeof consts.ContactType)[number];

export type GuildContact = {
  id: number;
  type: GuildContactType;
  guildId: number;
  contact: string;
};

export type GuildCreationResponse = Guild & {
  contacts: GuildContact[];
  admins: Array<{ id: number; address: string; isOwner: boolean }>;
  featureFlags: string[];
  roles: Array<
    Role & {
      rolePlatforms: RoleReward[];
      requirements: Requirement[];
    }
  >;
  guildPlatforms: GuildReward[];
};

export type RoleCreationResponse = Role & {
  requirements: Requirement[];
  rolePlatforms?: RoleReward[];
  createdGuildPlatforms?: GuildReward[];
};

export type AvailableTextsResponse = {
  count: number;
};

export type RolePlatformClaimResponse = { uniqueValue: string };

export type User = {
  id: number;
  createdAt: Date;
  captchaVerifiedSince?: Date;
};

export type UserAddress = {
  address: string;
  userId: number;
  identityId?: number;
  isPrimary: boolean;
  isDelegated: boolean;
  createdAt: Date;
  // for now we have to keep it this way, we can't access the type from prisma
  walletType: "EVM" | "FUEL";
};

export type UserSharedSocial = {
  userId: number;
  guildId: number;
  isShared?: boolean | null;
};

export type PlatformUser = {
  userId: number;
  identityId: number;
  platformId: number;
  platformUserId: string;
  platformUserData: any;
  createdAt: Date;
};

export type UserProfile = User & {
  addresses: UserAddress[];
  publicKey: string;
  isSuperAdmin?: boolean;
  sharedSocials: UserSharedSocial[];
  platformUsers: Array<PlatformUser & { platformName: string }>;
  guildProfile: Schemas["Profile"];
};

export type PublicUserProfile = {
  id: number;
  publicKey: string;
  captchaVerifiedSince?: Date;
};

export type PlatformName = (typeof consts.PlatformName)[number];

export type MembershipResult = {
  guildId: number;
  roleIds: number[];
  isAdmin: boolean;
  isOwner: boolean;
  joinedAt: Date;
};

type VisibilityFilterable<
  IdField extends string = "id",
  VisibilityField extends string = "visibility",
> = {
  [K in VisibilityField]: Visibility;
} & {
  [K in IdField]: number;
};

type GuildPrepareInput = {
  id: number;
  admins: Array<{ id: number }>;
  guildPlatforms: {
    id: number;
  }[];
  roles: (VisibilityFilterable & {
    requirements: VisibilityFilterable[];
    rolePlatforms: (VisibilityFilterable & { guildPlatformId: number })[];
  })[];
};

type FilteredGuild<G extends GuildPrepareInput> = Omit<G, "roles"> & {
  hiddenRoles: boolean;
  roles: (G["roles"][number] & {
    hiddenRequirements: boolean;
    hiddenRewards: boolean;
  })[];
};

export type GuildByPlatformResponse = FilteredGuild<GuildCreationResponse>;

type PlatformRoleResponse = {
  roleName: string;
  platformRoleId: string;
  platformRoleData: any;
};

export type UserGuildAccessesByPlatformResponse = {
  guildName: string;
  platformGuildId: string;
  roles: PlatformRoleResponse[];
};

export type JoinJob = AccessJobContent;

// didn't work with Omit or Without, so we save time and copy-paste the AccessJobContent with the modifications
export type AccessCheckJob = CreateAccessJobOptions &
  BaseJobParams &
  ManagedJobFields &
  AccessFlowResult &
  Omit<AccessPreparationResult, "nextQueue"> &
  Omit<AccessLogicResult, "nextQueue"> &
  Omit<AccessResultResult, "nextQueue"> & {
    "children:access-check:jobs": (AccessCheckParams &
      AccessCheckResult &
      BaseJobParams &
      ManagedJobFields)[];
  };

export type StatusUpdateJob = StatusUpdateJobContent;

export type LeaderboardItem = {
  userId: number;
  roleIds: number[];
  totalPoints: number;
  oldestRoleDate: Date;
  address?: string;
  rank?: number;
  secondaryAddresses?: string[];
};

export type Leaderboard = LeaderboardItem[];

export type GetLeaderboardResponse = {
  leaderboard: Leaderboard;
  aroundUser?: Leaderboard;
  isRevalidating: boolean;
};

export type UserPointsItem = {
  guildId: number;
  guildPlatformId: number;
  totalPoints: number;
  rank: number;
  roleIds: number[];
};

export type UserPointsResponse = UserPointsItem[];

export type SyncCycle = {
  id: number;
  status: "CREATED" | "STARTED" | "PAUSED" | "FINISHED";
  createdAt: Date;
  updatedAt: Date;
  startedAt: Date | null;
  finishedAt: Date | null;
};

export type SyncJob = {
  id: number;
  cycleId: number;
  status: "CREATED" | "STARTED" | "FINISHED" | "SKIPPED";
  position: number | null;
  priorityInfo: {
    vip: boolean;
    syncable: boolean;
    guildMemberCount: number;
    requirementTypes: string[];
    notSyncableReason: string;
  };
  roleId: number;
  roleName: string;
  guildId: number;
  guildName: string;
  guildUrlName: string;
  jobIds: string[];
  result: any;
  createdAt: Date;
  updatedAt: Date;
  startedAt: Date | null;
  finishedAt: Date | null;
};

export type SyncStatus = "ready" | "running" | "stopping" | "stopped";
export type PeriodicSyncSummary = {
  syncStatus: SyncStatus;
  syncQueueUpdaterStatus: SyncStatus;
  syncerErrorMsg?: string;
  jobs?: SyncJob[];
};

// Types of gateable entities

export type BaseGateable = {
  isGuilded: boolean;
  guildId?: number;
};

export type DiscordGateable = BaseGateable & {
  img: string;
  name: string;
  owner: boolean;
  id: string;
};

export type GitHubGateable = BaseGateable & {
  avatarUrl: string;
  description?: string;
  platformGuildId: string;
  repositoryName: string;
  url: string;
};

export type GoogleGateable = BaseGateable & {
  name: string;
  mimeType: string;
  webViewLink: string;
  iconLink: string;
  platformGuildId: string;
};

export type Gateables = DiscordGateable[] | GitHubGateable[] | GoogleGateable[];

export type FarcasterProfile = {
  fid: number;
  username?: string;
  avatar?: string;
  createdAt: Date;
  userId: number;
};
