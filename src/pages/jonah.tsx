import * as React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./jonah.module.scss";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Jonah extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.jonah}>
            <h2>Jonah</h2>
        </article> 
        <Footer />
        </React.Fragment>);
    }
}
 
export default Jonah;