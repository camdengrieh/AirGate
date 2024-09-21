export const SocialLinks = [
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
  "WEBSITE",
] as const;

export const Visibility = ["PUBLIC", "PRIVATE", "HIDDEN"] as const;

export const Chain = [
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
  "CRONOS_ZKEVM",
  "AIRDAO_TESTNET",
  "AIRDAO_MAINNET",
] as const;

export const PlatformName = [
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
  "WORLD_ID",
] as const;

export const Logic = ["AND", "OR", "ANY_OF"] as const;

export const ErrorMessages = {
  INVALID_GUILDPLATFORM_INDEX:
    "Invalid guildPlatformIndex. Make sure all guildPlatformIndex values reference an existing item from guildPlatforms",
  EMPTY_OBJECT: "At least one of the fields must be defined",
  INVALID_ADDRESS: "Invalid address",
  REQUIRED_PLATFORM_GUILD_DATA: "platformGuildData is required",
  ADMIN_UPDATE_IS_OWNER_FALSE:
    "It is only possible to update an admin to be an owner. But doing so the previous owner will lose ownership",
};

export const GuildPinAction = ["JOINED_GUILD", "IS_OWNER", "IS_ADMIN"] as const;

export const XPEventType = [
  "USER_REFERRAL",
  "JOIN_GUILD",
  "GET_ROLE",
  "SUBMIT_FORM",
  "COLLECT_PIN",
  "COLLECT_NFT",
  "OWN_GUILD_VERIFIED",
] as const;

export const PinSupportedChains: {
  [key: number]: (typeof Chain)[number] | "FUEL";
} = {
  10: "OPTIMISM",
  25: "CRONOS",
  56: "BSC",
  58: "ONTOLOGY",
  137: "POLYGON",
  185: "MINT",
  324: "ZKSYNC_ERA",
  5000: "MANTLE",
  7560: "CYBER",
  8453: "BASE_MAINNET",
  34443: "MODE",
  42161: "ARBITRUM",
  59144: "LINEA",
  11155111: "SEPOLIA",
  // Use a fake chainId for Fuel
  123456789: "FUEL",
} as const;

export const PinContractAddresses = {
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
  SEPOLIA: "0xac49ee0c3bda5f851eac9a3184a21041e9afe379",
} as const satisfies Partial<
  Record<(typeof PinSupportedChains)[number], `0x${string}`>
>;

export const NFTRewardSupportedChains = [
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
  "SEPOLIA",
] as const;

export const GuildSortType = ["NEWEST", "VERIFIED", "FEATURED"] as const;

export const ContactType = ["EMAIL", "TELEGRAM"] as const;

export const AuthMethod = {
  EOA: "1",
  KeyPair: "2",
  EIP1271: "3",
} as const;

export const PARAMS_HEADER_NAME = "x-guild-params";
export const SIG_HEADER_NAME = "x-guild-sig";
export const AUTH_HEADER_NAME = "x-guild-auth";
export const SERVICE_HEADER_NAME = "x-guild-service";
export const PRIVILEGED_USER_ID_HEADER = "x-guild-privileged-user-id";
export const CORRELATION_ID_HEADER_NAME = "x-correlation-id";

export const SDK_VERSION_HEADER_NAME = "x-guild-sdk-version";
export const SDK_PROJECT_NAME_HEADER_NAME = "x-guild-sdk-project-name";

export const VISIBILITY_FILTERED_COUNT_HEADER_NAME =
  "x-guild-visibility-filtered";

export const unimplementedRequirementTypes = [
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
  "PARALLEL_TRAIT",
] as const;

export const UniswapV3PositionsChains = [
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
  "BASE_SEPOLIA",
] as const satisfies (typeof Chain)[number][];

/**
 * "NonfungiblePositionManager" addresses from here:
 * https://docs.uniswap.org/contracts/v3/reference/deployments
 */
export const UniswapV3PositionsAddresses = {
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
  BLAST_MAINNET: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28",
} as const satisfies Record<
  (typeof UniswapV3PositionsChains)[number],
  `0x${string}`
>;

/**
 * "UniswapV3Factory" addresses from here:
 * https://docs.uniswap.org/contracts/v3/reference/deployments
 */
export const UniswapV3FactoryAddresses = {
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
  BLAST_MAINNET: "0x792edAdE80af5fC680d96a2eD80A44247D2Cf6Fd",
} as const satisfies Record<
  (typeof UniswapV3PositionsChains)[number],
  `0x${string}`
>;

export const PaymentSupportedChains = [
  "ETHEREUM",
  "POLYGON",
  "OPTIMISM",
  "SEPOLIA",
] as const satisfies (typeof Chain)[number][];

export const FeeCollectorContracts = {
  ETHEREUM: "0xe4b4c6a7c6b6396032096c12adf46b7f14a70f4d",
  POLYGON: "0xe4b4c6a7c6b6396032096c12adf46b7f14a70f4d",
  OPTIMISM: "0xf7c2baa81feb6dd7bda0b3a03afbc1e13f955da5",
  SEPOLIA: "0xc3563655d35397b77228c07a7f5301b0e0fa417d",
} as const satisfies Record<
  (typeof PaymentSupportedChains)[number],
  `0x${string}`
>;
