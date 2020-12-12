import React from "react";
import styles from "./RegisterButton.module.css";

const RegisterButton = (props) => {
    return (
        <button className={styles.registerButton} onClick={props.onClick}>
            Register
        </button>
    );
};

export default RegisterButton;