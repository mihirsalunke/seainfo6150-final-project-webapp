import React from 'react'
import styles from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>  
                <h1>OOPS!!!</h1>
                <h2>404</h2>
                <h4>I am sorry, the page you requested could not be found</h4>
                <Link className={styles.link} to='/'>
                    Go back to Homepage
                </Link>
            </div>
        </div>
    )
}

export default Error
