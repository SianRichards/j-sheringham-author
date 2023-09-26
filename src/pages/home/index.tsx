import React from "react";
import styles from "./home.module.scss";
import JoImg from "../../static/images/aboutportrait.jpg";
import JonahImg from "../../static/images/jonah.jpg";
import DanielImg from "../../static/images/daniel.jpg";
import FromInsideImg from "../../static/images/fromInside.jpg";
import MyDetectiveDarlingImg from "../../static/images/mydd.jpg";
import TaleOfTwoProphets from "../../static/images/tale_of_two_prophets.jpg";
import { Link } from "react-router-dom";
import Button from "../../components/button";

const Home = () => {
  return (
    <div className={styles.main}>
      <article className={styles.home}>
        <div className={styles.homeInfo}>
          <div className={styles.upcomingBook}>
            <Link to="/tale-of-two-prophets">
              <img
                src={TaleOfTwoProphets}
                alt="The book cover of A Tale Of Two Prophets by Jo Sheringham"
              />
            </Link>
            <div>
              <h3>A Tale Of Two Prophets - Elijah And Elisha Reimagined.</h3>
              <p>
                Click the book cover
                <br />
                to find out more
              </p>
            </div>
          </div>
          <div className={styles.authorInfo}>
            <img src={JoImg} alt="The author Jo Sheringham"/>
          <div className={styles.authorInfo}>
            <p className={styles.retelling}>
              Retelling old tales and discovering the delights of the
              ordinary...
            </p>
            <Link to="/about">
              <Button title="About the author" />
            </Link>
          </div>
          </div>
        </div>
        <hr className={styles.divider}></hr>
        <div className={styles.worksection}>
          <h1>Books</h1>
          <div className={styles.works}>
            <Link to="/jonah">
              <img
                src={JonahImg}
                alt="The book cover of Jonah by Jo Sheringham"
              />
            </Link>
            <Link to="/daniel">
              <img
                src={DanielImg}
                alt="The book cover of Daniel by Jo Sheringham"
              />
            </Link>
            <Link to="/from-inside">
              <img
                src={FromInsideImg}
                alt="The book cover of From Inside by Jo Sheringham"
              />
            </Link>
            <Link to="/my-detective-darling">
              <img
                src={MyDetectiveDarlingImg}
                alt="The book cover of My Detective Darling by Jo Sheringham"
              />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;
