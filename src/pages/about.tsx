import * as React from "react";
import styles from "./about.module.scss";
import JoImg from "../static/images/aboutportrait.jpg";
import { placeholder } from "../components/placeholder";
class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <article className={styles.main}>
          <div>
            <img src={JoImg} alt="The author Jo Sheringham" />
          </div>
          <div className={styles.bio}>
            <h1>Author</h1>
            <p>
              As a scruffy teenager, Jo had no thoughts of writing until at
              school a short story competition deadline loomed. To avoid
              detention, she scrawled something out on scrap paper and forgot
              all about it. A surprise to everyone she did rather well, however
              she shelved any serious thoughts about writing. Years later,
              inspired by a dream and a popular song she blew away the cobwebs
              and challenged herself to complete a novel in a year. The writing
              flowed, and a story - My Detective Darling - emerged. Perhaps she
              could do this again… Jo loves a good tale and her writing is
              always informed by her faith. Essential to this process is a quiet
              space, a view of the sky, a hefty thesaurus and dictation
              software. She lives with her husband in Wiltshire.
            </p>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default About;
