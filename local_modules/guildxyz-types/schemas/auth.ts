import { z } from "zod";
import { AuthMethod } from "../consts";
import { AnyAddressSchema } from "./common";

export const AuthenticationParamsSchema = z
  .object({
    addr: AnyAddressSchema,
    nonce: z.string(),
    msg: z.string(),
    ts: z.string(),
    hash: z.string().optional(),
  })
  .and(
    z.union([
      z.object({
        chainId: z.string(),
        method: z.literal(AuthMethod.EIP1271),
      }),
      z.object({
        method: z.literal(AuthMethod.EOA),
      }),
      z.object({
        method: z.literal(AuthMethod.KeyPair),
      }),
    ])
  );

export const AuthenticationSchema = z.object({
  params: AuthenticationParamsSchema,
  sig: z.string(),
});
