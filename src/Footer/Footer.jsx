import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.margin}>
                <p>Mihir Salunke</p>
                <p>A Web Design Project, @Northeastern University, Seattle, WA, USA</p>
            </div>
        </div>
    )
}

export default Footer;