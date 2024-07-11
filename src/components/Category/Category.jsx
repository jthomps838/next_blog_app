import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { CAT_WIDTH, CAT_HEIGHT } from '@/config/categoryConfig';

const Category = ({ slug, title, img: src, styles, hasImage = false }) => {
  return (
    <Link
      href={`/blog?cat=${slug}`}
      className={`${styles.category} ${styles[slug]}`}
    >
      {hasImage && (
        <Image
          src={src}
          alt={slug}
          width={CAT_WIDTH}
          height={CAT_HEIGHT}
          className={styles.image}
        />
      )}
      {title}
    </Link>
  );
};

export default Category;
