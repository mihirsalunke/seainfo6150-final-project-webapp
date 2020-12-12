import React from "react";
import AddEventConfirmation from "./AddEventConfirmation.jsx";
import { render } from "@testing-library/react";

const eventName = "Future of AI";
const eventDate = "2020-12-24";
const eventTime = "1:00 pm";
const eventLocation = "Chicago";

describe("AddEventConfirmation tests", () => {
    it("renders correctly", () => {
      const { container } = render(<AddEventConfirmation eventName={eventName} eventDate={eventDate} eventTime={eventTime} eventLocation={eventLocation} />);
      expect(container).toMatchSnapshot();
    });
});