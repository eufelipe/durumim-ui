import { ComponentProps, ElementType } from "react";

import { css, styled } from "@/styles";

const styles = css({
  fontFamily: "$default",
  fontWeight: "$regular",
  lineHeight: "$shorter",
  color: "$gray100",
  margin: 0,
  size: "xl",
});

export const Headline5 = styled("h5", styles);

export interface Headline5Props extends ComponentProps<typeof Headline5> {
  as?: ElementType;
}

Headline5.displayName = "Headline5";
