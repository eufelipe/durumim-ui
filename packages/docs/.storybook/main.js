/** @type { import('@storybook/react-vite').StorybookConfig } */
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins || [];
    config.plugins.push(vanillaExtractPlugin({
      identifiers: 'debug'
    }));

    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@durumim-ui/web': path.resolve(__dirname, '../../web/src'),
      '@durumim-ui/core': path.resolve(__dirname, '../../core/src'),
      '@durumim-ui/design-tokens': path.resolve(__dirname, '../../design-tokens/src'),
    };

    config.optimizeDeps = {
      ...config.optimizeDeps,
      exclude: ['@vanilla-extract/css', '@vanilla-extract/recipes', '@vanilla-extract/sprinkles']
    };

    return config;
  },
};

export default config;