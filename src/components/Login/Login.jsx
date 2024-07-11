import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { UNAUTHENTICATED } from '@/constants';

const Login = ({ styles }) => {
  const { status } = useSession();
  return (
    <>
      {status === UNAUTHENTICATED ? (
        <Link href='/login' className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href='/write' className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
    </>
  );
};

export default Login;
