import React from "react";
import AddEventButton from "./AddEventButton.jsx";
import { render } from "@testing-library/react";

describe("AddEventButton tests", () => {
    it("renders correctly", () => {
        const { container } = render(<AddEventButton />);
        expect(container).toMatchSnapshot();
    });
});