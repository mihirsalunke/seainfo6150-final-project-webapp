import React from "react";
import PropTypes from "prop-types";
import styles from "./AddEventConfirmation.module.css";

const AddEventConfirmation = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.confirmationMessage}>
                <p>Thank You..!! <br/>Event <b>{props.eventName}</b> successfully created</p>
            </div>

            <div className={styles.eventDetails}>
                <div className={styles.title}>
                    <p>Event Details:</p>
                </div>

                <div className={styles.text}>
                    <p>Event Name: <span>{props.eventName}</span></p>
                </div>
                <div className={styles.text}>
                    <p>Event Date: <span>{props.eventDate}</span></p>
                    <p>Event Time: <span>{props.eventTime}</span></p>
                </div>
                <div className={styles.location}>
                    <p>Event Location: <span>{props.eventLocation}</span></p>
                </div>
            </div>
        </div>
    );
};

AddEventConfirmation.propTypes = {
    eventName: PropTypes.string.isRequired,
    eventDate: PropTypes.string.isRequired,
    eventTime: PropTypes.string.isRequired,
    eventLocation: PropTypes.string.isRequired,
};

export default AddEventConfirmation;