import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer.jsx";

it("renders the Footer component correctly", () => {
  const { container } = render(
    <Footer/>
    );
  expect(container).toMatchSnapshot();
});