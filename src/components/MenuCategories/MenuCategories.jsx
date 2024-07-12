import React, { Suspense } from 'react';

import Category from '../Category/Category';
import { getData } from '@/utils/helpers';

const MenuCategories = async ({ styles }) => {
  const data = await getData('categories');

  return (
    <>
      <h2 className={styles.subtitle}>Discover by Topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <section className={styles.categoryItems}>
        <Suspense fallback={<h1>Loading...</h1>}>
          {data?.map((category) => (
            <Category {...category} key={category?.id} styles={styles} />
          ))}
        </Suspense>
      </section>
    </>
  );
};

export default MenuCategories;
