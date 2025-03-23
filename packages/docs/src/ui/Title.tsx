import React from "react";

import { colors } from "@durumim-ui/design-tokens";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => (
  <h1 style={{ color: colors.secondary }}>{title}</h1>
);
