import { ComponentProps, ElementType } from "react";

import { styled } from "@/styles";

export const Headline4 = styled("h4", {
  fontFamily: "$default",
  fontWeight: "$medium",
  lineHeight: "$shorter",
  color: "$gray100",
  margin: 0,
  size: "2xl",
});

export interface Headline4Props extends ComponentProps<typeof Headline4> {
  as?: ElementType;
}

Headline4.displayName = "Headline4";
