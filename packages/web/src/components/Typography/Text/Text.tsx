import React from 'react';

import { TextVariant } from '@durumim-ui/core';

import { textStyles, boldTextStyle } from './styles.css';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  bold?: boolean;
  as?: React.ElementType;
}

export const Text = ({
  variant = 'body',
  as = 'p',
  children,
  className = '',
  bold = false,
  style,
  ...props
}: TextProps) => {
  const Component = as;

  const classes = [
    textStyles[variant],
    bold ? boldTextStyle : '',
    className
  ].filter(Boolean).join(' ');

  const inlineStyle = bold
    ? { fontWeight: 700, ...style }
    : style;

  return (
    <Component
      className={classes}
      style={inlineStyle}
      data-bold={bold}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text; 