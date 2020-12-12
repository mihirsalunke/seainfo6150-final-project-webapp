import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home.jsx";

const events = [
  {
      "eventId": "1110001",
    "title": "Future of AI",
      "description": "Future of AI is showcasing latest innovation and business modules",
     "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tSKBQBaTBTW3fMOh_8KPz5CqGeT6AeptUA&usqp=CAU",
      "location": "Chicago",
     "organizerName": "B2C Tech Inc",
      "organizerContactNumber": "351-800-0120",
      "category": "Tech",
     "date": "2020-12-24",
     "time": "13:00",
      "eventDate": "December 24th 2020",
      "eventTime": "1:00 pm"
  }
];

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

it("renders the home component correctly", () => {
  const { container } = render(<Home events={events} categories={categories} />);
  expect(container).toMatchSnapshot();
});
