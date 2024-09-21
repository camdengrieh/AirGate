import { z } from "zod";

export default z.object({
  type: z.literal("WEB3INBOX_SUBSCRIBERS"),
  data: z.object({
    app: z.enum(["GUILD", "WEB3INBOX", "SHEFI"]),
  }),
});
