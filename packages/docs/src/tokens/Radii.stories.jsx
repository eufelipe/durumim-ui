import { colors, radii } from "@durumim-ui/design-tokens";
import React from "react";

import { Container, Description, Table, Title, TokenVisualizer } from "../ui";

const meta = {
  title: "Design Tokens/Radii",
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

export const Radii = () => {
  const useCases = {
    none: "Elements without rounding",
    xs: "Elements with subtle rounding, such as small inputs and buttons",
    sm: "Elements with medium rounding, such as cards and buttons",
    md: "Elements with more pronounced rounding",
    lg: "Elements with expressive rounding, such as modals",
    full: "Elements with full rounding, such as badges or avatars",
  };

  return (
    <Container>
      <Title title="Radius" />

      <Description>
        Border-radius tokens define the rounding of the corners of elements.
        <br />
        They help create a consistent visual language and affect the perception
        of smoothness of the interface.
      </Description>

      <TokenVisualizer
        tokens={radii}
        title="Visualization of Border Radius"
        renderSample={(_, value) => (
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: colors.primary,
              borderRadius: value,
            }}
          />
        )}
      />

      <Table
        tokens={radii}
        columns={[
          { id: "name", header: "Name" },
          { id: "value", header: "Value" },
          { id: "useCase", header: "Recommended Use" },
        ]}
        title="Border Radius Tokens"
        transformers={{
          useCase: (_, key) => useCases[key] || "Generic use case",
        }}
      />
    </Container>
  );
};
