import React, { Suspense } from 'react';
import styles from './categoryList.module.css';

import Category from '../Category/Category';
import { getData } from '@/utils/helpers';

const CategoryList = async () => {
  const data = await getData('categories');

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <section className={styles.categories}>
        {/* replace with skeleton categories */}
        <Suspense fallback={<h1>Loading...</h1>}>
          {data?.map((category) => (
            <Category
              {...category}
              styles={styles}
              key={category.slug}
              hasImage
            />
          ))}
        </Suspense>
      </section>
    </section>
  );
};

export default CategoryList;
