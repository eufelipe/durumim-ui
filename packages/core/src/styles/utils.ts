import { StyleRule } from '@vanilla-extract/css';

export type ResponsiveValue<Value> = Value | Partial<Record<'sm' | 'md' | 'lg' | 'xl' | '2xl', Value>>;

export const mapResponsiveValue = <Value>(
  value: ResponsiveValue<Value>,
  mapFn: (value: Value) => StyleRule
): StyleRule => {
  if (typeof value !== 'object' || value === null) {
    return mapFn(value as Value);
  }

  const breakpointEntries = Object.entries(value as Record<string, Value>);

  if (breakpointEntries.length === 0) {
    return {};
  }

  const mediaQueries: Record<string, StyleRule> = {};

  for (const [breakpoint, breakpointValue] of breakpointEntries) {
    if (breakpoint === 'base') {
      Object.assign(mediaQueries, mapFn(breakpointValue));
    } else {
      mediaQueries[`@media screen and (min-width: ${getBreakpointValue(breakpoint)})`] = mapFn(breakpointValue);
    }
  }

  return mediaQueries;
};

const getBreakpointValue = (breakpoint: string): string => {
  switch (breakpoint) {
    case 'sm':
      return '640px';
    case 'md':
      return '768px';
    case 'lg':
      return '1024px';
    case 'xl':
      return '1280px';
    case '2xl':
      return '1536px';
    default:
      return '0';
  }
}; 