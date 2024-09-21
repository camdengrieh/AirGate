import { randomBytes } from "crypto";
import { describe, expect, test } from "vitest";
import { AuthMethod } from "../consts";
import { AuthenticationParamsSchema } from "../schemas";
import { Authentication } from "../types";

const randomAddress = `0x${randomBytes(20).toString("hex")}`.toUpperCase();

describe("Auth params schema", () => {
  test("it lowercases address", () => {
    const params: Authentication["params"] = {
      method: AuthMethod.EOA,
      addr: randomAddress,
      msg: "some_msg",
      nonce: randomBytes(32).toString("base64"),
      ts: `${Date.now()}`,
      hash: "some_hash",
    };

    const res = AuthenticationParamsSchema.parse(params);
    expect(res.addr).toEqual(randomAddress.toLowerCase());
  });
});
