import React from 'react';

import { baseOverlineStyle } from './styles.css';

export interface OverlineProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Overline = ({
  as = 'span',
  children,
  className = '',
  style,
  ...props
}: OverlineProps) => {
  const Component = as;

  const classes = [
    baseOverlineStyle,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component 
      className={classes}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Overline; 