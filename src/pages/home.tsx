import * as React from 'react';
import styles from "./home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer"
import JonahImg from "../static/images/jonah.jpg";
import DanielImg from "../static/images/daniel.jpg";
import FromInsideImg from "../static/images/fromInside.jpg";
import MyDetectiveDarlingImg from "../static/images/mydd.jpg";
import {Link} from "react-router-dom";
import Jonah from "./jonah";


export interface IProps {
    
}
 
export interface IState {
    
}
 
class Home extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.home}>
        <div className={styles.worksection}>
        <h1>Works</h1>
        <div className={styles.works}>
<img src={JonahImg} className={styles.img1}/>
<img src={DanielImg} className={styles.img2}/>
<img src={FromInsideImg} className={styles.img3}/>
<img src={MyDetectiveDarlingImg} className={styles.img4} />
                    </div>
                    </div>
        <div className={styles.homeinfo}>
            <h2>Available Now</h2>
            <button>Order Here</button>
            <h3> Jo Sheringham writes stories which allow the extraordinary to stand out from the ordinary whilst celebrating both. </h3>
            
            <Link to="/jonah" className={styles.link}>Learn More</Link>
            </div>
        </article> 
        <Footer />
        </React.Fragment>);
    }
}
 
export default Home;