import * as React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./mydet.module.scss";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class MyDet extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.myDet}>
            <h2>My Detective Darling</h2>
        </article> 
        <Footer />
        </React.Fragment>);
    }
}
 
export default MyDet;