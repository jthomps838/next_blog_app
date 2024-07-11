import React from 'react';

import styles from './footer.module.css';
import Logo from '../Logo/Logo';
import SocialGroup from '../SocialGroup/SocialGroup';
import Link from 'next/link';
import categoryConfig from '@/config/categoryConfig';
import socialConfig from '@/config/socialConfig';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <section className={styles.info}>
        <Logo styles={styles} />
        <p className={styles.description}>
          A dedicated blog chronicling the journey of developers, featuring
          insights, experiences, and lessons learned in the tech world. Follow
          along for tips on coding, career development, and navigating the
          ever-evolving landscape of software engineering.
        </p>
        <SocialGroup styles={styles} />
      </section>
      <section className={styles.links}>
        {/* Web pages */}
        <section className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link className={styles.link} href='/'>
            Home
          </Link>
          <Link className={styles.link} href='/'>
            Blogs
          </Link>
        </section>
        {/* Categories */}
        <section className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          {categoryConfig &&
            categoryConfig.map(({ href, title }) => (
              <Link href={href} className={styles.link}>
                {title}
              </Link>
            ))}
        </section>
        {/* Social */}
        <section className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          {socialConfig &&
            Object.keys(socialConfig).map((key) => (
              <Link href={socialConfig[key]} className={styles.link}>
                {key}
              </Link>
            ))}
        </section>
      </section>
    </footer>
  );
};

export default Footer;
