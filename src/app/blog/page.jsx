import React from 'react';

import styles from './blogPage.module.css';
import CardList from '@/components/CardList/CardList';
import Menu from '@/components/Menu/Menu';

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <section className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </section>
    </main>
  );
};

export default BlogPage;
