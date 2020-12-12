import React from 'react'
import EventList from "../EventList/EventList.jsx";
import EventCategoryList from "../EventCategoryList/EventCategoryList.jsx";
import PropTypes from "prop-types";

const Home = ({ events, categories }) => {

    return (
        <div>
            <EventCategoryList categories={categories}/>
            <EventList events={events} />
            {/* <Footer /> */}
        </div>
    );
};

Home.propTypes = {
    events: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
};

export default Home;
