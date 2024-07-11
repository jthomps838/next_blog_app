import React from 'react';
import Link from 'next/link';

const Login = ({ status, styles }) => {
  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href='/login' className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href='/write' className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default Login;
