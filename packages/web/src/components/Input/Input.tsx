import React, { InputHTMLAttributes, ReactNode, forwardRef, CSSProperties } from 'react';

import { InputVariant, InputState, IconPosition, InputSize } from '@durumim-ui/core';

import {
  inputRecipe,
  containerRecipe,
  errorMessageRecipe,
  leftIconRecipe,
  rightIconRecipe,
  inputWrapperRecipe,
  InputVariants,
} from './styles.css';


export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
  InputVariants {
  variant?: InputVariant;
  size?: InputSize;
  error?: string;
  success?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftIconColor?: string;
  rightIconColor?: string;
}

export interface IconWrapperProps {
  position: IconPosition;
  state: InputState;
  children: ReactNode;
  style?: CSSProperties;
}

const IconWrapper = ({ position, state, children, style }: IconWrapperProps) => {
  const stateColorMap: Record<InputState, string> = {
    default: 'var(--color-default)',
    error: 'var(--color-error)',
    success: 'var(--color-success)',
    disabled: 'var(--color-disabled)',
  }

  let stateColor = stateColorMap[state] || 'var(--color-default)';

  const iconClass = position === 'left' ? leftIconRecipe() : rightIconRecipe();

  const combinedStyle = stateColor
    ? { ...style, color: style && 'color' in style ? style.color : stateColor }
    : style;

  return (
    <div
      className={iconClass}
      style={combinedStyle}
    >
      {children}
    </div>
  );
};


export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'solid',
      size = 'medium',
      error,
      success,
      disabled = false,
      leftIcon,
      rightIcon,
      leftIconColor,
      rightIconColor,
      ...props
    },
    ref
  ) => {

    let state: InputState = 'default';

    if (disabled) {
      state = 'disabled';
    } else if (error) {
      state = 'error';
    } else if (success) {
      state = 'success';
    }

    const hasLeftIcon = Boolean(leftIcon);
    const hasRightIcon = Boolean(rightIcon);

    const inputClass = inputRecipe({
      variant,
      state,
      size,
      hasLeftIcon,
      hasRightIcon,
    });

    const combinedClassName = className
      ? `${inputClass} ${className}`
      : inputClass;

    return (
      <div className={containerRecipe()}>
        <div className={inputWrapperRecipe()}>
          {leftIcon && (
            <IconWrapper
              position="left"
              state={leftIconColor ? 'default' : state}
              style={leftIconColor ? { color: leftIconColor } : undefined}
            >
              {leftIcon}
            </IconWrapper>
          )}

          <input
            ref={ref}
            disabled={disabled}
            className={combinedClassName}
            {...props}
          />

          {rightIcon && (
            <IconWrapper
              position="right"
              state={rightIconColor ? 'default' : state}
              style={rightIconColor ? { color: rightIconColor } : undefined}
            >
              {rightIcon}
            </IconWrapper>
          )}
        </div>

        {error && <div className={errorMessageRecipe()}>{error}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 