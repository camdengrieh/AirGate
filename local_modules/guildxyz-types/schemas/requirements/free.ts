import { z } from "zod";

export default z.object({
  type: z.literal("FREE"),
  data: z.object({}).default({}),
});
