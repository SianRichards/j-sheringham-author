import * as React from 'react';
import styles from "./nav.module.scss"
import { NavLink } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {

}

interface IState {
    active: string;
    barsClicked: Boolean;
}
class Nav extends React.Component<IProps, IState> {
    public state = { active: '', barsClicked: false }

    handleLinkClick = (event: any) => {
        this.setState({ active: event.currentTarget.innerHTML, barsClicked: false })
    }

    handleBarsClick = () => {
        this.setState({ barsClicked: !this.state.barsClicked })
    }

    render() {
        return (<nav>
            <tr className={ this.state.barsClicked ? styles.topbar : styles.navbar}>
                <span onClick={this.handleBarsClick} className={styles.bars}>
                    <FontAwesomeIcon icon={faBars}/>
                </span>
                <NavLink onClick={this.handleLinkClick} to="/home" className={this.state.active === 'Home' ? styles.clickedLink : styles.unclickedLink}>Home</NavLink>
                <NavLink onClick={this.handleLinkClick} to="/about" className={this.state.active === 'About' ? styles.clickedLink : styles.unclickedLink}>About</NavLink>
                <NavLink onClick={this.handleLinkClick} to="/daniel" className={this.state.active === 'Daniel' ? styles.clickedLink : styles.unclickedLink}>Daniel</NavLink>
                <NavLink onClick={this.handleLinkClick} to="/from-inside" className={this.state.active === 'From Inside' ? styles.clickedLink : styles.unclickedLink}>From Inside</NavLink>
                <NavLink onClick={this.handleLinkClick} to="/my-detective-darling" className={this.state.active === 'My Detective Darling' ? styles.clickedLink : styles.unclickedLink}>My Detective Darling</NavLink>
                <NavLink onClick={this.handleLinkClick} to="/jonah" className={this.state.active === 'Jonah' ? styles.clickedLink : styles.unclickedLink}>Jonah</NavLink>
                <NavLink onClick={this.handleLinkClick} to="/contact" className={this.state.active === 'Contact' ? styles.clickedLink : styles.unclickedLink}>Contact</NavLink>
            </tr>
        </nav>);
    }
}

export default Nav;