import React from "react";
import SearchBox from "./SearchBox.jsx";
import { render } from "@testing-library/react";

describe("SearchBox tests", () => {
    it("renders correctly", () => {
      const { container } = render(<SearchBox onChange={() => {}} />);
      expect(container).toMatchSnapshot();
    });
});