import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

const styles = {
  wrapper: "navbar__wrapper",
  title: "navbar__title",
  itemsWrapper: "navbar__items-wrapper",
  item: "navbar__item",
  itemActive: "navbar__item__active",
};

const Navbar: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      <NavLink to="/" className={styles.title}>
        Surya Kant Bansal
      </NavLink>
      <div className={styles.itemsWrapper}>
        <NavLink to="/about" className={styles.item} activeClassName={styles.itemActive}>
          About
        </NavLink>
        <NavLink to="/education" className={styles.item} activeClassName={styles.itemActive}>
          Education
        </NavLink>
        <NavLink to="/skills" className={styles.item} activeClassName={styles.itemActive}>
          Skills
        </NavLink>
        <NavLink to="/interests" className={styles.item} activeClassName={styles.itemActive}>
          Interests
        </NavLink>
        <NavLink to="/awards" className={styles.item} activeClassName={styles.itemActive}>
          Awards
        </NavLink>
        <NavLink to="/blog" className={styles.item} activeClassName={styles.itemActive}>
          Blog
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
