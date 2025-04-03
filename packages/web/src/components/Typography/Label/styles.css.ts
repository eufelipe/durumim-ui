import { style } from '@vanilla-extract/css';

import { labelStyle } from '@durumim-ui/core';

export const baseLabelStyle = style({
  margin: 0,
  padding: 0,
  fontSize: labelStyle.fontSize,
  fontWeight: String(labelStyle.fontWeight),
  lineHeight: String(labelStyle.lineHeight),
  fontFamily: labelStyle.fontFamily,
}); 