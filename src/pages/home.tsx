import * as React from 'react';
import styles from "./home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer"

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Home extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.home}>
            <h2>Home page</h2>
            <h3>Available Now</h3>
            <button>Order Here</button>
            <button>Learn More</button>
        </article> 
        <Footer />
        </React.Fragment>);
    }
}
 
export default Home;