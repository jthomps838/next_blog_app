import React, { Suspense } from 'react';

import Category from '../Category/Category';
import categoryConfig from '@/config/categoryConfig';

const MenuCategories = ({ styles }) => {
  return (
    <>
      <h2 className={styles.subtitle}>Discover by Topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <section className={styles.categoryItems}>
        <Suspense fallback={<h1>Loading...</h1>}>
          {categoryConfig &&
            categoryConfig.map((category) => (
              <Category {...category} styles={styles} />
            ))}
        </Suspense>
      </section>
    </>
  );
};

export default MenuCategories;
