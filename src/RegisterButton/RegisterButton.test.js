import React from "react";
import RegisterButton from "./RegisterButton.jsx";
import { render } from "@testing-library/react";

describe("RegisterButton tests", () => {
    it("renders correctly", () => {
      const { container } = render(<RegisterButton />);
      expect(container).toMatchSnapshot();
    });
});