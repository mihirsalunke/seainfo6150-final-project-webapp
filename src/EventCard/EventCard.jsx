import React from "react";
import styles from "./EventCard.module.css";
import PropTypes from "prop-types";

const EventCard = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img src={props.event.image} alt={props.event.title}/>
                <h2 className={styles.title}>{props.event.title}</h2>
                <p className={styles.date}><time dateTime={props.event.date}>{props.event.eventDate}</time></p>
                <p className={styles.location}>Location: <span>{props.event.location}</span></p>
            </div>
        </div>
    );
};

EventCard.propTypes = {
    event: PropTypes.object.isRequired,
};

export default EventCard;