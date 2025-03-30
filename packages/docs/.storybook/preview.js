/** @type { import('@storybook/react').Preview } */
import { fonts } from '@durumim-ui/design-tokens';
import { themes } from '@storybook/theming';

const fontMappings = {
  'default': 'Inter, sans-serif',
  'heading': 'Poppins, sans-serif',
  'mono': 'Roboto Mono, monospace'
};

Object.keys(fonts).forEach(key => {
  fonts[key] = fontMappings[key] || fonts[key];
});

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      theme: themes.dark,
      source: {
        state: 'closed',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#f8f8f8',
        },
        {
          name: 'dark',
          value: '#121212',
        },
      ],
    },
    options: {
      storySort: {
        order: ['Home', '*'],
      },
    },
    themes: {
      default: 'dark',
      clearable: false,
      list: [
        {
          name: 'Light',
          class: ['light-theme'],
          color: '#F8F8F8',
          default: false,
        },
        {
          name: 'Dark',
          class: ['dark-theme'],
          color: '#121212',
          default: true,
        },
      ],
    },
  }
};

export default preview;