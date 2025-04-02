import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  space,
} from "@durumim-ui/design-tokens";


const MIN_SIZE = 44;

export const buttonScales = {
  small: {
    fontSize: fontSizes.xs, // 12px
    fontFamily: fonts.default, // Ubuntu
    fontWeight: fontWeights.medium, // 120%
    paddingVertical: space[2], // 8px
    paddingHorizontal: space[6], // 24px
    textAlign: "center",
    height: "36px",
    minWidth: `${MIN_SIZE}px`,
  },
  medium: {
    fontSize: fontSizes.md, // 16px
    fontFamily: fonts.default, // Ubuntu
    fontWeight: fontWeights.regular, // 100%
    paddingVertical: space[3], // 12px
    paddingHorizontal: space[9], // 36px
    textAlign: "center",
    height: `${MIN_SIZE}px`,
    minWidth: `${MIN_SIZE}px`,
  },
  large: {
    fontSize: fontSizes.lg, // 18px
    fontFamily: fonts.default, // Ubuntu
    fontWeight: fontWeights.medium, // 120%
    paddingVertical: space[3], // 12px
    paddingHorizontal: space[12], // 48px
    textAlign: "center",
    height: "48px",
    minWidth: "48px",
  },
};

export const buttonSpecs = {
  borderRadius: radii.xs, // 4px
  iconDistance: space[2], // 8px
  borderWidth: 2,
  shadow: shadows.md,
};

export const semanticColors = {
  success: colors.success,
  danger: colors.danger,
  warning: colors.warning,
  info: colors.info,
} as const;

export const semanticLightColors = {
  success: colors.successLight,
  danger: colors.dangerLight,
  warning: colors.warningLight,
  info: colors.infoLight,
} as const;

export const buttonVariants = {
  solid: {
    backgroundColor: colors.primary,
    borderColor: "transparent",
    color: colors.white,
    hoverBackgroundColor: colors.blue["700"],
  },
  outlined: {
    backgroundColor: "transparent",
    borderColor: colors.primary,
    color: colors.primary,
    hoverBackgroundColor: "transparent",
    hoverBorderColor: colors.blue["700"],
    hoverColor: colors.blue["700"],
  },
  ghost: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: colors.primary,
    hoverBackgroundColor: "transparent",
    hoverColor: colors.blue["700"],
  },
} as const;


export const accessibilityConfig = {
  focusOutline: {
    color: "rgba(31, 109, 140, 0.5)",
    width: "3px",
    offset: "2px",
    boxShadow: "0 0 0 3px rgba(31, 109, 140, 0.3)",
  },
  touchMinSize: MIN_SIZE,
};


export const iconConfig = {
  spacing: space[2],
  borderRadius: radii.md,
  sizes: {
    small: { width: "32px", height: "32px" },
    medium: { width: "40px", height: "40px" },
    large: { width: "48px", height: "48px" },
  },
  wrapperStyle: {
    left: { marginRight: space[2] },
    right: { marginLeft: space[2] },
    iconOnly: { margin: 0 },
  },
};

export const interactionStates = {
  disabled: {
    opacity: 0.6,
    pointerEvents: "none",
  },
  hover: {
    transition: "all 0.2s ease-in-out",
  },
  focus: {
    boxShadow: "0 0 0 3px rgba(31, 109, 140, 0.3)",
  },
};

export const buttonStates = {
  disabled: {
    backgroundColor: colors.gray["100"],
    borderColor: "transparent",
    color: colors.gray["500"],
  },
} as const;

export const getSemanticStyles = (variant: string, semanticColor: string) => {
  if (!semanticColor) return {};

  const color = semanticColors[semanticColor];
  const lightColor = semanticLightColors[semanticColor];

  const variantMap = {
    solid: {
      backgroundColor: color,
      borderColor: "transparent",
      color: colors.white,
      hoverBackgroundColor: lightColor,
      hoverColor: colors.white,
    },
    outlined: {
      backgroundColor: "transparent",
      borderColor: color,
      color,
      hoverBackgroundColor: color,
      hoverColor: colors.white,
    },
    ghost: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      color,
      hoverBackgroundColor: "transparent",
      hoverColor: color,
    },
  };

  return variantMap[variant] || variantMap.solid;
};

export const buttonConfig = {
  scales: buttonScales,
  specs: buttonSpecs,
  variants: buttonVariants,
  states: buttonStates,
  semanticColors,
  semanticLightColors,
  getSemanticStyles,
  accessibility: accessibilityConfig,
  icon: iconConfig,
  interaction: interactionStates,
} as const;
