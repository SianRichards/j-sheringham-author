import * as React from 'react';
import Header from "./header";
import Footer from "./footer";
import styles from "./daniel.module.scss";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Daniel extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.daniel}>
            <h2>Daniel</h2>
        </article> 
        <Footer />
        </React.Fragment>);
    }
}
 
export default Daniel;