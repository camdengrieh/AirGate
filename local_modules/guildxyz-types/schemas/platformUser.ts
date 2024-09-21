/* eslint-disable import/prefer-default-export */
import { z } from "zod";
import { PlatformNameSchema } from "./common";

export const PlatformUserCreationSchema = z.object({
  platformName: PlatformNameSchema,
  authData: z.any(), // TODO: This could be typed easily, as the diffferent OAuth payloads mostly look the same
  disconnectFromExistingUser: z.boolean().optional(),
});
