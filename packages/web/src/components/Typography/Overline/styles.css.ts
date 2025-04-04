import { style } from '@vanilla-extract/css';

import { overlineStyle } from '@durumim-ui/core';

export const baseOverlineStyle = style({
  margin: 0,
  padding: 0,
  fontSize: overlineStyle.fontSize,
  fontWeight: String(overlineStyle.fontWeight),
  lineHeight: String(overlineStyle.lineHeight),
  letterSpacing: overlineStyle.letterSpacing,
  textTransform: overlineStyle.textTransform,
  fontFamily: overlineStyle.fontFamily,
}); 