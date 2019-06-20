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
import Daniel from "./daniel";
import FromInside from "./frominside";
import MyDet from "./mydet";
import About from "./about";
import Button from "../components/button";


export interface IProps {
    title: string;
    
}
 
export interface IState {
    
}
 
class Home extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.home}>
        <div className={styles.worksection}>
        <h1>Author's Works</h1>
        <div className={styles.works}>
        <Link to="/jonah" className={styles.link}><img src={JonahImg} className={styles.img1}/></Link>
        <Link to="/daniel" className={styles.link}><img src={DanielImg} className={styles.img2}/></Link>
        <Link to="/from-inside" className={styles.link}><img src={FromInsideImg} className={styles.img3}/></Link>
        <Link to="/my-detective-darling" className={styles.link}><img src={MyDetectiveDarlingImg} className={styles.img4} /></Link>
                    </div>
                    </div>
        <div className={styles.homeinfo}>
            <h3> Jo Sheringham writes stories which allow the extraordinary to stand out from the ordinary whilst celebrating both. </h3>
            <Link to="/about"><Button title="Learn More"/></Link>
            
            </div>
        </article> 
        <Footer />
        </React.Fragment>);
    }
}
 
export default Home;