import { z } from "zod";

export default z.object({
  type: z.enum(["GALAXY", "GALAXY_PARTICIPATION"]),
  data: z.object({
    galaxyId: z.string().min(1),
  }),
});
