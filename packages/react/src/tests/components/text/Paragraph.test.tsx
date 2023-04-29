import { describe, expect, it } from "vitest";

import { Paragraph } from "@/components/text";
import { render, screen } from "@/tests/utils";

describe("<Paragraph />", () => {
  beforeEach(() => {
    render(
      <Paragraph data-testid="paragraph">
        Terra, terra... Por mais distante, o errante navegante
      </Paragraph>
    );
  });

  it("should render the paragraph correctly as expected", () => {
    expect(
      screen.getByText(
        /Terra, terra... Por mais distante, o errante navegante/i
      )
    ).toBeInTheDocument();
  });

  it("shouldn't render the paragraph correctly", () => {
    expect(
      screen.queryByText(/Quem jamais te esqueceria?/i)
    ).not.toBeInTheDocument();
  });

  it("should render correctly", () => {
    expect(screen.getByTestId("paragraph")).toMatchSnapshot();
  });
});
