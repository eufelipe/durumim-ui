import { style, createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { colors, radii, space, fontSizes } from '@durumim-ui/design-tokens';

// Definir variáveis de CSS
const buttonBackgroundColor = createVar();
const buttonTextColor = createVar();
const buttonBorderColor = createVar();
const buttonHoverBackgroundColor = createVar();
const buttonHoverTextColor = createVar();
const buttonHoverBorderColor = createVar();

// Estilos base do botão
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

// Variantes de tamanho
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

// Estilo para botões de largura completa
const fullWidthStyle = style({
  width: '100%',
  display: 'flex',
});

// Cores semânticas para diferentes tipos de botões
const semanticColors = {
  success: colors.success,
  danger: colors.danger,
  warning: colors.warning,
  info: colors.info
};

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
        [buttonBackgroundColor]: semanticColors.success,
        [buttonTextColor]: colors.white,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: colors.green[700],
        [buttonHoverTextColor]: colors.white,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    danger: style({
      vars: {
        [buttonBackgroundColor]: semanticColors.danger,
        [buttonTextColor]: colors.white,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: colors.red[700],
        [buttonHoverTextColor]: colors.white,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    warning: style({
      vars: {
        [buttonBackgroundColor]: semanticColors.warning,
        [buttonTextColor]: colors.white,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: colors.orange[700],
        [buttonHoverTextColor]: colors.white,
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    info: style({
      vars: {
        [buttonBackgroundColor]: semanticColors.info,
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
        [buttonTextColor]: semanticColors.success,
        [buttonBorderColor]: semanticColors.success,
        [buttonHoverBackgroundColor]: 'rgba(72, 187, 120, 0.1)',
        [buttonHoverTextColor]: colors.green[700],
        [buttonHoverBorderColor]: colors.green[700],
      },
    }),
    danger: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: semanticColors.danger,
        [buttonBorderColor]: semanticColors.danger,
        [buttonHoverBackgroundColor]: 'rgba(245, 101, 101, 0.1)',
        [buttonHoverTextColor]: colors.red[700],
        [buttonHoverBorderColor]: colors.red[700],
      },
    }),
    warning: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: semanticColors.warning,
        [buttonBorderColor]: semanticColors.warning,
        [buttonHoverBackgroundColor]: 'rgba(246, 173, 85, 0.1)',
        [buttonHoverTextColor]: colors.orange[700],
        [buttonHoverBorderColor]: colors.orange[700],
      },
    }),
    info: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: semanticColors.info,
        [buttonBorderColor]: semanticColors.info,
        [buttonHoverBackgroundColor]: 'rgba(66, 153, 225, 0.1)',
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
        [buttonTextColor]: semanticColors.success,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: 'rgba(72, 187, 120, 0.1)',
        [buttonHoverTextColor]: colors.green[700],
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    danger: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: semanticColors.danger,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: 'rgba(245, 101, 101, 0.1)',
        [buttonHoverTextColor]: colors.red[700],
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    warning: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: semanticColors.warning,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: 'rgba(246, 173, 85, 0.1)',
        [buttonHoverTextColor]: colors.orange[700],
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
    info: style({
      vars: {
        [buttonBackgroundColor]: 'transparent',
        [buttonTextColor]: semanticColors.info,
        [buttonBorderColor]: 'transparent',
        [buttonHoverBackgroundColor]: 'rgba(66, 153, 225, 0.1)',
        [buttonHoverTextColor]: colors.blue[600],
        [buttonHoverBorderColor]: 'transparent',
      },
    }),
  },
};

// Estilo para botões desativados
const disabledStyle = style({
  cursor: 'not-allowed',
  opacity: 0.6,
  pointerEvents: 'none',

  ':hover': {
    opacity: 0.6,
  },
});

// Estilo para botões apenas com ícone
const iconOnlyStyle = style({
  aspectRatio: '1 / 1',
  padding: space[2],
});


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

const leftIconStyle = style({
  marginRight: space[2],
});

const rightIconStyle = style({
  marginLeft: space[2],
});

export const iconWrapperRecipe = recipe({
  base: baseIconWrapperStyle,
  variants: {
    position: {
      left: leftIconStyle,
      right: rightIconStyle,
    },
  },
  defaultVariants: {
    position: 'left',
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
export type IconWrapperVariants = RecipeVariants<typeof iconWrapperRecipe>;