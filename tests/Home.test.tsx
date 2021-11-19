import { render, screen } from "@testing-library/react";
import * as React from "react";

import Game from "../src/components/Home";

describe("Home", (): void => {
  it("should contain tag line text", (): void => {
    render(<Game />);

    const headings: HTMLElement[] = screen.getAllByRole("heading");
    expect(headings[0]).toContainHTML("TITLE");
    expect(headings[1]).toContainHTML("SUBTITLE");
  });
});
