import React from "react";
import EventCategoryList from "./EventCategoryList.jsx";
import { render } from "@testing-library/react";

const categories = [
    {
      "categoryName": "Sports",
      "categoryId": "1"
    },
    {
      "categoryName": "Tech",
      "categoryId": "2"
    },
    {
      "categoryName": "Music",
      "categoryId": "3"
    },
    {
      "categoryName": "Fashion",
      "categoryId": "4"
    },
    {
      "categoryName": "Health",
      "categoryId": "5"
    }
];

describe("EventCategoryList tests", () => {
    it("renders correctly", () => {
      const { container } = render(<EventCategoryList categories={categories}/>);
      expect(container).toMatchSnapshot();
    });
});