// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, test } from "vitest";
import { ZodType, z } from "zod";

export default function testZodSchema<
  Schema extends ZodType<any, any, any>,
  Input extends z.input<Schema>,
  Output extends z.output<Schema>,
>({
  name,
  schema,
  shouldFail,
  shouldPass,
  expectedOutput,
}: {
  name: string;
  schema: Schema;
  shouldPass: Input[];
  shouldFail: unknown[];
  expectedOutput?: Output[];
}) {
  describe(`${name} schema`, () => {
    describe("Should fail", () => {
      test.each(shouldFail)("Case %#", (input) =>
        expect(() => schema.parse(input)).toThrow()
      );
    });

    describe("Should pass", () => {
      test.each(shouldPass.map((input, index) => [input, index]))(
        "Case %#",
        (input, index) => {
          const output = schema.parse(input);

          expect(output).toBeTruthy();

          if (expectedOutput?.[index]) {
            expect(output).toEqual(expectedOutput[index]);
          }
        }
      );
    });
  });
}
