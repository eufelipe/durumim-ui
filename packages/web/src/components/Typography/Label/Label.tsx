import React from 'react';

import { baseLabelStyle } from './styles.css';

export interface LabelProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  htmlFor?: string;
}

export const Label = ({
  as = 'label',
  children,
  className = '',
  style,
  htmlFor,
  ...props
}: LabelProps) => {
  const Component = as;

  const classes = [
    baseLabelStyle,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component 
      className={classes}
      style={style}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Label; 