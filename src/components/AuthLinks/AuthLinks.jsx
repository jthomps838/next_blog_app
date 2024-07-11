'use client';

import { useState } from 'react';
import styles from './authLinks.module.css';
import IconMenu_hamburger from '../Icons/Burger';
import Login from '../Login/Login';
import MobileNavDropdown from '../MobileNavDropdown/MobileNavDropdown';

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = 'unauthenticated';

  const clickHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Login status={status} styles={styles} />
      <button className={styles.burger} onClick={clickHandler}>
        <IconMenu_hamburger />
      </button>
      <MobileNavDropdown status={status} styles={styles} open={open} />
    </>
  );
};

export default AuthLinks;
