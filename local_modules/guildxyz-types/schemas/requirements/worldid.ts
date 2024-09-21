import { z } from "zod";

export default z.object({
  type: z.literal("WORLD_ID_VERIFICATION"),
  data: z.object({
    verificationLevel: z.enum(["device", "orb"]),
  }),
});
