import * as React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./daniel.module.scss";
import DanielPic from "../static/images/daniel.jpg";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Daniel extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.daniel}>
        <div className={styles.description}>
            <h2>Synopsis</h2>
            <p>Daniel, a privileged and accomplished student, witnesses the invasion of his city and the overthrowing of his nation, experiencing capture and deprivation, as he, together with his three closest friends, are hauled off into captivity. They are brought to Babylon, a frozen city, where a super-human, dictatorial, King yearns to excel in technology, science and genetic engineering.The snow and ice of Babylon become his home and as time passes, any thoughts of being free to return to the land of his youth evaporate. </p>
            <p>Although captive, Daniel finds that he often has the ear of each King in succession; his knowledge, talents and wisdom are called upon to relieve both their personal and public anxieties. However, the tables are turned on several occasions and threats of execution hang over Daniel and his friends as they fall prey to the whims of various monarchs and into the political traps of rivals. 
</p>
<p>
This is not a unique tale in itself as it is based on the Biblical Old Testament book of Daniel. The novelty however, lies in its retelling. All the well known elements are woven into this story – capture and captivity, the complexity of Nebuchadnezzar, the dreams and interpretations, the execution attempts and subsequent, miraculous rescues, the writing on the wall and the lions den - these are familiar Biblical elements that are re-modelled in a wholly futuristic and fantastical context, highlighting the epic, broad sweep of a towering tale.</p>
</div>
<div className={styles.danielimg}>
<button>Order Here</button>
            <img src={DanielPic} />
            
            </div>
        </article> 
        <Footer />
        </React.Fragment>);
    }
}
 
export default Daniel;