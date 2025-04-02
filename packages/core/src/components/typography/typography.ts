import {
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
} from "@durumim-ui/design-tokens";


// Headings h1 a h5
export const headingScales = {
    h1: {
        fontSize: fontSizes['5xl'],      // 3rem (48px)
        fontWeight: fontWeights.regular,
        lineHeight: lineHeights.shorter,  // 1.2
        fontFamily: fonts.heading,
    },
    h2: {
        fontSize: fontSizes['4xl'],      // 2rem (32px)
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights.shorter,  // 1.2
        fontFamily: fonts.heading,
    },
    h3: {
        fontSize: fontSizes['3xl'],      // 1.875rem (30px)
        fontWeight: fontWeights.regular,
        lineHeight: lineHeights.short,    // 1.3
        fontFamily: fonts.heading,
    },
    h4: {
        fontSize: fontSizes['2xl'],      // 1.5rem (24px)
        fontWeight: fontWeights.semibold,
        lineHeight: lineHeights.short,    // 1.3
        fontFamily: fonts.heading,
    },
    h5: {
        fontSize: fontSizes.xl,          // 1.25rem (20px)
        fontWeight: fontWeights.semibold,
        lineHeight: lineHeights.short,    // 1.3
        fontFamily: fonts.heading,
    },
};


// Text variantes: lead, big, body, medium, small, tiny
export const textScales = {
    lead: {
        fontSize: fontSizes.xl,  // 1.25rem (20px)
        fontWeight: fontWeights.regular,
        lineHeight: lineHeights.base,   // 1.5
        fontFamily: fonts.default,
    },
    big: {
        fontSize: fontSizes.lg,  // 1.125rem (18px)
        fontWeight: fontWeights.regular,
        lineHeight: lineHeights.base,
        fontFamily: fonts.default,
    },
    body: {
        fontSize: fontSizes.md,  // 1rem (16px)
        fontWeight: fontWeights.regular,
        lineHeight: lineHeights.base,
        fontFamily: fonts.default,
    },
    medium: {
        fontSize: fontSizes.sm,  // 0.875rem (14px)
        fontWeight: fontWeights.regular,
        lineHeight: lineHeights.base,
        fontFamily: fonts.default,
    },
    small: {
        fontSize: fontSizes.xs,  // 0.75rem (12px)
        fontWeight: fontWeights.regular,
        lineHeight: lineHeights.base,
        fontFamily: fonts.default,
    },
    tiny: {
        fontSize: fontSizes.xxs, // 0.625rem (10px)
        fontWeight: fontWeights.regular,
        lineHeight: lineHeights.base,
        fontFamily: fonts.default,
    },
};

// others

// form labels
export const labelStyle = {
    fontSize: fontSizes.sm,    // 0.875rem (14px)
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.base,
    fontFamily: fonts.default,
};


// form helper text
export const captionStyle = {
    fontSize: fontSizes.xs,    // 0.75rem (12px)
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.base,
    fontFamily: fonts.default,
};

export const overlineStyle = {
    fontSize: fontSizes.xxs,   // 0.625rem (10px)
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.base,
    letterSpacing: letterSpacings.wide,
    textTransform: 'uppercase',
    fontFamily: fonts.default,
};

// buttons
export const buttonTextStyle = {
    fontSize: fontSizes.sm,    // 0.875rem (14px)
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.base,
    textTransform: 'uppercase',
    fontFamily: fonts.default,
};