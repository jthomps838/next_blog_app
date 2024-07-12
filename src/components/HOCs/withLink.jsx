import Link from 'next/link';
import React from 'react';

const withLink = (WrappedComponent, url, target = '__blank') => {
  const WrappedLink = (props) => (
    <Link href={url} target={target} passHref>
      <WrappedComponent {...props} />
    </Link>
  );
  WrappedLink.displayName = `withLink(Link)`;
  return WrappedLink;
};

withLink.displayName = 'withLink';

export default withLink;
