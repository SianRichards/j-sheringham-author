import React from "react";
import styles from "./daniel.module.scss";
import DanielPic from "../../static/images/daniel.jpg";
import Button from "../../components/button";

const Daniel = () => {
  return (
    <React.Fragment>
      <article className={styles.daniel}>
        <div className={styles.description}>
          <h1>Daniel</h1>
          <p>
            <em>
              "All sense of decorum and restraint dropped away. Cowering inside
              their hooded robes they staggered forward into the presence of the
              king."
            </em>
          </p>
          <p>
            Daniel, a privileged and accomplished student, experiences invasion,
            capture and deprivation. Together with his three closest friends, he
            is hauled off to Babylon, where Nebuchadnezzar, a terrifying,
            genius-king, yearns to excel in scientific endeavour. In an
            imaginary, frozen landscape, the snow and ice of Babylon become home
            and as time passes, any thoughts of returning to the land of his
            youth evaporate.
          </p>
          <p>
            Although a captive, Daniel finds that he often has the ear of each
            successive king; his talents and wisdom are called upon to relieve
            both their public and private anxieties. Falling in and out of
            favour, Daniel and his friends find themselves either working at the
            top level of government or threatened with execution. They fall prey
            to both the whims of monarchs and the political traps of rivals.
          </p>
          <p>
            Based on the Old Testament book of Daniel, this story is not unique
            in itself; the novelty lies in its retelling. A dramatic tale of
            faith and adventure, it contains all the familiar elements:
            captivity and kingship; dreams and interpretations; looming
            execution and miraculous rescue; the writing on the wall and the den
            of lions. A futuristic, fantastical context highlights the epic,
            broad sweep of a towering tale.
          </p>
        </div>
        <div className={styles.danielimg}>
          <img
            src={DanielPic}
            alt="The cover of the book Daniel by Jo Sheringham"
          />
          <a
            href="https://www.amazon.co.uk/Daniel-Jo-Sheringham-ebook/dp/B01N9VNM2S/ref=pd_sbs_351_1/259-9137129-8314455?_encoding=UTF8&pd_rd_i=B01N9VNM2S&pd_rd_r=df30f4ca-9343-11e9-8204-3741c703b808&pd_rd_w=oaHk4&pd_rd_wg=rv8UC&pf_rd_p=18edf98b-139a-41ee-bb40-d725dd59d1d3&pf_rd_r=Z8YT8SSS0XCTSMCG29CP&psc=1&refRID=Z8YT8SSS0XCTSMCG29CP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button title="Browse Here" />
          </a>
        </div>
      </article>
    </React.Fragment>
  );
};

export default Daniel;
