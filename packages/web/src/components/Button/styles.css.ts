import { style, styleVariants, createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { colors, radii, space, fontSizes } from '@durumim-ui/design-tokens';

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
        [buttonBackgroundColor]: colors.success,
        [buttonTextColor]: colors.white,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: colors.green[800],
        [buttonHoverTextColor]: colors.white,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    danger: style({
      vars: {
        [buttonBackgroundColor]: colors.danger,
        [buttonTextColor]: colors.white,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: colors.red[800],
        [buttonHoverTextColor]: colors.white,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    warning: style({
      vars: {
        [buttonBackgroundColor]: colors.warning,
        [buttonTextColor]: colors.white,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: colors.orange[600],
        [buttonHoverTextColor]: colors.white,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    info: style({
      vars: {
        [buttonBackgroundColor]: colors.info,
        [buttonTextColor]: colors.white,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: colors.blue[600],
        [buttonHoverTextColor]: colors.white,
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
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: colors.success,
        [buttonBorderColor]: colors.success,
        [buttonHoverBackgroundColor]: 'rgba(42, 101, 95, 0.1)',
        [buttonHoverTextColor]: colors.green[800],
        [buttonHoverBorderColor]: colors.green[800],
      },
    }),
    danger: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: colors.danger,
        [buttonBorderColor]: colors.danger,
        [buttonHoverBackgroundColor]: 'rgba(153, 54, 41, 0.1)',
        [buttonHoverTextColor]: colors.red[800],
        [buttonHoverBorderColor]: colors.red[800],
      },
    }),
    warning: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: colors.warning,
        [buttonBorderColor]: colors.warning,
        [buttonHoverBackgroundColor]: 'rgba(249, 115, 22, 0.1)',
        [buttonHoverTextColor]: colors.orange[600],
        [buttonHoverBorderColor]: colors.orange[600],
      },
    }),
    info: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: colors.info,
        [buttonBorderColor]: colors.info,
        [buttonHoverBackgroundColor]: 'rgba(45, 158, 200, 0.1)',
        [buttonHoverTextColor]: colors.blue[600],
        [buttonHoverBorderColor]: colors.blue[600],
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
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: colors.success,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: 'rgba(42, 101, 95, 0.1)',
        [buttonHoverTextColor]: colors.green[800],
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    danger: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: colors.danger,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: 'rgba(153, 54, 41, 0.1)',
        [buttonHoverTextColor]: colors.red[800],
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    warning: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: colors.warning,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: 'rgba(249, 115, 22, 0.1)',
        [buttonHoverTextColor]: colors.orange[600],
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    info: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: colors.info,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: 'rgba(45, 158, 200, 0.1)',
        [buttonHoverTextColor]: colors.blue[600],
        [buttonHoverBorderColor]: 'transparent',
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