import React from 'react';
import Link from 'next/link';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import AuthLinks from '../AuthLinks/AuthLinks';

const NavbarLinks = ({ styles }) => {
  return (
    <section className={styles.links}>
      <ThemeToggle />
      <Link className={styles.link} href='/'>
        Blogs
      </Link>
      <AuthLinks />
    </section>
  );
};

export default NavbarLinks;
