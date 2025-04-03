import { style, styleVariants } from '@vanilla-extract/css';

import { headingScales } from '@durumim-ui/core';

const baseHeadingStyle = style({
  margin: 0,
  padding: 0,
});

export const headingStyles = styleVariants({
  h1: [
    baseHeadingStyle,
    {
      fontSize: headingScales.h1.fontSize,
      fontWeight: String(headingScales.h1.fontWeight),
      lineHeight: String(headingScales.h1.lineHeight),
      fontFamily: headingScales.h1.fontFamily,
    },
  ],
  h2: [
    baseHeadingStyle,
    {
      fontSize: headingScales.h2.fontSize,
      fontWeight: String(headingScales.h2.fontWeight),
      lineHeight: String(headingScales.h2.lineHeight),
      fontFamily: headingScales.h2.fontFamily,
    },
  ],
  h3: [
    baseHeadingStyle,
    {
      fontSize: headingScales.h3.fontSize,
      fontWeight: String(headingScales.h3.fontWeight),
      lineHeight: String(headingScales.h3.lineHeight),
      fontFamily: headingScales.h3.fontFamily,
    },
  ],
  h4: [
    baseHeadingStyle,
    {
      fontSize: headingScales.h4.fontSize,
      fontWeight: String(headingScales.h4.fontWeight),
      lineHeight: String(headingScales.h4.lineHeight),
      fontFamily: headingScales.h4.fontFamily,
    },
  ],
  h5: [
    baseHeadingStyle,
    {
      fontSize: headingScales.h5.fontSize,
      fontWeight: String(headingScales.h5.fontWeight),
      lineHeight: String(headingScales.h5.lineHeight),
      fontFamily: headingScales.h5.fontFamily,
    },
  ],
}); 