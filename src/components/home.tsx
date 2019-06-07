import * as React from 'react';
import styles from "./home.module.scss";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Home extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <article className={styles.home}>
            <h2>Home page</h2>
        </article> );
    }
}
 
export default Home;