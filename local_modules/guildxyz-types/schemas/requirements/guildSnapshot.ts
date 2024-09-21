import { z } from "zod";
import { PositiveInteger } from "../common";

const Snapshot = z.array(
  z.object({
    key: z.string().min(1).toLowerCase(),
    value: z.number(),
  })
);

const SnapshotRequirementData = z
  .object({
    snapshot: Snapshot.default([]),
    fileId: z.string().min(1).optional(),
    isHidden: z.boolean().default(false),
    guildPlatformId: PositiveInteger.optional(),
  })
  .default({});

const AddressSnapshot = z.object({
  type: z.literal("GUILD_SNAPSHOT"),
  data: SnapshotRequirementData,
});

export default [AddressSnapshot];
