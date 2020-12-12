import React from "react";
import CategoryPage from "./CategoryPage.jsx";
import { render } from "@testing-library/react";

const categoryName = "Tech";

describe("CategoryPage tests", () => {
    it("renders correctly", () => {
      const { container } = render(<CategoryPage categoryName={categoryName} />);
      expect(container).toMatchSnapshot();
    });
});