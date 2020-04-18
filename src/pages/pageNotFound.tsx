import * as React from 'react';
import styles from "./pageNotFound.module.scss";

class PageNotFound extends React.Component {
    render() {
        return (
            <article className={styles.main}>
                <div className={styles.text}>
                    <h1>Page Not Found</h1>
                    <h2>We're unable to find the page you're looking for.</h2>
                    <h4>Please use the navigation bar above to help get you back on track.</h4>
                </div>
            </article>
        );
    }
}

export default PageNotFound;