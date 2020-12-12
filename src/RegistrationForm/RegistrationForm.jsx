import React, { useState } from "react";
import Confirmation from "../Confirmation/Confirmation.jsx";
import PropTypes from "prop-types";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = (props) => {
    const [submittedForm, setSubmittedForm] = useState();
    function onSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        setSubmittedForm(data);
    };

    return (
        <>
            {
                submittedForm ? (
                    <Confirmation name={submittedForm.get("myName")} contactNumber={submittedForm.get("myContactNumber")} email={submittedForm.get("myEmail")} event={props.event} />
                ) : (
                    <div className={styles.container}>
                        <div className={styles.eventDetailsContainer}>
                            <div className={styles.title}>
                                <p>Register for <span>{props.event.title}</span></p>
                            </div>
                            <div className={styles.text}>
                                <p>Event Date: <time dateTime={props.event.date}>{props.event.eventDate}</time></p>
                                <p>Event Time: <time dateTime={props.event.time}>{props.event.eventTime}</time></p>
                            </div>
                            <div className={styles.text}>
                                <p>Event Location: <span>{props.event.location}</span></p>
                            </div>
                            <div className={styles.text}>
                                <p>Organized by: <span>{props.event.organizerName}</span></p>
                            </div>
                        </div>
                        <form onSubmit={onSubmit} className={styles.registrationForm}>
                            <div className={styles.title}>
                                <p>Participant's Information: </p>
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="nameId">Name: </label>
                                <input className={styles.input} type="text" name="myName" id="nameId" required/>
                            </div>
                            
                            <div className={styles.formField}>
                                <label htmlFor="contactId">Phone Number: </label>
                                <input className={styles.input} type="tel" name="myContactNumber" id="contactId" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required/>
                            </div>
                            
                            <div className={styles.formField}>
                                <label htmlFor="emailId">Email: </label>
                                <input className={styles.input} type="email" name="myEmail" id="emailId" placeholder="sou@example.com" required/>
                            </div>
                            
                            <div className={styles.buttonContainer}>
                                <input className={styles.submitButton} type="submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                )
            }
        </>
    );
};

RegistrationForm.propTypes = {
    event: PropTypes.object.isRequired,
};

export default RegistrationForm;