import * as React from 'react';
import styles from "./mydet.module.scss";
import MyDetective from "../static/images/mydd.jpg";
import Button from "../components/button";

class MyDet extends React.Component {
    render() {
        return (<React.Fragment><article className={styles.myDet}>
            <div className={styles.description}>
                <h1>My Detective Darling</h1>
                <p>
                    Traveling through time and space is one thing. Traveling through time and space with Charlie Darling, a self-proclaimed-inter-continental-dimensional detective,
                    is quite another. In this perplexing tale of odd relationships, forgiveness, and things that suddenly get rather hot for no apparent reason, there are dreams and deserts,
                    temples and towers; sand dunes and storms, fear and flight, horses and homecomings.
                </p>
                <p className={styles.quote}>
                    <em>"But what has been will be - first memory, then oblivion’s swallowing sea; Like men foregone, shall we merge into those Whose story no one knows."</em>
                </p>
                <p>The To-Be-Forgotten by Thomas Hardy.</p>
            </div>
            <div className={styles.imageAndButton}>
            <img src={MyDetective} alt="The book cover of My Detective Darling by Jo Sheringham" />
            <a href='https://www.amazon.co.uk/My-Detective-Darling-jo-sheringham-ebook/dp/B01KCHV4S2/ref=pd_sbs_351_2/259-9137129-8314455?_encoding=UTF8&pd_rd_i=B01KCHV4S2&pd_rd_r=fd928360-9343-11e9-8998-4ffa3448a792&pd_rd_w=GLk1d&pd_rd_wg=3hAZM&pf_rd_p=18edf98b-139a-41ee-bb40-d725dd59d1d3&pf_rd_r=HPRZ0AS7SZXN789696G4&psc=1&refRID=HPRZ0AS7SZXN789696G4' target="_blank" rel="noopener noreferrer">
                    <Button title="Browse Here" />
                </a>
            </div>
        </article>
        </React.Fragment>);
    }
}

export default MyDet;