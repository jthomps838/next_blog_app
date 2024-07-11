'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import styles from './pagination.module.css';

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <section className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </section>
  );
};

export default Pagination;
