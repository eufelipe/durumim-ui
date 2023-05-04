import { ElementType } from "react";

import { CSSProps, css, styled } from "@durumim-ui/core";

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

const TitleComponent = styled("h2", styles);

export interface TitleProps extends CSSProps {
  as?: ElementType;
}
export const Title: React.FC<TitleProps> = ({ as, ...props }) => {
  return <TitleComponent as={as} {...props} />;
};

Title.displayName = "Title";
