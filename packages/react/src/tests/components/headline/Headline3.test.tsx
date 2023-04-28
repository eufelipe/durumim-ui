import { describe, expect, it } from "vitest";

import { Headline3 } from "@/components/headline";
import { render, screen } from "@/tests/utils";

describe("<Headline3 />", () => {
  beforeEach(() => {
    render(<Headline3 data-testid="headline3">Agora eu era o herói</Headline3>);
  });

  it("should render the text correctly as expected", () => {
    expect(screen.queryByText(/Agora eu era o herói/i)).toBeInTheDocument();
  });

  it("shouldn't render the text correctly", () => {
    expect(
      screen.queryByText(/E o meu cavalo só falava inglês/i)
    ).not.toBeInTheDocument();
  });

  it("should render correctly", () => {
    expect(screen.getByTestId("headline3")).toMatchSnapshot();
  });
});
