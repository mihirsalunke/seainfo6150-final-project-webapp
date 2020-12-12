import React from "react";
import EventDetails from "./EventDetails.jsx";
import { render } from "@testing-library/react";

const event = "110002";

describe("EventDetails tests", () => {
    it("renders correctly", () => {
      const { container } = render(<EventDetails event={event} />);
      expect(container).toMatchSnapshot();
    });
});