import * as React from 'react';
import styles from "./nav.module.scss"
import { NavLink, RouteComponentProps } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
    history: RouteComponentProps;
}

interface IState {
    barsClicked: Boolean;
}
class Nav extends React.Component<IProps, IState> {
    public state = { barsClicked: false }

    handleBarsClick = () => {
        this.setState({ barsClicked: !this.state.barsClicked })
    }

    handleLinkClick = () => {
        this.setState({ barsClicked: false })
    }

    render() {
        return (<nav>
            <div className={this.state.barsClicked ? styles.topbar : styles.navbar}>
                <span onClick={this.handleBarsClick} className={styles.bars}>
                    <FontAwesomeIcon icon={faBars} />
                </span>
                <NavLink onClick={this.handleLinkClick} to="/" className={this.props.history.location.pathname === '/' ? styles.clickedLink : styles.unclickedLink}>Home</NavLink>
                <NavLink onClick={this.handleLinkClick} to="/tale-of-two-prophets" className={this.props.history.location.pathname === '/tale-of-two-prophets' ? styles.clickedLink : styles.unclickedLink}>A Tale Of Two Prophets</NavLink>
                <NavLink onClick={this.handleLinkClick} to="/jonah" className={this.props.history.location.pathname === '/jonah' ? styles.clickedLink : styles.unclickedLink}>Jonah</NavLink>
                <NavLink onClick={this.handleLinkClick} to="/about" className={this.props.history.location.pathname === '/about' ? styles.clickedLink : styles.unclickedLink}>About</NavLink>
                <NavLink onClick={this.handleLinkClick} to="/daniel" className={this.props.history.location.pathname === '/daniel' ? styles.clickedLink : styles.unclickedLink}>Daniel</NavLink>
                <NavLink onClick={this.handleLinkClick} to="/from-inside" className={this.props.history.location.pathname === '/from-inside' ? styles.clickedLink : styles.unclickedLink}>From Inside</NavLink>
                <NavLink onClick={this.handleLinkClick} to="/my-detective-darling" className={this.props.history.location.pathname === '/my-detective-darling' ? styles.clickedLink : styles.unclickedLink}>My Detective Darling</NavLink>
                <NavLink onClick={this.handleLinkClick} to="/contact" className={this.props.history.location.pathname === '/contact' ? styles.clickedLink : styles.unclickedLink}>Contact</NavLink>
            </div>
        </nav>);
    }
}

export default Nav;