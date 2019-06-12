import * as React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./jonah.module.scss";
import JonahImg from "../static/images/jonah.jpg";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Jonah extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.jonah}>
            
            <img src={JonahImg} />
            <div className={styles.description}>
            <h2>Jonah</h2>
            <p>Daunted by the post from a message-bot who won’t take ‘no’ for an answer, semi-retired prophet Jonah rushes off for a last-minute city break on planet Tarshish. But his galaxy-traversing escape plan shudders to a halt aboard the haulage cruiser Sheol II.
</p> <p>Can Jonah save the ship’s crew from calamity? And will he finally face up to God’s call and embrace the role of a prophet in one last adventure?</p>
<button>Order Here</button>
</div>
<iframe width="600" height="500"
src="https://www.youtube.com/embed/H0I36z0UzNY" allowFullScreen frameBorder="0">
</iframe>

        </article> 
        <Footer />
        </React.Fragment>);
    }
}
 
export default Jonah;