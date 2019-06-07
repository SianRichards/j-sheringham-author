import * as React from 'react';
import styles from "./nav.module.scss"
import {Link} from "react-router-dom";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Nav extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <nav className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="/daniel">Daniel</Link>
            <Link to="/from-inside">From Inside</Link>
            <Link to="/my-detective-darling">My Detective Darling</Link>
            <Link to="/jonah">Jonah</Link>
            <Link to="/contact-us">Contact Us</Link>
        </nav> );
    }
}
 
export default Nav;