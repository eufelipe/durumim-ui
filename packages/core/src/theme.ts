import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  space,
  breakpoints,
  zIndices,
} from '@durumim-ui/design-tokens';

import { buttonConfig } from './components/button/button';
import * as typography from './components/typography/typography';



export function getTheme() {
  return {
    // Tokens
    colors,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    radii,
    shadows,
    space,
    breakpoints,
    zIndices,

    // Componentes
    components: {
      button: buttonConfig,
      typography: {
        headings: typography.headingScales,
        text: typography.textScales,
        label: typography.labelStyle,
        caption: typography.captionStyle,
        overline: typography.overlineStyle,
        buttonText: typography.buttonTextStyle,
      },
    },
  };
}

export type DurumimTheme = ReturnType<typeof getTheme>; 