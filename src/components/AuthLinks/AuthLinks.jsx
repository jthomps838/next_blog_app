'use client';

import { useState } from 'react';
import styles from './authLinks.module.css';
import IconMenu_hamburger from '../Icons/Burger';
import Login from '../Login/Login';
import MobileNavDropdown from '../MobileNavDropdown/MobileNavDropdown';

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Login styles={styles} />
      <button className={styles.burger} onClick={clickHandler}>
        <IconMenu_hamburger />
      </button>
      <MobileNavDropdown styles={styles} open={open} />
    </>
  );
};

export default AuthLinks;
