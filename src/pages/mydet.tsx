import * as React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./mydet.module.scss";
import MyDetective from "../static/images/mydd.jpg";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class MyDet extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.myDet}>
        <div className={styles.description}>
            <h2>My Detective Darling</h2>
            <p>Traveling through time and space is one thing.
Traveling through time and space with Charlie Darling,
a self proclaimed inter-continental-dimensional detective, 
is quite another. In this perplexing tale of odd relationships, forgiveness,
and things that suddenly get rather hot
for no apparent reason, there are dreams and deserts,
temples and towers, sand dunes and storms, fear and flight, 
horses and homecomings</p>
<p className={styles.quote}>"But what has been will be - 

first memory, then oblivion’s swallowing sea; 
Like men foregone, shall we merge into those
Whose story no one knows."</p>


<p>The To-Be-Forgotten by Thomas Hardy.</p>
<button>Order Here</button>
</div>
            <img src={MyDetective} />
        </article> 
        <Footer />
        </React.Fragment>);
    }
}
 
export default MyDet;