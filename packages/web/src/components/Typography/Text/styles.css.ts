import { style, styleVariants } from '@vanilla-extract/css';

import { textScales } from '@durumim-ui/core';

const baseTextStyle = style({
  margin: 0,
  padding: 0,
});

export const boldTextStyle = style({
  fontWeight: '700 !important',
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