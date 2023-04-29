import { describe, expect, it } from "vitest";

import { LeadParagraph } from "@/components/text";
import { render, screen } from "@/tests/utils";

describe("<LeadParagraph />", () => {
  beforeEach(() => {
    render(
      <LeadParagraph data-testid="lead-paragraph">
        Você, precisa aprender inglês, precisa aprender o que eu sei
      </LeadParagraph>
    );
  });

  it("should render the lead paragraph correctly as expected", () => {
    expect(
      screen.getByText(
        /Você, precisa aprender inglês, precisa aprender o que eu sei/i
      )
    ).toBeInTheDocument();
  });

  it("shouldn't render the lead paragraph correctly", () => {
    expect(
      screen.queryByText(/E o que eu não sei mais/i)
    ).not.toBeInTheDocument();
  });

  it("should render correctly", () => {
    expect(screen.getByTestId("lead-paragraph")).toMatchSnapshot();
  });
});
