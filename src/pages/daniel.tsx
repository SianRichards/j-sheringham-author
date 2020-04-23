import * as React from 'react';
import styles from "./daniel.module.scss";
import DanielPic from "../static/images/daniel.jpg";
import Button from "../components/button";
import LazyLoad from 'react-lazyload';
import { placeholder } from "../components/placeholder";

class Daniel extends React.Component {
    render() {
        return (<React.Fragment>
            <article className={styles.daniel}>
                <div className={styles.description}>
                    <h1>Synopsis</h1>
                    <p>Daniel, a privileged and accomplished student, witnesses the invasion of his city and his nation. Experiencing capture and deprivation, he and his three closest friends, are hauled off into captivity. They are transported to Babylon, a frozen city, where a super-human, dictatorial King, yearns to excel in technology, science and genetic engineering. The snow and ice of Babylon become his home and as time passes, anythoughts of being free to return to the land of his youth disappear.</p>
                    <p>Although he remains a captive, Daniel finds that he often has the ear of each successive King; his knowledge, talents and wisdom are called upon to relieve both their personal and public anxieties. Nonetheless the tables are turned on several occasions and threats of execution hang over Daniel and his friends, as they fall prey to the whims of various monarchs or into the political traps of rivals.</p>
                    <p>This is not a unique tale as it is based on the Old Testament book of Daniel. The novelty however, lies in its retelling. Many familiar elements are woven into the story: capture and captivity, Nebuchadnezzar’s complex character, the dreams and their interpretations; execution attempts and subsequent, miraculous rescues; the writing on the wall and the den of lions. All are remodeled within a wholly futuristic and fantastical context, highlighting the epic, broad sweep of a towering tale.</p>
                </div>
                <div className={styles.danielimg}>
                    <LazyLoad placeholder={placeholder}>
                        <img src={DanielPic} alt="The cover of the book Daniel by Jo Sheringham" />
                    </LazyLoad>
                    <a href='https://www.amazon.co.uk/Daniel-Jo-Sheringham-ebook/dp/B01N9VNM2S/ref=pd_sbs_351_1/259-9137129-8314455?_encoding=UTF8&pd_rd_i=B01N9VNM2S&pd_rd_r=df30f4ca-9343-11e9-8204-3741c703b808&pd_rd_w=oaHk4&pd_rd_wg=rv8UC&pf_rd_p=18edf98b-139a-41ee-bb40-d725dd59d1d3&pf_rd_r=Z8YT8SSS0XCTSMCG29CP&psc=1&refRID=Z8YT8SSS0XCTSMCG29CP' target="_blank" rel="noopener noreferrer">
                        <Button title="Browse Here" />
                    </a>
                </div>
            </article>
        </React.Fragment>);
    }
}

export default Daniel;