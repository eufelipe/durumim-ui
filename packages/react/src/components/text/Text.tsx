import { ElementType } from "react";

import { CSSProps, css, styled } from "@durumim-ui/core";

const styles = css({
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",

  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

const TextComponent = styled("p", styles);

export interface TextProps extends CSSProps {
  as?: ElementType;
}
export const Text: React.FC<TextProps> = ({ as, ...props }) => {
  return <TextComponent as={as} {...props} />;
};

Text.displayName = "Text";
