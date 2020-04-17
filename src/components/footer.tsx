import * as React from 'react';
import styles from "./footer.module.scss";
class Footer extends React.Component {
    render() {
        return (<footer className={styles.footer}>
            <p>Jo Sheringham | Site Developer: Sian Richards</p>
        </footer>);
    }
}

export default Footer;