import React, { useState } from "react";
import styles from "./the-perfect-companion.module.scss";
import Button from "../../components/button";
import ThePerfectCompanionImg from "../../static/images/the-perfect-companion.jpg";
import { Link } from "react-router-dom";

const ThePerfectCompanion = () => {
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
          <div>
            <a
              href="https://www.amazon.co.uk/Perfect-Companion-Jo-Sheringham-ebook/dp/B0CQV1256V/ref=sr_1_1?crid=17AMQKLNCB4O3&dib=eyJ2IjoiMSJ9.8wV8blDzmMe2CYoJfFukMa-9YHTojLy_VFtzBzOTlJQUaWdTM6o1lZZBIcuMG5GYEegrSkz3eFxhbjfAii8GMpqqtljViBQ_0RLJ_JuBZaLvYbbPJXquKtleeha6dR2uVKNKx0jXQ9iiVpjWf_vzfOhK1uB83vnHCuN5oeUCVu9jbyQjNLd2AXvx1OX4SWUlNaIyjS6iIcqFBVAAjSyLeIQ81HlQ0Teu1Sl7H0LHOsc.7NPWZuDY7QAp1V5osY2zGpTiI_M2he5e4zekNjyT5tA&dib_tag=se&keywords=the+perfect+companion&qid=1712696878&sprefix=the+perfect+companin%2Caps%2C114&sr=8-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title="Browse Here" />
            </a>
            <p>or</p>
            <p>
              Fill out the <Link to="/contact">contact form</Link> to request a
              signed copy - happy reading!
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ThePerfectCompanion;
