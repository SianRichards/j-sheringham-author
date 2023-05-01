import React, { useState } from "react";
import styles from "./header.module.scss";
import NavHook from "./navHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    location: any;
}

const HeaderHook = (props: IProps) => {
    const { location } = props;
    return ( <React.Fragment>
        <header className={styles.header}>
            <div className={styles.links}>
                <a href="https://www.facebook.com/sheringhambooks/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className={styles.icons} />
                </a>
                <a href="https://www.instagram.com/jo_sheringham/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagramSquare} className={styles.icons} />
                </a>
                <a href="mailto:jo@sheringhambooks.com">
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icons} />
                </a>
            </div>
            <div >
                <h1 className={styles.title}>
                    Jo Sheringham
                </h1>
            </div>
        </header>
    <NavHook location={location}/>
    </React.Fragment>);
}

export default HeaderHook;