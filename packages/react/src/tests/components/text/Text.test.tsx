import { describe, expect, it } from "vitest";

import { Text } from "@/components/text";
import { render, screen } from "@/tests/utils";

describe("<Text />", () => {
  beforeEach(() => {
    render(<Text data-testid="text">Cariocas são bonitos</Text>);
  });

  it("should render the text correctly as expected", () => {
    expect(screen.getByText(/Cariocas são bonitos/i)).toBeInTheDocument();
  });

  it("shouldn't render the text correctly", () => {
    expect(screen.queryByText(/Cariocas são bacanas/i)).not.toBeInTheDocument();
  });

  it("should render correctly", () => {
    expect(screen.getByTestId("text")).toMatchSnapshot();
  });
});
