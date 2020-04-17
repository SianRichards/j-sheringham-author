import * as React from 'react';
import styles from "./about.module.scss";
import JoImg from "../static/images/aboutportrait.jpg";
class About extends React.Component {
    render() {
        return (<React.Fragment>
            <article className={styles.main}>
                <div>
                    <img src={JoImg} alt="The author Jo Sheringham" />
                </div>
                <div className={styles.bio}><h1>Author</h1><p>As a scruffy teenager, Jo had no thoughts of writing until at school a short story competition deadline loomed. To avoid detention she scrawled something out on scrap paper and forgot all about it. A surprise to everyone she did rather well but any serious thoughts about writing were shelved.</p>
                    <p>Eventually, years later, the idea was unearthed together with the challenge to write a novel in a year.</p>
                    <p>Inspired by a fragment from a dream and a popular song, My Detective Darling was duly completed. The writing flowed and a story emerged and Jo started to think that perhaps she could do this again…</p>
                    <p>Jo then wrote From Inside – four mysterious tales, just a little bit dark and a little bit odd. The main inspiration being one of her father’s stories, invented to amuse restless children on long car journeys.</p>
                    <p>The re-telling of Daniel grew out of a love of Old Testament Bible stories, which also sparked the writing of Jonah And The Bony-Finned Asteroid Fish, published in late 2018 by the Bible Society.</p>
                    <p>Summer 2020 should see the release of a new publication by Faithbuilders.org – A Tale Of Two Prophets – Elijah And Elisha Reimagined.</p></div>
            </article>
        </React.Fragment>);
    }
}

export default About;