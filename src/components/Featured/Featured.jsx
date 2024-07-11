import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        <b>Roadmap to Success:</b> Following My Path to the Next Job
      </h1>
      <main className={styles.post}>
        <section className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='' className={styles.image} fill />
        </section>
        <section className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Steps, Struggles, and Successes: My Path to a New Role
          </h2>
          <p className={styles.postDescription}>
            In this featured post on Dev Diaries, I share my journey as a
            developer, highlighting the key lessons, challenges, and
            achievements that have shaped my path to securing the next big job.
            Join me as I navigate the tech landscape, reflect on my growth, and
            uncover valuable insights for aspiring developers.
          </p>
          <button className={styles.readMore}>Read More</button>
        </section>
      </main>
    </section>
  );
};

export default Featured;
