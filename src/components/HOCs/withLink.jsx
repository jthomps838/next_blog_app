import Link from 'next/link';
import React from 'react';

const withLink = (WrappedComponent, url, target = '__blank') => {
  return (props) => (
    <Link href={url} target={target} passHref>
      <WrappedComponent {...props} />
    </Link>
  );
};

export default withLink;
