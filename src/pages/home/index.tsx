import React from "react";
import styles from "./home.module.scss";
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
        <div className={styles.homeInfo}>
          <div className={styles.authorInfo}>
            <h3>
              Retelling old tales and discovering the delights of the
              ordinary...
            </h3>
            <Link to="/about">
              <Button title="About the author" />
            </Link>
          </div>
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
          <a
            href="https://www.eden.co.uk/shop/a-tale-of-two-prophets-5172341.html?fbclid=IwAR2CAoAgpPZ8PJ09cgTpLKpNahSBHpq3QOiTCO1kl43cPtypKtLl6_kj8e8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button title="Purchase your copy here" />
          </a>
        </div>
      </article>
    </div>
  );
};

export default Home;
