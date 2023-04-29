import { ComponentProps, ElementType } from "react";

import { css, styled } from "@/styles";

const styles = css({
  fontFamily: "$default",
  fontSize: "$lg",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
});

export const LeadParagraph = styled("h6", styles);

export interface LeadParagraphProps
  extends ComponentProps<typeof LeadParagraph> {
  as?: ElementType;
}

LeadParagraph.displayName = "LeadParagraph";
