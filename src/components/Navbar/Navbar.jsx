import React from 'react';
import Link from 'next/link';

import styles from './navbar.module.css';
import IconYoutube from '../Icons/Youtube';
import IconGithub from '../Icons/Github';
import IconLinkedin from '../Icons/LinkedIn';
import withLink from '../HOCs/withLink';
import socialConfig from '@/config/socialConfig';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import AuthLinks from '../AuthLinks/AuthLinks';
import { ICON_SIZE } from '@/constants';

const YoutubeLink = withLink(IconYoutube, socialConfig.youtube);
const GithubLink = withLink(IconGithub, socialConfig.github);
const LinkedInLink = withLink(IconLinkedin, socialConfig.linkedIn);

const Navbar = () => {
  return (
    <header className={styles.container}>
      <section className={styles.social}>
        <GithubLink squared={ICON_SIZE} className={styles.icon} />
        <LinkedInLink squared={ICON_SIZE} className={styles.icon} />
        <YoutubeLink squared={ICON_SIZE} className={styles.icon} />
      </section>
      <section className={styles.logo}>
        <h1 className={styles.header}>DevDiaries</h1>
        <h2 className={styles.subheader}>
          by <Link href={socialConfig.website}>Josephmt.com</Link>
        </h2>
      </section>
      <section className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href='/'>
          Blogs
        </Link>
        <AuthLinks />
      </section>
    </header>
  );
};

export default Navbar;
