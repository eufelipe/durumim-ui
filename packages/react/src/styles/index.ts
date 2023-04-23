import { createStitches, defaultThemeMap } from "@stitches/react";

import { colors } from "@durumim-ui/colors";
import {
  breakpoints,
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  transitions,
  zIndices,
} from "@durumim-ui/tokens";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },

  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    sizes,
    space,
    radii,
    shadows,
    zIndices,
    transitions,
    breakpoints,
  },
});
