import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({
      identifiers: 'debug'
    })
  ],
  resolve: {
    alias: {
      '@durumim-ui/web': path.resolve(__dirname, '../web/src'),
      '@durumim-ui/core': path.resolve(__dirname, '../core/src'),
      '@durumim-ui/design-tokens': path.resolve(__dirname, '../design-tokens/src'),
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.css', '.css.ts']
  },
  optimizeDeps: {
    exclude: ['@vanilla-extract/css', '@vanilla-extract/recipes', '@vanilla-extract/sprinkles']
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
});