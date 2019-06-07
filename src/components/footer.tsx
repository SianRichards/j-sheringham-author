import * as React from 'react';
import styles from "./footer.module.scss";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Footer extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <footer className={styles.footer}>
            <p>Jo Sheringham 2019 | Site Developer: Sian Richards</p>
        </footer> );
    }
}
 
export default Footer;