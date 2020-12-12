import React, { useEffect, useState} from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Error from "./Error/Error.jsx";

import EventDetails from "./EventDetails/EventDetails.jsx";
import CreateEventForm from "./CreateEventForm/CreateEventForm.jsx";
import CategoryPage from "./CategoryPage/CategoryPage.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import AddEventButton from "./AddEventButton/AddEventButton.jsx";
import Footer from "./Footer/Footer.jsx";
import { isEmpty } from "lodash";
import styles from "./App.module.css";

function App() {

  const [eventsData, setEventsData] = useState();
  const [categoriesData, setCategoriesData] = useState();
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchEventsData = async () => {
      const events = await fetch("http://demo0649072.mockable.io/events");
      const eventsJson = await events.json();
      setEventsData(Object.values(eventsJson));
    };

    const fetchCategoriesData = async () => {
      const categories = await fetch("http://demo0649072.mockable.io/categories");
      const categoriesJson = await categories.json();
      setCategoriesData(Object.values(categoriesJson));
    };

    if (isEmpty(eventsData)) {
      fetchEventsData();
    }

    if (isEmpty(categoriesData)) {
      fetchCategoriesData();
    }

  }, [eventsData, categoriesData]);

  console.log("eventsData");
  console.log(eventsData);
  console.log("categoriesData");
  console.log(categoriesData);

  function searchEvents(value) {
    console.log(value);
    setSearchField(value);
  }

  const onSearchClick = async () => {
      const response = await fetch("http://demo0649072.mockable.io/events");
      const events = await response.json();
      let data = [];
      for(let i = 0; i < events.length; i++) {
          if(events[i].title.includes(searchField)) {
              data.push(events[i]);
          }
      }
      setEventsData(data);
      
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            {/* these links should show you how to connect up a link to a specific route */}
            <li className={styles.home}>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <SearchBox onChange={searchEvents} onClick={onSearchClick} />
        <Link to="/event/new">
            <AddEventButton />
        </Link>
      </header>
      
      <Switch>
        <Route 
          path="/" 
          exact 
          render={() => <Home events={eventsData} categories={categoriesData} />}
        />
        <Route 
          path="/event/new"
          exact
          render={() => <CreateEventForm />}
        />
        <Route
          path="/event/:eventId"
          exact
          render={({ match }) => (
            <EventDetails
              event={match.params.eventId}
            />
          )}
        />
        <Route
          path="/event/category/:categoryName"
          exact
          render={({ match }) => (
            <CategoryPage categoryName={match.params.categoryName} />
          )}
         />
        <Route component={Error} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
