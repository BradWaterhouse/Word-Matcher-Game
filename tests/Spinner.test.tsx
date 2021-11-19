import { render, screen } from "@testing-library/react";
import * as React from "react";

import { Spinner } from "../src/components/Spinner";

describe("Loading", (): void => {
  it("should render with spinner CSS class", (): void => {
    render(<Spinner />);
    expect(screen.getAllByTestId("spinner")).toHaveLength(1);
  });
});
