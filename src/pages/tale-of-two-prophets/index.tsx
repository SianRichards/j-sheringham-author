import React, { useState } from "react";
import taleOfTwoProphets from "../../static/images/tale_of_two_prophets.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "./taleOfTwoProphets.module.scss";
import Button from "../../components/button";

const TaleOfTwoProphets = () => {
  const [loading, setLoading] = useState(true);

  return (
    <article className={styles.taleOfTwoProphets}>
      <div className={styles.imageAndButton}>
        <img
          src={taleOfTwoProphets}
          alt="The book cover of Tale Of Two Prophets by Jo Sheringham"
        />
        <a
          href="https://www.eden.co.uk/shop/a-tale-of-two-prophets-5172341.html?fbclid=IwAR2CAoAgpPZ8PJ09cgTpLKpNahSBHpq3QOiTCO1kl43cPtypKtLl6_kj8e8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button title="Browse Here" />
        </a>
      </div>
      <div className={styles.description}>
        <p className={styles.blurb}>
          <p className={styles.title}>A Tale Of Two Prophets</p>
          'A Tale Of Two Prophets' takes an Old Testament epic to a new level.
          The lives of Elijah and Elisha play out against the back drop of a
          crumbling and corrupt society. As each prophet looks back over their
          lives they bring fresh insight, wonder, depth and grandeur to the work
          and word of God.
        </p>
        <div className={styles.quotes}>
          <p>
            'By adjusting the setting, Jo Sheringham has created an intriguing,
            atmospheric and imaginative retelling of the stories of Elijah and
            Elisha. And the Naaman retelling along with the Gehazi betrayal was
            one of my favourite parts.’{" "}
            <p className={styles.author}>Bob Hartman, author</p>
          </p>
          <p>
            ‘Famously Cecil B DeMille said, “Give me any two pages of the Bible
            and I'll give you a picture”. Jo has followed in the steps of so
            many famous film makers, taking a few chapters of the Book of Kings
            and letting her imagination loose. In this “Mad Max” like world Jo
            re-imagines Elijah and Elisha criss-crossing a dystopian landscape
            on everything from solar powered craft to spaceships, pickups to
            buses. Strangely the story of these prophets is the only epic tale
            that has never made it to the silver screen from the pages of the
            Bible, but opening these pages and you will find yourself thinking
            “surely it is only a matter of time!” ’{" "}
            <p className={styles.author}>
              Luke Walton, Producer, Reel Issues Films
            </p>
          </p>
        </div>
      </div>
      <div className={styles.videoParent}>
        <iframe
          src="https://www.youtube.com/embed/2fkODh3Ozjk&ab"
          className={styles.iframe}
          onLoad={() => setLoading(false)}
          title="Interview with Jo Sheringham about her book Jonah"
          allowFullScreen
          frameBorder="0"
        ></iframe>
        {loading && (
          <FontAwesomeIcon icon={faSpinner} spin className={styles.icons} />
        )}
      </div>
    </article>
  );
};

export default TaleOfTwoProphets;
