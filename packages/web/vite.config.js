import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin()
  ],
  resolve: {
    alias: {
      '@durumim-ui/core': path.resolve(__dirname, '../core/src'),
      '@durumim-ui/design-tokens': path.resolve(__dirname, '../design-tokens/src'),
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.css', '.css.ts']
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
}); 