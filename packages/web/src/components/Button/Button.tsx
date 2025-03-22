import React from 'react';

import { styled, withStaticProperties } from 'tamagui';

import { AlertCircle, AlertTriangle, CheckCircle2, ChevronRight, Info } from '@tamagui/lucide-icons';

import { buttonConfig } from '@durumim-ui/styles';

const ButtonFrame = styled('button', {
  fontFamily: '$fonts$default',
  borderRadius: buttonConfig.specs.borderRadius,
  boxShadow: buttonConfig.specs.shadow,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: buttonConfig.specs.borderWidth,
  borderStyle: 'solid',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  variants: {
    size: {
      small: {
        fontSize: '$fontSizes$xs',
        paddingVertical: '$space$2',
        paddingHorizontal: '$space$6',
        lineHeight: 1.2,
      },
      medium: {
        fontSize: '$fontSizes$md',
        paddingVertical: '$space$3',
        paddingHorizontal: '$space$9',
        lineHeight: 1,
      },
      large: {
        fontSize: '$fontSizes$lg',
        paddingVertical: '$space$3',
        paddingHorizontal: '$space$12',
        lineHeight: 1.2,
      },
    },
    variant: {
      solid: {
        backgroundColor: '$primary',
        borderColor: 'transparent',
        color: '$white',
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: '$primary',
        color: '$primary',
      },
      ghost: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: '$primary',
      },
    },
    semanticColor: {
      success: {},
      danger: {},
      warning: {},
      info: {},
    },
    disabled: {
      true: {
        backgroundColor: '$gray100',
        borderColor: 'transparent',
        color: '$gray500',
        cursor: 'not-allowed',
        opacity: 0.7,
        pointerEvents: 'none',
      },
    },
    iconOnly: {
      true: {
        aspectRatio: 1,
        paddingHorizontal: '$space$3',
        minWidth: 'auto',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
    variant: 'solid',
  },

  hoverStyle: (val: ButtonProps) => {
    if (val.disabled) return;

    if (val.semanticColor) {
      const semanticStyles = buttonConfig.getSemanticStyles(val.variant || 'solid', val.semanticColor);
      
      return {
        backgroundColor: semanticStyles.hoverBackgroundColor,
        color: semanticStyles.hoverColor,
        borderColor: semanticStyles.hoverBorderColor || semanticStyles.borderColor,
      };
    }
    
    if (val.variant === 'solid') {
      return {
        backgroundColor: '$blue700',
      };
    }
    
    if (val.variant === 'outlined') {
      return {
        borderColor: '$blue700',
        color: '$blue700',
      };
    }
    
    if (val.variant === 'ghost') {
      return {
        color: '$blue700',
      };
    }
  },

  defaultProps: (props) => {
    if (!props.semanticColor) return props;
    
    const semanticStyles = buttonConfig.getSemanticStyles(props.variant || 'solid', props.semanticColor);
    
    return {
      ...props,
      style: {
        ...props.style,
        backgroundColor: semanticStyles.backgroundColor,
        color: semanticStyles.color,
        borderColor: semanticStyles.borderColor,
      },
    };
  },
});

const IconWrapper = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  variants: {
    position: {
      left: { marginRight: buttonConfig.specs.iconDistance },
      right: { marginLeft: buttonConfig.specs.iconDistance },
    },
    iconOnly: {
      true: { margin: 0 },
    },
  },
});

const iconsMap = {
  success: CheckCircle2,
  danger: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  default: ChevronRight,
};

export const Button = withStaticProperties(ButtonFrame, {
  Icon: ({ 
    icon, 
    position = 'left', 
    semanticColor, 
    size = 'medium', 
    children, 
    ...props 
  }) => {
    const IconComponent = icon || iconsMap[semanticColor || 'default'];
    const hasChildren = Boolean(children);
    const iconSize = size === 'large' ? 24 : size === 'small' ? 16 : 20;
    
    return (
      <IconWrapper position={position} iconOnly={!hasChildren}>
        {React.isValidElement(IconComponent) 
          ? React.cloneElement(IconComponent, { size: iconSize } as React.HTMLAttributes<SVGElement>) 
          : <IconComponent size={iconSize} />}
      </IconWrapper>
    );
  },
});

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outlined' | 'ghost';
  semanticColor?: 'success' | 'danger' | 'warning' | 'info';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
  children?: React.ReactNode;
};