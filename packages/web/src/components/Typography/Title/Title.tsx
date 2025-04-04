import React from 'react';

import { baseTitleStyle } from './styles.css';

export interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Title = ({
  as = 'h2',
  children,
  className = '',
  style,
  ...props
}: TitleProps) => {
  const Component = as;

  const classes = [
    baseTitleStyle,
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

export default Title; 