import { z } from "zod";

export default z.object({
  type: z.enum(["POAP", "GITPOAP"]),
  data: z.object({
    id: z.string().min(1),
  }),
});
