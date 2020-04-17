import * as React from 'react';
import styles from "./home.module.scss";
import JonahImg from "../static/images/jonah.jpg";
import DanielImg from "../static/images/daniel.jpg";
import FromInsideImg from "../static/images/fromInside.jpg";
import MyDetectiveDarlingImg from "../static/images/mydd.jpg";
import { Link } from "react-router-dom";
class Home extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <article className={styles.home}>
                    <div className={styles.worksection}>
                        <h1>Author's Works</h1>
                        <div className={styles.works}>
                            <Link to="/jonah" className={styles.link}><img src={JonahImg} className={styles.img1} alt="The book cover of Jonah by Jo Sheringham" /></Link>
                            <Link to="/daniel" className={styles.link}><img src={DanielImg} className={styles.img2} alt="The book cover of Daniel by Jo Sheringham" /></Link>
                            <Link to="/from-inside" className={styles.link}><img src={FromInsideImg} className={styles.img3} alt="The book cover of From Inside by Jo Sheringham" /></Link>
                            <Link to="/my-detective-darling" className={styles.link}><img src={MyDetectiveDarlingImg} className={styles.img4}
                                alt="The book cover of My Detective Darling by Jo Sheringham" /></Link>
                        </div>
                    </div>
                    <div className={styles.homeinfo}>
                        <h3> Jo Sheringham writes stories which allow the extraordinary to stand out from the ordinary whilst celebrating both. </h3>
                    </div>
                </article>
            </div>);
    }
}

export default Home;