import { ComponentProps, ElementType } from "react";

import { styled } from "@/styles";

export const Headline3 = styled("h3", {
  fontFamily: "$default",
  fontWeight: "$regular",
  lineHeight: "$shorter",
  color: "$gray100",
  margin: 0,
  size: "3xl",
});

export interface Headline3Props extends ComponentProps<typeof Headline3> {
  as?: ElementType;
}

Headline3.displayName = "Headline3";
