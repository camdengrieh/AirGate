import { z } from "zod";

const FieldBaseSchema = z.object({
  id: z.string().uuid().optional(),
  question: z.string().min(1),
  isRequired: z.boolean().optional().default(false),
});

const TextAndNumberFieldSchema = FieldBaseSchema.extend({
  type: z.enum(["SHORT_TEXT", "LONG_TEXT", "NUMBER"]),
});

const OptionsSchema = z.object({
  options: z.array(z.string().or(z.number())),
});

const SingleAndMultipleChoiceFieldSchema = FieldBaseSchema.merge(
  OptionsSchema
).extend({
  type: z.enum(["SINGLE_CHOICE", "MULTIPLE_CHOICE"]),
  allowOther: z.boolean().optional().default(false),
});

const RateFieldSchema = FieldBaseSchema.merge(OptionsSchema).extend({
  type: z.enum(["RATE"]),
  worstLabel: z.string().optional(),
  bestLabel: z.string().optional(),
});

export const FieldCreationPayloadSchema = z.discriminatedUnion("type", [
  TextAndNumberFieldSchema,
  SingleAndMultipleChoiceFieldSchema,
  RateFieldSchema,
]);

export const FieldSchema = FieldCreationPayloadSchema.and(
  z.object({
    id: z.string().uuid().optional(),
  })
);

export const FormCreationPayloadSchema = z.object({
  name: z.string().min(1),
  description: z.string().max(250).optional(),
  isEditable: z.boolean().optional().default(false),
  fields: z.array(FieldCreationPayloadSchema),
});

export const FormSchema = FormCreationPayloadSchema.extend({
  id: z.number(),
  creatorUserId: z.number().nullable(),
  guildId: z.number(),
  fields: z.array(FieldSchema),
  submissionCount: z.number().optional(),
  createdAt: z.date().or(z.string()), // TODOb if we read from cache, the date will be string
  updatedAt: z.date().or(z.string()), // TODOb if we read from cache, the date will be string
}).nullable();

export const SubmissionCreationAnswerSchema = z.object({
  fieldId: z.string().uuid(),
  value: z
    .string()
    .or(z.number())
    .or(z.array(z.string().or(z.number())))
    .optional()
    .nullable()
    .transform((value) =>
      Array.isArray(value) ? JSON.stringify(value) : value
    ),
});

export const SubmissionAnswerSchema = SubmissionCreationAnswerSchema.extend({
  userSubmissionId: z.number(),
  value: z
    .string()
    .or(z.number())
    .optional()
    .nullable()
    .transform((value) => {
      if (!value) return undefined;
      let parsedValue = value;

      try {
        parsedValue = JSON.parse(value?.toString());
      } catch {
        /* empty */
      }

      return parsedValue;
    }),
});

export const UserSubmissionCreationSchema = z.object({
  submissionAnswers: z.array(SubmissionCreationAnswerSchema),
});

export const UserSubmissionSchema = z
  .object({
    id: z.number(),
    formId: z.number(),
    createdAt: z.date().or(z.string()), // TODOb if we read from cache, the date will be string
    submissionAnswers: z.array(SubmissionAnswerSchema),
  })
  .nullable();

export const UserSubmissionsSchema = z
  .array(
    z.object({
      userId: z.number(),
      formId: z.number(),
      platformUsers: z
        .array(
          z.object({
            platformId: z.number(),
            platformUserId: z.string(),
            username: z.string().nullable(),
          })
        )
        .default([]),
      addresses: z.array(z.string()),
      submittedAt: z.date(),
      submissionAnswers: z.array(SubmissionCreationAnswerSchema),
      isShared: z.boolean().nullable(),
    })
  )
  .default([]);
