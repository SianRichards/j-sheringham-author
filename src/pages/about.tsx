import * as React from 'react';
import styles from "./about.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import JoImg from "../static/images/aboutportrait.jpg";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class About extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment> <Header /><article className={styles.main}><div className={styles.bio}><h1>Author</h1><p>Picture a scruffy teenager (I was scruffy!) who day-dreamed their way through school, just achieving the bare minimum required and who only ever had one career thought – to go to Art College.</p>
        <p>That scruffy teenager never had a back up plan…</p>
        <p>In the sixth form a compulsory short story competition had me cornered and the night before the deadline I scrawled out something in cheap biro on scrap paper just to stay out of trouble.</p>
        <p>Weeks later, with much puzzlement I claimed second place; they said I might have achieved more except for an obvious lack of effort in presentation.</p>
        <p>It was a light bulb moment but it was years later before I seriously decided to act on it.</p>
        <p>Art College never happened but eventually the writing did and I started out with My Detective Darling inspired by a dream, a song and a strange little picture in my head. The writing flowed chapter by chapter, and the completed novel emerged as if from a sandstorm…</p>
        <p>I then wrote From Inside – four mysterious tales, just a little bit dark and a little bit odd and perhaps my favourite piece of writing – inspired by one of my dad’s stories made up to keep me and my sister distracted on long car journeys.</p>
        <p>The re-telling of Daniel grew out of a love of old testament Bible stories, which inspired me to write Jonah And The Bony-Finned Asteroid Fish, published in late 2018 by the Bible Society.</p>
        <p>There are more completed manuscripts waiting in the wings and more on the go and I have to say that these days, things are turning out to be a lot less scruffy.</p></div>
        <div>
            <img src={JoImg} alt="Picture of the author Jo Sheringham"/>
            <h2>Jo Sheringham</h2>
            </div></article> <Footer /></React.Fragment>);
    }
}
 
export default About;