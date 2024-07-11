import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './card.module.css';

const Card = ({ src, date, category, title, description }) => {
  return (
    <section className={styles.container}>
      <section className={styles.imgContainer}>
        <Image src={src} alt='' className={styles.image} fill />
      </section>
      <section className={styles.textContainer}>
        <header className={styles.detail}>
          <span className={styles.date}>{date} - </span>
          <span className={styles.category}>{category}</span>
        </header>
        <main className={styles.content}>
          <Link href='/'>
            <h1 className={styles.title}>{title}</h1>
          </Link>
          <p className={styles.description}>{description}</p>
          <Link href='/' className={styles.readMore}>
            Read More
          </Link>
        </main>
      </section>
    </section>
  );
};

export default Card;
