import React from 'react';
import Link from 'next/link';

import styles from './mobileNavDropdown.module.css';
import Login from '../Login/Login';
import SocialGroup from '../SocialGroup/SocialGroup';

const MobileNavDropdown = ({ status, open }) => {
  return (
    <>
      {open ? (
        <section className={styles.responsiveMenu}>
          <Link href='/'>Blogs</Link>
          <Login styles={styles} status={status} />
          <SocialGroup styles={styles} />
        </section>
      ) : null}
    </>
  );
};

export default MobileNavDropdown;
