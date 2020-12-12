import React from "react";
import EventCard from "../EventCard/EventCard.jsx";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import Loading from "../images/loading.gif";
import PropTypes from "prop-types";
import styles from "./EventList.module.css";

const EventList = (props) => {

    let displayContent;

    if (!isEmpty(props.events)) {
        displayContent = (
            <ul className={styles.container}>
                {props.events.map((event) => (
                    <li className={styles.eventItem} key={event.eventId}>
                        <Link to={`/event/${event.eventId}`} key={event.eventId}>
                            <EventCard event={event} />
                        </Link>
                    </li>
                ))}
            </ul>
        );
    } else {
        displayContent = <div><img className="loading" src={Loading} alt="loading" /></div>;
    }

    return (
        <div>
            {displayContent}
        </div>
    );
};

EventList.propTypes = {
    events: PropTypes.array.isRequired
};

export default EventList;