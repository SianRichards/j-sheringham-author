import * as React from 'react';
import styles from "./jonah.module.scss";
import Button from "../components/button";
import JonahImg from "../static/images/jonah.jpg";
import { placeholder } from "../components/placeholder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import LazyLoad from 'react-lazyload';

interface IState {
    loading: boolean;
}
class Jonah extends React.Component<IState> {
    state = { loading: true }

    render() {
        return (<React.Fragment>
            <article className={styles.jonah}>
                <div className={styles.imageAndButton}>
                    <LazyLoad placeholder={placeholder}>
                        <img src={JonahImg} alt="The book cover of Jonah by Jo Sheringham" />
                    </LazyLoad>
                    <a href='https://www.biblesociety.org.uk/products/jonah-and-the-bony-finned-asteroid-fish/' target="_blank" rel="noopener noreferrer">
                        <Button title="Browse Here" />
                    </a>
                </div>
                <div className={styles.description}>
                    <h1>Jonah</h1>
                    <p>
                        Daunted by the post from a message-bot who won’t take ‘no’ for an answer, semi-retired prophet Jonah rushes off for a last-minute city break on planet Tarshish.
                        But his galaxy-traversing escape plan shudders to a halt aboard the haulage cruiser Sheol II.
                    </p>
                    <p>
                        Can Jonah save the ship’s crew from calamity? And will he finally face up to God’s call and embrace the role of a prophet in one last adventure?
                    </p>
                </div>
                <div className={styles.videoParent}>
                    <iframe src='https://www.youtube.com/embed/H0I36z0UzNY' className={styles.iframe} onLoad={() => this.setState({ loading: false })} title="Interview with Jo Sheringham about her book Jonah" allowFullScreen frameBorder="0"></iframe>
                    {this.state.loading && <FontAwesomeIcon icon={faSpinner} spin className={styles.icons} />}
                </div>
            </article>
        </React.Fragment>);
    }
}

export default Jonah;