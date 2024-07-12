import React from 'react';

import MenuItem from '../MenuItem/MenuItem';
import { getData } from '@/utils/helpers';

const WhatsHot = async ({ styles }) => {
  const { posts } = await getData('posts?is_hot=true');
  return (
    <>
      <h2 className={styles.subtitle}>What&lsquo;s Hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <section className={styles.items}>
        {posts?.map((post) => (
          <MenuItem {...post} key={post.id} />
        ))}
      </section>
    </>
  );
};

export default WhatsHot;
