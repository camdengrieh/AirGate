import { z } from "zod";
import {
  ErrorMessages,
  NFTRewardSupportedChains,
  PinSupportedChains,
} from "../consts";
import { nonEmptyRefine } from "../utils";
import { AnyAddressSchema, ChainSchema, EvmAddressSchema } from "./common";

const DiscordGuildRewardSchema = z.object({
  platformName: z.literal("DISCORD"),
  platformGuildData: z
    .object({
      inviteChannel: z.string().optional(),
      // Custom invite link, can be modified on our frontend
      invite: z.string().optional(),
      joinButton: z.boolean().optional(),
      needCaptcha: z.boolean().optional(),
      name: z.string().optional(),
    })
    .default({}),
});

const TelegramGuildRewardSchema = z.object({
  platformName: z.literal("TELEGRAM"),
});

const GitHubGuildRewardSchema = z.object({
  platformName: z.literal("GITHUB"),
  platformGuildData: z
    .object({
      // Optional, because we don't need to send it when creating a reward, but our backend will save this data here
      platformUserId: z.number().int().optional(),
    })
    .default({}),
});

const GoogleGuildRewardSchema = z.object({
  platformName: z.literal("GOOGLE"),
  platformGuildData: z.object({
    role: z
      .enum(["reader", "commenter", "writer"])
      .optional()
      .default("reader"),
    mimeType: z.string(),
    iconLink: z.string(),
  }),
});

export const ContractCallGuildRewardSchema = z.object({
  platformName: z.literal("CONTRACT_CALL"),
  platformGuildData: z.object({
    chain: ChainSchema.extract(NFTRewardSupportedChains),
    contractAddress: EvmAddressSchema,
    function: z.enum([
      "function claim(address payToken, address receiver, bytes calldata signature) payable",
      "function claim(uint256 amount, address receiver, uint256 userId, uint256 signedAt, bytes calldata signature) payable",
    ]),
    argsToSign: z.array(z.string()),
    name: z.string().optional(),
    symbol: z.string().optional(),
    imageUrl: z.string().optional(),
    description: z.string().optional(),
  }),
});

const UniqueTextGuildRewardSchema = z.object({
  platformName: z.literal("UNIQUE_TEXT"),
  platformGuildData: z.object({
    texts: z.array(z.string()),
    name: z.string().optional(),
    imageUrl: z.string().optional(),
  }),
});

const TextGuildRewardSchema = z.object({
  platformName: z.literal("TEXT"),
  platformGuildData: z.object({
    text: z.string(),
    name: z.string().optional(),
    imageUrl: z.string().optional(),
  }),
});

type PinChain = (typeof PinSupportedChains)[keyof typeof PinSupportedChains];
const GuildPinGuildRewardSchema = z.object({
  platformName: z.literal("GUILD_PIN"),
  platformGuildData: z.object({
    pinChain: z.enum(
      Object.values(PinSupportedChains) as [PinChain, ...PinChain[]]
    ),
    contractAddress: AnyAddressSchema,
  }),
});

const PolygonIDGuildRewardSchema = z.object({
  platformName: z.literal("POLYGON_ID"),
});

const PointsGuildRewardSchema = z.object({
  platformName: z.literal("POINTS"),
  platformGuildData: z
    .object({
      name: z.string().optional(),
      imageUrl: z.string().optional(),
    })
    .default({}),
});

const PoapGuildRewardSchema = z.object({
  platformName: z.literal("POAP"),
  platformGuildData: z.object({
    fancyId: z.string(),
    eventId: z.number(),
    name: z.string().optional(),
    imageUrl: z.string().optional(),
  }),
});

const FormGuildRewardSchema = z.object({
  platformName: z.literal("FORM"),
  platformGuildData: z.object({
    formId: z.number(),
  }),
});

const GatherTownGuildRewardSchema = z.object({
  platformName: z.literal("GATHER_TOWN"),
  platformGuildData: z.object({
    name: z.string(),
    gatherSpaceId: z.string(),
    gatherApiKey: z.string(),
    gatherAffiliation: z.string(),
    gatherRole: z.string(),
  }),
});

const ERC20GuildRewardSchema = z.object({
  platformName: z.literal("ERC20"),
  platformGuildData: z.object({
    poolId: z.number(),
    chain: ChainSchema.extract([
      "BASE_MAINNET",
      "BSC",
      "MANTLE",
      "OPTIMISM",
      "POLYGON",
      "SEPOLIA",
    ]),
    contractAddress: EvmAddressSchema,
    name: z.string(),
    imageUrl: z.string(),
    description: z.string(),
    tokenAddress: EvmAddressSchema,
  }),
});

const BasicGuildRewardSchema = z
  .discriminatedUnion("platformName", [
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
    ERC20GuildRewardSchema,
  ])
  .and(
    z.object({
      platformGuildId: z
        .string()
        .transform((value) =>
          value.includes("/") ? encodeURIComponent(value) : value
        ),
    })
  );

export const GuildRewardSchema = BasicGuildRewardSchema.and(
  z.object({
    // We'll probably deprecate this, left here to support older platforms too
    platformGuildName: z.string().optional(),
    // We only append the invite for the Discord reward in our DB in case there's no specified `platformGuildData.invite`
    invite: z.string().optional(),
    // In some cases we'll fetch the platform's name request-time, in that case it'll be added here
    name: z.string().optional(),
  })
);

export const GuildRewardCreationSchema = BasicGuildRewardSchema.and(
  z.object({
    roleIds: z.array(z.number().int().positive()).optional(),
  })
);

// TODO: handle validation inside the controller later
export const GuildRewardUpdateSchema = z
  .object({
    platformGuildData: z.any(),
  })
  .refine(...nonEmptyRefine(ErrorMessages.REQUIRED_PLATFORM_GUILD_DATA));
