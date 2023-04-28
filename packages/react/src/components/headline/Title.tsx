import { ComponentProps, ElementType } from "react";

import { css, styled } from "@/styles";

const styles = css({
  fontFamily: "$default",
  lineHeight: "$shorter",
  color: "$gray100",
  margin: 0,

  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$3xl" },
      xl: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export const Title = styled("h2", styles);

export interface TitleProps extends ComponentProps<typeof Title> {
  as?: ElementType;
}

Title.displayName = "Title";
