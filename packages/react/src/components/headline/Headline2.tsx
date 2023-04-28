import { ComponentProps, ElementType } from "react";

import { css, styled } from "@/styles";

const styles = css({
  fontFamily: "$default",
  fontWeight: "$bold",
  lineHeight: "$shorter",
  color: "$gray100",
  margin: 0,
  size: "4xl",
});

export const Headline2 = styled("h2", styles);

export interface Headline2Props extends ComponentProps<typeof Headline2> {
  as?: ElementType;
}

Headline2.displayName = "Headline2";
