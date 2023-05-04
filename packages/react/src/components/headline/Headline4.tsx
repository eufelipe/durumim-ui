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

const Headline4Component = styled("h4", styles);

export interface Headline4Props extends CSSProps {
  as?: ElementType;
}
export const Headline4: React.FC<Headline4Props> = ({ as, ...props }) => {
  return <Headline4Component as={as} {...props} />;
};

Headline4.displayName = "Headline4";
