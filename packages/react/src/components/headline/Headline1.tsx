import { ElementType } from "react";

import { CSSProps, css, styled } from "@durumim-ui/core";

const styles = css({
  fontFamily: "$default",
  fontWeight: "$regular",
  lineHeight: "$shorter",
  color: "$gray100",
  margin: 0,
  size: "5xl",
});

const Headline1Component = styled("h1", styles);

export interface Headline1Props extends CSSProps {
  as?: ElementType;
}
export const Headline1: React.FC<Headline1Props> = ({ as, ...props }) => {
  return <Headline1Component as={as} {...props} />;
};

Headline1.displayName = "Headline1";
