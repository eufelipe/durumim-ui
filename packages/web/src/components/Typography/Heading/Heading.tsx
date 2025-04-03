import React from 'react';

import { HeadingLevel } from '@durumim-ui/core';

import { headingStyles } from './styles.css';

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

