import * as React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./frominside.module.scss";
import FromInsideImg from "../static/images/fromInside.jpg";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class FromInside extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.fromInside}>
            
            
            <div className={styles.description}>
            <h2>From Inside</h2>
            <p>In the everyday way of things, the inside of your car is not considered a dangerous place to be but when we think no one is listening, when we feel we are alone, it is a place of secrets and maybe menace too.</p>
            <p>Here are four mysterious tales, each one springing from either an incident or a secret or a choice or just a plain mad moment...inside a car.</p>
            <button>Order Here</button>
            </div>
            <img src={FromInsideImg} />
        </article> 
        <Footer />
        </React.Fragment>);
    }
}
 
export default FromInside;