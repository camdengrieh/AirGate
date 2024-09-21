import { randomBytes } from "crypto";
import { Schemas } from "../../types";

const shouldFail = [
  {
    type: "FORM_SUBMISSION",
    data: {
      id: -1,
      guildId: 1985,
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 1,
      guildId: "cookie",
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 1,
      guildId: 1985,
      answers: [
        {
          fieldId: "e8c9fe79-a502-4ce8-905e-b14617b7056e",
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 1,
      guildId: 1985,
      answers: [
        {
          fieldId: "e8c9fe79-a502-4ce8-905e-b14617b7056e",
          value: {},
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 1,
      guildId: 1985,
      answers: [
        {
          fieldId: "e8c9fe79-a502-4ce8-905e-b14617b7056e",
          value: true,
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 5,
      guildId: 15095,
      answers: [
        {
          fieldId: "e8c9fe79-a502-4ce8-905e-b14617b7056e",
          minAmount: 8,
          maxAmount: "ten",
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 5,
      guildId: 15095,
      answers: [
        {
          fieldId: "bbd8b220-2210-4483-bdac-533622b4cc70",
          acceptedAnswers: [15, 25],
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 5,
      guildId: 15095,
      answers: [
        {
          fieldId: "bbd8b220-2210-4483-bdac-533622b4cc70",
          rejectedAnswers: [39],
        },
      ],
    },
  },
  { type: "FORM_APPROVAL", data: { addresses: [`0x00`] } },
];

const shouldPass: Schemas["RequirementCreationPayload"][] = [
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 1,
      guildId: 1985,
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 1,
      guildId: 1985,
      answers: [
        {
          fieldId: "e8c9fe79-a502-4ce8-905e-b14617b7056e",
          value: "asd",
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 1,
      guildId: 1985,
      answers: [
        {
          fieldId: "7cdb4bb4-3656-4019-ae1a-1bd6ee818cc8",
          value:
            "let's make this longer a bit, but afaik this is only a ui-thing",
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 1,
      guildId: 1985,
      answers: [
        {
          fieldId: "e8c9fe79-a502-4ce8-905e-b14617b7056e",
          value: "15",
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 1,
      guildId: 1985,
      answers: [
        {
          fieldId: "e8c9fe79-a502-4ce8-905e-b14617b7056e",
          value: "15",
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 5,
      guildId: 15095,
      answers: [
        {
          fieldId: "e8c9fe79-a502-4ce8-905e-b14617b7056e",
          minAmount: 8,
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 5,
      guildId: 15095,
      answers: [
        {
          fieldId: "e8c9fe79-a502-4ce8-905e-b14617b7056e",
          maxAmount: 10,
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 5,
      guildId: 15095,
      answers: [
        {
          fieldId: "e8c9fe79-a502-4ce8-905e-b14617b7056e",
          minAmount: 8,
          maxAmount: 10,
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 5,
      guildId: 15095,
      answers: [
        {
          fieldId: "e8c9fe79-a502-4ce8-905e-b14617b7056e",
          minAmount: "8",
          maxAmount: "110",
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 5,
      guildId: 15095,
      answers: [
        {
          fieldId: "e8c9fe79-a502-4ce8-905e-b14617b7056e",
          value: "8", // fallback case, not sure if we should allow this
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 5,
      guildId: 15095,
      answers: [
        {
          fieldId: "bbd8b220-2210-4483-bdac-533622b4cc70",
          acceptedAnswers: ["grape", "pear"],
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 5,
      guildId: 15095,
      answers: [
        {
          fieldId: "bbd8b220-2210-4483-bdac-533622b4cc70",
          rejectedAnswers: ["apple"],
        },
      ],
    },
  },
  {
    type: "FORM_SUBMISSION",
    data: {
      id: 5,
      guildId: 15095,
      answers: [
        {
          fieldId: "bbd8b220-2210-4483-bdac-533622b4cc70",
          acceptedAnswers: ["grape", "pear"],
          rejectedAnswers: ["apple"],
        },
      ],
    },
  },
  {
    type: "FORM_APPROVAL",
    data: { addresses: [`0x${randomBytes(20).toString("hex")}`] },
  },
];

export default {
  name: "Form",
  shouldPass,
  shouldFail,
};
