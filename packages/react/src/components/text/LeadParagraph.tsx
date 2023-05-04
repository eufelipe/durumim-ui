import { ElementType } from "react";

import { CSSProps, css, styled } from "@durumim-ui/core";

const styles = css({
  fontFamily: "$default",
  fontSize: "$lg",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
});

const LeadParagraphComponent = styled("p", styles);

export interface LeadParagraphProps extends CSSProps {
  as?: ElementType;
}
export const LeadParagraph: React.FC<LeadParagraphProps> = ({
  as,
  ...props
}) => {
  return <LeadParagraphComponent as={as} {...props} />;
};

LeadParagraph.displayName = "LeadParagraph";
