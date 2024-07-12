import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './menuItem.module.css';

const MenuItem = ({
  slug,
  img,
  title,
  catSlug,
  userEmail,
  createdAt,
  hasImage = false,
}) => {
  return (
    <Link href={`posts/${slug}`} className={styles.item}>
      {hasImage && (
        <section className={styles.imageContainer}>
          <Image src={img} alt={title} className={styles.image} fill />
        </section>
      )}
      <section className={styles.textContainer}>
        <span className={`${styles.category} ${styles[catSlug]}`}>
          {catSlug}
        </span>
        <h3 className={styles.postTitle}>{title}</h3>
        <section className={styles.detail}>
          <span className={styles.username}>{userEmail}</span>
          <span className={styles.date}> - {createdAt?.substring(0, 10)}</span>
        </section>
      </section>
    </Link>
  );
};

export default MenuItem;
