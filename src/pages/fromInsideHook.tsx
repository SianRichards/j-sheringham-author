import React from "react";
import styles from "./frominside.module.scss";
import FromInsideImg from "../static/images/fromInside.jpg";
import ButtonHook from "../components/buttonHook";

const FromInsideHook = () => {
  return (
    <React.Fragment>
      <article className={styles.fromInside}>
        <div className={styles.description}>
          <h1>From Inside</h1>
          <p>
            In the everyday way of things, the inside of your car is not
            considered a dangerous place to be, but when we think no one is
            listening, when we feel we are alone, it can be a place of secrets
            and sometimes of menace too.
          </p>
          <p>
            Here are four mysterious tales, each one springing from either an
            incident or a secret or a choice or just a plain mad moment...inside
            a car.
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
            <ButtonHook title="Browse Here" />
          </a>
        </div>
      </article>
    </React.Fragment>
  );
};

export default FromInsideHook;
