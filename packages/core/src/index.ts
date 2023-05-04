import { createStitches, defaultThemeMap } from "@stitches/react";

import type { CSS } from "@stitches/react";

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

const stitches = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
    opacity: "opacity",
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

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = stitches;

export type StitchesInstance = typeof stitches;
export type CSSProps = CSS<StitchesInstance>;
