import { z } from "zod";
import { ChainSchema } from "../common";

export default [
  z.object({
    type: z.enum([
      "SNAPSHOT_FOLLOW",
      "SNAPSHOT_SPACE_ADMIN",
      "SNAPSHOT_SPACE_AUTHOR",
    ]),
    data: z.object({
      space: z.string().min(1),
    }),
  }),
  z.object({
    type: z.literal("SNAPSHOT_FOLLOW_SINCE"),
    data: z.object({
      space: z.string().min(1),
      since: z.number(),
    }),
  }),
  z.object({
    type: z.literal("SNAPSHOT_USER_SINCE"),
    data: z.object({
      since: z.number(),
    }),
  }),
  z.object({
    type: z.literal("SNAPSHOT_MAJORITY_VOTES"),
    data: z.object({
      minRatio: z.number().min(0).max(1),
    }),
  }),
  z.object({
    type: z.literal("SNAPSHOT_VOTES"),
    data: z.object({
      minAmount: z.number().min(1),
      space: z.string().min(1).optional(),
      proposal: z.string().min(1).optional(),
    }),
  }),
  z.object({
    type: z.literal("SNAPSHOT_PROPOSALS"),
    data: z.object({
      minAmount: z.number().min(1),
      space: z.string().min(1).optional(),
      state: z.enum(["active", "pending", "closed"]).optional(),
      successfulOnly: z.boolean().optional(),
    }),
  }),

  z.object({
    type: z.literal("SNAPSHOT_STRATEGY"),
    chain: ChainSchema,
    data: z.object({
      block: z.number().or(z.literal("latest")),
      strategies: z.array(
        z.object({
          name: z.string().min(1),
          params: z.any().optional(),
        })
      ),
      space: z.string().min(1).optional(),
    }),
  }),
];
