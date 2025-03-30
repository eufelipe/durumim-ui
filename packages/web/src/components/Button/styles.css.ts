import { style, styleVariants, createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { colors, radii, space, fontSizes } from '@durumim-ui/design-tokens';
import { getSemanticStyles, buttonScales, buttonSpecs, iconConfig, interactionStates } from '@durumim-ui/core';

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
  borderRadius: radii.xs,
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
  borderWidth: '2px',
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
    boxShadow: '0 0 0 3px rgba(31, 109, 140, 0.3)',
  },
});

const sizeVariants = {
  small: style({
    fontSize: fontSizes.xs,
    paddingLeft: space[6],
    paddingRight: space[6],
    paddingTop: space[2],
    paddingBottom: space[2],
    height: '32px',
  }),
  medium: style({
    fontSize: fontSizes.md,
    paddingLeft: space[9],
    paddingRight: space[9],
    paddingTop: space[3],
    paddingBottom: space[3],
    height: '40px',
  }),
  large: style({
    fontSize: fontSizes.lg,
    paddingLeft: space[12],
    paddingRight: space[12],
    paddingTop: space[3],
    paddingBottom: space[3],
    height: '48px',
  }),
};


const fullWidthStyle = style({
  width: '100%',
  display: 'flex',
});

// Variantes de estilo (solid, outlined, ghost)
const styleVariantStyles = {
  solid: {
    default: style({
      vars: {
        [buttonBackgroundColor]: colors.primary,
        [buttonTextColor]: colors.white,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: colors.blue[700],
        [buttonHoverTextColor]: colors.white,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    success: style({
      vars: {
        [buttonBackgroundColor]: getSemanticStyles('solid', 'success').backgroundColor,
        [buttonTextColor]: getSemanticStyles('solid', 'success').color,
        [buttonBorderColor]: getSemanticStyles('solid', 'success').borderColor,
        [buttonHoverBackgroundColor]: getSemanticStyles('solid', 'success').hoverBackgroundColor,
        [buttonHoverTextColor]: getSemanticStyles('solid', 'success').hoverColor,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    danger: style({
      vars: {
        [buttonBackgroundColor]: getSemanticStyles('solid', 'danger').backgroundColor,
        [buttonTextColor]: getSemanticStyles('solid', 'danger').color,
        [buttonBorderColor]: getSemanticStyles('solid', 'danger').borderColor,
        [buttonHoverBackgroundColor]: getSemanticStyles('solid', 'danger').hoverBackgroundColor,
        [buttonHoverTextColor]: getSemanticStyles('solid', 'danger').hoverColor,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    warning: style({
      vars: {
        [buttonBackgroundColor]: getSemanticStyles('solid', 'warning').backgroundColor,
        [buttonTextColor]: getSemanticStyles('solid', 'warning').color,
        [buttonBorderColor]: getSemanticStyles('solid', 'warning').borderColor,
        [buttonHoverBackgroundColor]: getSemanticStyles('solid', 'warning').hoverBackgroundColor,
        [buttonHoverTextColor]: getSemanticStyles('solid', 'warning').hoverColor,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    info: style({
      vars: {
        [buttonBackgroundColor]: getSemanticStyles('solid', 'info').backgroundColor,
        [buttonTextColor]: getSemanticStyles('solid', 'info').color,
        [buttonBorderColor]: getSemanticStyles('solid', 'info').borderColor,
        [buttonHoverBackgroundColor]: getSemanticStyles('solid', 'info').hoverBackgroundColor,
        [buttonHoverTextColor]: getSemanticStyles('solid', 'info').hoverColor,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
  },
  outlined: {
    default: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: colors.primary,
        [buttonBorderColor]: colors.primary,
        [buttonHoverBackgroundColor]: 'rgba(31, 109, 140, 0.1)',
        [buttonHoverTextColor]: colors.blue[700],
        [buttonHoverBorderColor]: colors.blue[700],
      },
    }),
    success: style({
      vars: {
        [buttonBackgroundColor]: getSemanticStyles('outlined', 'success').backgroundColor,
        [buttonTextColor]: getSemanticStyles('outlined', 'success').color,
        [buttonBorderColor]: getSemanticStyles('outlined', 'success').borderColor,
        [buttonHoverBackgroundColor]: getSemanticStyles('outlined', 'success').hoverBackgroundColor,
        [buttonHoverTextColor]: getSemanticStyles('outlined', 'success').hoverColor,
        [buttonHoverBorderColor]: getSemanticStyles('outlined', 'success').borderColor,
      },
    }),
    danger: style({
      vars: {
        [buttonBackgroundColor]: getSemanticStyles('outlined', 'danger').backgroundColor,
        [buttonTextColor]: getSemanticStyles('outlined', 'danger').color,
        [buttonBorderColor]: getSemanticStyles('outlined', 'danger').borderColor,
        [buttonHoverBackgroundColor]: getSemanticStyles('outlined', 'danger').hoverBackgroundColor,
        [buttonHoverTextColor]: getSemanticStyles('outlined', 'danger').hoverColor,
        [buttonHoverBorderColor]: getSemanticStyles('outlined', 'danger').borderColor,
      },
    }),
    warning: style({
      vars: {
        [buttonBackgroundColor]: getSemanticStyles('outlined', 'warning').backgroundColor,
        [buttonTextColor]: getSemanticStyles('outlined', 'warning').color,
        [buttonBorderColor]: getSemanticStyles('outlined', 'warning').borderColor,
        [buttonHoverBackgroundColor]: getSemanticStyles('outlined', 'warning').hoverBackgroundColor,
        [buttonHoverTextColor]: getSemanticStyles('outlined', 'warning').hoverColor,
        [buttonHoverBorderColor]: getSemanticStyles('outlined', 'warning').borderColor,
      },
    }),
    info: style({
      vars: {
        [buttonBackgroundColor]: getSemanticStyles('outlined', 'info').backgroundColor,
        [buttonTextColor]: getSemanticStyles('outlined', 'info').color,
        [buttonBorderColor]: getSemanticStyles('outlined', 'info').borderColor,
        [buttonHoverBackgroundColor]: getSemanticStyles('outlined', 'info').hoverBackgroundColor,
        [buttonHoverTextColor]: getSemanticStyles('outlined', 'info').hoverColor,
        [buttonHoverBorderColor]: getSemanticStyles('outlined', 'info').borderColor,
      },
    }),
  },
  ghost: {
    default: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: colors.primary,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: 'rgba(31, 109, 140, 0.1)',
        [buttonHoverTextColor]: colors.blue[700],
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    success: style({
      vars: {
        [buttonBackgroundColor]: getSemanticStyles('ghost', 'success').backgroundColor,
        [buttonTextColor]: getSemanticStyles('ghost', 'success').color,
        [buttonBorderColor]: getSemanticStyles('ghost', 'success').borderColor,
        [buttonHoverBackgroundColor]: getSemanticStyles('ghost', 'success').hoverBackgroundColor,
        [buttonHoverTextColor]: getSemanticStyles('ghost', 'success').hoverColor,
        [buttonHoverBorderColor]: getSemanticStyles('ghost', 'success').borderColor,
      },
    }),
    danger: style({
      vars: {
        [buttonBackgroundColor]: getSemanticStyles('ghost', 'danger').backgroundColor,
        [buttonTextColor]: getSemanticStyles('ghost', 'danger').color,
        [buttonBorderColor]: getSemanticStyles('ghost', 'danger').borderColor,
        [buttonHoverBackgroundColor]: getSemanticStyles('ghost', 'danger').hoverBackgroundColor,
        [buttonHoverTextColor]: getSemanticStyles('ghost', 'danger').hoverColor,
        [buttonHoverBorderColor]: getSemanticStyles('ghost', 'danger').borderColor,
      },
    }),
    warning: style({
      vars: {
        [buttonBackgroundColor]: getSemanticStyles('ghost', 'warning').backgroundColor,
        [buttonTextColor]: getSemanticStyles('ghost', 'warning').color,
        [buttonBorderColor]: getSemanticStyles('ghost', 'warning').borderColor,
        [buttonHoverBackgroundColor]: getSemanticStyles('ghost', 'warning').hoverBackgroundColor,
        [buttonHoverTextColor]: getSemanticStyles('ghost', 'warning').hoverColor,
        [buttonHoverBorderColor]: getSemanticStyles('ghost', 'warning').borderColor,
      },
    }),
    info: style({
      vars: {
        [buttonBackgroundColor]: getSemanticStyles('ghost', 'info').backgroundColor,
        [buttonTextColor]: getSemanticStyles('ghost', 'info').color,
        [buttonBorderColor]: getSemanticStyles('ghost', 'info').borderColor,
        [buttonHoverBackgroundColor]: getSemanticStyles('ghost', 'info').hoverBackgroundColor,
        [buttonHoverTextColor]: getSemanticStyles('ghost', 'info').hoverColor,
        [buttonHoverBorderColor]: getSemanticStyles('ghost', 'info').borderColor,
      },
    }),
  },
};

const disabledStyle = style({
  cursor: 'not-allowed',
  opacity: 0.6,
  pointerEvents: 'none',
  
  ':hover': {
    opacity: 0.6,
  },
});


const iconOnlyStyle = style({
  aspectRatio: '1 / 1',
  padding: space[2],
  borderRadius: radii.md,
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 'auto',
  paddingLeft: space[2],
  paddingRight: space[2],
});

const iconOnlySizeVariants = {
  small: style({
    width: '32px',
    height: '32px',
  }),
  medium: style({
    width: '40px',
    height: '40px',
  }),
  large: style({
    width: '48px',
    height: '48px',
  }),
};


const iconWrapperBaseStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const iconWrapperPositionVariants = styleVariants({
  left: {
    marginRight: space[2],
  },
  right: {
    marginLeft: space[2],
  },
});

const iconOnlyWrapperStyle = style({
  margin: 0,
});

export const buttonRecipe = recipe({
  base: baseButtonStyle,
  variants: {
    size: sizeVariants,
    variant: {
      solid: style({}),
      outlined: style({}),
      ghost: style({}),
    },
    semanticColor: {
      success: style({}),
      danger: style({}),
      warning: style({}),
      info: style({}),
    },
    disabled: {
      true: disabledStyle,
    },
    iconOnly: {
      true: iconOnlyStyle,
    },
    full: {
      true: fullWidthStyle,
    }
  },
  compoundVariants: [
    // Solid variants
    { variants: { variant: 'solid', semanticColor: undefined }, style: styleVariantStyles.solid.default },
    { variants: { variant: 'solid', semanticColor: 'success' }, style: styleVariantStyles.solid.success },
    { variants: { variant: 'solid', semanticColor: 'danger' }, style: styleVariantStyles.solid.danger },
    { variants: { variant: 'solid', semanticColor: 'warning' }, style: styleVariantStyles.solid.warning },
    { variants: { variant: 'solid', semanticColor: 'info' }, style: styleVariantStyles.solid.info },
    
    // Outlined variants
    { variants: { variant: 'outlined', semanticColor: undefined }, style: styleVariantStyles.outlined.default },
    { variants: { variant: 'outlined', semanticColor: 'success' }, style: styleVariantStyles.outlined.success },
    { variants: { variant: 'outlined', semanticColor: 'danger' }, style: styleVariantStyles.outlined.danger },
    { variants: { variant: 'outlined', semanticColor: 'warning' }, style: styleVariantStyles.outlined.warning },
    { variants: { variant: 'outlined', semanticColor: 'info' }, style: styleVariantStyles.outlined.info },
    
    // Ghost variants
    { variants: { variant: 'ghost', semanticColor: undefined }, style: styleVariantStyles.ghost.default },
    { variants: { variant: 'ghost', semanticColor: 'success' }, style: styleVariantStyles.ghost.success },
    { variants: { variant: 'ghost', semanticColor: 'danger' }, style: styleVariantStyles.ghost.danger },
    { variants: { variant: 'ghost', semanticColor: 'warning' }, style: styleVariantStyles.ghost.warning },
    { variants: { variant: 'ghost', semanticColor: 'info' }, style: styleVariantStyles.ghost.info },
    
    // Icon only size variants
    { variants: { iconOnly: true, size: 'small' }, style: iconOnlySizeVariants.small },
    { variants: { iconOnly: true, size: 'medium' }, style: iconOnlySizeVariants.medium },
    { variants: { iconOnly: true, size: 'large' }, style: iconOnlySizeVariants.large },
  ],
  defaultVariants: {
    size: 'medium',
    variant: 'solid',
  }
});

export const iconWrapperRecipe = recipe({
  base: iconWrapperBaseStyle,
  variants: {
    position: iconWrapperPositionVariants,
    iconOnly: {
      true: iconOnlyWrapperStyle,
    }
  },
  defaultVariants: {
    position: 'left',
  }
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
export type IconWrapperVariants = RecipeVariants<typeof iconWrapperRecipe>;