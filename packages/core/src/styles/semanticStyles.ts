import { colors } from '@durumim-ui/design-tokens';

export type SemanticColor = 'success' | 'danger' | 'warning' | 'info';
export type ButtonVariant = 'solid' | 'outlined' | 'ghost';

interface StyleProperties {
  backgroundColor: string;
  color: string;
  borderColor: string;
  hoverBackgroundColor: string;
  hoverColor: string;
  hoverBorderColor: string;
}

const solidStyles: Record<SemanticColor, StyleProperties> = {
  success: {
    backgroundColor: colors.successLight,
    color: colors.white,
    borderColor: 'transparent',
    hoverBackgroundColor: colors.success,
    hoverColor: colors.white,
    hoverBorderColor: 'transparent',
  },
  danger: {
    backgroundColor: colors.dangerLight,
    color: colors.white,
    borderColor: 'transparent',
    hoverBackgroundColor: colors.danger,
    hoverColor: colors.white,
    hoverBorderColor: 'transparent',
  },
  warning: {
    backgroundColor: colors.warningLight,
    color: colors.white,
    borderColor: 'transparent',
    hoverBackgroundColor: colors.warning,
    hoverColor: colors.white,
    hoverBorderColor: 'transparent',
  },
  info: {
    backgroundColor: colors.infoLight,
    color: colors.white,
    borderColor: 'transparent',
    hoverBackgroundColor: colors.info,
    hoverColor: colors.white,
    hoverBorderColor: 'transparent',
  },
};

const outlinedStyles: Record<SemanticColor, StyleProperties> = {
  success: {
    backgroundColor: 'transparent',
    color: colors.success,
    borderColor: colors.success,
    hoverBackgroundColor: 'rgba(72, 187, 120, 0.1)',
    hoverColor: colors.success,
    hoverBorderColor: colors.success,
  },
  danger: {
    backgroundColor: 'transparent',
    color: colors.danger,
    borderColor: colors.danger,
    hoverBackgroundColor: 'rgba(245, 101, 101, 0.1)',
    hoverColor: colors.danger,
    hoverBorderColor: colors.danger,
  },
  warning: {
    backgroundColor: 'transparent',
    color: colors.warning,
    borderColor: colors.warning,
    hoverBackgroundColor: 'rgba(246, 173, 85, 0.1)',
    hoverColor: colors.warning,
    hoverBorderColor: colors.warning,
  },
  info: {
    backgroundColor: 'transparent',
    color: colors.info,
    borderColor: colors.info,
    hoverBackgroundColor: 'rgba(66, 153, 225, 0.1)',
    hoverColor: colors.info,
    hoverBorderColor: colors.info,
  },
};

const ghostStyles: Record<SemanticColor, StyleProperties> = {
  success: {
    backgroundColor: 'transparent',
    color: colors.success,
    borderColor: 'transparent',
    hoverBackgroundColor: 'rgba(72, 187, 120, 0.1)',
    hoverColor: colors.success,
    hoverBorderColor: 'transparent',
  },
  danger: {
    backgroundColor: 'transparent',
    color: colors.danger,
    borderColor: 'transparent',
    hoverBackgroundColor: 'rgba(245, 101, 101, 0.1)',
    hoverColor: colors.danger,
    hoverBorderColor: 'transparent',
  },
  warning: {
    backgroundColor: 'transparent',
    color: colors.warning,
    borderColor: 'transparent',
    hoverBackgroundColor: 'rgba(246, 173, 85, 0.1)',
    hoverColor: colors.warning,
    hoverBorderColor: 'transparent',
  },
  info: {
    backgroundColor: 'transparent',
    color: colors.info,
    borderColor: 'transparent',
    hoverBackgroundColor: 'rgba(66, 153, 225, 0.1)',
    hoverColor: colors.info,
    hoverBorderColor: 'transparent',
  },
};

const variantMap = {
  solid: solidStyles,
  outlined: outlinedStyles,
  ghost: ghostStyles,
};

export const getSemanticStyles = (
  variant: ButtonVariant,
  semanticColor: SemanticColor
): StyleProperties => {
  return variantMap[variant][semanticColor];
};

export const buttonScales = {
  small: {
    height: '32px',
    fontSize: '0.875rem',
  },
  medium: {
    height: '40px',
    fontSize: '1rem',
  },
  large: {
    height: '48px',
    fontSize: '1.125rem',
  },
};

export const buttonSpecs = {
  borderRadius: '4px',
  borderWidth: '2px',
  fontWeight: 600,
};

export const iconConfig = {
  small: {
    size: 16,
    margin: '0.25rem',
  },
  medium: {
    size: 20,
    margin: '0.375rem',
  },
  large: {
    size: 24,
    margin: '0.5rem',
  },
};

export const interactionStates = {
  hover: {
    transition: 'all 0.2s ease-in-out',
  },
  focus: {
    boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    outline: 'none',
  },
  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
}; 