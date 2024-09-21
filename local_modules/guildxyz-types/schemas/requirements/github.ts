import { z } from "zod";

const GithubStarringSchema = z.object({
  type: z.literal("GITHUB_STARRING"),
  data: z.object({
    id: z.string().url(),
  }),
});

const GithubAccountAgeSchema = z.object({
  type: z.enum(["GITHUB_ACCOUNT_AGE", "GITHUB_ACCOUNT_AGE_RELATIVE"]),
  data: z
    .object({
      minAmount: z.number().int().positive().optional(),
      maxAmount: z.number().int().positive().optional(),
    })
    .default({}),
});

const GithubCommitCountSchema = z.object({
  type: z.enum(["GITHUB_COMMIT_COUNT", "GITHUB_COMMIT_COUNT_RELATIVE"]),
  data: z.object({
    id: z.number().int().positive(),
    minAmount: z.number().int().positive().optional(),
    maxAmount: z.number().int().positive().optional(),
  }),
});

export default [
  GithubStarringSchema,
  GithubAccountAgeSchema,
  GithubCommitCountSchema,
];
