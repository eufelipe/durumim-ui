import { ElementType } from "react";

import { CSSProps, css, styled } from "@durumim-ui/core";

const styles = css({
  fontFamily: "$default",
  fontWeight: "$bold",
  lineHeight: "$shorter",
  color: "$gray100",
  margin: 0,
  size: "4xl",
});

const Headline2Component = styled("h2", styles);

export interface Headline2Props extends CSSProps {
  as?: ElementType;
}
export const Headline2: React.FC<Headline2Props> = ({ as, ...props }) => {
  return <Headline2Component as={as} {...props} />;
};

Headline2.displayName = "Headline2";
