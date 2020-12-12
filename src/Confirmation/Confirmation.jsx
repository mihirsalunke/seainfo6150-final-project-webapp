import React from "react";
import PropTypes from "prop-types";
import styles from "./Confirmation.module.css";

const Confirmation = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.confimationMessage}>
                <p>Congratulations..!! <br/>You are registered for <b>{props.event.title}</b></p>
            </div>
            
            <div className={styles.eventDetails}>
                <div className={styles.title}>
                    <p>Event Details:</p>
                </div>
                
                <div className={styles.datetime}>
                    <p>Event Date: <time dateTime={props.event.date}>{props.event.eventDate}</time></p>
                    <p>Event Time: <time dateTime={props.event.time}>{props.event.eventTime}</time></p>
                </div>
                <div className={styles.location}>
                    <p>Event Location: <span>{props.event.location}</span></p>
                </div>
            </div>

            <div className={styles.participantDetails}>
                <div className={styles.title}>
                    <p>Participant's Details:</p>
                </div>

                <div className={styles.text}>
                    <p>Participant Name: <span>{props.name}</span></p>
                </div>
                <div className={styles.text}>
                    <p>Contact Number: <span>{props.contactNumber}</span></p>
                </div>
                <div className={styles.text}>
                    <p>Email: <span>{props.email}</span></p>
                </div>
            </div>
        </div>
    );
};

Confirmation.propTypes = {
    event: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default Confirmation;