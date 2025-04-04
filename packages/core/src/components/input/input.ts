import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  space,
} from "@durumim-ui/design-tokens";

export const inputScales = {
  small: {
    fontSize: fontSizes.xs, // 12px
    fontFamily: fonts.default,
    fontWeight: fontWeights.regular,
    paddingVertical: space[2], // 8px
    paddingHorizontal: space[3], // 12px
    height: "36px",
  },
  medium: {
    fontSize: fontSizes.sm, // 14px
    fontFamily: fonts.default,
    fontWeight: fontWeights.regular,
    paddingVertical: space[2], // 8px
    paddingHorizontal: space[3], // 12px
    height: "40px",
  },
  large: {
    fontSize: fontSizes.md, // 16px
    fontFamily: fonts.default,
    fontWeight: fontWeights.regular,
    paddingVertical: space[3], // 12px
    paddingHorizontal: space[4], // 16px
    height: "48px",
  },
};

export const inputSpecs = {
  borderRadius: radii.xs, // 4px
  borderWidth: 1,
  boxSizing: "border-box",
  lineHeight: 1.5,
  transition: "all 0.2s ease-in-out",
};

export const inputSemanticColors = {
  success: colors.success,
  danger: colors.danger,
  warning: colors.warning,
  info: colors.info,
} as const;

export const inputSemanticLightColors = {
  success: colors.successLight,
  danger: colors.dangerLight,
  warning: colors.warningLight,
  info: colors.infoLight,
} as const;

export const inputVariants = {
  solid: {
    backgroundColor: colors.gray[700],
    borderColor: "transparent",
    color: colors.gray[500],
    placeholderColor: colors.gray[500],
    focusBorderColor: colors.primary,
    activeColor: colors.white,
  },
  outlined: {
    backgroundColor: "transparent",
    borderColor: colors.gray[500],
    color: colors.gray[500],
    placeholderColor: colors.gray[500],
    focusBorderColor: colors.primary,
    activeColor: colors.white,
  },
  ghost: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderBottomColor: colors.gray[500],
    color: colors.gray[500],
    placeholderColor: colors.gray[500],
    focusBorderColor: colors.primary,
    focusBorderBottomColor: colors.primary,
    activeColor: colors.white,
  },
} as const;

export const inputStates = {
  disabled: {
    solid: {
      backgroundColor: colors.gray[200],
      color: colors.gray[300],
      placeholderColor: colors.gray[300],
      borderColor: "transparent",
    },
    outlined: {
      backgroundColor: "transparent",
      color: colors.gray[300],
      placeholderColor: colors.gray[300],
      borderColor: colors.gray[300],
    },
    ghost: {
      backgroundColor: "transparent",
      color: colors.gray[300],
      placeholderColor: colors.gray[300],
      borderBottomColor: colors.gray[300],
    },
  },
  error: {
    borderColor: colors.danger,
    focusBorderColor: colors.danger,
  },
  success: {
    borderColor: colors.success,
    focusBorderColor: colors.success,
  },
} as const;

export const inputIconConfig = {
  spacing: space[3], // 12px
  size: {
    small: 16,
    medium: 18,
    large: 20,
  },
  position: {
    left: {
      paddingLeft: space[9], // 36px
    },
    right: {
      paddingRight: space[9], // 36px
    },
  },
};

export const inputInteractionStates = {
  disabled: {
    opacity: 0.7,
    cursor: "not-allowed",
  },
  focus: {
    boxShadow: "0 0 0 2px rgba(31, 109, 140, 0.2)",
  },
};

export const getInputStateStyles = (variant: string, state: string) => {
  if (!state || state === 'default') return {};

  if (state === 'disabled') {
    return inputStates.disabled[variant] || {};
  }

  return inputStates[state] || {};
};

export const inputConfig = {
  scales: inputScales,
  specs: inputSpecs,
  variants: inputVariants,
  states: inputStates,
  getStateStyles: getInputStateStyles,
  semanticColors: inputSemanticColors,
  semanticLightColors: inputSemanticLightColors,
  icon: inputIconConfig,
  interaction: inputInteractionStates,
} as const; 