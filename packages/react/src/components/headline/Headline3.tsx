import { ElementType } from "react";

import { CSSProps, css, styled } from "@durumim-ui/core";

const styles = css({
  fontFamily: "$default",
  fontWeight: "$regular",
  lineHeight: "$shorter",
  color: "$gray100",
  margin: 0,
  size: "3xl",
});

const Headline3Component = styled("h3", styles);

export interface Headline3Props extends CSSProps {
  as?: ElementType;
}
export const Headline3: React.FC<Headline3Props> = ({ as, ...props }) => {
  return <Headline3Component as={as} {...props} />;
};

Headline3.displayName = "Headline3";
