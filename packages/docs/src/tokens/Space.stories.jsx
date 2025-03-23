import { space } from "@durumim-ui/design-tokens";
import React from "react";

import {
  Container,
  Description,
  ThreeColumnTable,
  Title,
  TokenVisualizer,
} from "../ui";

const meta = {
  title: "Design Tokens/Space",
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

export const Space = () => {
  return (
    <Container>
      <Title title="Space" />

      <Description>
        Space tokens define consistent spacing throughout the UI. These values
        can be used for margins, paddings, gaps, and positioning elements.
      </Description>

      <ThreeColumnTable
        tokens={space}
        title="Space"
        description="These are the available spacing values."
      />

      <TokenVisualizer
        tokens={space}
        title="Visual Examples"
        description="Visualization of spaces"
        renderSample={(_, value) => (
          <div
            style={{
              height: value,
              width: "100%",
              backgroundColor: "#4ba695",
              borderRadius: "4px",
            }}
          />
        )}
      />
    </Container>
  );
};
