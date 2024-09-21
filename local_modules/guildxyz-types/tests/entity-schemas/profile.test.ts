import { z } from "zod";
import {
  ProfileCreationSchema,
  ProfileSchema,
  ProfileUpdateSchema,
} from "../../schemas";
import testZodSchema from "../utils";

const createdAt = new Date();
const updatedAt = new Date();

const shouldFail = [
  // not all required fields
  { username: "Tomi_Ohl" },
  // bad backgroundImageUrl
  {
    username: "Tomi_Ohl",
    userId: 79,
    backgroundImageUrl: "randomString",
    referrerUserId: 1,
    createdAt,
    updatedAt,
  },
];

const shouldPass: [
  z.input<typeof ProfileSchema>,
  z.output<typeof ProfileSchema>,
][] = [
  // Complete input
  [
    {
      username: "Tomi_Ohl",
      userId: 79,
      referrerUserId: 1,
      createdAt,
      updatedAt,
    },
    {
      username: "Tomi_Ohl",
      userId: 79,
      referrerUserId: 1,
      createdAt,
      updatedAt,
    },
  ],
  // Customization
  [
    {
      username: "eiffel65",
      userId: 65,
      backgroundImageUrl: "#0000ff",
      referrerUserId: 1,
      createdAt,
      updatedAt,
    },
    {
      username: "eiffel65",
      userId: 65,
      backgroundImageUrl: "#0000ff",
      referrerUserId: 1,
      createdAt,
      updatedAt,
    },
  ],
  [
    {
      username: "Tomi_Ohl",
      userId: 79,
      name: "Tomi Underscore Ohl",
      bio: "A long bio",
      profileImageUrl: "https://cdn.rios.hu/dl/faces/m19.gif",
      backgroundImageUrl: "https://cdn.rios.hu/dl/faces/m19.gif",
      referrerUserId: 1,
      createdAt,
      updatedAt,
    },
    {
      username: "Tomi_Ohl",
      userId: 79,
      name: "Tomi Underscore Ohl",
      bio: "A long bio",
      profileImageUrl: "https://cdn.rios.hu/dl/faces/m19.gif",
      backgroundImageUrl: "https://cdn.rios.hu/dl/faces/m19.gif",
      referrerUserId: 1,
      createdAt,
      updatedAt,
    },
  ],
];

testZodSchema({
  name: "Profile entity",
  schema: ProfileSchema,
  shouldFail,
  shouldPass: shouldPass.map(([_]) => _),
  expectedOutput: shouldPass.map(([, _]) => _),
});

testZodSchema({
  name: "Profile entity creation",
  schema: ProfileCreationSchema,
  shouldFail: [{}],
  shouldPass: [
    { username: "Tomi_Ohl", referrerUserId: 1 },
    { username: "valid", backgroundImageUrl: "#456525", referrerUserId: 1 },
    {
      username: "bruno",
      backgroundImageUrl: "https://www.usebruno.com/images/team/bruno.png",
      referrerUserId: 1,
    },
  ],
});

testZodSchema({
  name: "Profile entity update",
  schema: ProfileUpdateSchema,
  shouldFail: [{ backgroundImageUrl: "random string" }],
  shouldPass: [
    {},
    { backgroundImageUrl: "https://www.usebruno.com/images/team/bruno.png" },
  ],
});
