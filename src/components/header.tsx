import * as React from 'react';
import styles from "./header.module.scss";
import Nav from "./nav";
import { RouteComponentProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
 
interface IProps {
    history: RouteComponentProps;
}
class Header extends React.Component<IProps> {
    render() { 
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
        <Nav history={this.props.history}/>
        </React.Fragment>);
    }
}
 
export default Header;