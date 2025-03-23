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
      '@durumim-ui/web': path.resolve(__dirname, '../web/src'),
      '@durumim-ui/design-tokens': path.resolve(__dirname, '../design-tokens/src'),
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
});