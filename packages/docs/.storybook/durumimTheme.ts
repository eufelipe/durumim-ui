import { colors } from '@durumim-ui/colors'
import { create } from '@storybook/theming'

export default create({
  base: 'dark',

  colorPrimary: colors.primary,
  colorSecondary: colors.secondary,

  appBorderColor: colors.dark,
  appBorderRadius: 4,

  fontBase: 'Montserrat, sans-serif',
  fontCode: 'monospace',

  textColor: colors.white,
  textInverseColor: colors.stone,

  barTextColor: colors.success,
  barSelectedColor: colors.white,
  barBg: colors.stone,

  brandTitle: 'durumim UI',
  brandUrl: 'https://github.com/eufelipe/durumim-ui',
  brandImage:
    'https://res.cloudinary.com/eufelipe/image/upload/v1678545033/durumim/brand_vo366a.png',
  brandTarget: '_self',
})
