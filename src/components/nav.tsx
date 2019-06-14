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
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/about" className={styles.link}>About</Link>
            <Link to="/daniel" className={styles.link}>Daniel</Link>
            <Link to="/from-inside" className={styles.link}>From Inside</Link>
            <Link to="/my-detective-darling" className={styles.link}>My Detective Darling</Link>
            <Link to="/jonah" className={styles.link}>Jonah</Link>
            <Link to="/contact" className={styles.link}>Contact</Link>
        </nav> );
    }
}
 
export default Nav;