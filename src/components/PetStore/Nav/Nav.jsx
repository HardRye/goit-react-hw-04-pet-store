import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <div className={styles.navWrapper}>
    <ul className={styles.navList}>
      <li>
        <NavLink
          to="/"
          exact
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pets"
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Pets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          About
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
