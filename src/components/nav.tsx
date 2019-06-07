import * as React from 'react';
import styles from "./nav.module.scss"

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Nav extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <nav className={styles.navbar}>
            <li>Home</li>
            <li>Daniel</li>
            <li>From Inside</li>
            <li>My Detective Darling</li>
            <li>Jonah</li>
            <li>Contact Us</li>
        </nav> );
    }
}
 
export default Nav;