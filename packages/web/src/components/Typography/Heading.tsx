import React from 'react';
import { headingStyles } from './styles.css'; 

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface HeadingProps {
  level: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Heading = ({
  level = 'h2',
  as,
  children,
  className = '',
  ...props
}: HeadingProps) => {
  const Component = as || level;
  
  return (
    <Component 
      className={`${headingStyles[level]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;

