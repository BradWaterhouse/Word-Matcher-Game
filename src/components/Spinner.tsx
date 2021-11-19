import * as React from "react";
import { ReactElement } from "react";

export const Spinner = (): ReactElement => {
  return (
    <svg className="spinner" viewBox="0 0 50 50" data-testid="spinner">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  );
};
