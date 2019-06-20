import * as React from 'react';
import styles from "./header.module.scss";
import Nav from "./nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Header extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment><header className={styles.header}>
        <div className={styles.links}>
        <a href="https://www.facebook.com/sheringhambooks/Facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} className={styles.icons} /></a>
            <a href="mailto:jo@sheringhambooks.com"><FontAwesomeIcon icon={faEnvelope} className={styles.icons} /></a>
            </div>
            <div >
            <h1 className={styles.title}>
            Jo Sheringham
            </h1>
            </div>
        </header> 
        <Nav />
        </React.Fragment>);
    }
}
 
export default Header;