import { ComponentProps, ElementType } from "react";

import { styled } from "../../styles";

export const Headline = styled("h2", {
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

export interface HeadlineProps extends ComponentProps<typeof Headline> {
  as?: ElementType;
}

Headline.displayName = "Headline";
