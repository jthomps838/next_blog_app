import React from 'react';

import styles from './navbar.module.css';

import SocialGroup from '../SocialGroup/SocialGroup';
import Logo from '../Logo/Logo';
import NavbarLinks from '../NavbarLinks/NavbarLinks';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <SocialGroup styles={styles} />
      <Logo styles={styles} />
      <NavbarLinks styles={styles} />
    </header>
  );
};

export default Navbar;
