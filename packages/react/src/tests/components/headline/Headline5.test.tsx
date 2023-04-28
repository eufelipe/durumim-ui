import { describe, expect, it } from "vitest";

import { Headline5 } from "@/components/headline";
import { render, screen } from "@/tests/utils";

describe("<Headline5 />", () => {
  beforeEach(() => {
    render(
      <Headline5 data-testid="headline5">Tomo guaraná, suco de caju</Headline5>
    );
  });

  it("should render the text correctly as expected", () => {
    expect(
      screen.queryByText(/Tomo guaraná, suco de caju/i)
    ).toBeInTheDocument();
  });

  it("shouldn't render the text correctly", () => {
    expect(
      screen.queryByText(/Goiabada para sobremesa/i)
    ).not.toBeInTheDocument();
  });

  it("should render correctly", () => {
    expect(screen.getByTestId("headline5")).toMatchSnapshot();
  });
});
