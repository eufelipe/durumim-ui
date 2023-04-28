import { ComponentProps, ElementType } from "react";

import { css, styled } from "@/styles";

const styles = css({
  fontFamily: "$default",
  fontWeight: "$regular",
  lineHeight: "$shorter",
  color: "$gray100",
  margin: 0,
  size: "3xl",
});

export const Headline3 = styled("h3", styles);

export interface Headline3Props extends ComponentProps<typeof Headline3> {
  as?: ElementType;
}

Headline3.displayName = "Headline3";
