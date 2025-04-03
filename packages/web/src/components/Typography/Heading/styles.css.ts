import { style, styleVariants } from '@vanilla-extract/css';

import { headingScales, textScales } from '@durumim-ui/core';

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


const baseTextStyle = style({
  margin: 0,
  padding: 0,
});


export const boldTextStyle = style({
  fontWeight: 'bold',
});


export const textStyles = styleVariants({
  lead: [
    baseTextStyle,
    {
      fontSize: textScales.lead.fontSize,
      fontWeight: String(textScales.lead.fontWeight),
      lineHeight: String(textScales.lead.lineHeight),
      fontFamily: textScales.lead.fontFamily,
    },
  ],
  big: [
    baseTextStyle,
    {
      fontSize: textScales.big.fontSize,
      fontWeight: String(textScales.big.fontWeight),
      lineHeight: String(textScales.big.lineHeight),
      fontFamily: textScales.big.fontFamily,
    },
  ],
  body: [
    baseTextStyle,
    {
      fontSize: textScales.body.fontSize,
      fontWeight: String(textScales.body.fontWeight),
      lineHeight: String(textScales.body.lineHeight),
      fontFamily: textScales.body.fontFamily,
    },
  ],
  medium: [
    baseTextStyle,
    {
      fontSize: textScales.medium.fontSize,
      fontWeight: String(textScales.medium.fontWeight),
      lineHeight: String(textScales.medium.lineHeight),
      fontFamily: textScales.medium.fontFamily,
    },
  ],
  small: [
    baseTextStyle,
    {
      fontSize: textScales.small.fontSize,
      fontWeight: String(textScales.small.fontWeight),
      lineHeight: String(textScales.small.lineHeight),
      fontFamily: textScales.small.fontFamily,
    },
  ],
  tiny: [
    baseTextStyle,
    {
      fontSize: textScales.tiny.fontSize,
      fontWeight: String(textScales.tiny.fontWeight),
      lineHeight: String(textScales.tiny.lineHeight),
      fontFamily: textScales.tiny.fontFamily,
    },
  ],
}); 