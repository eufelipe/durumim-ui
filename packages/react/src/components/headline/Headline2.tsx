import { ComponentProps, ElementType } from "react";

import { styled } from "@/styles";

export const Headline2 = styled("h2", {
  fontFamily: "$default",
  fontWeight: "$bold",
  lineHeight: "$shorter",
  color: "$gray100",
  margin: 0,
  size: "4xl",
});

export interface Headline2Props extends ComponentProps<typeof Headline2> {
  as?: ElementType;
}

Headline2.displayName = "Headline2";
