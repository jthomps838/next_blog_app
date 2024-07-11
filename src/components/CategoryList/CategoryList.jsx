import React, { Suspense } from 'react';
import styles from './categoryList.module.css';

import categoryConfig from '@/config/categoryConfig';
import Category from '../Category/Category';

const CategoryList = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <section className={styles.categories}>
        {/* replace with skeleton categories */}
        <Suspense fallback={<h1>Loading...</h1>}>
          {categoryConfig &&
            categoryConfig.map((category) => (
              <Category {...category} styles={styles} />
            ))}
        </Suspense>
      </section>
    </section>
  );
};

export default CategoryList;
