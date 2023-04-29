import { ComponentProps, ElementType } from "react";

import { css, styled } from "@/styles";

const styles = css({
  fontFamily: "$default",
  fontSize: "$md",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
});

export const Paragraph = styled("p", styles);

export interface ParagraphProps extends ComponentProps<typeof Paragraph> {
  as?: ElementType;
}

Paragraph.displayName = "Paragraph";
