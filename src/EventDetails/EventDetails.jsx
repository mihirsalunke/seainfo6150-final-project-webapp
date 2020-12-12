import React, { useEffect, useState } from "react";
import RegisterButton from "../RegisterButton/RegisterButton.jsx";
import RegistrationForm from "../RegistrationForm/RegistrationForm.jsx";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import styles from "./EventDetails.module.css";

const EventDetails = (props) => {

    const [registration, setRegistration] = useState(false);
    const [eventsData, setEventsData] = useState();
    const [event, setEvent] = useState();

    useEffect(() => {
        const fetchEventsData = async () => {
          const events = await fetch("http://demo0649072.mockable.io/events");
          const eventsJson = await events.json();
          setEventsData(Object.values(eventsJson));

          for(let i = 0; i < eventsJson.length; i++) {
            if(eventsJson[i].eventId === props.event) {
                setEvent(eventsJson[i]);
            }
          }
        };
    
        if (isEmpty(eventsData)) {
          fetchEventsData();
        }
    });
    
    function register() {
        setRegistration(true);
    };

    return isEmpty(event) ? <div>Fetching Event</div> : (
        <>
            {
                registration ? (
                    <RegistrationForm event={event}/>
                ) : (
                    <div className={styles.container}>
                        <div className={styles.heading}>
                            <h1>{event.title}</h1>
                        </div>
                        <div className={styles.description}>
                            <p>{event.description}</p>
                        </div>
                        <div className={styles.text}>
                            <p>On: <span>
                                <time dateTime={event.date}>{event.eventDate}</time>,   <time dateTime={event.time}>{event.eventTime}</time>
                            </span>
                            </p>
                        </div>
                        <div className={styles.text}>
                            <p>At: <span>{event.location}</span></p>
                        </div>
                        <div className={styles.organizerDetails}>
                            <div className={styles.title}><p>Organized by: <span>{event.organizerName}</span></p></div>
                            <div className={styles.text}><p>Contact: <span>{event.organizerContactNumber}</span></p></div>
                        </div>
                        <RegisterButton onClick={register}/>
                    </div>
                )
            }
        </>
    );
};

EventDetails.propTypes = {
    event: PropTypes.string.isRequired,
};

export default EventDetails;