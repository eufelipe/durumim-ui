import { describe, expect, it } from "vitest";

import { Title } from "@/components/headline";
import { render, screen } from "@/tests/utils";

describe("<Title />", () => {
  beforeEach(() => {
    render(
      <Title data-testid="title">
        Deixa eu dançar, pro meu corpo ficar odara
      </Title>
    );
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

  it("should render correctly", () => {
    expect(screen.getByTestId("title")).toMatchSnapshot();
  });
});
