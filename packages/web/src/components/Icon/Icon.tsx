import React, { forwardRef } from 'react';

import { IconType } from 'react-icons';

import { iconRecipe, IconVariants } from './styles.css';

import { IconSize, IconColor } from '@durumim-ui/core';

export type { IconVariants };

export interface IconProps extends IconVariants {
  icon: IconType;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  title?: string;
}

const iconSizeMap = {
  xs: { size: 12 },
  sm: { size: 16 },
  md: { size: 20 },
  lg: { size: 24 },
  xl: { size: 32 },
};

export const Icon = forwardRef<HTMLSpanElement, IconProps>(({
  icon: IconComponent,
  size = 'md',
  color = 'inherit',
  title,
  ...props
}, ref) => {
  if (!IconComponent) {
    console.warn('Icon component not found');
    return null;
  }

  const iconClassName = iconRecipe({ size, color });
  const svgSize = iconSizeMap[size]?.size || iconSizeMap.md.size;

  return (
    <span ref={ref} className={iconClassName}>
      <IconComponent
        title={title}
        aria-hidden={!title}
        size={svgSize}
        {...props}
      />
    </span>
  );
});

Icon.displayName = 'Icon';

export default Icon; 