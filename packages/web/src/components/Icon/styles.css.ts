import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { colors, iconSizes } from '@durumim-ui/design-tokens';

const baseIconStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'currentColor',
  flexShrink: 0,
  lineHeight: 1,
});

const sizeVariants = {
  xs: style({
    width: iconSizes.xs,
    height: iconSizes.xs,
    fontSize: iconSizes.xs,
  }),
  sm: style({
    width: iconSizes.sm,
    height: iconSizes.sm,
    fontSize: iconSizes.sm,
  }),
  md: style({
    width: iconSizes.md,
    height: iconSizes.md,
    fontSize: iconSizes.md,
  }),
  lg: style({
    width: iconSizes.lg,
    height: iconSizes.lg,
    fontSize: iconSizes.lg,
  }),
  xl: style({
    width: iconSizes.xl,
    height: iconSizes.xl,
    fontSize: iconSizes.xl,
  }),
};

const colorVariants = {
  inherit: style({}),
  primary: style({ color: colors.primary }),
  secondary: style({ color: colors.secondary }),
  accent: style({ color: colors.accent }),
  success: style({ color: colors.success }),
  error: style({ color: colors.danger }),
  danger: style({ color: colors.danger }),
  warning: style({ color: colors.warning }),
  info: style({ color: colors.info }),
  white: style({ color: colors.white }),
  light: style({ color: colors.light }),
  dark: style({ color: colors.dark }),
  black: style({ color: colors.black }),
};

export const iconRecipe = recipe({
  base: baseIconStyle,
  variants: {
    size: sizeVariants,
    color: colorVariants,
  },
  defaultVariants: {
    size: 'md',
    color: 'inherit',
  },
});

export type IconVariants = RecipeVariants<typeof iconRecipe>; 