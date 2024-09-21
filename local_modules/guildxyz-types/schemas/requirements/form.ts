import { z } from "zod";
import { nonEmptyRefine } from "../../utils";
import { AllowlistSchema } from "./allowlist";

const FormSubmissionDetailedAnswerSchema = z.object({
  fieldId: z.string(),
});

const FormSubmissionDetailedGeneralAnswerSchema =
  FormSubmissionDetailedAnswerSchema.extend({
    value: z.string().or(z.number()),
  }).strict();

const FormSubmissionDetailedRateAnswerSchema =
  FormSubmissionDetailedAnswerSchema.and(
    z
      .object({
        minAmount: z
          .number()
          .int()
          .positive()
          .or(z.string().pipe(z.coerce.number()))
          .optional(),
        maxAmount: z
          .number()
          .int()
          .positive()
          .or(z.string().pipe(z.coerce.number()))
          .optional(),
      })
      .refine(...nonEmptyRefine("Invalid value for minAmount/maxAmount"))
  );

const FormSubmissionDetailedMultipleChoiceAnswerSchema =
  FormSubmissionDetailedAnswerSchema.and(
    z
      .object({
        acceptedAnswers: z.array(z.string()).optional(),
        rejectedAnswers: z.array(z.string()).optional(),
      })
      .refine(
        ...nonEmptyRefine("Invalid value for acceptedAnswers/rejectedAnswers")
      )
  );

const FormSubmissionSchema = z.object({
  id: z.number().int().positive(),
  guildId: z.number().int().positive(),
  answers: z
    .array(
      z.union([
        FormSubmissionDetailedGeneralAnswerSchema,
        FormSubmissionDetailedRateAnswerSchema,
        FormSubmissionDetailedMultipleChoiceAnswerSchema,
      ])
    )
    .optional(),
});

export default [
  z.object({
    type: z.literal("FORM_SUBMISSION"),
    data: FormSubmissionSchema,
  }),
  z.object({
    type: z.literal("FORM_APPROVAL"),
    data: AllowlistSchema,
  }),
];
