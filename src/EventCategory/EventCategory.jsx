import React from "react";
import styles from "./EventCategory.module.css";
import PropTypes from "prop-types";

const EventCategory = (props) => {
    return (
        <div className={styles.category}>
            {props.category.categoryName}
        </div>
    );
};

EventCategory.propTypes = {
    category: PropTypes.object.isRequired,
};

export default EventCategory;