import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { CAT_WIDTH, CAT_HEIGHT } from '@/config/categoryConfig';

const Category = ({ href, src, alt, shortName, styles, hasImage = false }) => {
  return (
    <Link href={href} className={`${styles.category} ${styles[shortName]}`}>
      {hasImage && (
        <Image
          src={src}
          alt={alt}
          width={CAT_WIDTH}
          height={CAT_HEIGHT}
          className={styles.image}
        />
      )}
      {shortName}
    </Link>
  );
};

export default Category;
