import { z } from "zod";

export default [
  z.object({
    type: z.literal("LENS_PROFILE"),
    data: z.object({}).default({}),
  }),
  z.object({
    type: z.enum(["LENS_TOTAL_POSTS", "LENS_TOTAL_FOLLOWERS"]),
    data: z.object({
      min: z.number().int(),
    }),
  }),
  z.object({
    type: z.enum(["LENS_FOLLOWED_BY", "LENS_FOLLOW", "LENS_COLLECT"]),
    data: z.object({
      id: z.string().min(1),
    }),
  }),
  z.object({
    type: z.literal("LENS_REACT"),
    data: z.object({
      id: z.string().min(1),
      reaction: z.enum(["ANY", "UPVOTE", "DOWNVOTE"]),
    }),
  }),
  z.object({
    type: z.literal("LENS_ACTION"),
    data: z.object({
      id: z.string().min(1),
      action: z.enum(["MIRROR", "QUOTE", "COMMENT"]),
      publishedOn: z.string().min(1).optional(),
    }),
  }),
];
