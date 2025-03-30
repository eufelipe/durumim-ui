/** @type { import('@storybook/react-vite').StorybookConfig } */
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

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
    config.plugins.push(vanillaExtractPlugin());

    return config;
  },
};

export default config;