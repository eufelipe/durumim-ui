import { ComponentProps, ElementType } from "react";

import { css, styled } from "@/styles";

const styles = css({
  fontFamily: "$default",
  fontWeight: "$regular",
  lineHeight: "$shorter",
  color: "$gray100",
  margin: 0,
  size: "5xl",
});

export const Headline1 = styled("h1", styles);

export interface Headline1Props extends ComponentProps<typeof Headline1> {
  as?: ElementType;
}

Headline1.displayName = "Headline1";
