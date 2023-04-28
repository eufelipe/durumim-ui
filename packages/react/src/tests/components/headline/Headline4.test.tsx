import { describe, expect, it } from "vitest";

import { Headline4 } from "@/components/headline";
import { render, screen } from "@/tests/utils";

describe("<Headline4 />", () => {
  beforeEach(() => {
    render(<Headline4 data-testid="headline4">Ainda é cedo, amor</Headline4>);
  });

  it("should render the text correctly as expected", () => {
    expect(screen.queryByText(/Ainda é cedo, amor/i)).toBeInTheDocument();
  });

  it("shouldn't render the text correctly", () => {
    expect(
      screen.queryByText(/Mal começaste a conhecer a vida/i)
    ).not.toBeInTheDocument();
  });

  it("should render correctly", () => {
    expect(screen.getByTestId("headline4")).toMatchSnapshot();
  });
});
