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

export const Headline4 = styled("h4", styles);

export interface Headline4Props extends ComponentProps<typeof Headline4> {
  as?: ElementType;
}

Headline4.displayName = "Headline4";
