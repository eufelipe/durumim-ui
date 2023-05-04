import type { Options } from "tsup";
import { defineConfig } from "tsup";

const config: Options = {
  entry: ["src/index.tsx"],
  splitting: false,
  sourcemap: false,
  clean: true,
  format: ["cjs", "esm"],
  dts: true,
  external: ["react", "react-dom"],
};

export default defineConfig(config);
