import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import {
  space,
  radii,
  fontSizes,
  fontWeights,
  shadows
} from '@durumim-ui/design-tokens';
import type { SprinklesProps } from './types';

const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};


const colorMap = {
  // Brand Colors
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  accent: 'var(--color-accent)',
  alert: 'var(--color-alert)',

  // Neutral Colors
  white: 'var(--color-white)',
  black: 'var(--color-black)',
  dark: 'var(--color-dark)',
  light: 'var(--color-light)',

  zinc: 'var(--color-zinc)',
  stone: 'var(--color-stone)',
  slate: 'var(--color-slate)',
  gray: 'var(--color-gray)',
  purify: 'var(--color-purify)',
  lightness: 'var(--color-lightness)',
  clean: 'var(--color-clean)',

  // Semantic Colors
  success: 'var(--color-success)',
  info: 'var(--color-info)',
  warning: 'var(--color-warning)',
  danger: 'var(--color-danger)',

  // Background Colors
  background: 'var(--color-background)',
  backgroundAlt: 'var(--color-background-alt)',

  // Transparent
  transparent: 'transparent',

  // Gray Scale
  gray50: 'var(--color-gray-50)',
  gray100: 'var(--color-gray-100)',
  gray200: 'var(--color-gray-200)',
  gray300: 'var(--color-gray-300)',
  gray400: 'var(--color-gray-400)',
  gray500: 'var(--color-gray-500)',
  gray600: 'var(--color-gray-600)',
  gray700: 'var(--color-gray-700)',
  gray800: 'var(--color-gray-800)',
  gray900: 'var(--color-gray-900)',

  // green scale
  green50: 'var(--color-green-50)',
  green100: 'var(--color-green-100)',
  green200: 'var(--color-green-200)',
  green300: 'var(--color-green-300)',
  green400: 'var(--color-green-400)',
  green500: 'var(--color-green-500)',
  green600: 'var(--color-green-600)',
  green700: 'var(--color-green-700)',
  green800: 'var(--color-green-800)',
  green900: 'var(--color-green-900)',

  // red scale
  red50: 'var(--color-red-50)',
  red100: 'var(--color-red-100)',
  red200: 'var(--color-red-200)',
  red300: 'var(--color-red-300)',
  red400: 'var(--color-red-400)',
  red500: 'var(--color-red-500)',
  red600: 'var(--color-red-600)',
  red700: 'var(--color-red-700)',
  red800: 'var(--color-red-800)',
  red900: 'var(--color-red-900)',

  // yellow scale
  yellow50: 'var(--color-yellow-50)',
  yellow100: 'var(--color-yellow-100)',
  yellow200: 'var(--color-yellow-200)',
  yellow300: 'var(--color-yellow-300)',
  yellow400: 'var(--color-yellow-400)',
  yellow500: 'var(--color-yellow-500)',
  yellow600: 'var(--color-yellow-600)',
  yellow700: 'var(--color-yellow-700)',
  yellow800: 'var(--color-yellow-800)',
  yellow900: 'var(--color-yellow-900)',

  // blue scale
  blue50: 'var(--color-blue-50)',
  blue100: 'var(--color-blue-100)',
  blue200: 'var(--color-blue-200)',
  blue300: 'var(--color-blue-300)',
  blue400: 'var(--color-blue-400)',
  blue500: 'var(--color-blue-500)',
  blue600: 'var(--color-blue-600)',
  blue700: 'var(--color-blue-700)',
  blue800: 'var(--color-blue-800)',
  blue900: 'var(--color-blue-900)',

  // orange scale
  orange50: 'var(--color-orange-50)',
  orange100: 'var(--color-orange-100)',
  orange200: 'var(--color-orange-200)',
  orange300: 'var(--color-orange-300)',
  orange400: 'var(--color-orange-400)',
  orange500: 'var(--color-orange-500)',
  orange600: 'var(--color-orange-600)',
  orange700: 'var(--color-orange-700)',
  orange800: 'var(--color-orange-800)',
  orange900: 'var(--color-orange-900)',

  // pink scale
  pink50: 'var(--color-pink-50)',
  pink100: 'var(--color-pink-100)',
  pink200: 'var(--color-pink-200)',
  pink300: 'var(--color-pink-300)',
  pink400: 'var(--color-pink-400)',
  pink500: 'var(--color-pink-500)',
  pink600: 'var(--color-pink-600)',
  pink700: 'var(--color-pink-700)',
  pink800: 'var(--color-pink-800)',
  pink900: 'var(--color-pink-900)',
  
};

// Responsive Properties
const responsiveProperties = defineProperties({
  conditions: {
    base: {},
    sm: { '@media': breakpoints.sm },
    md: { '@media': breakpoints.md },
    lg: { '@media': breakpoints.lg },
    xl: { '@media': breakpoints.xl },
    '2xl': { '@media': breakpoints['2xl'] },
  },
  defaultCondition: 'base',
  properties: {
    // Layout
    display: ['none', 'flex', 'block', 'inline', 'grid', 'inline-flex', 'inline-block', 'contents'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    alignSelf: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    gap: space,

    // Spacing
    margin: space,
    marginTop: space,
    marginRight: space,
    marginBottom: space,
    marginLeft: space,
    padding: space,
    paddingTop: space,
    paddingRight: space,
    paddingBottom: space,
    paddingLeft: space,

    // Dimensions
    width: { 'auto': 'auto', 'full': '100%', '1/2': '50%', '1/4': '25%', '3/4': '75%', ...space },
    height: { 'auto': 'auto', 'full': '100%', 'screen': '100vh', ...space },
    minWidth: { '0': '0px', 'full': '100%', ...space },
    minHeight: { '0': '0px', 'full': '100%', 'screen': '100vh', ...space },
    maxWidth: { 'none': 'none', 'full': '100%', ...space },
    maxHeight: { 'none': 'none', 'full': '100%', 'screen': '100vh', ...space },

    // Typography
    fontSize: fontSizes,
    fontWeight: fontWeights,
    textAlign: ['left', 'center', 'right', 'justify'],
    lineHeight: ['normal', '100%', '125%', '150%', '175%', '200%'],

    // Visual
    borderRadius: radii,
    boxShadow: shadows,
    opacity: { '0': '0', '25': '0.25', '50': '0.5', '75': '0.75', '100': '1' },
    overflow: ['visible', 'hidden', 'scroll', 'auto'],
    position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
  },
  shorthands: {
    // Spacing Shorthands
    m: ['margin'],
    mt: ['marginTop'],
    mr: ['marginRight'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    p: ['padding'],
    pt: ['paddingTop'],
    pr: ['paddingRight'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],

    flex: ['display', 'flexDirection'],
  }
});

// Color Properties
const colorProperties = defineProperties({
  conditions: {
    lightMode: { '@media': '(prefers-color-scheme: light)' },
    darkMode: { '@media': '(prefers-color-scheme: dark)' }
  },
  defaultCondition: 'darkMode',
  properties: {
    color: colorMap,
    backgroundColor: colorMap,
    borderColor: colorMap,
  }
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties
) as any;

export type Sprinkles = SprinklesProps;

export const createSprinklesClass = (props: Partial<Sprinkles>): string => {
  return sprinkles(props);
};

