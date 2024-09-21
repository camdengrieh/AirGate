var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// consts.ts
var consts_exports = {};
__export(consts_exports, {
  AUTH_HEADER_NAME: () => AUTH_HEADER_NAME,
  AuthMethod: () => AuthMethod,
  CORRELATION_ID_HEADER_NAME: () => CORRELATION_ID_HEADER_NAME,
  Chain: () => Chain,
  ContactType: () => ContactType,
  ErrorMessages: () => ErrorMessages,
  FeeCollectorContracts: () => FeeCollectorContracts,
  GuildPinAction: () => GuildPinAction,
  GuildSortType: () => GuildSortType,
  Logic: () => Logic,
  NFTRewardSupportedChains: () => NFTRewardSupportedChains,
  PARAMS_HEADER_NAME: () => PARAMS_HEADER_NAME,
  PRIVILEGED_USER_ID_HEADER: () => PRIVILEGED_USER_ID_HEADER,
  PaymentSupportedChains: () => PaymentSupportedChains,
  PinContractAddresses: () => PinContractAddresses,
  PinSupportedChains: () => PinSupportedChains,
  PlatformName: () => PlatformName,
  SDK_PROJECT_NAME_HEADER_NAME: () => SDK_PROJECT_NAME_HEADER_NAME,
  SDK_VERSION_HEADER_NAME: () => SDK_VERSION_HEADER_NAME,
  SERVICE_HEADER_NAME: () => SERVICE_HEADER_NAME,
  SIG_HEADER_NAME: () => SIG_HEADER_NAME,
  SocialLinks: () => SocialLinks,
  UniswapV3FactoryAddresses: () => UniswapV3FactoryAddresses,
  UniswapV3PositionsAddresses: () => UniswapV3PositionsAddresses,
  UniswapV3PositionsChains: () => UniswapV3PositionsChains,
  VISIBILITY_FILTERED_COUNT_HEADER_NAME: () => VISIBILITY_FILTERED_COUNT_HEADER_NAME,
  Visibility: () => Visibility,
  XPEventType: () => XPEventType,
  unimplementedRequirementTypes: () => unimplementedRequirementTypes
});
var SocialLinks = [
  "TWITTER",
  "LENS",
  "YOUTUBE",
  "SPOTIFY",
  "MIRROR",
  "MEDIUM",
  "SUBSTACK",
  "SNAPSHOT",
  "SOUND",
  "GITHUB",
  "WARPCAST",
  "WEBSITE"
];
var Visibility = ["PUBLIC", "PRIVATE", "HIDDEN"];
var Chain = [
  "BERA_TESTNET",
  "ETHEREUM",
  "BSC",
  "POLYGON",
  "AVALANCHE",
  "FANTOM",
  "ARBITRUM",
  "NOVA",
  "CELO",
  "HARMONY",
  "GOERLI",
  "OPTIMISM",
  "MOONRIVER",
  "MOONBEAM",
  "GNOSIS",
  "METIS",
  "CRONOS",
  "BOBA",
  "BOBA_AVAX",
  "PALM",
  "BASE_GOERLI",
  "BASE_MAINNET",
  "EXOSAMA",
  "EVMOS",
  "POLYGON_MUMBAI",
  "ZETACHAIN_ATHENS",
  "SCROLL_ALPHA",
  "SEPOLIA",
  "ZKSYNC_ERA",
  "ZORA",
  "POLYGON_ZKEVM",
  "NEON_EVM",
  "PGN",
  "LINEA",
  "LUKSO",
  "MANTLE",
  "SCROLL",
  "SCROLL_SEPOLIA",
  "RONIN",
  "SHIMMER",
  "KAVA",
  "BITFINITY_TESTNET",
  "X1_TESTNET",
  "ONTOLOGY",
  "BERA_TESTNET",
  "MANTA",
  "TAIKO_KATLA",
  "OASIS_SAPPHIRE",
  "BLAST_SEPOLIA",
  "BASE_SEPOLIA",
  "BLAST_MAINNET",
  "ASTAR_ZKEVM",
  "ZETACHAIN",
  "CORE_DAO",
  "LISK_SEPOLIA",
  "FORM_TESTNET",
  "METIS_SEPOLIA",
  "OP_BNB",
  "X1",
  "CYBER",
  "TAIKO",
  "KLAYTN",
  "MINT",
  "WORLD_CHAIN",
  "SEI",
  "FILECOIN",
  "ROOTSTOCK",
  "MODE",
  "LISK",
  "CRONOS_ZKEVM"
];
var PlatformName = [
  "DISCORD",
  "TELEGRAM",
  "GITHUB",
  "GOOGLE",
  "TWITTER",
  // "STEAM",
  "CONTRACT_CALL",
  "TWITTER_V1",
  "UNIQUE_TEXT",
  "TEXT",
  "GUILD_PIN",
  "POLYGON_ID",
  "POINTS",
  "POAP",
  "FORM",
  "GATHER_TOWN",
  "ERC20",
  "WORLD_ID"
];
var Logic = ["AND", "OR", "ANY_OF"];
var ErrorMessages = {
  INVALID_GUILDPLATFORM_INDEX: "Invalid guildPlatformIndex. Make sure all guildPlatformIndex values reference an existing item from guildPlatforms",
  EMPTY_OBJECT: "At least one of the fields must be defined",
  INVALID_ADDRESS: "Invalid address",
  REQUIRED_PLATFORM_GUILD_DATA: "platformGuildData is required",
  ADMIN_UPDATE_IS_OWNER_FALSE: "It is only possible to update an admin to be an owner. But doing so the previous owner will lose ownership"
};
var GuildPinAction = ["JOINED_GUILD", "IS_OWNER", "IS_ADMIN"];
var XPEventType = [
  "USER_REFERRAL",
  "JOIN_GUILD",
  "GET_ROLE",
  "SUBMIT_FORM",
  "COLLECT_PIN",
  "COLLECT_NFT",
  "OWN_GUILD_VERIFIED"
];
var PinSupportedChains = {
  10: "OPTIMISM",
  25: "CRONOS",
  56: "BSC",
  58: "ONTOLOGY",
  137: "POLYGON",
  185: "MINT",
  324: "ZKSYNC_ERA",
  5e3: "MANTLE",
  7560: "CYBER",
  8453: "BASE_MAINNET",
  34443: "MODE",
  42161: "ARBITRUM",
  59144: "LINEA",
  11155111: "SEPOLIA",
  // Use a fake chainId for Fuel
  123456789: "FUEL"
};
var PinContractAddresses = {
  POLYGON: "0xff04820c36759c9f5203021fe051239ad2dcca8a",
  BASE_MAINNET: "0x326f14942f8899406e3224bd63e9f250d275a52e",
  ZKSYNC_ERA: "0xd1e4254fe7e56f58777ba624e7eeb3644f872b0d",
  BSC: "0x807f16eba4a2c51b86cb8ec8be8eab34305c2bfd",
  ARBITRUM: "0x0e6a14106497a7de36fba446628860c062e9e302",
  CRONOS: "0x4205e56a69a0130a9e0828d45d0c84e45340a196",
  OPTIMISM: "0x6c2c223b84724c4b8fd41ae0142c2369dfa7e319",
  MANTLE: "0x4205e56a69a0130a9e0828d45d0c84e45340a196",
  ONTOLOGY: "0x4205e56a69a0130a9e0828d45d0c84e45340a196",
  LINEA: "0x4205e56a69a0130a9e0828d45d0c84e45340a196",
  CYBER: "0x13ec6b98362e43add08f7cc4f6befd02fa52ee01",
  MINT: "0x13ec6b98362e43add08f7cc4f6befd02fa52ee01",
  MODE: "0x13ec6b98362e43add08f7cc4f6befd02fa52ee01",
  SEPOLIA: "0xac49ee0c3bda5f851eac9a3184a21041e9afe379"
};
var NFTRewardSupportedChains = [
  "ETHEREUM",
  "BASE_MAINNET",
  "OPTIMISM",
  "BSC",
  "CRONOS",
  "POLYGON",
  "MANTLE",
  "ZKSYNC_ERA",
  "LINEA",
  "CYBER",
  "ARBITRUM",
  "SCROLL",
  "TAIKO",
  "BLAST_MAINNET",
  "X1",
  "CORE_DAO",
  "METIS",
  "NEON_EVM",
  "POLYGON_ZKEVM",
  "ZETACHAIN",
  "MINT",
  "MODE",
  "AVALANCHE",
  "LISK",
  "SEPOLIA"
];
var GuildSortType = ["NEWEST", "VERIFIED", "FEATURED"];
var ContactType = ["EMAIL", "TELEGRAM"];
var AuthMethod = {
  EOA: "1",
  KeyPair: "2",
  EIP1271: "3"
};
var PARAMS_HEADER_NAME = "x-guild-params";
var SIG_HEADER_NAME = "x-guild-sig";
var AUTH_HEADER_NAME = "x-guild-auth";
var SERVICE_HEADER_NAME = "x-guild-service";
var PRIVILEGED_USER_ID_HEADER = "x-guild-privileged-user-id";
var CORRELATION_ID_HEADER_NAME = "x-correlation-id";
var SDK_VERSION_HEADER_NAME = "x-guild-sdk-version";
var SDK_PROJECT_NAME_HEADER_NAME = "x-guild-sdk-project-name";
var VISIBILITY_FILTERED_COUNT_HEADER_NAME = "x-guild-visibility-filtered";
var unimplementedRequirementTypes = [
  "ERC721",
  "ERC1155",
  "NOUNS",
  "ERC20",
  "MIRROR_COLLECT",
  "SOUND_ARTIST_BACKED",
  "SOUND_COLLECTED",
  "SOUND_ARTIST",
  "SOUND_TOP_COLLECTOR",
  "SOUND_NFTS",
  "DISCO",
  "UNLOCK",
  "JUICEBOX",
  "NOOX",
  "YUP",
  "REP3",
  "PARALLEL_ID",
  "PARALLEL_SANCTIONS_SAFE",
  "PARALLEL_TRAIT"
];
var UniswapV3PositionsChains = [
  "ETHEREUM",
  "ARBITRUM",
  "OPTIMISM",
  "POLYGON",
  "BASE_MAINNET",
  "BSC",
  "AVALANCHE",
  "CELO",
  "BLAST_MAINNET",
  "SEPOLIA",
  "BASE_SEPOLIA"
];
var UniswapV3PositionsAddresses = {
  ETHEREUM: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
  ARBITRUM: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
  OPTIMISM: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
  POLYGON: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
  CELO: "0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A",
  BSC: "0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613",
  BASE_MAINNET: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
  SEPOLIA: "0x1238536071E1c677A632429e3655c799b22cDA52",
  BASE_SEPOLIA: "0x1238536071E1c677A632429e3655c799b22cDA52",
  AVALANCHE: "0x655C406EBFa14EE2006250925e54ec43AD184f8B",
  BLAST_MAINNET: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28"
};
var UniswapV3FactoryAddresses = {
  ETHEREUM: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
  SEPOLIA: "0x0227628f3F023bb0B980b67D528571c95c6DaC1c",
  ARBITRUM: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
  OPTIMISM: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
  POLYGON: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
  BASE_MAINNET: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
  BASE_SEPOLIA: "0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24",
  BSC: "0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7",
  AVALANCHE: "0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD",
  CELO: "0xAfE208a311B21f13EF87E33A90049fC17A7acDEc",
  BLAST_MAINNET: "0x792edAdE80af5fC680d96a2eD80A44247D2Cf6Fd"
};
var PaymentSupportedChains = [
  "ETHEREUM",
  "POLYGON",
  "OPTIMISM",
  "SEPOLIA"
];
var FeeCollectorContracts = {
  ETHEREUM: "0xe4b4c6a7c6b6396032096c12adf46b7f14a70f4d",
  POLYGON: "0xe4b4c6a7c6b6396032096c12adf46b7f14a70f4d",
  OPTIMISM: "0xf7c2baa81feb6dd7bda0b3a03afbc1e13f955da5",
  SEPOLIA: "0xc3563655d35397b77228c07a7f5301b0e0fa417d"
};

// schemas/index.ts
var schemas_exports = {};
__export(schemas_exports, {
  AuthenticationParamsSchema: () => AuthenticationParamsSchema,
  AuthenticationSchema: () => AuthenticationSchema,
  ContractCallGuildRewardSchema: () => ContractCallGuildRewardSchema,
  ContributionCollectionSchema: () => ContributionCollectionSchema,
  ContributionCreationSchema: () => ContributionCreationSchema,
  ContributionSchema: () => ContributionSchema,
  ContributionUpdateSchema: () => ContributionUpdateSchema,
  DynamicAmountSchema: () => DynamicAmountSchema,
  ExperienceSchema: () => ExperienceSchema,
  FieldCreationPayloadSchema: () => FieldCreationPayloadSchema,
  FieldSchema: () => FieldSchema,
  FormCreationPayloadSchema: () => FormCreationPayloadSchema,
  FormSchema: () => FormSchema,
  GuildAdminCreationPayloadSchema: () => GuildAdminCreationPayloadSchema,
  GuildAdminUpdatePayloadSchema: () => GuildAdminUpdatePayloadSchema,
  GuildContactCreationPayloadSchema: () => GuildContactCreationPayloadSchema,
  GuildContactUpdatePayloadSchema: () => GuildContactUpdatePayloadSchema,
  GuildCreationPayloadSchema: () => GuildCreationPayloadSchema,
  GuildGetManyQueryParamsSchema: () => GuildGetManyQueryParamsSchema,
  GuildRewardCreationSchema: () => GuildRewardCreationSchema,
  GuildRewardSchema: () => GuildRewardSchema,
  GuildRewardUpdateSchema: () => GuildRewardUpdateSchema,
  GuildSearchQueryParamsSchema: () => GuildSearchQueryParamsSchema,
  GuildUpdatePayloadSchema: () => GuildUpdatePayloadSchema,
  IssueGuildPinPayloadSchema: () => IssueGuildPinPayloadSchema,
  JoinActionPayloadSchema: () => JoinActionPayloadSchema,
  LinkParamsSchema: () => LinkParamsSchema2,
  PlatformUserCreationSchema: () => PlatformUserCreationSchema,
  ProfileCreationSchema: () => ProfileCreationSchema,
  ProfileSchema: () => ProfileSchema,
  ProfileUpdateSchema: () => ProfileUpdateSchema,
  ProfileUsernameSchema: () => ProfileUsernameSchema,
  RequirementCreateResponseSchema: () => RequirementCreateResponseSchema,
  RequirementCreationPayloadSchema: () => RequirementCreationPayloadSchema,
  RequirementSchema: () => RequirementSchema,
  RequirementTypeAndDataSchema: () => RequirementTypeAndDataSchema,
  RequirementUpdatePayloadSchema: () => RequirementUpdatePayloadSchema,
  RoleCreationForGuildCreationPayloadSchema: () => RoleCreationForGuildCreationPayloadSchema,
  RoleCreationPayloadSchema: () => RoleCreationPayloadSchema,
  RolePlatformClaimPayloadSchema: () => RolePlatformClaimPayloadSchema,
  RoleRewardCreationForGuildCreationPayloadSchema: () => RoleRewardCreationForGuildCreationPayloadSchema,
  RoleRewardCreationPayloadSchema: () => RoleRewardCreationPayloadSchema,
  RoleRewardUpdatePayloadSchema: () => RoleRewardUpdatePayloadSchema,
  RoleUpdatePayloadSchema: () => RoleUpdatePayloadSchema,
  StatusUpdateActionPayloadSchema: () => StatusUpdateActionPayloadSchema,
  SubmissionAnswerSchema: () => SubmissionAnswerSchema,
  SubmissionCreationAnswerSchema: () => SubmissionCreationAnswerSchema,
  UserAddressCreationPayloadSchema: () => UserAddressCreationPayloadSchema,
  UserAddressUpdatePayloadSchema: () => UserAddressUpdatePayloadSchema,
  UserSubmissionCreationSchema: () => UserSubmissionCreationSchema,
  UserSubmissionSchema: () => UserSubmissionSchema,
  UserSubmissionsSchema: () => UserSubmissionsSchema,
  VerifyKeyPayloadSchema: () => VerifyKeyPayloadSchema
});

// schemas/actions.ts
import { z } from "zod";
var JoinActionPayloadSchema = z.object({
  guildId: z.number().int().positive()
});
var StatusUpdateActionPayloadSchema = z.object({
  roleIds: z.array(z.number().int().positive()),
  recheckAccess: z.boolean().optional(),
  updateMemberships: z.boolean().optional(),
  manageRewards: z.boolean().optional(),
  forceRewardActions: z.boolean().optional(),
  onlyForThisPlatform: z.boolean().optional()
});

// schemas/auth.ts
import { z as z3 } from "zod";

// schemas/common.ts
import { z as z2 } from "zod";
var VisibilitySchema = z2.enum(Visibility);
var ChainSchema = z2.enum(Chain);
var PlatformNameSchema = z2.enum(PlatformName);
var EvmAddressSchema = z2.string().regex(/^0x[0-9a-f]{40}$/i, ErrorMessages.INVALID_ADDRESS).toLowerCase();
var FuelAddressSchema = z2.string().regex(/^0x[0-9a-f]{64}$/i, ErrorMessages.INVALID_ADDRESS).toLowerCase();
var AnyAddressSchema = EvmAddressSchema.or(FuelAddressSchema);
var LogicSchema = z2.enum(Logic);
var GuildPinActionSchema = z2.enum(GuildPinAction);
var ContactTypeSchema = z2.enum(ContactType);
var GuildSortTypeSchema = z2.enum(GuildSortType);
var PositiveInteger = z2.number().int().positive();

// schemas/auth.ts
var AuthenticationParamsSchema = z3.object({
  addr: AnyAddressSchema,
  nonce: z3.string(),
  msg: z3.string(),
  ts: z3.string(),
  hash: z3.string().optional()
}).and(
  z3.union([
    z3.object({
      chainId: z3.string(),
      method: z3.literal(AuthMethod.EIP1271)
    }),
    z3.object({
      method: z3.literal(AuthMethod.EOA)
    }),
    z3.object({
      method: z3.literal(AuthMethod.KeyPair)
    })
  ])
);
var AuthenticationSchema = z3.object({
  params: AuthenticationParamsSchema,
  sig: z3.string()
});

// schemas/contact.ts
import { z as z4 } from "zod";
var options = {
  EMAIL: z4.object({ type: z4.literal("EMAIL"), contact: z4.string().email() }),
  TELEGRAM: z4.object({ type: z4.literal("TELEGRAM"), contact: z4.string() })
  // So we don't forget to update here in case ContactType changes
};
var GuildContactCreationPayloadSchema = z4.discriminatedUnion("type", [
  options.EMAIL,
  options.TELEGRAM
]);
var GuildContactUpdatePayloadSchema = GuildContactCreationPayloadSchema;

// schemas/dynamicReward.ts
import { z as z5 } from "zod";
var InputSourceSchema = z5.discriminatedUnion("type", [
  z5.object({
    type: z5.literal("REQUIREMENT_AMOUNT"),
    roleId: PositiveInteger,
    requirementId: PositiveInteger
  }),
  z5.object({
    type: z5.literal("REQUIREMENT_ACCESS"),
    roleId: PositiveInteger,
    requirementId: PositiveInteger,
    value: z5.number().default(1)
  }),
  z5.object({
    type: z5.literal("POINTS"),
    guildId: PositiveInteger,
    guildPlatformId: PositiveInteger
  }),
  z5.object({
    type: z5.literal("STATIC"),
    value: PositiveInteger
  })
]);
var Linear = z5.object({
  type: z5.literal("LINEAR"),
  params: z5.object({
    multiplier: z5.number().default(1),
    addition: z5.number().default(0),
    shouldFloorResult: z5.boolean().default(false).optional()
  }).default({}),
  input: InputSourceSchema.or(z5.tuple([InputSourceSchema])).transform(
    (_) => Array.isArray(_) ? _ : [_]
  )
});
var DummyMultiInput = z5.object({
  type: z5.literal("SUM"),
  input: z5.array(InputSourceSchema)
});
var DynamicRewardOperation = z5.discriminatedUnion("type", [
  Linear,
  DummyMultiInput
]);
var DynamicAmountSchema = z5.object({
  operation: DynamicRewardOperation
});

// schemas/form.ts
import { z as z6 } from "zod";
var FieldBaseSchema = z6.object({
  id: z6.string().uuid().optional(),
  question: z6.string().min(1),
  isRequired: z6.boolean().optional().default(false)
});
var TextAndNumberFieldSchema = FieldBaseSchema.extend({
  type: z6.enum(["SHORT_TEXT", "LONG_TEXT", "NUMBER"])
});
var OptionsSchema = z6.object({
  options: z6.array(z6.string().or(z6.number()))
});
var SingleAndMultipleChoiceFieldSchema = FieldBaseSchema.merge(
  OptionsSchema
).extend({
  type: z6.enum(["SINGLE_CHOICE", "MULTIPLE_CHOICE"]),
  allowOther: z6.boolean().optional().default(false)
});
var RateFieldSchema = FieldBaseSchema.merge(OptionsSchema).extend({
  type: z6.enum(["RATE"]),
  worstLabel: z6.string().optional(),
  bestLabel: z6.string().optional()
});
var FieldCreationPayloadSchema = z6.discriminatedUnion("type", [
  TextAndNumberFieldSchema,
  SingleAndMultipleChoiceFieldSchema,
  RateFieldSchema
]);
var FieldSchema = FieldCreationPayloadSchema.and(
  z6.object({
    id: z6.string().uuid().optional()
  })
);
var FormCreationPayloadSchema = z6.object({
  name: z6.string().min(1),
  description: z6.string().max(250).optional(),
  isEditable: z6.boolean().optional().default(false),
  fields: z6.array(FieldCreationPayloadSchema)
});
var FormSchema = FormCreationPayloadSchema.extend({
  id: z6.number(),
  creatorUserId: z6.number().nullable(),
  guildId: z6.number(),
  fields: z6.array(FieldSchema),
  submissionCount: z6.number().optional(),
  createdAt: z6.date().or(z6.string()),
  // TODOb if we read from cache, the date will be string
  updatedAt: z6.date().or(z6.string())
  // TODOb if we read from cache, the date will be string
}).nullable();
var SubmissionCreationAnswerSchema = z6.object({
  fieldId: z6.string().uuid(),
  value: z6.string().or(z6.number()).or(z6.array(z6.string().or(z6.number()))).optional().nullable().transform(
    (value) => Array.isArray(value) ? JSON.stringify(value) : value
  )
});
var SubmissionAnswerSchema = SubmissionCreationAnswerSchema.extend({
  userSubmissionId: z6.number(),
  value: z6.string().or(z6.number()).optional().nullable().transform((value) => {
    if (!value)
      return void 0;
    let parsedValue = value;
    try {
      parsedValue = JSON.parse(value?.toString());
    } catch {
    }
    return parsedValue;
  })
});
var UserSubmissionCreationSchema = z6.object({
  submissionAnswers: z6.array(SubmissionCreationAnswerSchema)
});
var UserSubmissionSchema = z6.object({
  id: z6.number(),
  formId: z6.number(),
  createdAt: z6.date().or(z6.string()),
  // TODOb if we read from cache, the date will be string
  submissionAnswers: z6.array(SubmissionAnswerSchema)
}).nullable();
var UserSubmissionsSchema = z6.array(
  z6.object({
    userId: z6.number(),
    formId: z6.number(),
    platformUsers: z6.array(
      z6.object({
        platformId: z6.number(),
        platformUserId: z6.string(),
        username: z6.string().nullable()
      })
    ).default([]),
    addresses: z6.array(z6.string()),
    submittedAt: z6.date(),
    submissionAnswers: z6.array(SubmissionCreationAnswerSchema),
    isShared: z6.boolean().nullable()
  })
).default([]);

// schemas/guild.ts
import { z as z40 } from "zod";

// utils.ts
var ZERO_CODE = 48;
var NINE_CODE = ZERO_CODE + 9;
var isCharNumeric = (char) => char.charCodeAt(0) >= ZERO_CODE && char.charCodeAt(0) <= NINE_CODE;
var isNumeric = (str) => [...str].every((char) => isCharNumeric(char));
var nonEmptyRefine = (message = ErrorMessages.EMPTY_OBJECT) => [
  (someObject) => Object.keys(someObject).length > 0,
  { message }
];
function toTupleType(v) {
  return v;
}
function isoDatetimeStringRefine() {
  return [
    (str) => new Date(str).toISOString() === str,
    {
      message: "Requirement createdAt should be a valid ISO datetime Sstring"
    }
  ];
}
function transformToDate(dateInput) {
  return new Date(dateInput);
}

// schemas/guildReward.ts
import { z as z7 } from "zod";
var DiscordGuildRewardSchema = z7.object({
  platformName: z7.literal("DISCORD"),
  platformGuildData: z7.object({
    inviteChannel: z7.string().optional(),
    // Custom invite link, can be modified on our frontend
    invite: z7.string().optional(),
    joinButton: z7.boolean().optional(),
    needCaptcha: z7.boolean().optional(),
    name: z7.string().optional()
  }).default({})
});
var TelegramGuildRewardSchema = z7.object({
  platformName: z7.literal("TELEGRAM")
});
var GitHubGuildRewardSchema = z7.object({
  platformName: z7.literal("GITHUB"),
  platformGuildData: z7.object({
    // Optional, because we don't need to send it when creating a reward, but our backend will save this data here
    platformUserId: z7.number().int().optional()
  }).default({})
});
var GoogleGuildRewardSchema = z7.object({
  platformName: z7.literal("GOOGLE"),
  platformGuildData: z7.object({
    role: z7.enum(["reader", "commenter", "writer"]).optional().default("reader"),
    mimeType: z7.string(),
    iconLink: z7.string()
  })
});
var ContractCallGuildRewardSchema = z7.object({
  platformName: z7.literal("CONTRACT_CALL"),
  platformGuildData: z7.object({
    chain: ChainSchema.extract(NFTRewardSupportedChains),
    contractAddress: EvmAddressSchema,
    function: z7.enum([
      "function claim(address payToken, address receiver, bytes calldata signature) payable",
      "function claim(uint256 amount, address receiver, uint256 userId, uint256 signedAt, bytes calldata signature) payable"
    ]),
    argsToSign: z7.array(z7.string()),
    name: z7.string().optional(),
    symbol: z7.string().optional(),
    imageUrl: z7.string().optional(),
    description: z7.string().optional()
  })
});
var UniqueTextGuildRewardSchema = z7.object({
  platformName: z7.literal("UNIQUE_TEXT"),
  platformGuildData: z7.object({
    texts: z7.array(z7.string()),
    name: z7.string().optional(),
    imageUrl: z7.string().optional()
  })
});
var TextGuildRewardSchema = z7.object({
  platformName: z7.literal("TEXT"),
  platformGuildData: z7.object({
    text: z7.string(),
    name: z7.string().optional(),
    imageUrl: z7.string().optional()
  })
});
var GuildPinGuildRewardSchema = z7.object({
  platformName: z7.literal("GUILD_PIN"),
  platformGuildData: z7.object({
    pinChain: z7.enum(
      Object.values(PinSupportedChains)
    ),
    contractAddress: AnyAddressSchema
  })
});
var PolygonIDGuildRewardSchema = z7.object({
  platformName: z7.literal("POLYGON_ID")
});
var PointsGuildRewardSchema = z7.object({
  platformName: z7.literal("POINTS"),
  platformGuildData: z7.object({
    name: z7.string().optional(),
    imageUrl: z7.string().optional()
  }).default({})
});
var PoapGuildRewardSchema = z7.object({
  platformName: z7.literal("POAP"),
  platformGuildData: z7.object({
    fancyId: z7.string(),
    eventId: z7.number(),
    name: z7.string().optional(),
    imageUrl: z7.string().optional()
  })
});
var FormGuildRewardSchema = z7.object({
  platformName: z7.literal("FORM"),
  platformGuildData: z7.object({
    formId: z7.number()
  })
});
var GatherTownGuildRewardSchema = z7.object({
  platformName: z7.literal("GATHER_TOWN"),
  platformGuildData: z7.object({
    name: z7.string(),
    gatherSpaceId: z7.string(),
    gatherApiKey: z7.string(),
    gatherAffiliation: z7.string(),
    gatherRole: z7.string()
  })
});
var ERC20GuildRewardSchema = z7.object({
  platformName: z7.literal("ERC20"),
  platformGuildData: z7.object({
    poolId: z7.number(),
    chain: ChainSchema.extract([
      "BASE_MAINNET",
      "BSC",
      "MANTLE",
      "OPTIMISM",
      "POLYGON",
      "SEPOLIA"
    ]),
    contractAddress: EvmAddressSchema,
    name: z7.string(),
    imageUrl: z7.string(),
    description: z7.string(),
    tokenAddress: EvmAddressSchema
  })
});
var BasicGuildRewardSchema = z7.discriminatedUnion("platformName", [
  DiscordGuildRewardSchema,
  TelegramGuildRewardSchema,
  GitHubGuildRewardSchema,
  GoogleGuildRewardSchema,
  ContractCallGuildRewardSchema,
  UniqueTextGuildRewardSchema,
  TextGuildRewardSchema,
  GuildPinGuildRewardSchema,
  PolygonIDGuildRewardSchema,
  PointsGuildRewardSchema,
  PoapGuildRewardSchema,
  FormGuildRewardSchema,
  GatherTownGuildRewardSchema,
  ERC20GuildRewardSchema
]).and(
  z7.object({
    platformGuildId: z7.string().transform(
      (value) => value.includes("/") ? encodeURIComponent(value) : value
    )
  })
);
var GuildRewardSchema = BasicGuildRewardSchema.and(
  z7.object({
    // We'll probably deprecate this, left here to support older platforms too
    platformGuildName: z7.string().optional(),
    // We only append the invite for the Discord reward in our DB in case there's no specified `platformGuildData.invite`
    invite: z7.string().optional(),
    // In some cases we'll fetch the platform's name request-time, in that case it'll be added here
    name: z7.string().optional()
  })
);
var GuildRewardCreationSchema = BasicGuildRewardSchema.and(
  z7.object({
    roleIds: z7.array(z7.number().int().positive()).optional()
  })
);
var GuildRewardUpdateSchema = z7.object({
  platformGuildData: z7.any()
}).refine(...nonEmptyRefine(ErrorMessages.REQUIRED_PLATFORM_GUILD_DATA));

// schemas/role.ts
import { z as z39 } from "zod";

// schemas/requirement.ts
import { z as z37 } from "zod";

// schemas/requirements/alchemy.ts
import { z as z8 } from "zod";
var AlchemyChains = z8.enum([
  "ETHEREUM",
  "POLYGON",
  "ARBITRUM",
  "OPTIMISM",
  "GOERLI",
  "POLYGON_MUMBAI"
]);
var EthIndexerChains = z8.enum(["BASE_GOERLI"]);
var alchemy_default = [
  z8.object({
    type: z8.enum(["ALCHEMY_FIRST_TX", "ALCHEMY_FIRST_TX_RELATIVE"]),
    chain: AlchemyChains.or(EthIndexerChains).default("ETHEREUM"),
    data: z8.object({
      maxAmount: z8.number()
    })
  }),
  z8.object({
    type: z8.enum([
      "ALCHEMY_CONTRACT_DEPLOY",
      "ALCHEMY_CONTRACT_DEPLOY_RELATIVE",
      "ALCHEMY_TX_COUNT",
      "ALCHEMY_TX_COUNT_RELATIVE"
    ]),
    chain: AlchemyChains.or(EthIndexerChains).default("ETHEREUM"),
    address: EvmAddressSchema.nullable().optional(),
    data: z8.object({
      txCount: z8.number(),
      maxAmount: z8.number().optional(),
      minAmount: z8.number().optional()
    })
  }),
  z8.object({
    type: z8.enum(["ALCHEMY_TX_VALUE", "ALCHEMY_TX_VALUE_RELATIVE"]),
    chain: AlchemyChains.default("ETHEREUM"),
    address: EvmAddressSchema.nullable().optional(),
    data: z8.object({
      txValue: z8.number(),
      maxAmount: z8.number().optional(),
      minAmount: z8.number().optional()
    })
  })
];

// schemas/requirements/allowlist.ts
import { z as z9 } from "zod";
var AllowlistSchema = z9.object({
  addresses: z9.array(AnyAddressSchema).default([]),
  fileId: z9.string().min(1).optional(),
  hideAllowlist: z9.boolean().optional()
}).default({});
var allowlist_default = [
  z9.object({
    type: z9.literal("ALLOWLIST"),
    data: AllowlistSchema
  }),
  z9.object({
    type: z9.literal("ALLOWLIST_EMAIL"),
    data: z9.object({
      addresses: z9.array(z9.string().email().toLowerCase()).default([]),
      hideAllowlist: z9.boolean().optional(),
      fileId: z9.string().min(1).optional()
    }).default({})
  })
];

// schemas/requirements/captcha.ts
import { z as z10 } from "zod";
var captcha_default = z10.object({
  type: z10.literal("CAPTCHA"),
  data: z10.object({
    maxAmount: z10.number().int().nonnegative().optional()
  }).default({})
});

// schemas/requirements/coin.ts
import { z as z11 } from "zod";
var coin_default = z11.object({
  type: z11.literal("COIN"),
  chain: ChainSchema,
  data: z11.object({
    minAmount: z11.number(),
    maxAmount: z11.number().optional()
  })
});

// schemas/requirements/contract.ts
import { z as z12 } from "zod";
var contract_default = z12.object({
  type: z12.literal("CONTRACT"),
  data: z12.object({
    id: z12.string().trim().min(1),
    resultIndex: z12.number().int().nonnegative().optional(),
    params: z12.array(z12.string().or(z12.number()).or(z12.boolean())),
    resultMatch: z12.enum(["=", ">", "<", ">=", "<="]),
    expected: z12.string()
  }),
  address: EvmAddressSchema,
  chain: ChainSchema
});

// schemas/requirements/covalent.ts
import { z as z13 } from "zod";
var CovalentChains = z13.enum([
  "ETHEREUM",
  "SCROLL_ALPHA",
  "POLYGON",
  "BASE_MAINNET",
  "BASE_GOERLI",
  "ZORA",
  "AVALANCHE",
  "ZKSYNC_ERA",
  "POLYGON_ZKEVM",
  "CRONOS",
  "NEON_EVM",
  "PGN",
  "OPTIMISM",
  "LINEA",
  "MANTLE",
  "SCROLL",
  "SCROLL_SEPOLIA",
  "RONIN",
  "ARBITRUM",
  "METIS",
  "TAIKO_KATLA",
  "BSC",
  "BASE_SEPOLIA",
  "OASIS_SAPPHIRE",
  "BLAST_MAINNET",
  "ZETACHAIN",
  "TAIKO",
  "FANTOM",
  "SEI",
  "ROOTSTOCK",
  "MODE",
  "LISK",
  "CRONOS_ZKEVM"
]);
var Timestamps = z13.object({
  minAmount: z13.number(),
  maxAmount: z13.number()
}).partial().default({});
var covalent_default = [
  z13.object({
    type: z13.enum(["COVALENT_FIRST_TX", "COVALENT_FIRST_TX_RELATIVE"]),
    chain: CovalentChains.default("ETHEREUM"),
    data: z13.object({
      timestamps: Timestamps
    }).default({})
  }),
  z13.object({
    type: z13.enum([
      "COVALENT_CONTRACT_DEPLOY",
      "COVALENT_CONTRACT_DEPLOY_RELATIVE",
      "COVALENT_TX_COUNT",
      "COVALENT_TX_COUNT_RELATIVE"
    ]),
    chain: CovalentChains.default("ETHEREUM"),
    address: EvmAddressSchema.nullable().optional(),
    data: z13.object({
      txCount: z13.number().int().nonnegative(),
      maxAmount: z13.number().optional(),
      minAmount: z13.number().optional(),
      timestamps: Timestamps
    })
  }),
  z13.object({
    type: z13.enum(["COVALENT_TX_VALUE", "COVALENT_TX_VALUE_RELATIVE"]),
    chain: CovalentChains.default("ETHEREUM"),
    address: EvmAddressSchema.nullable().optional(),
    data: z13.object({
      txValue: z13.number(),
      maxAmount: z13.number().optional(),
      minAmount: z13.number().optional(),
      timestamps: Timestamps
    })
  })
];

// schemas/requirements/discord.ts
import { z as z14 } from "zod";
var discord_default = [
  z14.object({
    type: z14.literal("DISCORD_ROLE"),
    data: z14.object({
      serverId: z14.string().min(1),
      roleId: z14.string().min(1),
      serverName: z14.string().min(1).optional(),
      roleName: z14.string().min(1).optional()
    })
  }),
  z14.object({
    type: z14.enum(["DISCORD_JOIN", "DISCORD_JOIN_FROM_NOW"]),
    data: z14.object({
      memberSince: z14.number()
      // fromNow: z.boolean().optional(),
    })
  }),
  z14.object({
    type: z14.literal("DISCORD_MEMBER_SINCE"),
    data: z14.object({
      serverId: z14.string().min(1),
      serverName: z14.string().min(1).optional(),
      memberSince: z14.number().optional()
    })
  })
];

// schemas/requirements/eas.ts
import { z as z15 } from "zod";
var EasChains = z15.enum([
  "ETHEREUM",
  "OPTIMISM",
  "ARBITRUM",
  "SEPOLIA",
  "BASE_GOERLI",
  "BASE_MAINNET",
  "BASE_SEPOLIA",
  "LINEA"
]);
var EasCommonFields = z15.object({
  schemaId: z15.string().min(1)
}).and(
  z15.object({ key: z15.string().min(1), val: z15.string().min(1) }).or(
    z15.object({
      key: z15.undefined().or(z15.literal("")),
      val: z15.undefined().or(z15.literal(""))
    }).transform(() => ({ key: void 0, val: void 0 }))
  )
);
var eas_default = [
  z15.object({
    type: z15.enum(["EAS_ATTESTED_BY", "COINBASE_EAS_ATTESTED_BY"]),
    chain: EasChains.default("ETHEREUM"),
    data: EasCommonFields.and(
      z15.object({
        attester: EvmAddressSchema
      })
    )
  }),
  z15.object({
    chain: EasChains.default("ETHEREUM"),
    type: z15.literal("EAS_ATTEST"),
    data: EasCommonFields.and(
      z15.object({
        recipient: EvmAddressSchema
      })
    )
  })
];

// schemas/requirements/email.ts
import { z as z16 } from "zod";
var email_default = [
  z16.object({
    type: z16.literal("EMAIL_DOMAIN"),
    data: z16.object({
      domain: z16.string().toLowerCase()
    })
  }),
  z16.object({
    type: z16.literal("EMAIL_VERIFIED"),
    data: z16.object({}).default({})
  })
];

// schemas/requirements/farcaster.ts
import { z as z17 } from "zod";
var FarcasterLikeOrRecast = z17.object({
  type: z17.enum(["FARCASTER_LIKE", "FARCASTER_RECAST"]),
  data: z17.object({
    hash: z17.string().min(1),
    url: z17.undefined()
  }).or(
    z17.object({
      url: z17.string().url(),
      hash: z17.undefined()
    })
  )
  // z
  //   .object({
  //     hash: z.string(),
  //     url: z.string().url(),
  //   })
  //   .partial()
  //   .refine((val) => Object.keys(val).length === 1, {
  //     message: "Please specify either a url, or a hash",
  //   })
  //   .transform(
  //     (val) =>
  //       val as { hash: string; url: never } | { url: string; hash: never }
  //   ),
});
var FarcasterFollow = z17.object({
  type: z17.enum(["FARCASTER_FOLLOW", "FARCASTER_FOLLOWED_BY"]),
  data: z17.object({
    id: z17.number()
  })
});
var FarcasterStringId = z17.object({
  type: z17.enum([
    "FARCASTER_FOLLOW_CHANNEL",
    "FARCASTER_USERNAME",
    "FARCASTER_BIO"
  ]),
  data: z17.object({
    id: z17.string().min(1)
  })
});
var FarcasterTotalFollowers = z17.object({
  type: z17.literal("FARCASTER_TOTAL_FOLLOWERS"),
  data: z17.object({
    min: z17.number().int()
  })
});
var FarcasterProfile = z17.object({
  type: z17.literal("FARCASTER_PROFILE"),
  data: z17.object({}).default({})
});
var farcaster_default = [
  FarcasterProfile,
  FarcasterFollow,
  FarcasterLikeOrRecast,
  FarcasterTotalFollowers,
  FarcasterStringId
];

// schemas/requirements/form.ts
import { z as z18 } from "zod";
var FormSubmissionDetailedAnswerSchema = z18.object({
  fieldId: z18.string()
});
var FormSubmissionDetailedGeneralAnswerSchema = FormSubmissionDetailedAnswerSchema.extend({
  value: z18.string().or(z18.number())
}).strict();
var FormSubmissionDetailedRateAnswerSchema = FormSubmissionDetailedAnswerSchema.and(
  z18.object({
    minAmount: z18.number().int().positive().or(z18.string().pipe(z18.coerce.number())).optional(),
    maxAmount: z18.number().int().positive().or(z18.string().pipe(z18.coerce.number())).optional()
  }).refine(...nonEmptyRefine("Invalid value for minAmount/maxAmount"))
);
var FormSubmissionDetailedMultipleChoiceAnswerSchema = FormSubmissionDetailedAnswerSchema.and(
  z18.object({
    acceptedAnswers: z18.array(z18.string()).optional(),
    rejectedAnswers: z18.array(z18.string()).optional()
  }).refine(
    ...nonEmptyRefine("Invalid value for acceptedAnswers/rejectedAnswers")
  )
);
var FormSubmissionSchema = z18.object({
  id: z18.number().int().positive(),
  guildId: z18.number().int().positive(),
  answers: z18.array(
    z18.union([
      FormSubmissionDetailedGeneralAnswerSchema,
      FormSubmissionDetailedRateAnswerSchema,
      FormSubmissionDetailedMultipleChoiceAnswerSchema
    ])
  ).optional()
});
var form_default = [
  z18.object({
    type: z18.literal("FORM_SUBMISSION"),
    data: FormSubmissionSchema
  }),
  z18.object({
    type: z18.literal("FORM_APPROVAL"),
    data: AllowlistSchema
  })
];

// schemas/requirements/free.ts
import { z as z19 } from "zod";
var free_default = z19.object({
  type: z19.literal("FREE"),
  data: z19.object({}).default({})
});

// schemas/requirements/fuel.ts
import { z as z20 } from "zod";
var fuel_default = [
  z20.object({
    type: z20.literal("FUEL_BALANCE"),
    data: z20.object({
      minAmount: z20.number(),
      maxAmount: z20.number().optional()
    })
  }),
  z20.object({
    type: z20.literal("FUEL_TRANSACTIONS"),
    data: z20.object({
      id: z20.enum(["script", "mint", "create"]).optional(),
      minAmount: z20.number().int().optional(),
      maxAmount: z20.number().int().optional()
    })
  })
];

// schemas/requirements/galaxy.ts
import { z as z21 } from "zod";
var galaxy_default = z21.object({
  type: z21.enum(["GALAXY", "GALAXY_PARTICIPATION"]),
  data: z21.object({
    galaxyId: z21.string().min(1)
  })
});

// schemas/requirements/gitcoin.ts
import { z as z22 } from "zod";
var gitcoin_default = [
  z22.object({
    type: z22.literal("GITCOIN_PASS"),
    data: z22.object({}).default({})
  }),
  z22.object({
    type: z22.literal("GITCOIN_STAMP"),
    data: z22.object({
      stamp: z22.string(),
      minAmount: z22.number(),
      maxAmount: z22.number(),
      credType: z22.string(),
      issuer: z22.string()
    }).partial().default({})
  }),
  z22.object({
    type: z22.literal("GITCOIN_SCORE"),
    data: z22.object({
      id: z22.string().min(1),
      score: z22.number()
    })
  })
];

// schemas/requirements/github.ts
import { z as z23 } from "zod";
var GithubStarringSchema = z23.object({
  type: z23.literal("GITHUB_STARRING"),
  data: z23.object({
    id: z23.string().url()
  })
});
var GithubAccountAgeSchema = z23.object({
  type: z23.enum(["GITHUB_ACCOUNT_AGE", "GITHUB_ACCOUNT_AGE_RELATIVE"]),
  data: z23.object({
    minAmount: z23.number().int().positive().optional(),
    maxAmount: z23.number().int().positive().optional()
  }).default({})
});
var GithubCommitCountSchema = z23.object({
  type: z23.enum(["GITHUB_COMMIT_COUNT", "GITHUB_COMMIT_COUNT_RELATIVE"]),
  data: z23.object({
    id: z23.number().int().positive(),
    minAmount: z23.number().int().positive().optional(),
    maxAmount: z23.number().int().positive().optional()
  })
});
var github_default = [
  GithubStarringSchema,
  GithubAccountAgeSchema,
  GithubCommitCountSchema
];

// schemas/requirements/guild.ts
import { z as z24 } from "zod";
var guild_default = [
  z24.object({
    type: z24.literal("GUILD_MEMBER"),
    data: z24.object({
      guildId: z24.number().int().positive()
    })
  }),
  z24.object({
    type: z24.literal("GUILD_ROLE"),
    data: z24.object({
      guildId: z24.number().int().positive(),
      roleId: z24.number().int().positive(),
      minAmount: z24.number().int().positive().optional(),
      maxAmount: z24.number().int().positive().optional()
    })
  }),
  z24.object({
    type: z24.literal("GUILD_ROLE_RELATIVE"),
    data: z24.object({
      guildId: z24.number().int().positive(),
      roleId: z24.number().int().positive(),
      minAmount: z24.number().int().positive().optional(),
      maxAmount: z24.number().int().positive().optional()
    })
  }),
  z24.object({
    type: z24.literal("GUILD_ADMIN"),
    data: z24.object({
      minAmount: z24.number().int().nonnegative()
    })
  }),
  z24.object({
    type: z24.literal("GUILD_USER_SINCE"),
    data: z24.object({
      creationDate: z24.coerce.date().or(z24.number()).or(z24.string()).pipe(z24.coerce.date())
    })
  }),
  z24.object({
    type: z24.literal("GUILD_MINGUILDS"),
    data: z24.object({
      minAmount: z24.number().int().positive()
    })
  })
];

// schemas/requirements/guildSnapshot.ts
import { z as z25 } from "zod";
var Snapshot = z25.array(
  z25.object({
    key: z25.string().min(1).toLowerCase(),
    value: z25.number()
  })
);
var SnapshotRequirementData = z25.object({
  snapshot: Snapshot.default([]),
  fileId: z25.string().min(1).optional(),
  isHidden: z25.boolean().default(false),
  guildPlatformId: PositiveInteger.optional()
}).default({});
var AddressSnapshot = z25.object({
  type: z25.literal("GUILD_SNAPSHOT"),
  data: SnapshotRequirementData
});
var guildSnapshot_default = [AddressSnapshot];

// schemas/requirements/lens.ts
import { z as z26 } from "zod";
var lens_default = [
  z26.object({
    type: z26.literal("LENS_PROFILE"),
    data: z26.object({}).default({})
  }),
  z26.object({
    type: z26.enum(["LENS_TOTAL_POSTS", "LENS_TOTAL_FOLLOWERS"]),
    data: z26.object({
      min: z26.number().int()
    })
  }),
  z26.object({
    type: z26.enum(["LENS_FOLLOWED_BY", "LENS_FOLLOW", "LENS_COLLECT"]),
    data: z26.object({
      id: z26.string().min(1)
    })
  }),
  z26.object({
    type: z26.literal("LENS_REACT"),
    data: z26.object({
      id: z26.string().min(1),
      reaction: z26.enum(["ANY", "UPVOTE", "DOWNVOTE"])
    })
  }),
  z26.object({
    type: z26.literal("LENS_ACTION"),
    data: z26.object({
      id: z26.string().min(1),
      action: z26.enum(["MIRROR", "QUOTE", "COMMENT"]),
      publishedOn: z26.string().min(1).optional()
    })
  })
];

// schemas/requirements/payment.ts
import { z as z27 } from "zod";
var payment_default = z27.object({
  type: z27.literal("PAYMENT"),
  data: z27.object({
    id: z27.string()
  }),
  chain: ChainSchema.extract(PaymentSupportedChains),
  address: EvmAddressSchema
});

// schemas/requirements/poap.ts
import { z as z28 } from "zod";
var poap_default = z28.object({
  type: z28.enum(["POAP", "GITPOAP"]),
  data: z28.object({
    id: z28.string().min(1)
  })
});

// schemas/requirements/points.ts
import { z as z30 } from "zod";

// schemas/requirements/common.ts
import { z as z29 } from "zod";
var RequirementCustomizationSchema = z29.object({
  customName: z29.string().optional(),
  customImage: z29.string().optional()
});
var MinMaxAmount = z29.object({ minAmount: z29.number(), maxAmount: z29.undefined() }).or(
  z29.object({
    minAmount: z29.undefined(),
    maxAmount: z29.number()
  })
).or(
  z29.object({
    minAmount: z29.number(),
    maxAmount: z29.number()
  }).refine((input) => input.maxAmount >= input.minAmount, {
    message: "If both maxAmount and minAmount are defined, the former cannot be a smaller number"
  })
).or(
  z29.object({
    minAmount: z29.undefined(),
    maxAmount: z29.undefined()
  }).transform(() => ({ minAmount: 0, maxAmount: void 0 }))
);

// schemas/requirements/points.ts
var PointsTotalAmountDataSchema = z30.object({
  guildId: z30.number().int().positive()
}).and(MinMaxAmount);
var PointsAmountDataSchema = z30.object({
  guildPlatformId: z30.number().int().positive(),
  guildId: z30.number().int().positive()
}).and(MinMaxAmount);
var points_default = [
  z30.object({
    type: z30.literal("POINTS_TOTAL_AMOUNT"),
    data: PointsTotalAmountDataSchema
  }),
  z30.object({
    type: z30.literal("POINTS_AMOUNT"),
    data: PointsAmountDataSchema
  }),
  z30.object({
    type: z30.literal("POINTS_RANK"),
    data: PointsAmountDataSchema
  })
];

// schemas/requirements/polygonId.ts
import { z as z31 } from "zod";
var polygonId_default = [
  z31.object({
    type: z31.literal("POLYGON_ID_QUERY"),
    data: z31.object({
      query: z31.array(z31.any()),
      maxAmount: z31.number().optional()
    }),
    chain: ChainSchema.optional()
  }),
  z31.object({
    type: z31.literal("POLYGON_ID_BASIC"),
    data: z31.object({
      maxAmount: z31.number().optional()
    }).default({}),
    chain: ChainSchema.optional()
  })
];

// schemas/requirements/snapshot.ts
import { z as z32 } from "zod";
var snapshot_default = [
  z32.object({
    type: z32.enum([
      "SNAPSHOT_FOLLOW",
      "SNAPSHOT_SPACE_ADMIN",
      "SNAPSHOT_SPACE_AUTHOR"
    ]),
    data: z32.object({
      space: z32.string().min(1)
    })
  }),
  z32.object({
    type: z32.literal("SNAPSHOT_FOLLOW_SINCE"),
    data: z32.object({
      space: z32.string().min(1),
      since: z32.number()
    })
  }),
  z32.object({
    type: z32.literal("SNAPSHOT_USER_SINCE"),
    data: z32.object({
      since: z32.number()
    })
  }),
  z32.object({
    type: z32.literal("SNAPSHOT_MAJORITY_VOTES"),
    data: z32.object({
      minRatio: z32.number().min(0).max(1)
    })
  }),
  z32.object({
    type: z32.literal("SNAPSHOT_VOTES"),
    data: z32.object({
      minAmount: z32.number().min(1),
      space: z32.string().min(1).optional(),
      proposal: z32.string().min(1).optional()
    })
  }),
  z32.object({
    type: z32.literal("SNAPSHOT_PROPOSALS"),
    data: z32.object({
      minAmount: z32.number().min(1),
      space: z32.string().min(1).optional(),
      state: z32.enum(["active", "pending", "closed"]).optional(),
      successfulOnly: z32.boolean().optional()
    })
  }),
  z32.object({
    type: z32.literal("SNAPSHOT_STRATEGY"),
    chain: ChainSchema,
    data: z32.object({
      block: z32.number().or(z32.literal("latest")),
      strategies: z32.array(
        z32.object({
          name: z32.string().min(1),
          params: z32.any().optional()
        })
      ),
      space: z32.string().min(1).optional()
    })
  })
];

// schemas/requirements/twitter.ts
import { z as z33 } from "zod";
var TwitterBasicSchema = z33.object({
  type: z33.enum([
    "TWITTER_FOLLOW",
    "TWITTER_FOLLOWED_BY",
    "TWITTER_NAME",
    "TWITTER_BIO",
    "TWITTER_LIKE",
    "TWITTER_RETWEET",
    "TWITTER_LIST_MEMBER",
    "TWITTER_LIST_FOLLOW"
  ]),
  data: z33.object({
    id: z33.string().trim().min(1)
  })
});
var TwitterCountSchema = z33.object({
  type: z33.enum([
    "TWITTER_FOLLOWER_COUNT",
    "TWITTER_FOLLOWING_COUNT",
    "TWITTER_TWEET_COUNT",
    "TWITTER_LIKE_COUNT"
  ]),
  data: z33.object({
    minAmount: z33.number().int().positive()
  })
});
var TwitterAccountAgeSchema = z33.object({
  type: z33.enum(["TWITTER_ACCOUNT_AGE_RELATIVE", "TWITTER_ACCOUNT_AGE"]),
  data: z33.object({
    minAmount: z33.number().int().positive(),
    fromNow: z33.boolean().optional()
  })
});
var TwitterAccountVerifiedSchema = z33.object({
  type: z33.literal("TWITTER_ACCOUNT_VERIFIED"),
  data: z33.object({
    id: z33.enum(["any", "blue", "business", "government"])
  })
});
var TwitterAccountProtectedSchema = z33.object({
  type: z33.literal("TWITTER_ACCOUNT_PROTECTED"),
  data: z33.object({}).default({})
});
var TwitterV2Schema = z33.object({
  type: z33.enum([
    "TWITTER_FOLLOW_V2",
    "TWITTER_LIKE_V2",
    "TWITTER_RETWEET_V2",
    "LINK_VISIT"
  ]),
  data: z33.object({
    id: z33.string().trim().min(1),
    maxAmount: z33.number().optional()
  })
});
var twitter_default = [
  TwitterBasicSchema,
  TwitterCountSchema,
  TwitterAccountAgeSchema,
  TwitterAccountVerifiedSchema,
  TwitterAccountProtectedSchema,
  TwitterV2Schema
];

// schemas/requirements/uniswap.ts
import { z as z34 } from "zod";
var UniswapChains = ChainSchema.extract(UniswapV3PositionsChains);
var UniswapV3Positions = z34.object({
  type: z34.literal("UNISWAP_V3_POSITIONS"),
  data: z34.object({
    token0: EvmAddressSchema,
    token1: EvmAddressSchema,
    baseCurrency: z34.enum(["token0", "token1"]).default("token0"),
    countedPositions: z34.enum(["ALL", "IN_RANGE", "FULL_RANGE"]).default("FULL_RANGE"),
    // Not used for requirement checking, only for UX purposes
    // Values taken from https://support.uniswap.org/hc/en-us/articles/21069524840589-What-is-a-tick-when-providing-liquidity
    // "Pool fee value" column
    defaultFee: z34.union([
      z34.literal(100),
      z34.literal(500),
      z34.literal(3e3),
      z34.literal(1e4)
    ]).nullable().optional()
  }).and(MinMaxAmount),
  chain: UniswapChains
});
var uniswap_default = UniswapV3Positions;

// schemas/requirements/web3inbox.ts
import { z as z35 } from "zod";
var web3inbox_default = z35.object({
  type: z35.literal("WEB3INBOX_SUBSCRIBERS"),
  data: z35.object({
    app: z35.enum(["GUILD", "WEB3INBOX", "SHEFI"])
  })
});

// schemas/requirements/worldid.ts
import { z as z36 } from "zod";
var worldid_default = z36.object({
  type: z36.literal("WORLD_ID_VERIFICATION"),
  data: z36.object({
    verificationLevel: z36.enum(["device", "orb"])
  })
});

// schemas/requirements/index.ts
var requirements_default = toTupleType([
  free_default,
  ...allowlist_default,
  ...guildSnapshot_default,
  ...email_default,
  ...points_default,
  ...guild_default,
  web3inbox_default,
  ...twitter_default,
  ...github_default,
  ...fuel_default,
  captcha_default,
  ...eas_default,
  ...farcaster_default,
  payment_default,
  contract_default,
  coin_default,
  ...gitcoin_default,
  poap_default,
  ...polygonId_default,
  ...discord_default,
  ...alchemy_default,
  ...covalent_default,
  ...lens_default,
  galaxy_default,
  ...snapshot_default,
  ...form_default,
  uniswap_default,
  worldid_default
]);

// schemas/requirement.ts
var RequirementTypeAndDataSchema = z37.discriminatedUnion("type", requirements_default).or(
  z37.object({
    type: z37.enum(unimplementedRequirementTypes),
    data: z37.any()
  })
).and(z37.object({ data: RequirementCustomizationSchema.optional() }));
var BaseRequirementSchema = z37.object({
  isNegated: z37.boolean().default(false),
  visibility: VisibilitySchema.default("PUBLIC"),
  visibilityRoleId: z37.number().int().positive().optional().nullable()
});
var AddressAndChainSchema = z37.object({
  chain: ChainSchema.optional(),
  address: AnyAddressSchema.nullable().optional()
});
var RequirementCreationPayloadSchema = BaseRequirementSchema.and(
  AddressAndChainSchema
).and(RequirementTypeAndDataSchema);
var RequirementUpdatePayloadSchema = BaseRequirementSchema.partial().and(AddressAndChainSchema).and(z37.object({ data: z37.any().optional() })).refine(...nonEmptyRefine());
var RequirementSchema = BaseRequirementSchema.and(
  RequirementTypeAndDataSchema
).and(AddressAndChainSchema).and(
  z37.object({
    id: z37.number().positive(),
    roleId: z37.number().positive(),
    createdAt: z37.string().refine(...isoDatetimeStringRefine()).transform(transformToDate),
    updatedAt: z37.string().refine(...isoDatetimeStringRefine()).transform(transformToDate),
    name: z37.string().max(150).nullable().optional(),
    symbol: z37.string().max(100).nullable().optional()
  })
);
var RequirementCreateResponseSchema = RequirementSchema.and(
  z37.object({
    deletedRequirements: z37.array(z37.number())
  })
);

// schemas/roleReward.ts
import { z as z38 } from "zod";
var BaseRoleRewardSchema = z38.object({
  platformRoleId: z38.string(),
  visibility: VisibilitySchema,
  platformRoleData: z38.any().optional(),
  dynamicAmount: DynamicAmountSchema.optional()
});
var GuildPlatformResolvableSchema = z38.union([
  z38.object({
    guildPlatform: GuildRewardCreationSchema.and(
      z38.object({ roleIds: z38.undefined() })
    ),
    guildPlatformId: z38.undefined()
  }),
  z38.object({
    guildPlatformId: z38.number().int().positive(),
    guildPlatform: z38.undefined()
  })
]);
var GuildPlatformIndexableSchema = z38.object({
  guildPlatformIndex: z38.number().int().nonnegative(),
  guildPlatformId: z38.undefined(),
  guildPlatform: z38.undefined()
});
var RoleRewardCreationPayloadSchema = z38.intersection(
  BaseRoleRewardSchema.partial(),
  GuildPlatformResolvableSchema
);
var RoleRewardCreationForGuildCreationPayloadSchema = z38.intersection(
  BaseRoleRewardSchema.partial(),
  GuildPlatformIndexableSchema
);
var RoleRewardUpdatePayloadSchema = BaseRoleRewardSchema.partial().refine(...nonEmptyRefine());
var RolePlatformClaimPayloadSchema = z38.object({
  args: z38.array(z38.string())
});

// schemas/role.ts
var RoleBaseSchema = z39.object({
  name: z39.string().max(50),
  description: z39.string().max(1e3).optional(),
  imageUrl: z39.string().max(500).optional(),
  // TODO: Check for .url() OR .regex(/\/guildLogos\/[0-285]\.svg/, "Invalid imageUrl")
  logic: LogicSchema.optional(),
  visibility: VisibilitySchema.optional(),
  anyOfNum: z39.number().int().positive().optional(),
  hideFromEyes: z39.boolean().optional()
});
var RoleCreationPayloadSchema = z39.intersection(
  RoleBaseSchema,
  z39.object({
    requirements: z39.array(RequirementCreationPayloadSchema).min(1),
    rolePlatforms: z39.array(RoleRewardCreationPayloadSchema).optional()
  })
);
var RoleCreationForGuildCreationPayloadSchema = z39.intersection(
  RoleBaseSchema,
  z39.object({
    requirements: z39.array(RequirementCreationPayloadSchema).min(1),
    rolePlatforms: z39.array(RoleRewardCreationForGuildCreationPayloadSchema).optional()
  })
);
var RoleUpdatePayloadSchema = z39.intersection(
  RoleBaseSchema.partial(),
  z39.object({ position: z39.number().int().positive().optional() })
).refine(...nonEmptyRefine());

// schemas/guild.ts
var ThemeSchema = z40.object({
  mode: z40.enum(["DARK", "LIGHT"]),
  color: z40.string().max(10),
  backgroundImage: z40.string().max(100),
  backgroundCss: z40.string().max(10)
});
var BaseGuildSchema = z40.object({
  name: z40.string().min(1).max(50),
  urlName: z40.string().max(50),
  description: z40.string().max(1500).optional(),
  imageUrl: z40.string().max(500).optional(),
  // z
  //   .union([
  //     z.string().regex(/\/guildLogos\/[0-285]\.svg/, "Invalid imageUrl"),
  //     z.string().max(500).url(),
  //   ])
  //   .optional(),
  showMembers: z40.boolean().optional(),
  hideFromExplorer: z40.boolean().optional(),
  socialLinks: z40.record(z40.enum(SocialLinks), z40.string().url()).optional(),
  onboardingComplete: z40.boolean().optional(),
  theme: ThemeSchema.partial().optional()
});
var GuildCreationPayloadSchema = BaseGuildSchema.and(
  z40.object({
    guildPlatforms: z40.array(GuildRewardCreationSchema).optional(),
    roles: z40.array(RoleCreationForGuildCreationPayloadSchema).min(1),
    contacts: z40.array(GuildContactCreationPayloadSchema)
  })
).refine(
  (ctx) => {
    const hasGuildPlatforms = Array.isArray(ctx.guildPlatforms) && ctx.guildPlatforms.length > 0;
    return ctx.roles.every(
      (role) => !role.rolePlatforms || role.rolePlatforms.every(
        (rolePlatform) => !rolePlatform?.guildPlatformIndex || hasGuildPlatforms && rolePlatform?.guildPlatformIndex < (ctx.guildPlatforms?.length ?? 0)
      )
    );
  },
  { message: ErrorMessages.INVALID_GUILDPLATFORM_INDEX }
);
var GuildUpdatePayloadSchema = BaseGuildSchema.partial().refine(
  ...nonEmptyRefine()
);
var GuildSearchQueryParamsSchema = z40.object({
  order: GuildSortTypeSchema.optional(),
  search: z40.string().optional(),
  limit: z40.number().int().positive(),
  offset: z40.number().int().nonnegative()
});
var GuildGetManyQueryParamsSchema = z40.object({
  guildIds: z40.string().refine(
    (guildIdsParam) => {
      const splits = guildIdsParam.split(",");
      const allSplitsAreValid = splits.every((split) => isNumeric(split));
      return allSplitsAreValid;
    },
    { message: "Invalid guildIds, please provide comma-separated numbers" }
  )
});

// schemas/guildAdmin.ts
import { z as z41 } from "zod";
var GuildAdminCreationPayloadSchema = z41.object({
  address: AnyAddressSchema,
  isOwner: z41.boolean().optional()
});
var GuildAdminUpdatePayloadSchema = z41.object({
  isOwner: z41.boolean().refine((value) => value === true, {
    message: ErrorMessages.ADMIN_UPDATE_IS_OWNER_FALSE
  })
});

// schemas/guildPin.ts
import { z as z42 } from "zod";
var IssueGuildPinPayloadSchema = z42.object({
  userAddress: AnyAddressSchema,
  guildAction: GuildPinActionSchema,
  chainId: z42.number().int().positive(),
  contractAddress: AnyAddressSchema
});

// schemas/platformUser.ts
import { z as z43 } from "zod";
var PlatformUserCreationSchema = z43.object({
  platformName: PlatformNameSchema,
  authData: z43.any(),
  // TODO: This could be typed easily, as the diffferent OAuth payloads mostly look the same
  disconnectFromExistingUser: z43.boolean().optional()
});

// schemas/profile.ts
import { z as z44 } from "zod";
var MAX_USERNAME_LENGTH = 28;
var MAX_NAME_LENGTH = 100;
var MAX_IMAGE_URL_LENGTH = 500;
var MAX_BIO_LENGTH = 1e3;
var ProfileUsernameSchema = z44.string().max(MAX_USERNAME_LENGTH, {
  message: `Username cannot exceed ${MAX_USERNAME_LENGTH} characters`
}).superRefine((value, ctx) => {
  const areCharactersLegal = /^[\w\-.]+$/.test(value);
  const isDigitOnly = value.replace(/[0-9]/g, "").length === 0;
  if (!areCharactersLegal) {
    ctx.addIssue({
      code: z44.ZodIssueCode.custom,
      message: "Username can only contain alphanumeric characters, underscores, dots and hyphens"
    });
  }
  if (isDigitOnly) {
    ctx.addIssue({
      code: z44.ZodIssueCode.custom,
      message: "Username must not consist of digits only"
    });
  }
});
var ProfileCreationSchema = z44.object({
  username: ProfileUsernameSchema,
  name: z44.string().max(MAX_NAME_LENGTH, {
    message: `Name cannot exceed ${MAX_NAME_LENGTH} characters`
  }).nullable().optional(),
  bio: z44.string().max(MAX_BIO_LENGTH, {
    message: `Bio cannot exceed ${MAX_BIO_LENGTH} characters`
  }).nullable().optional(),
  profileImageUrl: z44.string().url({ message: "Profile image must be a valid URL" }).max(MAX_IMAGE_URL_LENGTH, {
    message: `Profile image URL cannot exceed ${MAX_IMAGE_URL_LENGTH} characters`
  }).nullable().optional(),
  backgroundImageUrl: z44.string().url({ message: "Background image must be a valid URL or color code" }).max(MAX_IMAGE_URL_LENGTH, {
    message: `Background image URL cannot exceed ${MAX_IMAGE_URL_LENGTH} characters`
  }).nullable().optional().or(z44.string().startsWith("#")),
  referrerUserId: PositiveInteger
});
var ProfileUpdateSchema = ProfileCreationSchema.extend({
  username: ProfileUsernameSchema.optional()
}).omit({ referrerUserId: true });
var ProfileSchema = ProfileCreationSchema.extend({
  userId: PositiveInteger,
  createdAt: z44.date().or(z44.string()),
  updatedAt: z44.date().or(z44.string())
});
var ContributionCreationSchema = z44.object({
  guildId: PositiveInteger,
  roleId: PositiveInteger
});
var ContributionUpdateSchema = z44.object({
  guildId: PositiveInteger.optional(),
  roleId: PositiveInteger.optional()
});
var ContributionSchema = ContributionCreationSchema.extend({
  id: PositiveInteger,
  userId: PositiveInteger
});
var ContributionCollectionSchema = z44.object({
  contributionId: PositiveInteger,
  guildId: PositiveInteger,
  NFTs: z44.array(
    z44.object({
      userRewardId: PositiveInteger,
      data: ContractCallGuildRewardSchema.shape.platformGuildData
    })
  ),
  pins: z44.array(
    z44.object({
      action: z44.enum(GuildPinAction),
      minted: z44.boolean()
    })
  ),
  points: z44.array(
    z44.object({
      guildId: PositiveInteger,
      guildPlatformId: PositiveInteger,
      totalPoints: z44.number().int(),
      rank: z44.number().int(),
      roleIds: z44.array(PositiveInteger)
    })
  )
});
var ExperienceSchema = z44.object({
  id: PositiveInteger,
  userId: PositiveInteger,
  auditLogId: PositiveInteger,
  eventType: z44.enum(XPEventType),
  amount: PositiveInteger,
  createdAt: z44.date().or(z44.string())
});

// schemas/userAddress.ts
import { z as z45 } from "zod";
var LinkParamsSchema = z45.union([
  z45.object({
    signature: z45.string(),
    nonce: z45.string(),
    timestamp: z45.number().int().positive()
  }),
  z45.object({
    signature: z45.undefined(),
    nonce: z45.undefined(),
    timestamp: z45.undefined()
  })
]);
var UserAddressCreationPayloadSchema = z45.object({
  address: AnyAddressSchema,
  isPrimary: z45.boolean().default(false),
  isDelegated: z45.boolean().default(false)
}).and(LinkParamsSchema);
var UserAddressUpdatePayloadSchema = z45.object({
  isPrimary: z45.boolean()
});

// schemas/verify.ts
import { z as z46 } from "zod";
var LinkParamsSchema2 = z46.union([
  z46.object({
    userId: z46.number().int().positive(),
    signature: z46.string(),
    nonce: z46.string()
  }),
  z46.object({ isDelegated: z46.boolean() }),
  z46.object({
    userId: z46.undefined(),
    signature: z46.undefined(),
    nonce: z46.undefined(),
    isDelegated: z46.undefined()
  })
]);
var VerifyKeyPayloadSchema = z46.object({
  pubKey: z46.string(),
  verificationParams: z46.object({ reCaptcha: z46.string() }).optional()
}).and(LinkParamsSchema2);

// types.ts
var types_exports = {};
import { z as z47 } from "zod";
var reqTypes = z47.object({ data: RequirementCustomizationSchema.optional() }).and(z47.discriminatedUnion("type", requirements_default));
export {
  consts_exports as consts,
  schemas_exports as schemas,
  types_exports as types
};
