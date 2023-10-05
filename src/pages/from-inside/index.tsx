import React from "react";
import styles from "./frominside.module.scss";
import FromInsideImg from "../../static/images/fromInside.jpg";
import Button from "../../components/button";

const FromInside = () => {
  return (
    <article className={styles.fromInside}>
      <div className={styles.imageAndBlurb}>
        <div className={styles.description}>
          <h1>From Inside</h1>
          <p>
            <em>
              "The door of the glove compartment was shaking and burning,
              sucking in whatever was closest… Suddenly with one great gushing,
              cracking sound, the door of the glove compartment burst open. A
              huge, cavernous, red-hot hole. A flaming furnace. A pit of
              dripping, molten metal…"
            </em>
          </p>
          <p>
            In the everyday way of things, the inside of your car is not
            considered a dangerous place to be, yet when we think no one is
            listening, when we feel we are alone, it can be a place of secrets
            and sometimes of menace too. Here are four mysterious tales, each
            one springing from either an incident or a secret or a choice or
            just a plain mad moment inside a car.
          </p>
        </div>
        <div className={styles.imageAndButton}>
          <img
            src={FromInsideImg}
            alt="The cover of the book From Inside by Jo Sheringham"
          />

          <a
            href="https://www.amazon.co.uk/dp/B00IMJNG2U/ref=rdr_kindle_ext_tmb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button title="Browse Here" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default FromInside;
