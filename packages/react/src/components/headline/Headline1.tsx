import { ComponentProps, ElementType } from "react";

import { styled } from "../../styles";

export const Headline1 = styled("h1", {
  fontFamily: "$default",
  fontWeight: "$regular",
  lineHeight: "$shorter",
  color: "$gray100",
  margin: 0,
  size: "5xl",
});

export interface Headline1Props extends ComponentProps<typeof Headline1> {
  as?: ElementType;
}

Headline1.displayName = "Headline1";
