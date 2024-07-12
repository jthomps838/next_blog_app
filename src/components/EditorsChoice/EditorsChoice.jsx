import React from 'react';

import MenuItem from '../MenuItem/MenuItem';
import { getData } from '@/utils/helpers';

const EditorsChoice = async ({ styles }) => {
  const { posts } = await getData('posts?is_editor=true');

  return (
    <>
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <section className={styles.items}>
        {posts?.map((post) => (
          <MenuItem {...post} key={post.id} />
        ))}
      </section>
    </>
  );
};

export default EditorsChoice;
