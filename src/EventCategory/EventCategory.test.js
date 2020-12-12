import React from "react";
import EventCategory from "./EventCategory.jsx";
import { render } from "@testing-library/react";

const category = {
    "categoryName": "Sports",
    "categoryId": "1"
};

describe("EventCategory tests", () => {
    it("renders correctly", () => {
      const { container } = render(<EventCategory category={category} />);
      expect(container).toMatchSnapshot();
    });
});