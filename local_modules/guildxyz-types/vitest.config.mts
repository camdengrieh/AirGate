/// <reference types="vitest" />
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    testTimeout: 10000,
    pool: "forks",
  },
});
