import { z } from "zod";

const FarcasterLikeOrRecast = z.object({
  type: z.enum(["FARCASTER_LIKE", "FARCASTER_RECAST"]),
  data: z
    .object({
      hash: z.string().min(1),
      url: z.undefined(),
    })
    .or(
      z.object({
        url: z.string().url(),
        hash: z.undefined(),
      })
    ),

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

const FarcasterFollow = z.object({
  type: z.enum(["FARCASTER_FOLLOW", "FARCASTER_FOLLOWED_BY"]),
  data: z.object({
    id: z.number(),
  }),
});

const FarcasterStringId = z.object({
  type: z.enum([
    "FARCASTER_FOLLOW_CHANNEL",
    "FARCASTER_USERNAME",
    "FARCASTER_BIO",
  ]),
  data: z.object({
    id: z.string().min(1),
  }),
});

const FarcasterTotalFollowers = z.object({
  type: z.literal("FARCASTER_TOTAL_FOLLOWERS"),
  data: z.object({
    min: z.number().int(),
  }),
});

const FarcasterProfile = z.object({
  type: z.literal("FARCASTER_PROFILE"),
  data: z.object({}).default({}),
});

export default [
  FarcasterProfile,
  FarcasterFollow,
  FarcasterLikeOrRecast,
  FarcasterTotalFollowers,
  FarcasterStringId,
];
