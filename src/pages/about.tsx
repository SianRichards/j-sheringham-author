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
        return ( <React.Fragment> <Header /><article className={styles.main}><div className={styles.bio}><p>Picture a scruffy teenager (I was scruffy!) who day-dreamed their way through school, just managing to achieve the bare minimum required to get by, who only ever had one career thought and that was to go to Art School.</p><p>That scruffy teenager never had a back up plan…</p><p>I attended a grammar school, which valued the study of English and Languages above all and it always seemed to me that if you didn’t study English at A-level (which I didn’t) then you were not worth noticing, so when I heard that there was a writing competition for the whole school I casually assumed that it didn’t apply to me. However, the day before the competition deadline I was told in no uncertain terms that I must hand something in or I would be in detention. Apparently the whole thing was compulsory, a fact which had just as casually passed me by.</p><p>That evening at home I scrawled a story out in cheap biro on scrap paper just so I wouldn’t get into trouble.</p><p>Weeks later it was announced that I’d come second and might have achieved more except for the obvious lack of care and attention given to presentation.</p><p>It was a light bulb moment but it was years later before I seriously decided to act on it.</p><p>Art School never happened but eventually the writing did and I started out with My Detective Darling inspired by a dream, a song and a strange little picture in my head. The writing flowed chapter by chapter, and the completed novel emerged as if from a sandstorm (natty book plug there!)</p><p>I then wrote From Inside – four mysterious tales, just a little bit dark and a little bit odd and perhaps my favourite piece of writing – inspired by one of the many stories my dad would make up to keep me and my sister distracted on long car journeys.</p><p>The re-telling of Daniel grew out of a love of old testament Bible stories, which then led to Jonah And The Bony-Finned Asteroid Fish being written and accepted for publication by the Bible Society.</p><p>There are more completed manuscripts waiting in the wings and more on the go and I have to say that these days, both my appearance and my writing, generally turn out to be a lot less scruffy.</p></div>
        <div>
            <img src={JoImg} />
            </div></article> <Footer /></React.Fragment>);
    }
}
 
export default About;