import React from 'react';
import Link from 'next/link';

import socialConfig from '@/config/socialConfig';

const Logo = ({ styles }) => {
  return (
    <section className={styles.logo}>
      <h1 className={styles.header}>DevDiaries</h1>
      <h2 className={styles.subheader}>
        by <Link href={socialConfig.portfolio}>Josephmt.com</Link>
      </h2>
    </section>
  );
};

export default Logo;
