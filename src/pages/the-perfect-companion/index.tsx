import React, { useState } from "react";
import styles from "./the-perfect-companion.module.scss";
import Button from "../../components/button";
import ThePerfectCompanionImg from "../../static/images/the-perfect-companion.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ThePerfectCompanion = () => {
  const [loading, setLoadingValue] = useState(true);
  return (
    <article className={styles.thePerfectCompanion}>
      <div className={styles.imageAndBlurb}>
        <div className={styles.description}>
          <h1>The Perfect Companion</h1>
          <p>
            Maggie has always tried to be her mother’s perfect companion. But
            isolated by her care, a weekly service at the local cathedral has
            become her sole escape – though its lofty spires, and the God they
            point to, have often seemed to soar far above her simple concerns.
          </p>
          <p>
            But when one morning the diffident preacher’s words are infused with
            a transcendent life, both he and Maggie begin to discover in
            different ways a courage neither knew they had. As they each follow
            God’s gentle leading, they find Him intimately involved in their
            lives and prompting them to bring hope to others.
          </p>
          <p>
            As Maggie faces distressing decisions about her mother’s care and
            supports a neighbour dealing with abuse, someone unexpected is drawn
            to her quiet, blossoming faith, and she beings to wonder if she
            might have a new companion of her own…
          </p>
        </div>
        <div className={styles.imageAndButton}>
          <img
            src={ThePerfectCompanionImg}
            alt="The book cover of Jonah by Jo Sheringham"
          />
          <a
            href="https://www.biblesociety.org.uk/products/jonah-and-the-bony-finned-asteroid-fish/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </article>
  );
};

export default ThePerfectCompanion;
