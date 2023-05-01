import React, { useState } from "react";
import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavHook = (props: any) => {
  const { location } = props;
  const [barsClicked, setBarsClicked] = useState(false);
  return (
    <nav>
      <div className={barsClicked ? styles.topbar : styles.navbar}>
        <span
          onClick={() => setBarsClicked(!barsClicked)}
          className={styles.bars}
        >
          <FontAwesomeIcon icon={faBars} />
        </span>
        <NavLink
          onClick={() => {
            setBarsClicked(false);
          }}
          to="/"
          className={
            location.pathname === "/"
              ? styles.clickedLink
              : styles.unclickedLink
          }
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => {
            setBarsClicked(false);
          }}
          to="/tale-of-two-prophets"
          className={
            location.pathname === "/tale-of-two-prophets"
              ? styles.clickedLink
              : styles.unclickedLink
          }
        >
          A Tale Of Two Prophets
        </NavLink>
        <NavLink
          onClick={() => {
            setBarsClicked(false);
          }}
          to="/angels-dreams-and-prophecies"
          className={
            location.pathname === "/angels-dreams-and-prophecies"
              ? styles.clickedLink
              : styles.unclickedLink
          }
        >
          Angels, Dreams and Prophecies
        </NavLink>
        <NavLink
          onClick={() => {
            setBarsClicked(false);
          }}
          to="/jonah"
          className={
            location.pathname === "/jonah"
              ? styles.clickedLink
              : styles.unclickedLink
          }
        >
          Jonah
        </NavLink>
        <NavLink
          onClick={() => {
            setBarsClicked(false);
          }}
          to="/about"
          className={
            location.pathname === "/about"
              ? styles.clickedLink
              : styles.unclickedLink
          }
        >
          About
        </NavLink>
        <NavLink
          onClick={() => {
            setBarsClicked(false);
          }}
          to="/daniel"
          className={
            location.pathname === "/daniel"
              ? styles.clickedLink
              : styles.unclickedLink
          }
        >
          Daniel
        </NavLink>
        <NavLink
          onClick={() => {
            setBarsClicked(false);
          }}
          to="/from-inside"
          className={
            location.pathname === "/from-inside"
              ? styles.clickedLink
              : styles.unclickedLink
          }
        >
          From Inside
        </NavLink>
        <NavLink
          onClick={() => {
            setBarsClicked(false);
          }}
          to="/my-detective-darling"
          className={
            location.pathname === "/my-detective-darling"
              ? styles.clickedLink
              : styles.unclickedLink
          }
        >
          My Detective Darling
        </NavLink>
        <NavLink
          onClick={() => {
            setBarsClicked(false);
          }}
          to="/contact"
          className={
            location.pathname === "/contact"
              ? styles.clickedLink
              : styles.unclickedLink
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavHook;
