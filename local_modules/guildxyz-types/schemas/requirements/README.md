# Requirement schemas

## Adding a new requirement schema

1. Under `schemas/requirements`, create a new file for the requirement

   - The file needs to have a single, default export:

   ```ts
   z.object({
     type: z.literal("ALLOWLIST"),
     data: YourSchema,
   });
   ```

   - Where `YourSchema` is the `zod` schema of the requirement's `data` field

2) In `schemas/requirements/index.ts`, import the new schema, and add it to the exported list

3) (Optional) If you want to write tests to make sure, the schema is correct for most at least the most common possible inputs, create a new file under `tests/requirement-schemas`. And add the file's imported valiue to the `tests/requirement-schemas/requirements.test.ts` file's array. The new file should have a single, default export:

   ```ts
   {
     name: "Allowlist", shouldPass, shouldFail, expectedOutput; // Optional
   }
   ```

   - `shouldPass` and `shouldFail` are both an array of objects, which are going to be fed to the schema. The objects in the formet array will be expected to pass validation, and objects in the latter array will be expected to fail validation
   - Optionally, you can also export a `expectedOutput` field, which should contain the same amount of objects as the `shouldPass` array, and if given, it will also test if the output of the passed `.parse` is deeply equal to the object on the corresponding index in this array
     > TODO: This could be simplified by just making the items in `shouldPass` be `z.input<YourSchema> | [z.input<YourSchema>, z.output<YourSchema>]`

4) That's it, running `npm test` should run the new cases, and the lib's exported requirement-relared schemas, and types should now contain the new requirement
