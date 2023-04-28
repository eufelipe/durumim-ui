import { describe, expect, it } from "vitest";

import { Headline1 } from "@/components/headline";
import { render, screen } from "@/tests/utils";

describe("<Headline1 />", () => {
  beforeEach(() => {
    render(
      <Headline1 data-testid="headline1">
        Amou daquela vez como se fosse a última
      </Headline1>
    );
  });

  it("should render the text correctly as expected", () => {
    expect(
      screen.queryByText(/Amou daquela vez como se fosse a última/i)
    ).toBeInTheDocument();
  });

  it("shouldn't render the text correctly", () => {
    expect(
      screen.queryByText(/Beijou sua mulher como se fosse a última/i)
    ).not.toBeInTheDocument();
  });

  it("should render correctly", () => {
    expect(screen.getByTestId("headline1")).toMatchSnapshot();
  });
});
