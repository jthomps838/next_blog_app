import React from 'react';

import { getData } from '@/utils/helpers';
import styles from './cardList.module.css';
import Card from '../Card/Card';
import Pagination from '@/components/Pagination/Pagination';
import { POST_PER_PAGE } from '@/constants';

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(
    `posts?page=${page}&cat=${cat || ''}`,
    {
      cache: 'no-store',
    }
  );

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;

  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <main className={styles.posts}>
        {posts?.map((card) => (
          <Card {...card} key={card.id} />
        ))}
      </main>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </section>
  );
};

export default CardList;
