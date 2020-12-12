import React from "react";
import EventCategory from "../EventCategory/EventCategory.jsx";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import styles from "./EventCategoryList.module.css";

const EventCategoryList = (props) => {

    let displayContent;

    if (!isEmpty(props.categories)) {
        displayContent = (
            <div className={styles.container}>
                {props.categories.map((category) => (
                    <Link to={`/event/category/${category.categoryName}`} key={category.categoryId}>
                        <EventCategory category={category} />
                    </Link>
                ))}
            </div>
        );
    } else {
        displayContent = <div>Fetching Event Categories</div>;
    }

    return (
        <div>
            {displayContent}
        </div>
    );
};

EventCategoryList.propTypes = {
    categories: PropTypes.array.isRequired
};

export default EventCategoryList;