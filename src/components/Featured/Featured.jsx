import React from 'react';

import styles from './featured.module.css';
import Image from 'next/image';
import { getData } from '@/utils/helpers';
import Link from 'next/link';

const Featured = async () => {
  const { posts } = await getData('posts?is_featured=true');
  let post = null;
  if (posts) {
    post = posts[0];
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{post?.title}</h1>
      <main className={styles.post}>
        <section className={styles.imgContainer}>
          <Image
            src={post?.img}
            alt={post?.title}
            className={styles.image}
            fill
          />
        </section>
        <section className={styles.textContainer}>
          <h2 className={styles.postTitle}>{post?.subtitle}</h2>
          <section className={styles.postDescription}>
            {post?.desc.substring(0, 300)}
          </section>
          <Link href={`posts/${post?.slug}`} className={styles.readMore}>
            Read More
          </Link>
        </section>
      </main>
    </section>
  );
};

export default Featured;
