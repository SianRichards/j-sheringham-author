import * as React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./frominside.module.scss";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class FromInside extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.fromInside}>
            <h2>From Inside</h2>
        </article> 
        <Footer />
        </React.Fragment>);
    }
}
 
export default FromInside;