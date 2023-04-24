import { describe, expect, it } from "vitest";

import { Headline } from "@/components/headline/Headline";
import { render, screen } from "@/tests/test-utils";

describe("<Headline />", () => {
  beforeEach(() => {
    render(<Headline>Deixa eu dançar, pro meu corpo ficar odara</Headline>);
  });

  it("should render the text correctly as expected", () => {
    expect(
      screen.getByText(/Deixa eu dançar, pro meu corpo ficar odara/i)
    ).toBeInTheDocument();
  });

  it("shouldn't render the text correctly", () => {
    expect(
      screen.queryByText(/Minha cara, minha cuca ficar odara/i)
    ).not.toBeInTheDocument();
  });

  it("This should have the color gray100", () => {
    expect(
      screen.getByText(/Deixa eu dançar, pro meu corpo ficar odara/i)
    ).toHaveStyle({
      color: "rgba(184, 191, 204)",
    });
  });

  it("This should have the font size 2xl", () => {
    expect(screen.getByText(/Deixa eu dançar, pro meu corpo ficar odara/i)).toHaveStyle({
      "font-size": "1.5em",
    });
  });
});
