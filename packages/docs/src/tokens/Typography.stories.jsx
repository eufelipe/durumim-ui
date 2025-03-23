import React from "react";

import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from "@durumim-ui/design-tokens";

import { Container, Description, Table, Title } from "../ui";

const FontExample = ({ fontFamily, children }) => (
  <span style={{ fontFamily, color: "#f8f8f8" }}>
    {children || "The quick brown fox jumps over the lazy dog"}
  </span>
);

const FontWeightExample = ({ fontWeight, children }) => (
  <span style={{ fontFamily: fonts.default, fontWeight, color: "#f8f8f8" }}>
    {children || "The quick brown fox jumps over the lazy dog"}
  </span>
);

const LineHeightExample = ({ lineHeight }) => (
  <div
    style={{
      fontFamily: fonts.default,
      lineHeight,
      padding: "8px",
      backgroundColor: "#1a1a1a",
      border: "1px solid #333",
      color: "#f8f8f8",
    }}
  >
    This is an example text with line height.
    <br />
    It shows how the text is spaced vertically.
    <br />
    Multiple lines help visualize the effect.
  </div>
);

const LetterSpacingExample = ({ letterSpacing, tokenName }) => {
  const isWide = tokenName === "wider" || tokenName === "widest";

  return (
    <span
      style={{
        fontFamily: fonts.default,
        letterSpacing,
        fontWeight: isWide ? "bold" : "normal",
        textTransform: isWide ? "uppercase" : "none",
        color: "#f8f8f8",
      }}
    >
      {isWide ? "LETTER SPACING EXAMPLE" : "Letter spacing example"}
    </span>
  );
};

const TypographySection = ({ title, children, marginBottom = "32px" }) => (
  <div style={{ marginBottom }}>
    <h2 style={{ marginBottom: "16px" }}>{title}</h2>
    {children}
  </div>
);

const TypeExampleText = ({ style, children }) => (
  <div style={{ ...style, marginBottom: "8px", color: "#f8f8f8" }}>
    {children}
  </div>
);

const TypeExampleCard = ({ title, children }) => (
  <div>
    <h3 style={{ marginBottom: "8px", color: "#f8f8f8" }}>{title}</h3>
    {children}
  </div>
);

const meta = {
  title: "Design Tokens/Typography",
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

export const Typography = () => {
  const fontTransformers = {
    example: (value) => <FontExample fontFamily={value} />,
  };

  const fontWeightTransformers = {
    example: (value) => <FontWeightExample fontWeight={value} />,
  };

  const lineHeightTransformers = {
    example: (value) => <LineHeightExample lineHeight={value} />,
  };

  const letterSpacingTransformers = {
    example: (value, key) => (
      <LetterSpacingExample letterSpacing={value} tokenName={key} />
    ),
  };

  const columns = [
    { id: "name", header: "Token" },
    { id: "value", header: "Value" },
    { id: "example", header: "Example" },
  ];

  const headingStyles = {
    h1: {
      fontFamily: fonts.heading,
      fontSize: fontSizes["4xl"],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
    },
    h2: {
      fontFamily: fonts.heading,
      fontSize: fontSizes["3xl"],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
    },
    h3: {
      fontFamily: fonts.heading,
      fontSize: fontSizes["2xl"],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
    },
    h4: {
      fontFamily: fonts.heading,
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
    },
  };

  const textStyles = {
    regular: {
      fontFamily: fonts.default,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.base,
      marginBottom: "16px",
    },
    small: {
      fontFamily: fonts.default,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.base,
      marginBottom: "16px",
    },
    bold: {
      fontFamily: fonts.default,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.bold,
    },
    italic: {
      fontFamily: fonts.default,
      fontSize: fontSizes.md,
      fontStyle: "italic",
    },
    mono: {
      fontFamily: fonts.mono,
      fontSize: fontSizes.sm,
      backgroundColor: "#1a1a1a",
      padding: "4px 8px",
      borderRadius: "4px",
    },
    uppercase: {
      fontFamily: fonts.default,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.bold,
      letterSpacing: letterSpacings.wider,
      textTransform: "uppercase",
    },
  };

  return (
    <Container>
      <Title title="Typography" />

      <Description description="Typography tokens define the font families, sizes, weights, line heights, and letter spacings used throughout the UI. These tokens work together to create a cohesive typographic system." />

      <TypographySection title="Font Families">
        <Table
          tokens={fonts}
          columns={columns}
          transformers={fontTransformers}
        />
      </TypographySection>

      <TypographySection title="Font Weights">
        <Table
          tokens={fontWeights}
          columns={columns}
          transformers={fontWeightTransformers}
        />
      </TypographySection>

      <TypographySection title="Line Heights">
        <Table
          tokens={lineHeights}
          columns={columns}
          transformers={lineHeightTransformers}
        />
      </TypographySection>

      <TypographySection title="Letter Spacings">
        <Table
          tokens={letterSpacings}
          columns={columns}
          transformers={letterSpacingTransformers}
        />
      </TypographySection>

      <TypographySection title="Typography Combinations">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            padding: "24px",
            backgroundColor: "#242424",
            borderRadius: "8px",
          }}
        >
          <TypeExampleCard title="Heading Styles">
            <TypeExampleText style={headingStyles.h1}>
              Heading 1 (4xl)
            </TypeExampleText>
            <TypeExampleText style={headingStyles.h2}>
              Heading 2 (3xl)
            </TypeExampleText>
            <TypeExampleText style={headingStyles.h3}>
              Heading 3 (2xl)
            </TypeExampleText>
            <TypeExampleText style={headingStyles.h4}>
              Heading 4 (xl)
            </TypeExampleText>
          </TypeExampleCard>

          <TypeExampleCard title="Body Text">
            <TypeExampleText style={textStyles.regular}>
              This is regular body text using the default font at medium size.
              The line height is set to "base" to provide comfortable reading.
              This is typically used for the main content of your application.
            </TypeExampleText>
            <TypeExampleText style={textStyles.small}>
              This is smaller body text, which can be used for less prominent
              content, secondary information, or in space-constrained areas of
              the interface.
            </TypeExampleText>
          </TypeExampleCard>

          <TypeExampleCard title="Special Text Styles">
            <TypeExampleText style={textStyles.bold}>
              Bold text for emphasis
            </TypeExampleText>
            <TypeExampleText style={textStyles.italic}>
              Italic text for emphasis or quotes
            </TypeExampleText>
            <TypeExampleText style={textStyles.mono}>
              Monospace text for code
            </TypeExampleText>
            <TypeExampleText style={textStyles.uppercase}>
              Uppercase with wider spacing
            </TypeExampleText>
          </TypeExampleCard>
        </div>
      </TypographySection>
    </Container>
  );
};
