import React from 'react'
import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = (props) => {
    return (
        <div className={styles.searchBox}>
            <input
                className={styles.searchText}
                type='search'
                placeholder='search events...'
                onChange={e => props.onChange(e.target.value)}
            />
            <button className={styles.searchButton} onClick={props.onClick}>Search</button>
        </div>
    );
};

SearchBox.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default SearchBox;