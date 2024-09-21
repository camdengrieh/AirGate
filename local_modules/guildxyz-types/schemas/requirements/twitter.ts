import { z } from "zod";

const TwitterBasicSchema = z.object({
  type: z.enum([
    "TWITTER_FOLLOW",
    "TWITTER_FOLLOWED_BY",
    "TWITTER_NAME",
    "TWITTER_BIO",
    "TWITTER_LIKE",
    "TWITTER_RETWEET",
    "TWITTER_LIST_MEMBER",
    "TWITTER_LIST_FOLLOW",
  ]),
  data: z.object({
    id: z.string().trim().min(1),
  }),
});

const TwitterCountSchema = z.object({
  type: z.enum([
    "TWITTER_FOLLOWER_COUNT",
    "TWITTER_FOLLOWING_COUNT",
    "TWITTER_TWEET_COUNT",
    "TWITTER_LIKE_COUNT",
  ]),
  data: z.object({
    minAmount: z.number().int().positive(),
  }),
});

const TwitterAccountAgeSchema = z.object({
  type: z.enum(["TWITTER_ACCOUNT_AGE_RELATIVE", "TWITTER_ACCOUNT_AGE"]),
  data: z.object({
    minAmount: z.number().int().positive(),
    fromNow: z.boolean().optional(),
  }),
});

const TwitterAccountVerifiedSchema = z.object({
  type: z.literal("TWITTER_ACCOUNT_VERIFIED"),
  data: z.object({
    id: z.enum(["any", "blue", "business", "government"]),
  }),
});

const TwitterAccountProtectedSchema = z.object({
  type: z.literal("TWITTER_ACCOUNT_PROTECTED"),
  data: z.object({}).default({}),
});

const TwitterV2Schema = z.object({
  type: z.enum([
    "TWITTER_FOLLOW_V2",
    "TWITTER_LIKE_V2",
    "TWITTER_RETWEET_V2",
    "LINK_VISIT",
  ]),
  data: z.object({
    id: z.string().trim().min(1),
    maxAmount: z.number().optional(),
  }),
});

export default [
  TwitterBasicSchema,
  TwitterCountSchema,
  TwitterAccountAgeSchema,
  TwitterAccountVerifiedSchema,
  TwitterAccountProtectedSchema,
  TwitterV2Schema,
];
