import { ElementType } from "react";

import { CSSProps, css, styled } from "@durumim-ui/core";

const styles = css({
  fontFamily: "$default",
  fontSize: "$md",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
});

const ParagraphComponent = styled("p", styles);

export interface ParagraphProps extends CSSProps {
  as?: ElementType;
}
export const Paragraph: React.FC<ParagraphProps> = ({ as, ...props }) => {
  return <ParagraphComponent as={as} {...props} />;
};

Paragraph.displayName = "Paragraph";
