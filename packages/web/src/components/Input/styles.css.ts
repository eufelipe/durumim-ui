import { style, createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { colors } from '@durumim-ui/design-tokens';
import { inputConfig } from '@durumim-ui/core';

const inputBackgroundColor = createVar();
const inputTextColor = createVar();
const inputBorderColor = createVar();
const inputFocusBorderColor = createVar();
const inputPlaceholderColor = createVar();

const baseInputStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  position: 'relative',
  borderRadius: inputConfig.specs.borderRadius,
  fontWeight: 400,
  outline: 'none',
  transition: inputConfig.specs.transition,
  backgroundColor: inputBackgroundColor,
  color: inputTextColor,
  borderColor: inputBorderColor,
  borderWidth: `${inputConfig.specs.borderWidth}px`,
  borderStyle: 'solid',
  boxSizing: 'border-box',
  lineHeight: inputConfig.specs.lineHeight,

  '::placeholder': {
    color: inputPlaceholderColor,
  },

  ':focus': {
    borderColor: inputFocusBorderColor,
    boxShadow: inputConfig.interaction.focus.boxShadow,
  },
});

const sizeVariants = {
  small: style({
    fontSize: inputConfig.scales.small.fontSize,
    paddingTop: inputConfig.scales.small.paddingVertical,
    paddingBottom: inputConfig.scales.small.paddingVertical,
    paddingLeft: inputConfig.scales.small.paddingHorizontal,
    paddingRight: inputConfig.scales.small.paddingHorizontal,
    height: inputConfig.scales.small.height,
  }),
  medium: style({
    fontSize: inputConfig.scales.medium.fontSize,
    paddingTop: inputConfig.scales.medium.paddingVertical,
    paddingBottom: inputConfig.scales.medium.paddingVertical,
    paddingLeft: inputConfig.scales.medium.paddingHorizontal,
    paddingRight: inputConfig.scales.medium.paddingHorizontal,
    height: inputConfig.scales.medium.height,
  }),
  large: style({
    fontSize: inputConfig.scales.large.fontSize,
    paddingTop: inputConfig.scales.large.paddingVertical,
    paddingBottom: inputConfig.scales.large.paddingVertical,
    paddingLeft: inputConfig.scales.large.paddingHorizontal,
    paddingRight: inputConfig.scales.large.paddingHorizontal,
    height: inputConfig.scales.large.height,
  }),
};

const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
});

const inputWrapperStyle = style({
  display: 'flex',
  position: 'relative',
  width: '100%',
});

const errorMessageStyle = style({
  color: colors.danger,
  fontSize: '12px',
  marginTop: '6px',
  textAlign: 'right',
  width: '100%',
  lineHeight: '1.2',
});

const leftIconStyle = style({
  position: 'absolute',
  left: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  zIndex: 1,
  color: 'inherit',
});

const rightIconStyle = style({
  position: 'absolute',
  right: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  zIndex: 1,
  color: 'inherit',
});

const hasLeftIconStyle = style({
  paddingLeft: '36px',
});

const hasRightIconStyle = style({
  paddingRight: '36px',
});

const solidErrorStyle = style({
  vars: {
    [inputBackgroundColor]: inputConfig.variants.solid.backgroundColor,
    [inputTextColor]: colors.danger,
    [inputBorderColor]: inputConfig.states.error.borderColor,
    [inputFocusBorderColor]: inputConfig.states.error.focusBorderColor,
    [inputPlaceholderColor]: colors.danger,
  },
  selectors: {
    '&:focus': {
      color: colors.dangerLight,
      borderColor: inputConfig.states.error.focusBorderColor,
    },
    '&:active': {
      color: colors.dangerLight,
    },
  },
});

const solidSuccessStyle = style({
  vars: {
    [inputBackgroundColor]: inputConfig.variants.solid.backgroundColor,
    [inputTextColor]: colors.success,
    [inputBorderColor]: inputConfig.states.success.borderColor,
    [inputFocusBorderColor]: inputConfig.states.success.focusBorderColor,
    [inputPlaceholderColor]: colors.success,
  },
  selectors: {
    '&:focus': {
      color: colors.successLight,
      borderColor: inputConfig.states.success.focusBorderColor,
    },
    '&:active': {
      color: colors.successLight,
    },
  },
});

const outlinedErrorStyle = style({
  vars: {
    [inputBackgroundColor]: inputConfig.variants.outlined.backgroundColor,
    [inputTextColor]: colors.danger,
    [inputBorderColor]: inputConfig.states.error.borderColor,
    [inputFocusBorderColor]: inputConfig.states.error.focusBorderColor,
    [inputPlaceholderColor]: colors.danger,
  },
  selectors: {
    '&:focus': {
      color: colors.dangerLight,
      borderColor: inputConfig.states.error.focusBorderColor,
    },
    '&:active': {
      color: colors.dangerLight,
    },
  },
});

const outlinedSuccessStyle = style({
  vars: {
    [inputBackgroundColor]: inputConfig.variants.outlined.backgroundColor,
    [inputTextColor]: colors.success,
    [inputBorderColor]: inputConfig.states.success.borderColor,
    [inputFocusBorderColor]: inputConfig.states.success.focusBorderColor,
    [inputPlaceholderColor]: colors.success,
  },
  selectors: {
    '&:focus': {
      color: colors.successLight,
      borderColor: inputConfig.states.success.focusBorderColor,
    },
    '&:active': {
      color: colors.successLight,
    },
  },
});

const ghostErrorStyle = style({
  vars: {
    [inputBackgroundColor]: inputConfig.variants.ghost.backgroundColor,
    [inputTextColor]: colors.danger,
    [inputBorderColor]: inputConfig.states.error.borderColor,
    [inputFocusBorderColor]: inputConfig.states.error.focusBorderColor,
    [inputPlaceholderColor]: colors.danger,
  },
  borderRadius: '0',
  borderWidth: '0 0 1px 0',
  borderBottomStyle: 'solid',
  selectors: {
    '&:focus': {
      color: colors.dangerLight,
      borderBottomColor: inputConfig.states.error.focusBorderColor,
      borderWidth: '0 0 1px 0',
      boxShadow: 'none',
    },
    '&:active': {
      color: colors.dangerLight,
      borderWidth: '0 0 1px 0',
    },
  },
});

const ghostSuccessStyle = style({
  vars: {
    [inputBackgroundColor]: inputConfig.variants.ghost.backgroundColor,
    [inputTextColor]: colors.success,
    [inputBorderColor]: inputConfig.states.success.borderColor,
    [inputFocusBorderColor]: inputConfig.states.success.focusBorderColor,
    [inputPlaceholderColor]: colors.success,
  },
  borderRadius: '0',
  borderWidth: '0 0 1px 0',
  borderBottomStyle: 'solid',
  selectors: {
    '&:focus': {
      color: colors.successLight,
      borderBottomColor: inputConfig.states.success.focusBorderColor,
      borderWidth: '0 0 1px 0',
      boxShadow: 'none',
    },
    '&:active': {
      color: colors.successLight,
      borderWidth: '0 0 1px 0',
    },
  },
});

const styleVariantStyles = {
  solid: {
    default: style({
      vars: {
        [inputBackgroundColor]: inputConfig.variants.solid.backgroundColor,
        [inputTextColor]: inputConfig.variants.solid.color,
        [inputBorderColor]: inputConfig.variants.solid.borderColor,
        [inputFocusBorderColor]: inputConfig.variants.solid.focusBorderColor,
        [inputPlaceholderColor]: inputConfig.variants.solid.placeholderColor,
      },
      selectors: {
        '&:focus': {
          color: inputConfig.variants.solid.activeColor,
          borderColor: inputConfig.variants.solid.focusBorderColor,
        },
        '&:active': {
          color: inputConfig.variants.solid.activeColor,
        },
      },
    }),
    error: solidErrorStyle,
    success: solidSuccessStyle,
    disabled: style({
      vars: {
        [inputBackgroundColor]: inputConfig.states.disabled.solid.backgroundColor,
        [inputTextColor]: inputConfig.states.disabled.solid.color,
        [inputBorderColor]: inputConfig.states.disabled.solid.borderColor,
        [inputFocusBorderColor]: inputConfig.states.disabled.solid.borderColor,
        [inputPlaceholderColor]: inputConfig.states.disabled.solid.placeholderColor,
      },
      cursor: inputConfig.interaction.disabled.cursor,
      opacity: inputConfig.interaction.disabled.opacity,
    }),
  },
  outlined: {
    default: style({
      vars: {
        [inputBackgroundColor]: inputConfig.variants.outlined.backgroundColor,
        [inputTextColor]: inputConfig.variants.outlined.color,
        [inputBorderColor]: inputConfig.variants.outlined.borderColor,
        [inputFocusBorderColor]: inputConfig.variants.outlined.focusBorderColor,
        [inputPlaceholderColor]: inputConfig.variants.outlined.placeholderColor,
      },
      selectors: {
        '&:focus': {
          color: inputConfig.variants.outlined.activeColor,
          borderColor: inputConfig.variants.outlined.focusBorderColor,
        },
        '&:active': {
          color: inputConfig.variants.outlined.activeColor,
        },
      },
    }),
    error: outlinedErrorStyle,
    success: outlinedSuccessStyle,
    disabled: style({
      vars: {
        [inputBackgroundColor]: inputConfig.states.disabled.outlined.backgroundColor,
        [inputTextColor]: inputConfig.states.disabled.outlined.color,
        [inputBorderColor]: inputConfig.states.disabled.outlined.borderColor,
        [inputFocusBorderColor]: inputConfig.states.disabled.outlined.borderColor,
        [inputPlaceholderColor]: inputConfig.states.disabled.outlined.placeholderColor,
      },
      cursor: inputConfig.interaction.disabled.cursor,
      opacity: inputConfig.interaction.disabled.opacity,
    }),
  },
  ghost: {
    default: style({
      vars: {
        [inputBackgroundColor]: inputConfig.variants.ghost.backgroundColor,
        [inputTextColor]: inputConfig.variants.ghost.color,
        [inputBorderColor]: inputConfig.variants.ghost.borderBottomColor,
        [inputFocusBorderColor]: inputConfig.variants.ghost.focusBorderBottomColor,
        [inputPlaceholderColor]: inputConfig.variants.ghost.placeholderColor,
      },
      borderRadius: '0',
      borderWidth: '0 0 1px 0',
      borderBottomStyle: 'solid',
      selectors: {
        '&:focus': {
          color: inputConfig.variants.ghost.activeColor,
          borderBottomColor: inputConfig.variants.ghost.focusBorderBottomColor,
          borderWidth: '0 0 1px 0',
          boxShadow: 'none',
        },
        '&:active': {
          color: inputConfig.variants.ghost.activeColor,
          borderWidth: '0 0 1px 0',
        },
      },
    }),
    error: ghostErrorStyle,
    success: ghostSuccessStyle,
    disabled: style({
      vars: {
        [inputBackgroundColor]: inputConfig.states.disabled.ghost.backgroundColor,
        [inputTextColor]: inputConfig.states.disabled.ghost.color,
        [inputBorderColor]: inputConfig.states.disabled.ghost.borderBottomColor,
        [inputFocusBorderColor]: inputConfig.states.disabled.ghost.borderBottomColor,
        [inputPlaceholderColor]: inputConfig.states.disabled.ghost.placeholderColor,
      },
      borderRadius: '0',
      borderWidth: '0 0 1px 0',
      borderBottomStyle: 'solid',
      cursor: inputConfig.interaction.disabled.cursor,
      opacity: inputConfig.interaction.disabled.opacity,
    }),
  },
};

export const inputRecipe = recipe({
  base: baseInputStyle,
  variants: {
    variant: {
      solid: {},
      outlined: {},
      ghost: {},
    },
    state: {
      default: {},
      error: {},
      success: {},
      disabled: {},
    },
    size: sizeVariants,
    hasLeftIcon: {
      true: hasLeftIconStyle,
    },
    hasRightIcon: {
      true: hasRightIconStyle,
    },
  },
  compoundVariants: [
    // Solid variants
    { variants: { variant: 'solid', state: 'default' }, style: styleVariantStyles.solid.default },
    { variants: { variant: 'solid', state: 'error' }, style: styleVariantStyles.solid.error },
    { variants: { variant: 'solid', state: 'success' }, style: styleVariantStyles.solid.success },
    { variants: { variant: 'solid', state: 'disabled' }, style: styleVariantStyles.solid.disabled },

    // Outlined variants
    { variants: { variant: 'outlined', state: 'default' }, style: styleVariantStyles.outlined.default },
    { variants: { variant: 'outlined', state: 'error' }, style: styleVariantStyles.outlined.error },
    { variants: { variant: 'outlined', state: 'success' }, style: styleVariantStyles.outlined.success },
    { variants: { variant: 'outlined', state: 'disabled' }, style: styleVariantStyles.outlined.disabled },

    // Ghost variants
    { variants: { variant: 'ghost', state: 'default' }, style: styleVariantStyles.ghost.default },
    { variants: { variant: 'ghost', state: 'error' }, style: styleVariantStyles.ghost.error },
    { variants: { variant: 'ghost', state: 'success' }, style: styleVariantStyles.ghost.success },
    { variants: { variant: 'ghost', state: 'disabled' }, style: styleVariantStyles.ghost.disabled },
  ],
});

export const containerRecipe = recipe({
  base: containerStyle,
});

export const inputWrapperRecipe = recipe({
  base: inputWrapperStyle,
});

export const errorMessageRecipe = recipe({
  base: errorMessageStyle,
});

export const leftIconRecipe = recipe({
  base: leftIconStyle,
});

export const rightIconRecipe = recipe({
  base: rightIconStyle,
});

export type InputVariants = RecipeVariants<typeof inputRecipe>;
export type ContainerVariants = RecipeVariants<typeof containerRecipe>;
export type InputWrapperVariants = RecipeVariants<typeof inputWrapperRecipe>;
export type ErrorMessageVariants = RecipeVariants<typeof errorMessageRecipe>;
export type LeftIconVariants = RecipeVariants<typeof leftIconRecipe>;
export type RightIconVariants = RecipeVariants<typeof rightIconRecipe>; 