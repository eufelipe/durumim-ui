import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const durumimTheme = create({
  base: 'dark',
  brandTitle: 'durumim UI',
  brandUrl: 'https://github.com/eufelipe/durumim-ui',
  brandImage: 'https://res.cloudinary.com/eufelipe/image/upload/v1678545033/durumim/brand_vo366a.png',
  brandTarget: '_blank',
  colorPrimary: '#1f6d8c',
  colorSecondary: '#4ba695',
  appBg: '#1c1917',
  appContentBg: '#27272a',
  appBorderColor: '#2a655f',
  barTextColor: '#ffffff',
  barSelectedColor: '#4ba695',
  textColor: '#d5d5d5', 
  textInverseColor: '#000000',
  inputBg: '#27272a', 
  inputBorder: '#4d566a',
  inputTextColor: '#ffffff',
});

addons.setConfig({
  theme: durumimTheme,
});