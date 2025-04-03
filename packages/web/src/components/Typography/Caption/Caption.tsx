import React from 'react';

import { baseCaptionStyle } from './styles.css';


// TODO: melhorar depois a exibição para quando for usado com imagem

export interface CaptionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Caption = ({
  as = 'p',
  children,
  className = '',
  style,
  ...props
}: CaptionProps) => {
  const Component = as;

  const classes = [
    baseCaptionStyle,
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

export default Caption; 