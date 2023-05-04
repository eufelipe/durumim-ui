import { ElementType } from "react";

import { CSSProps, css, styled } from "@durumim-ui/core";

const styles = css({
  fontFamily: "$default",
  fontWeight: "$regular",
  lineHeight: "$shorter",
  color: "$gray100",
  margin: 0,
  size: "xl",
});

const Headline5Component = styled("h5", styles);

export interface Headline5Props extends CSSProps {
  as?: ElementType;
}
export const Headline5: React.FC<Headline5Props> = ({ as, ...props }) => {
  return <Headline5Component as={as} {...props} />;
};

Headline5.displayName = "Headline5";
