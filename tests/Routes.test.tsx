import { render, screen } from "@testing-library/react";
import * as React from "react";

import Routes from "../src/components/Routes";

describe("Routes", (): void => {
  it("should render routes", (): void => {
    render(<Routes />);

    expect(screen.getAllByRole("link")).toHaveLength(3);
  });
});
