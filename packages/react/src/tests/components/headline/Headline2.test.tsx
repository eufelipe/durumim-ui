import { describe, expect, it } from "vitest";

import { Headline2 } from "@/components/headline";
import { render, screen } from "@/tests/utils";

describe("<Headline2 />", () => {
  beforeEach(() => {
    render(<Headline2 data-testid="headline2">Estava à toa na vida</Headline2>);
  });

  it("should render the text correctly as expected", () => {
    expect(screen.queryByText(/Estava à toa na vida/i)).toBeInTheDocument();
  });

  it("shouldn't render the text correctly", () => {
    expect(screen.queryByText(/O meu amor me chamou/i)).not.toBeInTheDocument();
  });

  it("should render correctly", () => {
    expect(screen.getByTestId("headline2")).toMatchSnapshot();
  });
});
