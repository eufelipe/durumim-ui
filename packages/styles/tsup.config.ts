import type { Options } from "tsup";
import { defineConfig } from "tsup";

const config: Options = {
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: false,
  clean: true,
  format: ["cjs", "esm"],
  dts: true,
};

export default defineConfig(config);