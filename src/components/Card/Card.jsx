import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './card.module.css';

const Card = ({ img, createdAt, catSlug, title, desc, slug }) => {
  return (
    <section className={styles.container}>
      <section className={styles.imgContainer}>
        <Image src={img} alt={img} className={styles.image} fill />
      </section>
      <section className={styles.textContainer}>
        <header className={styles.detail}>
          <span className={styles.date}>{createdAt.substring(0, 10)} - </span>
          <span className={styles.category}>{catSlug}</span>
        </header>
        <main className={styles.content}>
          <Link href='/'>
            <h1 className={styles.title}>{title}</h1>
          </Link>
          <p className={styles.description}>{desc.substring(0, 80)}...</p>
          <Link href={`posts/${slug}`} className={styles.readMore}>
            Read More
          </Link>
        </main>
      </section>
    </section>
  );
};

export default Card;
