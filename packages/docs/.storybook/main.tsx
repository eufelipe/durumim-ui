import { StorybookConfig } from "@storybook/react-vite/dist";

const config: StorybookConfig = {
  stories: ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    if (configType === "PRODUCTION") {
      config.base = "/durumim-ui/";
    }
    return config;
  },
  docs: {
    autodocs: true,
  },
};

export default config;
