import * as React from 'react';
import styles from "./contact.module.scss";
import Header from "../components/header";
import Footer from "../components/footer"

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Contact extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.main}>
        <form><h1>Contact</h1> <label>Your name: <input type="text" name="name" /></label>
        <label>Contact number: <input type="text" name="contact number" /></label>
        <label>Email address: <input type="email" name="email" /></label>
        <label>Message: <input type="text" name="message" className={styles.message}/></label>
        <input type="submit" value="submit" className={styles.submit}/></form>
        </article><Footer />
            </React.Fragment>);
    }
}
 
export default Contact;