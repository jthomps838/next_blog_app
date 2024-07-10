'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './authLinks.module.css';
import IconMenu_hamburger from '../Icons/Burger';

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = 'unauthenticated';

  const clickHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href='/login' className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href='/write' className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <button className={styles.burger} onClick={clickHandler}>
        <IconMenu_hamburger />
      </button>
      {open ? (
        <section className={styles.responsiveMenu}>
          <Link href='/'>Blogs</Link>
          {status === 'unauthenticated' ? (
            <Link href='/login'>Login</Link>
          ) : (
            <>
              <Link href='/write'>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </section>
      ) : null}
    </>
  );
};

export default AuthLinks;
