import { style } from '@vanilla-extract/css';

import { captionStyle } from '@durumim-ui/core';

export const baseCaptionStyle = style({
  margin: 0,
  padding: 0,
  fontSize: captionStyle.fontSize,
  fontWeight: String(captionStyle.fontWeight),
  lineHeight: String(captionStyle.lineHeight),
  fontFamily: captionStyle.fontFamily,
}); 