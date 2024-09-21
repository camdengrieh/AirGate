"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var types_exports2 = {};
__export(types_exports2, {
  consts: () => consts_exports,
  schemas: () => schemas_exports,
  types: () => types_exports
});
module.exports = __toCommonJS(types_exports2);

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
var import_zod = require("zod");
var JoinActionPayloadSchema = import_zod.z.object({
  guildId: import_zod.z.number().int().positive()
});
var StatusUpdateActionPayloadSchema = import_zod.z.object({
  roleIds: import_zod.z.array(import_zod.z.number().int().positive()),
  recheckAccess: import_zod.z.boolean().optional(),
  updateMemberships: import_zod.z.boolean().optional(),
  manageRewards: import_zod.z.boolean().optional(),
  forceRewardActions: import_zod.z.boolean().optional(),
  onlyForThisPlatform: import_zod.z.boolean().optional()
});

// schemas/auth.ts
var import_zod3 = require("zod");

// schemas/common.ts
var import_zod2 = require("zod");
var VisibilitySchema = import_zod2.z.enum(Visibility);
var ChainSchema = import_zod2.z.enum(Chain);
var PlatformNameSchema = import_zod2.z.enum(PlatformName);
var EvmAddressSchema = import_zod2.z.string().regex(/^0x[0-9a-f]{40}$/i, ErrorMessages.INVALID_ADDRESS).toLowerCase();
var FuelAddressSchema = import_zod2.z.string().regex(/^0x[0-9a-f]{64}$/i, ErrorMessages.INVALID_ADDRESS).toLowerCase();
var AnyAddressSchema = EvmAddressSchema.or(FuelAddressSchema);
var LogicSchema = import_zod2.z.enum(Logic);
var GuildPinActionSchema = import_zod2.z.enum(GuildPinAction);
var ContactTypeSchema = import_zod2.z.enum(ContactType);
var GuildSortTypeSchema = import_zod2.z.enum(GuildSortType);
var PositiveInteger = import_zod2.z.number().int().positive();

// schemas/auth.ts
var AuthenticationParamsSchema = import_zod3.z.object({
  addr: AnyAddressSchema,
  nonce: import_zod3.z.string(),
  msg: import_zod3.z.string(),
  ts: import_zod3.z.string(),
  hash: import_zod3.z.string().optional()
}).and(
  import_zod3.z.union([
    import_zod3.z.object({
      chainId: import_zod3.z.string(),
      method: import_zod3.z.literal(AuthMethod.EIP1271)
    }),
    import_zod3.z.object({
      method: import_zod3.z.literal(AuthMethod.EOA)
    }),
    import_zod3.z.object({
      method: import_zod3.z.literal(AuthMethod.KeyPair)
    })
  ])
);
var AuthenticationSchema = import_zod3.z.object({
  params: AuthenticationParamsSchema,
  sig: import_zod3.z.string()
});

// schemas/contact.ts
var import_zod4 = require("zod");
var options = {
  EMAIL: import_zod4.z.object({ type: import_zod4.z.literal("EMAIL"), contact: import_zod4.z.string().email() }),
  TELEGRAM: import_zod4.z.object({ type: import_zod4.z.literal("TELEGRAM"), contact: import_zod4.z.string() })
  // So we don't forget to update here in case ContactType changes
};
var GuildContactCreationPayloadSchema = import_zod4.z.discriminatedUnion("type", [
  options.EMAIL,
  options.TELEGRAM
]);
var GuildContactUpdatePayloadSchema = GuildContactCreationPayloadSchema;

// schemas/dynamicReward.ts
var import_zod5 = require("zod");
var InputSourceSchema = import_zod5.z.discriminatedUnion("type", [
  import_zod5.z.object({
    type: import_zod5.z.literal("REQUIREMENT_AMOUNT"),
    roleId: PositiveInteger,
    requirementId: PositiveInteger
  }),
  import_zod5.z.object({
    type: import_zod5.z.literal("REQUIREMENT_ACCESS"),
    roleId: PositiveInteger,
    requirementId: PositiveInteger,
    value: import_zod5.z.number().default(1)
  }),
  import_zod5.z.object({
    type: import_zod5.z.literal("POINTS"),
    guildId: PositiveInteger,
    guildPlatformId: PositiveInteger
  }),
  import_zod5.z.object({
    type: import_zod5.z.literal("STATIC"),
    value: PositiveInteger
  })
]);
var Linear = import_zod5.z.object({
  type: import_zod5.z.literal("LINEAR"),
  params: import_zod5.z.object({
    multiplier: import_zod5.z.number().default(1),
    addition: import_zod5.z.number().default(0),
    shouldFloorResult: import_zod5.z.boolean().default(false).optional()
  }).default({}),
  input: InputSourceSchema.or(import_zod5.z.tuple([InputSourceSchema])).transform(
    (_) => Array.isArray(_) ? _ : [_]
  )
});
var DummyMultiInput = import_zod5.z.object({
  type: import_zod5.z.literal("SUM"),
  input: import_zod5.z.array(InputSourceSchema)
});
var DynamicRewardOperation = import_zod5.z.discriminatedUnion("type", [
  Linear,
  DummyMultiInput
]);
var DynamicAmountSchema = import_zod5.z.object({
  operation: DynamicRewardOperation
});

// schemas/form.ts
var import_zod6 = require("zod");
var FieldBaseSchema = import_zod6.z.object({
  id: import_zod6.z.string().uuid().optional(),
  question: import_zod6.z.string().min(1),
  isRequired: import_zod6.z.boolean().optional().default(false)
});
var TextAndNumberFieldSchema = FieldBaseSchema.extend({
  type: import_zod6.z.enum(["SHORT_TEXT", "LONG_TEXT", "NUMBER"])
});
var OptionsSchema = import_zod6.z.object({
  options: import_zod6.z.array(import_zod6.z.string().or(import_zod6.z.number()))
});
var SingleAndMultipleChoiceFieldSchema = FieldBaseSchema.merge(
  OptionsSchema
).extend({
  type: import_zod6.z.enum(["SINGLE_CHOICE", "MULTIPLE_CHOICE"]),
  allowOther: import_zod6.z.boolean().optional().default(false)
});
var RateFieldSchema = FieldBaseSchema.merge(OptionsSchema).extend({
  type: import_zod6.z.enum(["RATE"]),
  worstLabel: import_zod6.z.string().optional(),
  bestLabel: import_zod6.z.string().optional()
});
var FieldCreationPayloadSchema = import_zod6.z.discriminatedUnion("type", [
  TextAndNumberFieldSchema,
  SingleAndMultipleChoiceFieldSchema,
  RateFieldSchema
]);
var FieldSchema = FieldCreationPayloadSchema.and(
  import_zod6.z.object({
    id: import_zod6.z.string().uuid().optional()
  })
);
var FormCreationPayloadSchema = import_zod6.z.object({
  name: import_zod6.z.string().min(1),
  description: import_zod6.z.string().max(250).optional(),
  isEditable: import_zod6.z.boolean().optional().default(false),
  fields: import_zod6.z.array(FieldCreationPayloadSchema)
});
var FormSchema = FormCreationPayloadSchema.extend({
  id: import_zod6.z.number(),
  creatorUserId: import_zod6.z.number().nullable(),
  guildId: import_zod6.z.number(),
  fields: import_zod6.z.array(FieldSchema),
  submissionCount: import_zod6.z.number().optional(),
  createdAt: import_zod6.z.date().or(import_zod6.z.string()),
  // TODOb if we read from cache, the date will be string
  updatedAt: import_zod6.z.date().or(import_zod6.z.string())
  // TODOb if we read from cache, the date will be string
}).nullable();
var SubmissionCreationAnswerSchema = import_zod6.z.object({
  fieldId: import_zod6.z.string().uuid(),
  value: import_zod6.z.string().or(import_zod6.z.number()).or(import_zod6.z.array(import_zod6.z.string().or(import_zod6.z.number()))).optional().nullable().transform(
    (value) => Array.isArray(value) ? JSON.stringify(value) : value
  )
});
var SubmissionAnswerSchema = SubmissionCreationAnswerSchema.extend({
  userSubmissionId: import_zod6.z.number(),
  value: import_zod6.z.string().or(import_zod6.z.number()).optional().nullable().transform((value) => {
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
var UserSubmissionCreationSchema = import_zod6.z.object({
  submissionAnswers: import_zod6.z.array(SubmissionCreationAnswerSchema)
});
var UserSubmissionSchema = import_zod6.z.object({
  id: import_zod6.z.number(),
  formId: import_zod6.z.number(),
  createdAt: import_zod6.z.date().or(import_zod6.z.string()),
  // TODOb if we read from cache, the date will be string
  submissionAnswers: import_zod6.z.array(SubmissionAnswerSchema)
}).nullable();
var UserSubmissionsSchema = import_zod6.z.array(
  import_zod6.z.object({
    userId: import_zod6.z.number(),
    formId: import_zod6.z.number(),
    platformUsers: import_zod6.z.array(
      import_zod6.z.object({
        platformId: import_zod6.z.number(),
        platformUserId: import_zod6.z.string(),
        username: import_zod6.z.string().nullable()
      })
    ).default([]),
    addresses: import_zod6.z.array(import_zod6.z.string()),
    submittedAt: import_zod6.z.date(),
    submissionAnswers: import_zod6.z.array(SubmissionCreationAnswerSchema),
    isShared: import_zod6.z.boolean().nullable()
  })
).default([]);

// schemas/guild.ts
var import_zod40 = require("zod");

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
var import_zod7 = require("zod");
var DiscordGuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("DISCORD"),
  platformGuildData: import_zod7.z.object({
    inviteChannel: import_zod7.z.string().optional(),
    // Custom invite link, can be modified on our frontend
    invite: import_zod7.z.string().optional(),
    joinButton: import_zod7.z.boolean().optional(),
    needCaptcha: import_zod7.z.boolean().optional(),
    name: import_zod7.z.string().optional()
  }).default({})
});
var TelegramGuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("TELEGRAM")
});
var GitHubGuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("GITHUB"),
  platformGuildData: import_zod7.z.object({
    // Optional, because we don't need to send it when creating a reward, but our backend will save this data here
    platformUserId: import_zod7.z.number().int().optional()
  }).default({})
});
var GoogleGuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("GOOGLE"),
  platformGuildData: import_zod7.z.object({
    role: import_zod7.z.enum(["reader", "commenter", "writer"]).optional().default("reader"),
    mimeType: import_zod7.z.string(),
    iconLink: import_zod7.z.string()
  })
});
var ContractCallGuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("CONTRACT_CALL"),
  platformGuildData: import_zod7.z.object({
    chain: ChainSchema.extract(NFTRewardSupportedChains),
    contractAddress: EvmAddressSchema,
    function: import_zod7.z.enum([
      "function claim(address payToken, address receiver, bytes calldata signature) payable",
      "function claim(uint256 amount, address receiver, uint256 userId, uint256 signedAt, bytes calldata signature) payable"
    ]),
    argsToSign: import_zod7.z.array(import_zod7.z.string()),
    name: import_zod7.z.string().optional(),
    symbol: import_zod7.z.string().optional(),
    imageUrl: import_zod7.z.string().optional(),
    description: import_zod7.z.string().optional()
  })
});
var UniqueTextGuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("UNIQUE_TEXT"),
  platformGuildData: import_zod7.z.object({
    texts: import_zod7.z.array(import_zod7.z.string()),
    name: import_zod7.z.string().optional(),
    imageUrl: import_zod7.z.string().optional()
  })
});
var TextGuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("TEXT"),
  platformGuildData: import_zod7.z.object({
    text: import_zod7.z.string(),
    name: import_zod7.z.string().optional(),
    imageUrl: import_zod7.z.string().optional()
  })
});
var GuildPinGuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("GUILD_PIN"),
  platformGuildData: import_zod7.z.object({
    pinChain: import_zod7.z.enum(
      Object.values(PinSupportedChains)
    ),
    contractAddress: AnyAddressSchema
  })
});
var PolygonIDGuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("POLYGON_ID")
});
var PointsGuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("POINTS"),
  platformGuildData: import_zod7.z.object({
    name: import_zod7.z.string().optional(),
    imageUrl: import_zod7.z.string().optional()
  }).default({})
});
var PoapGuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("POAP"),
  platformGuildData: import_zod7.z.object({
    fancyId: import_zod7.z.string(),
    eventId: import_zod7.z.number(),
    name: import_zod7.z.string().optional(),
    imageUrl: import_zod7.z.string().optional()
  })
});
var FormGuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("FORM"),
  platformGuildData: import_zod7.z.object({
    formId: import_zod7.z.number()
  })
});
var GatherTownGuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("GATHER_TOWN"),
  platformGuildData: import_zod7.z.object({
    name: import_zod7.z.string(),
    gatherSpaceId: import_zod7.z.string(),
    gatherApiKey: import_zod7.z.string(),
    gatherAffiliation: import_zod7.z.string(),
    gatherRole: import_zod7.z.string()
  })
});
var ERC20GuildRewardSchema = import_zod7.z.object({
  platformName: import_zod7.z.literal("ERC20"),
  platformGuildData: import_zod7.z.object({
    poolId: import_zod7.z.number(),
    chain: ChainSchema.extract([
      "BASE_MAINNET",
      "BSC",
      "MANTLE",
      "OPTIMISM",
      "POLYGON",
      "SEPOLIA"
    ]),
    contractAddress: EvmAddressSchema,
    name: import_zod7.z.string(),
    imageUrl: import_zod7.z.string(),
    description: import_zod7.z.string(),
    tokenAddress: EvmAddressSchema
  })
});
var BasicGuildRewardSchema = import_zod7.z.discriminatedUnion("platformName", [
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
  import_zod7.z.object({
    platformGuildId: import_zod7.z.string().transform(
      (value) => value.includes("/") ? encodeURIComponent(value) : value
    )
  })
);
var GuildRewardSchema = BasicGuildRewardSchema.and(
  import_zod7.z.object({
    // We'll probably deprecate this, left here to support older platforms too
    platformGuildName: import_zod7.z.string().optional(),
    // We only append the invite for the Discord reward in our DB in case there's no specified `platformGuildData.invite`
    invite: import_zod7.z.string().optional(),
    // In some cases we'll fetch the platform's name request-time, in that case it'll be added here
    name: import_zod7.z.string().optional()
  })
);
var GuildRewardCreationSchema = BasicGuildRewardSchema.and(
  import_zod7.z.object({
    roleIds: import_zod7.z.array(import_zod7.z.number().int().positive()).optional()
  })
);
var GuildRewardUpdateSchema = import_zod7.z.object({
  platformGuildData: import_zod7.z.any()
}).refine(...nonEmptyRefine(ErrorMessages.REQUIRED_PLATFORM_GUILD_DATA));

// schemas/role.ts
var import_zod39 = require("zod");

// schemas/requirement.ts
var import_zod37 = require("zod");

// schemas/requirements/alchemy.ts
var import_zod8 = require("zod");
var AlchemyChains = import_zod8.z.enum([
  "ETHEREUM",
  "POLYGON",
  "ARBITRUM",
  "OPTIMISM",
  "GOERLI",
  "POLYGON_MUMBAI"
]);
var EthIndexerChains = import_zod8.z.enum(["BASE_GOERLI"]);
var alchemy_default = [
  import_zod8.z.object({
    type: import_zod8.z.enum(["ALCHEMY_FIRST_TX", "ALCHEMY_FIRST_TX_RELATIVE"]),
    chain: AlchemyChains.or(EthIndexerChains).default("ETHEREUM"),
    data: import_zod8.z.object({
      maxAmount: import_zod8.z.number()
    })
  }),
  import_zod8.z.object({
    type: import_zod8.z.enum([
      "ALCHEMY_CONTRACT_DEPLOY",
      "ALCHEMY_CONTRACT_DEPLOY_RELATIVE",
      "ALCHEMY_TX_COUNT",
      "ALCHEMY_TX_COUNT_RELATIVE"
    ]),
    chain: AlchemyChains.or(EthIndexerChains).default("ETHEREUM"),
    address: EvmAddressSchema.nullable().optional(),
    data: import_zod8.z.object({
      txCount: import_zod8.z.number(),
      maxAmount: import_zod8.z.number().optional(),
      minAmount: import_zod8.z.number().optional()
    })
  }),
  import_zod8.z.object({
    type: import_zod8.z.enum(["ALCHEMY_TX_VALUE", "ALCHEMY_TX_VALUE_RELATIVE"]),
    chain: AlchemyChains.default("ETHEREUM"),
    address: EvmAddressSchema.nullable().optional(),
    data: import_zod8.z.object({
      txValue: import_zod8.z.number(),
      maxAmount: import_zod8.z.number().optional(),
      minAmount: import_zod8.z.number().optional()
    })
  })
];

// schemas/requirements/allowlist.ts
var import_zod9 = require("zod");
var AllowlistSchema = import_zod9.z.object({
  addresses: import_zod9.z.array(AnyAddressSchema).default([]),
  fileId: import_zod9.z.string().min(1).optional(),
  hideAllowlist: import_zod9.z.boolean().optional()
}).default({});
var allowlist_default = [
  import_zod9.z.object({
    type: import_zod9.z.literal("ALLOWLIST"),
    data: AllowlistSchema
  }),
  import_zod9.z.object({
    type: import_zod9.z.literal("ALLOWLIST_EMAIL"),
    data: import_zod9.z.object({
      addresses: import_zod9.z.array(import_zod9.z.string().email().toLowerCase()).default([]),
      hideAllowlist: import_zod9.z.boolean().optional(),
      fileId: import_zod9.z.string().min(1).optional()
    }).default({})
  })
];

// schemas/requirements/captcha.ts
var import_zod10 = require("zod");
var captcha_default = import_zod10.z.object({
  type: import_zod10.z.literal("CAPTCHA"),
  data: import_zod10.z.object({
    maxAmount: import_zod10.z.number().int().nonnegative().optional()
  }).default({})
});

// schemas/requirements/coin.ts
var import_zod11 = require("zod");
var coin_default = import_zod11.z.object({
  type: import_zod11.z.literal("COIN"),
  chain: ChainSchema,
  data: import_zod11.z.object({
    minAmount: import_zod11.z.number(),
    maxAmount: import_zod11.z.number().optional()
  })
});

// schemas/requirements/contract.ts
var import_zod12 = require("zod");
var contract_default = import_zod12.z.object({
  type: import_zod12.z.literal("CONTRACT"),
  data: import_zod12.z.object({
    id: import_zod12.z.string().trim().min(1),
    resultIndex: import_zod12.z.number().int().nonnegative().optional(),
    params: import_zod12.z.array(import_zod12.z.string().or(import_zod12.z.number()).or(import_zod12.z.boolean())),
    resultMatch: import_zod12.z.enum(["=", ">", "<", ">=", "<="]),
    expected: import_zod12.z.string()
  }),
  address: EvmAddressSchema,
  chain: ChainSchema
});

// schemas/requirements/covalent.ts
var import_zod13 = require("zod");
var CovalentChains = import_zod13.z.enum([
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
var Timestamps = import_zod13.z.object({
  minAmount: import_zod13.z.number(),
  maxAmount: import_zod13.z.number()
}).partial().default({});
var covalent_default = [
  import_zod13.z.object({
    type: import_zod13.z.enum(["COVALENT_FIRST_TX", "COVALENT_FIRST_TX_RELATIVE"]),
    chain: CovalentChains.default("ETHEREUM"),
    data: import_zod13.z.object({
      timestamps: Timestamps
    }).default({})
  }),
  import_zod13.z.object({
    type: import_zod13.z.enum([
      "COVALENT_CONTRACT_DEPLOY",
      "COVALENT_CONTRACT_DEPLOY_RELATIVE",
      "COVALENT_TX_COUNT",
      "COVALENT_TX_COUNT_RELATIVE"
    ]),
    chain: CovalentChains.default("ETHEREUM"),
    address: EvmAddressSchema.nullable().optional(),
    data: import_zod13.z.object({
      txCount: import_zod13.z.number().int().nonnegative(),
      maxAmount: import_zod13.z.number().optional(),
      minAmount: import_zod13.z.number().optional(),
      timestamps: Timestamps
    })
  }),
  import_zod13.z.object({
    type: import_zod13.z.enum(["COVALENT_TX_VALUE", "COVALENT_TX_VALUE_RELATIVE"]),
    chain: CovalentChains.default("ETHEREUM"),
    address: EvmAddressSchema.nullable().optional(),
    data: import_zod13.z.object({
      txValue: import_zod13.z.number(),
      maxAmount: import_zod13.z.number().optional(),
      minAmount: import_zod13.z.number().optional(),
      timestamps: Timestamps
    })
  })
];

// schemas/requirements/discord.ts
var import_zod14 = require("zod");
var discord_default = [
  import_zod14.z.object({
    type: import_zod14.z.literal("DISCORD_ROLE"),
    data: import_zod14.z.object({
      serverId: import_zod14.z.string().min(1),
      roleId: import_zod14.z.string().min(1),
      serverName: import_zod14.z.string().min(1).optional(),
      roleName: import_zod14.z.string().min(1).optional()
    })
  }),
  import_zod14.z.object({
    type: import_zod14.z.enum(["DISCORD_JOIN", "DISCORD_JOIN_FROM_NOW"]),
    data: import_zod14.z.object({
      memberSince: import_zod14.z.number()
      // fromNow: z.boolean().optional(),
    })
  }),
  import_zod14.z.object({
    type: import_zod14.z.literal("DISCORD_MEMBER_SINCE"),
    data: import_zod14.z.object({
      serverId: import_zod14.z.string().min(1),
      serverName: import_zod14.z.string().min(1).optional(),
      memberSince: import_zod14.z.number().optional()
    })
  })
];

// schemas/requirements/eas.ts
var import_zod15 = require("zod");
var EasChains = import_zod15.z.enum([
  "ETHEREUM",
  "OPTIMISM",
  "ARBITRUM",
  "SEPOLIA",
  "BASE_GOERLI",
  "BASE_MAINNET",
  "BASE_SEPOLIA",
  "LINEA"
]);
var EasCommonFields = import_zod15.z.object({
  schemaId: import_zod15.z.string().min(1)
}).and(
  import_zod15.z.object({ key: import_zod15.z.string().min(1), val: import_zod15.z.string().min(1) }).or(
    import_zod15.z.object({
      key: import_zod15.z.undefined().or(import_zod15.z.literal("")),
      val: import_zod15.z.undefined().or(import_zod15.z.literal(""))
    }).transform(() => ({ key: void 0, val: void 0 }))
  )
);
var eas_default = [
  import_zod15.z.object({
    type: import_zod15.z.enum(["EAS_ATTESTED_BY", "COINBASE_EAS_ATTESTED_BY"]),
    chain: EasChains.default("ETHEREUM"),
    data: EasCommonFields.and(
      import_zod15.z.object({
        attester: EvmAddressSchema
      })
    )
  }),
  import_zod15.z.object({
    chain: EasChains.default("ETHEREUM"),
    type: import_zod15.z.literal("EAS_ATTEST"),
    data: EasCommonFields.and(
      import_zod15.z.object({
        recipient: EvmAddressSchema
      })
    )
  })
];

// schemas/requirements/email.ts
var import_zod16 = require("zod");
var email_default = [
  import_zod16.z.object({
    type: import_zod16.z.literal("EMAIL_DOMAIN"),
    data: import_zod16.z.object({
      domain: import_zod16.z.string().toLowerCase()
    })
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal("EMAIL_VERIFIED"),
    data: import_zod16.z.object({}).default({})
  })
];

// schemas/requirements/farcaster.ts
var import_zod17 = require("zod");
var FarcasterLikeOrRecast = import_zod17.z.object({
  type: import_zod17.z.enum(["FARCASTER_LIKE", "FARCASTER_RECAST"]),
  data: import_zod17.z.object({
    hash: import_zod17.z.string().min(1),
    url: import_zod17.z.undefined()
  }).or(
    import_zod17.z.object({
      url: import_zod17.z.string().url(),
      hash: import_zod17.z.undefined()
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
var FarcasterFollow = import_zod17.z.object({
  type: import_zod17.z.enum(["FARCASTER_FOLLOW", "FARCASTER_FOLLOWED_BY"]),
  data: import_zod17.z.object({
    id: import_zod17.z.number()
  })
});
var FarcasterStringId = import_zod17.z.object({
  type: import_zod17.z.enum([
    "FARCASTER_FOLLOW_CHANNEL",
    "FARCASTER_USERNAME",
    "FARCASTER_BIO"
  ]),
  data: import_zod17.z.object({
    id: import_zod17.z.string().min(1)
  })
});
var FarcasterTotalFollowers = import_zod17.z.object({
  type: import_zod17.z.literal("FARCASTER_TOTAL_FOLLOWERS"),
  data: import_zod17.z.object({
    min: import_zod17.z.number().int()
  })
});
var FarcasterProfile = import_zod17.z.object({
  type: import_zod17.z.literal("FARCASTER_PROFILE"),
  data: import_zod17.z.object({}).default({})
});
var farcaster_default = [
  FarcasterProfile,
  FarcasterFollow,
  FarcasterLikeOrRecast,
  FarcasterTotalFollowers,
  FarcasterStringId
];

// schemas/requirements/form.ts
var import_zod18 = require("zod");
var FormSubmissionDetailedAnswerSchema = import_zod18.z.object({
  fieldId: import_zod18.z.string()
});
var FormSubmissionDetailedGeneralAnswerSchema = FormSubmissionDetailedAnswerSchema.extend({
  value: import_zod18.z.string().or(import_zod18.z.number())
}).strict();
var FormSubmissionDetailedRateAnswerSchema = FormSubmissionDetailedAnswerSchema.and(
  import_zod18.z.object({
    minAmount: import_zod18.z.number().int().positive().or(import_zod18.z.string().pipe(import_zod18.z.coerce.number())).optional(),
    maxAmount: import_zod18.z.number().int().positive().or(import_zod18.z.string().pipe(import_zod18.z.coerce.number())).optional()
  }).refine(...nonEmptyRefine("Invalid value for minAmount/maxAmount"))
);
var FormSubmissionDetailedMultipleChoiceAnswerSchema = FormSubmissionDetailedAnswerSchema.and(
  import_zod18.z.object({
    acceptedAnswers: import_zod18.z.array(import_zod18.z.string()).optional(),
    rejectedAnswers: import_zod18.z.array(import_zod18.z.string()).optional()
  }).refine(
    ...nonEmptyRefine("Invalid value for acceptedAnswers/rejectedAnswers")
  )
);
var FormSubmissionSchema = import_zod18.z.object({
  id: import_zod18.z.number().int().positive(),
  guildId: import_zod18.z.number().int().positive(),
  answers: import_zod18.z.array(
    import_zod18.z.union([
      FormSubmissionDetailedGeneralAnswerSchema,
      FormSubmissionDetailedRateAnswerSchema,
      FormSubmissionDetailedMultipleChoiceAnswerSchema
    ])
  ).optional()
});
var form_default = [
  import_zod18.z.object({
    type: import_zod18.z.literal("FORM_SUBMISSION"),
    data: FormSubmissionSchema
  }),
  import_zod18.z.object({
    type: import_zod18.z.literal("FORM_APPROVAL"),
    data: AllowlistSchema
  })
];

// schemas/requirements/free.ts
var import_zod19 = require("zod");
var free_default = import_zod19.z.object({
  type: import_zod19.z.literal("FREE"),
  data: import_zod19.z.object({}).default({})
});

// schemas/requirements/fuel.ts
var import_zod20 = require("zod");
var fuel_default = [
  import_zod20.z.object({
    type: import_zod20.z.literal("FUEL_BALANCE"),
    data: import_zod20.z.object({
      minAmount: import_zod20.z.number(),
      maxAmount: import_zod20.z.number().optional()
    })
  }),
  import_zod20.z.object({
    type: import_zod20.z.literal("FUEL_TRANSACTIONS"),
    data: import_zod20.z.object({
      id: import_zod20.z.enum(["script", "mint", "create"]).optional(),
      minAmount: import_zod20.z.number().int().optional(),
      maxAmount: import_zod20.z.number().int().optional()
    })
  })
];

// schemas/requirements/galaxy.ts
var import_zod21 = require("zod");
var galaxy_default = import_zod21.z.object({
  type: import_zod21.z.enum(["GALAXY", "GALAXY_PARTICIPATION"]),
  data: import_zod21.z.object({
    galaxyId: import_zod21.z.string().min(1)
  })
});

// schemas/requirements/gitcoin.ts
var import_zod22 = require("zod");
var gitcoin_default = [
  import_zod22.z.object({
    type: import_zod22.z.literal("GITCOIN_PASS"),
    data: import_zod22.z.object({}).default({})
  }),
  import_zod22.z.object({
    type: import_zod22.z.literal("GITCOIN_STAMP"),
    data: import_zod22.z.object({
      stamp: import_zod22.z.string(),
      minAmount: import_zod22.z.number(),
      maxAmount: import_zod22.z.number(),
      credType: import_zod22.z.string(),
      issuer: import_zod22.z.string()
    }).partial().default({})
  }),
  import_zod22.z.object({
    type: import_zod22.z.literal("GITCOIN_SCORE"),
    data: import_zod22.z.object({
      id: import_zod22.z.string().min(1),
      score: import_zod22.z.number()
    })
  })
];

// schemas/requirements/github.ts
var import_zod23 = require("zod");
var GithubStarringSchema = import_zod23.z.object({
  type: import_zod23.z.literal("GITHUB_STARRING"),
  data: import_zod23.z.object({
    id: import_zod23.z.string().url()
  })
});
var GithubAccountAgeSchema = import_zod23.z.object({
  type: import_zod23.z.enum(["GITHUB_ACCOUNT_AGE", "GITHUB_ACCOUNT_AGE_RELATIVE"]),
  data: import_zod23.z.object({
    minAmount: import_zod23.z.number().int().positive().optional(),
    maxAmount: import_zod23.z.number().int().positive().optional()
  }).default({})
});
var GithubCommitCountSchema = import_zod23.z.object({
  type: import_zod23.z.enum(["GITHUB_COMMIT_COUNT", "GITHUB_COMMIT_COUNT_RELATIVE"]),
  data: import_zod23.z.object({
    id: import_zod23.z.number().int().positive(),
    minAmount: import_zod23.z.number().int().positive().optional(),
    maxAmount: import_zod23.z.number().int().positive().optional()
  })
});
var github_default = [
  GithubStarringSchema,
  GithubAccountAgeSchema,
  GithubCommitCountSchema
];

// schemas/requirements/guild.ts
var import_zod24 = require("zod");
var guild_default = [
  import_zod24.z.object({
    type: import_zod24.z.literal("GUILD_MEMBER"),
    data: import_zod24.z.object({
      guildId: import_zod24.z.number().int().positive()
    })
  }),
  import_zod24.z.object({
    type: import_zod24.z.literal("GUILD_ROLE"),
    data: import_zod24.z.object({
      guildId: import_zod24.z.number().int().positive(),
      roleId: import_zod24.z.number().int().positive(),
      minAmount: import_zod24.z.number().int().positive().optional(),
      maxAmount: import_zod24.z.number().int().positive().optional()
    })
  }),
  import_zod24.z.object({
    type: import_zod24.z.literal("GUILD_ROLE_RELATIVE"),
    data: import_zod24.z.object({
      guildId: import_zod24.z.number().int().positive(),
      roleId: import_zod24.z.number().int().positive(),
      minAmount: import_zod24.z.number().int().positive().optional(),
      maxAmount: import_zod24.z.number().int().positive().optional()
    })
  }),
  import_zod24.z.object({
    type: import_zod24.z.literal("GUILD_ADMIN"),
    data: import_zod24.z.object({
      minAmount: import_zod24.z.number().int().nonnegative()
    })
  }),
  import_zod24.z.object({
    type: import_zod24.z.literal("GUILD_USER_SINCE"),
    data: import_zod24.z.object({
      creationDate: import_zod24.z.coerce.date().or(import_zod24.z.number()).or(import_zod24.z.string()).pipe(import_zod24.z.coerce.date())
    })
  }),
  import_zod24.z.object({
    type: import_zod24.z.literal("GUILD_MINGUILDS"),
    data: import_zod24.z.object({
      minAmount: import_zod24.z.number().int().positive()
    })
  })
];

// schemas/requirements/guildSnapshot.ts
var import_zod25 = require("zod");
var Snapshot = import_zod25.z.array(
  import_zod25.z.object({
    key: import_zod25.z.string().min(1).toLowerCase(),
    value: import_zod25.z.number()
  })
);
var SnapshotRequirementData = import_zod25.z.object({
  snapshot: Snapshot.default([]),
  fileId: import_zod25.z.string().min(1).optional(),
  isHidden: import_zod25.z.boolean().default(false),
  guildPlatformId: PositiveInteger.optional()
}).default({});
var AddressSnapshot = import_zod25.z.object({
  type: import_zod25.z.literal("GUILD_SNAPSHOT"),
  data: SnapshotRequirementData
});
var guildSnapshot_default = [AddressSnapshot];

// schemas/requirements/lens.ts
var import_zod26 = require("zod");
var lens_default = [
  import_zod26.z.object({
    type: import_zod26.z.literal("LENS_PROFILE"),
    data: import_zod26.z.object({}).default({})
  }),
  import_zod26.z.object({
    type: import_zod26.z.enum(["LENS_TOTAL_POSTS", "LENS_TOTAL_FOLLOWERS"]),
    data: import_zod26.z.object({
      min: import_zod26.z.number().int()
    })
  }),
  import_zod26.z.object({
    type: import_zod26.z.enum(["LENS_FOLLOWED_BY", "LENS_FOLLOW", "LENS_COLLECT"]),
    data: import_zod26.z.object({
      id: import_zod26.z.string().min(1)
    })
  }),
  import_zod26.z.object({
    type: import_zod26.z.literal("LENS_REACT"),
    data: import_zod26.z.object({
      id: import_zod26.z.string().min(1),
      reaction: import_zod26.z.enum(["ANY", "UPVOTE", "DOWNVOTE"])
    })
  }),
  import_zod26.z.object({
    type: import_zod26.z.literal("LENS_ACTION"),
    data: import_zod26.z.object({
      id: import_zod26.z.string().min(1),
      action: import_zod26.z.enum(["MIRROR", "QUOTE", "COMMENT"]),
      publishedOn: import_zod26.z.string().min(1).optional()
    })
  })
];

// schemas/requirements/payment.ts
var import_zod27 = require("zod");
var payment_default = import_zod27.z.object({
  type: import_zod27.z.literal("PAYMENT"),
  data: import_zod27.z.object({
    id: import_zod27.z.string()
  }),
  chain: ChainSchema.extract(PaymentSupportedChains),
  address: EvmAddressSchema
});

// schemas/requirements/poap.ts
var import_zod28 = require("zod");
var poap_default = import_zod28.z.object({
  type: import_zod28.z.enum(["POAP", "GITPOAP"]),
  data: import_zod28.z.object({
    id: import_zod28.z.string().min(1)
  })
});

// schemas/requirements/points.ts
var import_zod30 = require("zod");

// schemas/requirements/common.ts
var import_zod29 = require("zod");
var RequirementCustomizationSchema = import_zod29.z.object({
  customName: import_zod29.z.string().optional(),
  customImage: import_zod29.z.string().optional()
});
var MinMaxAmount = import_zod29.z.object({ minAmount: import_zod29.z.number(), maxAmount: import_zod29.z.undefined() }).or(
  import_zod29.z.object({
    minAmount: import_zod29.z.undefined(),
    maxAmount: import_zod29.z.number()
  })
).or(
  import_zod29.z.object({
    minAmount: import_zod29.z.number(),
    maxAmount: import_zod29.z.number()
  }).refine((input) => input.maxAmount >= input.minAmount, {
    message: "If both maxAmount and minAmount are defined, the former cannot be a smaller number"
  })
).or(
  import_zod29.z.object({
    minAmount: import_zod29.z.undefined(),
    maxAmount: import_zod29.z.undefined()
  }).transform(() => ({ minAmount: 0, maxAmount: void 0 }))
);

// schemas/requirements/points.ts
var PointsTotalAmountDataSchema = import_zod30.z.object({
  guildId: import_zod30.z.number().int().positive()
}).and(MinMaxAmount);
var PointsAmountDataSchema = import_zod30.z.object({
  guildPlatformId: import_zod30.z.number().int().positive(),
  guildId: import_zod30.z.number().int().positive()
}).and(MinMaxAmount);
var points_default = [
  import_zod30.z.object({
    type: import_zod30.z.literal("POINTS_TOTAL_AMOUNT"),
    data: PointsTotalAmountDataSchema
  }),
  import_zod30.z.object({
    type: import_zod30.z.literal("POINTS_AMOUNT"),
    data: PointsAmountDataSchema
  }),
  import_zod30.z.object({
    type: import_zod30.z.literal("POINTS_RANK"),
    data: PointsAmountDataSchema
  })
];

// schemas/requirements/polygonId.ts
var import_zod31 = require("zod");
var polygonId_default = [
  import_zod31.z.object({
    type: import_zod31.z.literal("POLYGON_ID_QUERY"),
    data: import_zod31.z.object({
      query: import_zod31.z.array(import_zod31.z.any()),
      maxAmount: import_zod31.z.number().optional()
    }),
    chain: ChainSchema.optional()
  }),
  import_zod31.z.object({
    type: import_zod31.z.literal("POLYGON_ID_BASIC"),
    data: import_zod31.z.object({
      maxAmount: import_zod31.z.number().optional()
    }).default({}),
    chain: ChainSchema.optional()
  })
];

// schemas/requirements/snapshot.ts
var import_zod32 = require("zod");
var snapshot_default = [
  import_zod32.z.object({
    type: import_zod32.z.enum([
      "SNAPSHOT_FOLLOW",
      "SNAPSHOT_SPACE_ADMIN",
      "SNAPSHOT_SPACE_AUTHOR"
    ]),
    data: import_zod32.z.object({
      space: import_zod32.z.string().min(1)
    })
  }),
  import_zod32.z.object({
    type: import_zod32.z.literal("SNAPSHOT_FOLLOW_SINCE"),
    data: import_zod32.z.object({
      space: import_zod32.z.string().min(1),
      since: import_zod32.z.number()
    })
  }),
  import_zod32.z.object({
    type: import_zod32.z.literal("SNAPSHOT_USER_SINCE"),
    data: import_zod32.z.object({
      since: import_zod32.z.number()
    })
  }),
  import_zod32.z.object({
    type: import_zod32.z.literal("SNAPSHOT_MAJORITY_VOTES"),
    data: import_zod32.z.object({
      minRatio: import_zod32.z.number().min(0).max(1)
    })
  }),
  import_zod32.z.object({
    type: import_zod32.z.literal("SNAPSHOT_VOTES"),
    data: import_zod32.z.object({
      minAmount: import_zod32.z.number().min(1),
      space: import_zod32.z.string().min(1).optional(),
      proposal: import_zod32.z.string().min(1).optional()
    })
  }),
  import_zod32.z.object({
    type: import_zod32.z.literal("SNAPSHOT_PROPOSALS"),
    data: import_zod32.z.object({
      minAmount: import_zod32.z.number().min(1),
      space: import_zod32.z.string().min(1).optional(),
      state: import_zod32.z.enum(["active", "pending", "closed"]).optional(),
      successfulOnly: import_zod32.z.boolean().optional()
    })
  }),
  import_zod32.z.object({
    type: import_zod32.z.literal("SNAPSHOT_STRATEGY"),
    chain: ChainSchema,
    data: import_zod32.z.object({
      block: import_zod32.z.number().or(import_zod32.z.literal("latest")),
      strategies: import_zod32.z.array(
        import_zod32.z.object({
          name: import_zod32.z.string().min(1),
          params: import_zod32.z.any().optional()
        })
      ),
      space: import_zod32.z.string().min(1).optional()
    })
  })
];

// schemas/requirements/twitter.ts
var import_zod33 = require("zod");
var TwitterBasicSchema = import_zod33.z.object({
  type: import_zod33.z.enum([
    "TWITTER_FOLLOW",
    "TWITTER_FOLLOWED_BY",
    "TWITTER_NAME",
    "TWITTER_BIO",
    "TWITTER_LIKE",
    "TWITTER_RETWEET",
    "TWITTER_LIST_MEMBER",
    "TWITTER_LIST_FOLLOW"
  ]),
  data: import_zod33.z.object({
    id: import_zod33.z.string().trim().min(1)
  })
});
var TwitterCountSchema = import_zod33.z.object({
  type: import_zod33.z.enum([
    "TWITTER_FOLLOWER_COUNT",
    "TWITTER_FOLLOWING_COUNT",
    "TWITTER_TWEET_COUNT",
    "TWITTER_LIKE_COUNT"
  ]),
  data: import_zod33.z.object({
    minAmount: import_zod33.z.number().int().positive()
  })
});
var TwitterAccountAgeSchema = import_zod33.z.object({
  type: import_zod33.z.enum(["TWITTER_ACCOUNT_AGE_RELATIVE", "TWITTER_ACCOUNT_AGE"]),
  data: import_zod33.z.object({
    minAmount: import_zod33.z.number().int().positive(),
    fromNow: import_zod33.z.boolean().optional()
  })
});
var TwitterAccountVerifiedSchema = import_zod33.z.object({
  type: import_zod33.z.literal("TWITTER_ACCOUNT_VERIFIED"),
  data: import_zod33.z.object({
    id: import_zod33.z.enum(["any", "blue", "business", "government"])
  })
});
var TwitterAccountProtectedSchema = import_zod33.z.object({
  type: import_zod33.z.literal("TWITTER_ACCOUNT_PROTECTED"),
  data: import_zod33.z.object({}).default({})
});
var TwitterV2Schema = import_zod33.z.object({
  type: import_zod33.z.enum([
    "TWITTER_FOLLOW_V2",
    "TWITTER_LIKE_V2",
    "TWITTER_RETWEET_V2",
    "LINK_VISIT"
  ]),
  data: import_zod33.z.object({
    id: import_zod33.z.string().trim().min(1),
    maxAmount: import_zod33.z.number().optional()
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
var import_zod34 = require("zod");
var UniswapChains = ChainSchema.extract(UniswapV3PositionsChains);
var UniswapV3Positions = import_zod34.z.object({
  type: import_zod34.z.literal("UNISWAP_V3_POSITIONS"),
  data: import_zod34.z.object({
    token0: EvmAddressSchema,
    token1: EvmAddressSchema,
    baseCurrency: import_zod34.z.enum(["token0", "token1"]).default("token0"),
    countedPositions: import_zod34.z.enum(["ALL", "IN_RANGE", "FULL_RANGE"]).default("FULL_RANGE"),
    // Not used for requirement checking, only for UX purposes
    // Values taken from https://support.uniswap.org/hc/en-us/articles/21069524840589-What-is-a-tick-when-providing-liquidity
    // "Pool fee value" column
    defaultFee: import_zod34.z.union([
      import_zod34.z.literal(100),
      import_zod34.z.literal(500),
      import_zod34.z.literal(3e3),
      import_zod34.z.literal(1e4)
    ]).nullable().optional()
  }).and(MinMaxAmount),
  chain: UniswapChains
});
var uniswap_default = UniswapV3Positions;

// schemas/requirements/web3inbox.ts
var import_zod35 = require("zod");
var web3inbox_default = import_zod35.z.object({
  type: import_zod35.z.literal("WEB3INBOX_SUBSCRIBERS"),
  data: import_zod35.z.object({
    app: import_zod35.z.enum(["GUILD", "WEB3INBOX", "SHEFI"])
  })
});

// schemas/requirements/worldid.ts
var import_zod36 = require("zod");
var worldid_default = import_zod36.z.object({
  type: import_zod36.z.literal("WORLD_ID_VERIFICATION"),
  data: import_zod36.z.object({
    verificationLevel: import_zod36.z.enum(["device", "orb"])
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
var RequirementTypeAndDataSchema = import_zod37.z.discriminatedUnion("type", requirements_default).or(
  import_zod37.z.object({
    type: import_zod37.z.enum(unimplementedRequirementTypes),
    data: import_zod37.z.any()
  })
).and(import_zod37.z.object({ data: RequirementCustomizationSchema.optional() }));
var BaseRequirementSchema = import_zod37.z.object({
  isNegated: import_zod37.z.boolean().default(false),
  visibility: VisibilitySchema.default("PUBLIC"),
  visibilityRoleId: import_zod37.z.number().int().positive().optional().nullable()
});
var AddressAndChainSchema = import_zod37.z.object({
  chain: ChainSchema.optional(),
  address: AnyAddressSchema.nullable().optional()
});
var RequirementCreationPayloadSchema = BaseRequirementSchema.and(
  AddressAndChainSchema
).and(RequirementTypeAndDataSchema);
var RequirementUpdatePayloadSchema = BaseRequirementSchema.partial().and(AddressAndChainSchema).and(import_zod37.z.object({ data: import_zod37.z.any().optional() })).refine(...nonEmptyRefine());
var RequirementSchema = BaseRequirementSchema.and(
  RequirementTypeAndDataSchema
).and(AddressAndChainSchema).and(
  import_zod37.z.object({
    id: import_zod37.z.number().positive(),
    roleId: import_zod37.z.number().positive(),
    createdAt: import_zod37.z.string().refine(...isoDatetimeStringRefine()).transform(transformToDate),
    updatedAt: import_zod37.z.string().refine(...isoDatetimeStringRefine()).transform(transformToDate),
    name: import_zod37.z.string().max(150).nullable().optional(),
    symbol: import_zod37.z.string().max(100).nullable().optional()
  })
);
var RequirementCreateResponseSchema = RequirementSchema.and(
  import_zod37.z.object({
    deletedRequirements: import_zod37.z.array(import_zod37.z.number())
  })
);

// schemas/roleReward.ts
var import_zod38 = require("zod");
var BaseRoleRewardSchema = import_zod38.z.object({
  platformRoleId: import_zod38.z.string(),
  visibility: VisibilitySchema,
  platformRoleData: import_zod38.z.any().optional(),
  dynamicAmount: DynamicAmountSchema.optional()
});
var GuildPlatformResolvableSchema = import_zod38.z.union([
  import_zod38.z.object({
    guildPlatform: GuildRewardCreationSchema.and(
      import_zod38.z.object({ roleIds: import_zod38.z.undefined() })
    ),
    guildPlatformId: import_zod38.z.undefined()
  }),
  import_zod38.z.object({
    guildPlatformId: import_zod38.z.number().int().positive(),
    guildPlatform: import_zod38.z.undefined()
  })
]);
var GuildPlatformIndexableSchema = import_zod38.z.object({
  guildPlatformIndex: import_zod38.z.number().int().nonnegative(),
  guildPlatformId: import_zod38.z.undefined(),
  guildPlatform: import_zod38.z.undefined()
});
var RoleRewardCreationPayloadSchema = import_zod38.z.intersection(
  BaseRoleRewardSchema.partial(),
  GuildPlatformResolvableSchema
);
var RoleRewardCreationForGuildCreationPayloadSchema = import_zod38.z.intersection(
  BaseRoleRewardSchema.partial(),
  GuildPlatformIndexableSchema
);
var RoleRewardUpdatePayloadSchema = BaseRoleRewardSchema.partial().refine(...nonEmptyRefine());
var RolePlatformClaimPayloadSchema = import_zod38.z.object({
  args: import_zod38.z.array(import_zod38.z.string())
});

// schemas/role.ts
var RoleBaseSchema = import_zod39.z.object({
  name: import_zod39.z.string().max(50),
  description: import_zod39.z.string().max(1e3).optional(),
  imageUrl: import_zod39.z.string().max(500).optional(),
  // TODO: Check for .url() OR .regex(/\/guildLogos\/[0-285]\.svg/, "Invalid imageUrl")
  logic: LogicSchema.optional(),
  visibility: VisibilitySchema.optional(),
  anyOfNum: import_zod39.z.number().int().positive().optional(),
  hideFromEyes: import_zod39.z.boolean().optional()
});
var RoleCreationPayloadSchema = import_zod39.z.intersection(
  RoleBaseSchema,
  import_zod39.z.object({
    requirements: import_zod39.z.array(RequirementCreationPayloadSchema).min(1),
    rolePlatforms: import_zod39.z.array(RoleRewardCreationPayloadSchema).optional()
  })
);
var RoleCreationForGuildCreationPayloadSchema = import_zod39.z.intersection(
  RoleBaseSchema,
  import_zod39.z.object({
    requirements: import_zod39.z.array(RequirementCreationPayloadSchema).min(1),
    rolePlatforms: import_zod39.z.array(RoleRewardCreationForGuildCreationPayloadSchema).optional()
  })
);
var RoleUpdatePayloadSchema = import_zod39.z.intersection(
  RoleBaseSchema.partial(),
  import_zod39.z.object({ position: import_zod39.z.number().int().positive().optional() })
).refine(...nonEmptyRefine());

// schemas/guild.ts
var ThemeSchema = import_zod40.z.object({
  mode: import_zod40.z.enum(["DARK", "LIGHT"]),
  color: import_zod40.z.string().max(10),
  backgroundImage: import_zod40.z.string().max(100),
  backgroundCss: import_zod40.z.string().max(10)
});
var BaseGuildSchema = import_zod40.z.object({
  name: import_zod40.z.string().min(1).max(50),
  urlName: import_zod40.z.string().max(50),
  description: import_zod40.z.string().max(1500).optional(),
  imageUrl: import_zod40.z.string().max(500).optional(),
  // z
  //   .union([
  //     z.string().regex(/\/guildLogos\/[0-285]\.svg/, "Invalid imageUrl"),
  //     z.string().max(500).url(),
  //   ])
  //   .optional(),
  showMembers: import_zod40.z.boolean().optional(),
  hideFromExplorer: import_zod40.z.boolean().optional(),
  socialLinks: import_zod40.z.record(import_zod40.z.enum(SocialLinks), import_zod40.z.string().url()).optional(),
  onboardingComplete: import_zod40.z.boolean().optional(),
  theme: ThemeSchema.partial().optional()
});
var GuildCreationPayloadSchema = BaseGuildSchema.and(
  import_zod40.z.object({
    guildPlatforms: import_zod40.z.array(GuildRewardCreationSchema).optional(),
    roles: import_zod40.z.array(RoleCreationForGuildCreationPayloadSchema).min(1),
    contacts: import_zod40.z.array(GuildContactCreationPayloadSchema)
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
var GuildSearchQueryParamsSchema = import_zod40.z.object({
  order: GuildSortTypeSchema.optional(),
  search: import_zod40.z.string().optional(),
  limit: import_zod40.z.number().int().positive(),
  offset: import_zod40.z.number().int().nonnegative()
});
var GuildGetManyQueryParamsSchema = import_zod40.z.object({
  guildIds: import_zod40.z.string().refine(
    (guildIdsParam) => {
      const splits = guildIdsParam.split(",");
      const allSplitsAreValid = splits.every((split) => isNumeric(split));
      return allSplitsAreValid;
    },
    { message: "Invalid guildIds, please provide comma-separated numbers" }
  )
});

// schemas/guildAdmin.ts
var import_zod41 = require("zod");
var GuildAdminCreationPayloadSchema = import_zod41.z.object({
  address: AnyAddressSchema,
  isOwner: import_zod41.z.boolean().optional()
});
var GuildAdminUpdatePayloadSchema = import_zod41.z.object({
  isOwner: import_zod41.z.boolean().refine((value) => value === true, {
    message: ErrorMessages.ADMIN_UPDATE_IS_OWNER_FALSE
  })
});

// schemas/guildPin.ts
var import_zod42 = require("zod");
var IssueGuildPinPayloadSchema = import_zod42.z.object({
  userAddress: AnyAddressSchema,
  guildAction: GuildPinActionSchema,
  chainId: import_zod42.z.number().int().positive(),
  contractAddress: AnyAddressSchema
});

// schemas/platformUser.ts
var import_zod43 = require("zod");
var PlatformUserCreationSchema = import_zod43.z.object({
  platformName: PlatformNameSchema,
  authData: import_zod43.z.any(),
  // TODO: This could be typed easily, as the diffferent OAuth payloads mostly look the same
  disconnectFromExistingUser: import_zod43.z.boolean().optional()
});

// schemas/profile.ts
var import_zod44 = require("zod");
var MAX_USERNAME_LENGTH = 28;
var MAX_NAME_LENGTH = 100;
var MAX_IMAGE_URL_LENGTH = 500;
var MAX_BIO_LENGTH = 1e3;
var ProfileUsernameSchema = import_zod44.z.string().max(MAX_USERNAME_LENGTH, {
  message: `Username cannot exceed ${MAX_USERNAME_LENGTH} characters`
}).superRefine((value, ctx) => {
  const areCharactersLegal = /^[\w\-.]+$/.test(value);
  const isDigitOnly = value.replace(/[0-9]/g, "").length === 0;
  if (!areCharactersLegal) {
    ctx.addIssue({
      code: import_zod44.z.ZodIssueCode.custom,
      message: "Username can only contain alphanumeric characters, underscores, dots and hyphens"
    });
  }
  if (isDigitOnly) {
    ctx.addIssue({
      code: import_zod44.z.ZodIssueCode.custom,
      message: "Username must not consist of digits only"
    });
  }
});
var ProfileCreationSchema = import_zod44.z.object({
  username: ProfileUsernameSchema,
  name: import_zod44.z.string().max(MAX_NAME_LENGTH, {
    message: `Name cannot exceed ${MAX_NAME_LENGTH} characters`
  }).nullable().optional(),
  bio: import_zod44.z.string().max(MAX_BIO_LENGTH, {
    message: `Bio cannot exceed ${MAX_BIO_LENGTH} characters`
  }).nullable().optional(),
  profileImageUrl: import_zod44.z.string().url({ message: "Profile image must be a valid URL" }).max(MAX_IMAGE_URL_LENGTH, {
    message: `Profile image URL cannot exceed ${MAX_IMAGE_URL_LENGTH} characters`
  }).nullable().optional(),
  backgroundImageUrl: import_zod44.z.string().url({ message: "Background image must be a valid URL or color code" }).max(MAX_IMAGE_URL_LENGTH, {
    message: `Background image URL cannot exceed ${MAX_IMAGE_URL_LENGTH} characters`
  }).nullable().optional().or(import_zod44.z.string().startsWith("#")),
  referrerUserId: PositiveInteger
});
var ProfileUpdateSchema = ProfileCreationSchema.extend({
  username: ProfileUsernameSchema.optional()
}).omit({ referrerUserId: true });
var ProfileSchema = ProfileCreationSchema.extend({
  userId: PositiveInteger,
  createdAt: import_zod44.z.date().or(import_zod44.z.string()),
  updatedAt: import_zod44.z.date().or(import_zod44.z.string())
});
var ContributionCreationSchema = import_zod44.z.object({
  guildId: PositiveInteger,
  roleId: PositiveInteger
});
var ContributionUpdateSchema = import_zod44.z.object({
  guildId: PositiveInteger.optional(),
  roleId: PositiveInteger.optional()
});
var ContributionSchema = ContributionCreationSchema.extend({
  id: PositiveInteger,
  userId: PositiveInteger
});
var ContributionCollectionSchema = import_zod44.z.object({
  contributionId: PositiveInteger,
  guildId: PositiveInteger,
  NFTs: import_zod44.z.array(
    import_zod44.z.object({
      userRewardId: PositiveInteger,
      data: ContractCallGuildRewardSchema.shape.platformGuildData
    })
  ),
  pins: import_zod44.z.array(
    import_zod44.z.object({
      action: import_zod44.z.enum(GuildPinAction),
      minted: import_zod44.z.boolean()
    })
  ),
  points: import_zod44.z.array(
    import_zod44.z.object({
      guildId: PositiveInteger,
      guildPlatformId: PositiveInteger,
      totalPoints: import_zod44.z.number().int(),
      rank: import_zod44.z.number().int(),
      roleIds: import_zod44.z.array(PositiveInteger)
    })
  )
});
var ExperienceSchema = import_zod44.z.object({
  id: PositiveInteger,
  userId: PositiveInteger,
  auditLogId: PositiveInteger,
  eventType: import_zod44.z.enum(XPEventType),
  amount: PositiveInteger,
  createdAt: import_zod44.z.date().or(import_zod44.z.string())
});

// schemas/userAddress.ts
var import_zod45 = require("zod");
var LinkParamsSchema = import_zod45.z.union([
  import_zod45.z.object({
    signature: import_zod45.z.string(),
    nonce: import_zod45.z.string(),
    timestamp: import_zod45.z.number().int().positive()
  }),
  import_zod45.z.object({
    signature: import_zod45.z.undefined(),
    nonce: import_zod45.z.undefined(),
    timestamp: import_zod45.z.undefined()
  })
]);
var UserAddressCreationPayloadSchema = import_zod45.z.object({
  address: AnyAddressSchema,
  isPrimary: import_zod45.z.boolean().default(false),
  isDelegated: import_zod45.z.boolean().default(false)
}).and(LinkParamsSchema);
var UserAddressUpdatePayloadSchema = import_zod45.z.object({
  isPrimary: import_zod45.z.boolean()
});

// schemas/verify.ts
var import_zod46 = require("zod");
var LinkParamsSchema2 = import_zod46.z.union([
  import_zod46.z.object({
    userId: import_zod46.z.number().int().positive(),
    signature: import_zod46.z.string(),
    nonce: import_zod46.z.string()
  }),
  import_zod46.z.object({ isDelegated: import_zod46.z.boolean() }),
  import_zod46.z.object({
    userId: import_zod46.z.undefined(),
    signature: import_zod46.z.undefined(),
    nonce: import_zod46.z.undefined(),
    isDelegated: import_zod46.z.undefined()
  })
]);
var VerifyKeyPayloadSchema = import_zod46.z.object({
  pubKey: import_zod46.z.string(),
  verificationParams: import_zod46.z.object({ reCaptcha: import_zod46.z.string() }).optional()
}).and(LinkParamsSchema2);

// types.ts
var types_exports = {};
var import_zod47 = require("zod");
var reqTypes = import_zod47.z.object({ data: RequirementCustomizationSchema.optional() }).and(import_zod47.z.discriminatedUnion("type", requirements_default));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  consts,
  schemas,
  types
});
