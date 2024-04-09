import React from "react";
import styles from "./home.module.scss";
import JoImg from "../../static/images/author_portrait.jpg";
import JonahImg from "../../static/images/jonah.jpg";
import DanielImg from "../../static/images/daniel.jpg";
import FromInsideImg from "../../static/images/fromInside.jpg";
import MyDetectiveDarlingImg from "../../static/images/mydd.jpg";
import TaleOfTwoProphets from "../../static/images/tale_of_two_prophets.jpg";
import NewBook from "../../static/images/new_book_to_be_revealed.png";
import ThePerfectCompanionImg from "../../static/images/the-perfect-companion.jpg";
import { Link } from "react-router-dom";
import Button from "../../components/button";

const Home = () => {
  return (
    <div className={styles.main}>
      <article className={styles.home}>
        <div className={styles.homeInfo}>
          <h1>What's new</h1>
          <div className={styles.homeSection}>
            <div className={styles.upcomingBook}>
              <div>
                <h4>Latest release:</h4>
                <h4>The Perfect Companion</h4>
              </div>
              <Link to="/the-perfect-companion">
                <img
                  src={ThePerfectCompanionImg}
                  alt="Image of the cover of The Perfect Companion, by Jo Sheringham"
                />
              </Link>
              <div>
                <a
                  href="https://www.amazon.co.uk/Perfect-Companion-Jo-Sheringham-ebook/dp/B0CQV1256V/ref=sr_1_1?crid=17AMQKLNCB4O3&dib=eyJ2IjoiMSJ9.8wV8blDzmMe2CYoJfFukMa-9YHTojLy_VFtzBzOTlJQUaWdTM6o1lZZBIcuMG5GYEegrSkz3eFxhbjfAii8GMpqqtljViBQ_0RLJ_JuBZaLvYbbPJXquKtleeha6dR2uVKNKx0jXQ9iiVpjWf_vzfOhK1uB83vnHCuN5oeUCVu9jbyQjNLd2AXvx1OX4SWUlNaIyjS6iIcqFBVAAjSyLeIQ81HlQ0Teu1Sl7H0LHOsc.7NPWZuDY7QAp1V5osY2zGpTiI_M2he5e4zekNjyT5tA&dib_tag=se&keywords=the+perfect+companion&qid=1712696878&sprefix=the+perfect+companin%2Caps%2C114&sr=8-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button title="Browse here" />
                </a>
                <div className={styles.request}>
                  <p>or</p>
                  <p>
                    Fill out the <Link to="/contact">contact form</Link> to
                    request a signed copy - happy reading!
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.authorInfo}>
              <h3>Jo Sheringham</h3>
              <img src={JoImg} alt="The author Jo Sheringham" />
              <div className={styles.authorInfo}>
                <h4 className={styles.retelling}>
                  Retelling old tales and discovering the delights of the
                  ordinary...
                </h4>
                <Link to="/about">
                  <Button title="About the author" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.worksection}>
          <h1>Explore other works</h1>
          <div className={styles.works}>
            <div className={styles.workOrderNormal}>
              <Link to="/jonah">
                <img
                  src={JonahImg}
                  alt="The book cover of Jonah by Jo Sheringham"
                />
              </Link>
              <p>
                Fleeing a persistent message-bot, reluctant prophet Jonah's
                last-minute getaway to planet Tarshish takes an unexpected turn
                on the haulage cruiser Sheol II, pushing him to embrace his
                prophetic role and potentially save the crew in his final
                adventure.
              </p>
            </div>
            <div className={styles.workOrderReverse}>
              <Link to="/tale-of-two-prophets">
                <img
                  src={TaleOfTwoProphets}
                  alt="The book cover of A Tale of Two Prophets by Jo Sheringham"
                />
              </Link>
              <p>
                A vivid retelling of the lives of Old Testament prophets Elijah
                and Elisha, blending familiar and lesser-known tales against a
                backdrop of natural disasters, personal struggles, political
                intrigue, and spiritual encounters.
              </p>
            </div>
            <div className={styles.workOrderNormal}>
              <Link to="/daniel">
                <img
                  src={DanielImg}
                  alt="The book cover of Daniel by Jo Sheringham"
                />
              </Link>
              <p>
                In a futuristic Babylon, privileged student Daniel and his
                friends are captured and become advisers to successive kings,
                navigating the challenges of politics and faith in this
                retelling of the Old Testament book of Daniel.
              </p>
            </div>
            <div className={styles.workOrderReverse}>
              {" "}
              <Link to="/from-inside">
                <img
                  src={FromInsideImg}
                  alt="The book cover of From Inside by Jo Sheringham"
                />
              </Link>
              <p>
                Four mysterious tales emerge from the unsuspecting confines of
                the inside of a car, where secrets and danger lurk when we
                believe no one is listening.
              </p>
            </div>
            <div className={styles.workOrderNormal}>
              <Link to="/my-detective-darling">
                <img
                  src={MyDetectiveDarlingImg}
                  alt="The book cover of My Detective Darling by Jo Sheringham"
                />
              </Link>{" "}
              <p>
                A tale of adventure and self-discovery unfolds as Jane and
                Gavin, aided by inter-dimensional detective Charlie Darling,
                find themselves in an infinite desert, leading to unexpected
                revelations and a city of gold.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;
