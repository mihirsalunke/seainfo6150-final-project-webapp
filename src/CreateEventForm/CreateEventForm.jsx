import React, { useState } from "react";
import AddEventConfirmation from "../AddEventConfirmation/AddEventConfirmation.jsx";
import styles from "./CreateEventForm.module.css";

const CreateEventForm = () => {
    const [submittedForm, setSubmittedForm] = useState();
    function onSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        setSubmittedForm(data);
    };

    return (
        <div>
            {
                submittedForm ? (
                    <>
                        <AddEventConfirmation eventName={submittedForm.get("myEventName")} eventDate={submittedForm.get("myEventDate")} eventTime={submittedForm.get("myEventTime")} eventLocation={submittedForm.get("myLocation")} />
                    </>
                ) : (
                    <>
                        <div className={styles.container}>
                            <div className={styles.title}>
                                <p>Create New Event:</p>
                            </div>
                            <form onSubmit={onSubmit} className={styles.createEventForm}>
                                <div className={styles.formField}>
                                    <label htmlFor="organizerNameId">Organizer Name: </label>
                                    <input type="text" name="myOrganizerName" id="organizerNameId" required/>
                                </div>
                                
                                <div className={styles.formField}>
                                    <label htmlFor="contactId">Phone Number: </label>
                                    <input type="tel" name="myContactNumber" id="contactId" required/>
                                </div>
                                
                                <div className={styles.formField}>
                                    <label htmlFor="eventId">Event Name: </label>
                                    <input type="text" name="myEventName" id="eventId" required/>
                                </div>
                                
                                <div className={styles.formField}>
                                    <label htmlFor="eventDate">Event Date: </label>
                                    <input type="date" name="myEventDate" id="eventDate" required/>
                                </div>
                                
                                <div className={styles.formField}>
                                    <label htmlFor="eventTime">Event Time: </label>
                                    <input type="time" name="myEventTime" id="eventTime" required/>
                                </div>
                                
                                <div className={styles.formField}>
                                    <label htmlFor="location">Location: </label>
                                    <input type="text" name="myLocation" id="location" required/>
                                </div>
                                
                                <div className={styles.formDropdown}>
                                    <label htmlFor="categoryDropdown">Event Category: </label>
                                    <select name="myCategoryDropdown" id="categoryDropdown">
                                        <option value="Sports">Sports</option>
                                        <option value="Tech">Tech</option>
                                        <option value="Music">Music</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Health">Health</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                
                                <div className={styles.formRadio}>
                                    <p>Event Type:</p>
                                    <div className={styles.radio}>
                                        <input type="radio" name="eventType" id="publicEvent" value="public"/>
                                        <label htmlFor="publicEvent">Public</label>
                                    </div>
                                    <div className={styles.radio}>
                                        <input type="radio" name="eventType" id="privateEvent" value="private"/>
                                        <label htmlFor="privateEvent">Private</label>
                                    </div>
                                </div>
                                
                                <div className={styles.formCheckbox}>
                                    <div className={styles.checkbox}>
                                        <input type="checkbox" name="eventOption" id="inviteOnly" value="invite required"/>
                                        <label htmlFor="inviteOnly">Make the event invite only</label>
                                    </div>
                                    <div className={styles.checkbox}>
                                        <input type="checkbox" name="eventOption" id="idRequired" value="id required"/>
                                        <label htmlFor="idRequired">Participant's ID required</label>
                                    </div>
                                </div>

                                <div className={styles.buttonContainer}>
                                    <input className={styles.submitButton} type="submit" value="Create Event"/>
                                </div>
                            </form>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default CreateEventForm;