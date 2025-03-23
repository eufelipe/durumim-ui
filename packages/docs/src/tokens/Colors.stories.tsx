import { colors } from "@durumim-ui/design-tokens";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ColorSwatches, Container, Description, Title } from "../ui";

export interface ColorPalette {
  [key: string]: string;
}

const meta: Meta = {
  title: "Design Tokens/Colors",
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Colors: Story = {
  render: () => {
    const brandColors: ColorPalette = {
      primary: colors.primary,
      secondary: colors.secondary,
      accent: colors.accent,
      alert: colors.alert,
    };

    const neutralColors: ColorPalette = {
      white: colors.white,
      light: colors.light,
      purify: colors.purify,
      lightness: colors.lightness,
      clean: colors.clean,
      zinc: colors.zinc,
      stone: colors.stone,
      dark: colors.dark,
      slate: colors.slate,
      black: colors.black,
    };

    const stateColors: ColorPalette = {
      success: colors.success,
      successLight: colors.successLight,
      info: colors.info,
      infoLight: colors.infoLight,
      warning: colors.warning,
      warningLight: colors.warningLight,
      danger: colors.danger,
      dangerLight: colors.dangerLight,
    };

    const scales: Record<string, Record<string, string>> = {
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      orange: colors.orange,
      pink: colors.pink,
    };

    const scaleComponents = Object.entries(scales).map(([name, palette]) => {
      const colorMap: Record<string, string> = {};
      Object.entries(palette).forEach(([key, value]) => {
        colorMap[key] = value as string;
      });

      return (
        <div key={name}>
          <ColorSwatches
            colors={colorMap}
            title={name.charAt(0).toUpperCase() + name.slice(1)}
          />
        </div>
      );
    });

    return (
      <Container>
        <Title title="Colors" />

        <Description>
          Durumim UI uses a carefully curated color palette to create consistent,
          accessible, and visually appealing interfaces.
          <br />
          These color tokens provide a foundation for all UI components and can
          be used directly in your applications.
        </Description>

        <ColorSwatches colors={brandColors} title="Brand Colors" />

        <ColorSwatches colors={neutralColors} title="Neutral Colors" />

        <ColorSwatches colors={stateColors} title="State Colors" />

        <h2 style={{ marginTop: "48px", marginBottom: "32px" }}>
          Color Scales
        </h2>

        {scaleComponents}
      </Container>
    );
  },
};
