import React from  "React";
import CreateEventForm from "./CreateEventForm.jsx";
import { render } from "@testing-library/react";

describe("CreateEventForm tests", () => {
    it("renders correctly", () => {
      const { container } = render(<CreateEventForm />);
      expect(container).toMatchSnapshot();
    });
});