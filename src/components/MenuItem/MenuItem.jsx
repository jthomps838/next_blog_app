import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './menuItem.module.css';

const MenuItem = ({
  href,
  src,
  title,
  category,
  username,
  date,
  hasImage = false,
}) => {
  return (
    <Link href={href} className={styles.item}>
      {hasImage && (
        <section className={styles.imageContainer}>
          <Image src={src} alt='' className={styles.image} fill />
        </section>
      )}
      <section className={styles.textContainer}>
        <span className={`${styles.category} ${styles[category]}`}>
          {category}
        </span>
        <h3 className={styles.postTitle}>{title}</h3>
        <section className={styles.detail}>
          <span className={styles.username}>{username}</span>
          <span className={styles.date}> - {date}</span>
        </section>
      </section>
    </Link>
  );
};

export default MenuItem;
