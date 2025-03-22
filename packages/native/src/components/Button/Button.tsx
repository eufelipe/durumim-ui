import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import { AlertCircle, AlertTriangle, CheckCircle2, ChevronRight, Info } from '@tamagui/lucide-icons';

import { buttonConfig } from '@durumim-ui/styles';

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outlined' | 'ghost';
  semanticColor?: 'success' | 'danger' | 'warning' | 'info';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const Button = ({
  size = 'medium',
  variant = 'solid',
  semanticColor,
  disabled = false,
  icon,
  iconPosition = 'left',
  children,
  onPress,
  style,
  textStyle,
}: ButtonProps) => {

  const sizeStyles = buttonConfig.scales[size] || buttonConfig.scales.medium;
  const variantStyles = buttonConfig.variants[variant] || buttonConfig.variants.solid;
  
  const buttonStyles: ViewStyle = {
    ...styles.button,
    borderRadius: parseFloat(String(buttonConfig.specs.borderRadius)),
    borderWidth: buttonConfig.specs.borderWidth,
    paddingVertical: parseFloat(String(sizeStyles.paddingVertical)),
    paddingHorizontal: parseFloat(String(sizeStyles.paddingHorizontal)),
    backgroundColor: String(variantStyles.backgroundColor),
    borderColor: String(variantStyles.borderColor),
  };
  
  const textStyles: TextStyle = {
    ...styles.text,
    fontFamily: String(sizeStyles.fontFamily),
    fontSize: parseFloat(String(sizeStyles.fontSize)),
    fontWeight: (sizeStyles.fontWeight as any),
    color: String(variantStyles.color),
  };
  
  let finalButtonStyles = {...buttonStyles};
  let finalTextStyles = {...textStyles};
  
  if (semanticColor) {
    const semanticStyles = buttonConfig.getSemanticStyles(variant, semanticColor);
    
    finalButtonStyles = {
      ...finalButtonStyles,
      backgroundColor: String(semanticStyles.backgroundColor),
      borderColor: String(semanticStyles.borderColor),
    };
    
    finalTextStyles = {
      ...finalTextStyles,
      color: String(semanticStyles.color),
    };
  }
  
  if (disabled) {
    finalButtonStyles = {
      ...finalButtonStyles,
      backgroundColor: String(buttonConfig.states.disabled.backgroundColor),
      borderColor: String(buttonConfig.states.disabled.borderColor),
      opacity: 0.7,
    };
    
    finalTextStyles = {
      ...finalTextStyles,
      color: String(buttonConfig.states.disabled.color),
    };
  }
  
  const renderIcon = () => {
    if (!icon) return null;
    
    const iconsMap = {
      success: CheckCircle2,
      danger: AlertCircle,
      warning: AlertTriangle,
      info: Info,
      default: ChevronRight,
    };
    
    const IconComponent = icon || iconsMap[semanticColor || 'default'];
    const iconSize = size === 'large' ? 24 : 16;
    
    return (
      <View style={[
        styles.iconContainer,
        iconPosition === 'left' ? styles.iconLeft : styles.iconRight,
        !children && styles.iconOnly,
      ]}>
        {React.isValidElement(IconComponent) ? (
          IconComponent
        ) : (
          <IconComponent width={iconSize} height={iconSize} color={String(finalTextStyles.color)} />
        )}
      </View>
    );
  };
  
  return (
    <TouchableOpacity
      style={[finalButtonStyles, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {icon && iconPosition === 'left' && renderIcon()}
      
      {children && (
        <Text style={[finalTextStyles, textStyle]}>
          {children}
        </Text>
      )}
      
      {icon && iconPosition === 'right' && renderIcon()}
    </TouchableOpacity>
  );
};

Button.Icon = ({ 
  icon, 
  position = 'left', 
  semanticColor, 
  size = 'medium',
  children,
}) => {
  const iconsMap = {
    success: CheckCircle2,
    danger: AlertCircle,
    warning: AlertTriangle,
    info: Info,
    default: icon || ChevronRight,
  };

  const IconComponent = iconsMap[semanticColor || 'default'];
  const hasChildren = Boolean(children);
  const iconSize = size === 'large' ? 24 : 16;
  
  return (
    <View style={[
      styles.iconContainer,
      position === 'left' ? styles.iconLeft : styles.iconRight,
      !hasChildren && styles.iconOnly,
    ]}>
      <IconComponent width={iconSize} height={iconSize} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: parseFloat(String(buttonConfig.specs.iconDistance)),
  },
  iconRight: {
    marginLeft: parseFloat(String(buttonConfig.specs.iconDistance)),
  },
  iconOnly: {
    margin: 0,
  },
});