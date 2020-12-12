import React, { useEffect, useState} from "react";
import EventList from "../EventList/EventList.jsx";
import PropTypes from "prop-types";
import Loading from "../images/loading.gif";
import { isEmpty } from "lodash";

const CategoryPage = (props) => {

    const [eventsData, setEventsData] = useState();
    const [events, setEvents] = useState();

    useEffect(() => {
        const fetchEventsData = async () => {
          const eventsData = await fetch("http://demo0649072.mockable.io/events");
          const eventsJson = await eventsData.json();
          setEventsData(Object.values(eventsJson));
          let data = [];
          for(let i = 0; i < eventsJson.length; i++) {
              if(eventsJson[i].category === props.categoryName) {
                  data.push(eventsJson[i]);
              }
          }
          setEvents(data);
        };
    
        if (isEmpty(eventsData)) {
          fetchEventsData();
        }
    });

    return isEmpty(events) ? 
        <div   
            ><p>Fetching {props.categoryName} Events</p>
            <div>
                <img className="loading" src={Loading} alt="loading" />
            </div>
        </div> : (
        <>
            <div>
                <h1>{props.categoryName} Events:</h1>
            </div>
            <EventList events={events} />
        </>
    );
};

CategoryPage.propTypes = {
    categoryName: PropTypes.string.isRequired,
};

export default CategoryPage;