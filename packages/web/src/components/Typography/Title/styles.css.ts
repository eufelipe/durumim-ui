import { style } from '@vanilla-extract/css'; 

import { titleStyle } from '@durumim-ui/core';

export const baseTitleStyle = style({
  margin: 0,
  padding: 0,
  fontSize: titleStyle.fontSize,
  fontWeight: String(titleStyle.fontWeight),
  lineHeight: String(titleStyle.lineHeight),
  fontFamily: titleStyle.fontFamily,
}); 