import { style, createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { colors } from '@durumim-ui/design-tokens';

import { buttonConfig } from '@durumim-ui/core';

const mapSemanticStylesToVars = (variant: string, color: string) => {
  const styles = buttonConfig.getSemanticStyles(variant, color);
  const result = {} as Record<string, string>;

  if (styles.backgroundColor) result[buttonBackgroundColor] = styles.backgroundColor;
  if (styles.color) result[buttonTextColor] = styles.color;
  if (styles.borderColor) result[buttonBorderColor] = styles.borderColor;
  if (styles.hoverBackgroundColor) result[buttonHoverBackgroundColor] = styles.hoverBackgroundColor;
  if (styles.hoverColor) result[buttonHoverTextColor] = styles.hoverColor;
  if (styles.hoverBorderColor) result[buttonHoverBorderColor] = styles.hoverBorderColor;

  return result;
};

const buttonBackgroundColor = createVar();
const buttonTextColor = createVar();
const buttonBorderColor = createVar();
const buttonHoverBackgroundColor = createVar();
const buttonHoverTextColor = createVar();
const buttonHoverBorderColor = createVar();


const baseButtonStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: buttonConfig.specs.borderRadius,
  fontWeight: 600,
  cursor: 'pointer',
  transition: buttonConfig.interaction.hover.transition,
  boxShadow: buttonConfig.specs.shadow,
  borderWidth: `${buttonConfig.specs.borderWidth}px`,
  borderStyle: 'solid',
  outline: 'none',
  position: 'relative',
  userSelect: 'none',
  textDecoration: 'none',
  backgroundColor: buttonBackgroundColor,
  color: buttonTextColor,
  borderColor: buttonBorderColor,

  ':hover': {
    backgroundColor: buttonHoverBackgroundColor,
    color: buttonHoverTextColor,
    borderColor: buttonHoverBorderColor,
  },

  ':focus': {
    boxShadow: buttonConfig.interaction.focus.boxShadow,
  },
});

const sizeVariants = {
  small: style({
    fontSize: buttonConfig.scales.small.fontSize,
    paddingLeft: buttonConfig.scales.small.paddingHorizontal,
    paddingRight: buttonConfig.scales.small.paddingHorizontal,
    paddingTop: buttonConfig.scales.small.paddingVertical,
    paddingBottom: buttonConfig.scales.small.paddingVertical,
    height: buttonConfig.scales.small.height,
  }),
  medium: style({
    fontSize: buttonConfig.scales.medium.fontSize,
    paddingLeft: buttonConfig.scales.medium.paddingHorizontal,
    paddingRight: buttonConfig.scales.medium.paddingHorizontal,
    paddingTop: buttonConfig.scales.medium.paddingVertical,
    paddingBottom: buttonConfig.scales.medium.paddingVertical,
    height: buttonConfig.scales.medium.height,
  }),
  large: style({
    fontSize: buttonConfig.scales.large.fontSize,
    paddingLeft: buttonConfig.scales.large.paddingHorizontal,
    paddingRight: buttonConfig.scales.large.paddingHorizontal,
    paddingTop: buttonConfig.scales.large.paddingVertical,
    paddingBottom: buttonConfig.scales.large.paddingVertical,
    height: buttonConfig.scales.large.height,
  }),
};


const fullWidthStyle = style({
  width: '100%',
  display: 'flex',
});


const disabledStyle = style({
  cursor: 'not-allowed',
  opacity: buttonConfig.interaction.disabled.opacity,
  pointerEvents: 'none',

  ':hover': {
    opacity: buttonConfig.interaction.disabled.opacity,
  },
});


const iconOnlyStyle = style({
  aspectRatio: '1 / 1',
  padding: buttonConfig.icon.spacing,
});


const styleVariantStyles = {
  solid: {
    default: style({
      vars: {
        [buttonBackgroundColor]: buttonConfig.variants.solid.backgroundColor,
        [buttonTextColor]: buttonConfig.variants.solid.color,
        [buttonBorderColor]: buttonConfig.variants.solid.borderColor,
        [buttonHoverBackgroundColor]: buttonConfig.variants.solid.hoverBackgroundColor,
        [buttonHoverTextColor]: buttonConfig.variants.solid.color,
        [buttonHoverBorderColor]: buttonConfig.variants.solid.borderColor,
      },
    }),
    success: style({
      vars: {
        [buttonBackgroundColor]: buttonConfig.semanticColors.success,
        [buttonTextColor]: colors.white,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: buttonConfig.semanticLightColors.success,
        [buttonHoverTextColor]: colors.white,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    danger: style({
      vars: {
        [buttonBackgroundColor]: buttonConfig.semanticColors.danger,
        [buttonTextColor]: colors.white,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: buttonConfig.semanticLightColors.danger,
        [buttonHoverTextColor]: colors.white,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    warning: style({
      vars: {
        [buttonBackgroundColor]: buttonConfig.semanticColors.warning,
        [buttonTextColor]: colors.white,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: buttonConfig.semanticLightColors.warning,
        [buttonHoverTextColor]: colors.white,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    info: style({
      vars: {
        [buttonBackgroundColor]: buttonConfig.semanticColors.info,
        [buttonTextColor]: colors.white,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: buttonConfig.semanticLightColors.info,
        [buttonHoverTextColor]: colors.white,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
  },
  outlined: {
    default: style({
      vars: {
        [buttonBackgroundColor]: buttonConfig.variants.outlined.backgroundColor,
        [buttonTextColor]: buttonConfig.variants.outlined.color,
        [buttonBorderColor]: buttonConfig.variants.outlined.borderColor,
        [buttonHoverBackgroundColor]: buttonConfig.variants.outlined.hoverBackgroundColor,
        [buttonHoverTextColor]: buttonConfig.variants.outlined.hoverColor,
        [buttonHoverBorderColor]: buttonConfig.variants.outlined.hoverBorderColor,
      },
    }),
    success: style({
      vars: mapSemanticStylesToVars('outlined', 'success'),
    }),
    danger: style({
      vars: mapSemanticStylesToVars('outlined', 'danger'),
    }),
    warning: style({
      vars: mapSemanticStylesToVars('outlined', 'warning'),
    }),
    info: style({
      vars: mapSemanticStylesToVars('outlined', 'info'),
    }),
  },
  ghost: {
    default: style({
      vars: {
        [buttonBackgroundColor]: buttonConfig.variants.ghost.backgroundColor,
        [buttonTextColor]: buttonConfig.variants.ghost.color,
        [buttonBorderColor]: buttonConfig.variants.ghost.borderColor,
        [buttonHoverBackgroundColor]: buttonConfig.variants.ghost.hoverBackgroundColor,
        [buttonHoverTextColor]: buttonConfig.variants.ghost.hoverColor,
        [buttonHoverBorderColor]: buttonConfig.variants.ghost.borderColor,
      },
    }),
    success: style({
      vars: mapSemanticStylesToVars('ghost', 'success'),
    }),
    danger: style({
      vars: mapSemanticStylesToVars('ghost', 'danger'),
    }),
    warning: style({
      vars: mapSemanticStylesToVars('ghost', 'warning'),
    }),
    info: style({
      vars: mapSemanticStylesToVars('ghost', 'info'),
    }),
  },
};

export const buttonRecipe = recipe({
  base: baseButtonStyle,
  variants: {
    size: sizeVariants,
    variant: {
      solid: {},
      outlined: {},
      ghost: {},
    },
    color: {
      default: {},
      success: {},
      danger: {},
      warning: {},
      info: {},
    },
    disabled: {
      true: disabledStyle,
    },
    fullWidth: {
      true: fullWidthStyle,
    },
    iconOnly: {
      true: iconOnlyStyle,
    },
  },
  compoundVariants: [
    // Solid variants
    { variants: { variant: 'solid', color: 'default' }, style: styleVariantStyles.solid.default },
    { variants: { variant: 'solid', color: 'success' }, style: styleVariantStyles.solid.success },
    { variants: { variant: 'solid', color: 'danger' }, style: styleVariantStyles.solid.danger },
    { variants: { variant: 'solid', color: 'warning' }, style: styleVariantStyles.solid.warning },
    { variants: { variant: 'solid', color: 'info' }, style: styleVariantStyles.solid.info },

    // Outlined variants
    { variants: { variant: 'outlined', color: 'default' }, style: styleVariantStyles.outlined.default },
    { variants: { variant: 'outlined', color: 'success' }, style: styleVariantStyles.outlined.success },
    { variants: { variant: 'outlined', color: 'danger' }, style: styleVariantStyles.outlined.danger },
    { variants: { variant: 'outlined', color: 'warning' }, style: styleVariantStyles.outlined.warning },
    { variants: { variant: 'outlined', color: 'info' }, style: styleVariantStyles.outlined.info },

    // Ghost variants
    { variants: { variant: 'ghost', color: 'default' }, style: styleVariantStyles.ghost.default },
    { variants: { variant: 'ghost', color: 'success' }, style: styleVariantStyles.ghost.success },
    { variants: { variant: 'ghost', color: 'danger' }, style: styleVariantStyles.ghost.danger },
    { variants: { variant: 'ghost', color: 'warning' }, style: styleVariantStyles.ghost.warning },
    { variants: { variant: 'ghost', color: 'info' }, style: styleVariantStyles.ghost.info },
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'default',
    size: 'medium',
    disabled: false,
    fullWidth: false,
    iconOnly: false,
  },
});

const baseIconWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});


export const iconWrapperRecipe = recipe({
  base: baseIconWrapperStyle,
  variants: {
    position: {
      left: style({ marginRight: buttonConfig.icon.spacing }),
      right: style({ marginLeft: buttonConfig.icon.spacing }),
    },
  },
  defaultVariants: {
    position: 'left',
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
export type IconWrapperVariants = RecipeVariants<typeof iconWrapperRecipe>;