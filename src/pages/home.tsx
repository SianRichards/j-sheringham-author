import * as React from 'react';
import styles from "./home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer"
import Jonah from "../static/images/jonah.jpg";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Home extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.home}>
        <div className={styles.imagesection}>
        <h2>A futuristic, humorous retelling of the book of Jonah. </h2>
                    <img src={Jonah} />
                    </div>
        <div className={styles.homeinfo}>
            <h2>Available Now</h2>
            <button>Order Here</button>
            <h3> Jo Sheringham writes stories which allow the extraordinary to stand out from the ordinary whilst celebrating both. </h3>
            
            <button>Learn More</button>
            </div>
        </article> 
        <Footer />
        </React.Fragment>);
    }
}
 
export default Home;