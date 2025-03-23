import type { Options } from "tsup";
import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

const config: Options = {
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: false,
  clean: true,
  format: ["cjs", "esm"],
  dts: true,
  external: ["react", "react-dom"],
  esbuildPlugins: [vanillaExtractPlugin()],
};

export default defineConfig(config);