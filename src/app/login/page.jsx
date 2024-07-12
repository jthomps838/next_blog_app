'use client';

import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import styles from './loginPage.module.css';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status]);
  if (status === 'loading') {
    return <span className={styles.loading}>Loading...</span>;
  }

  return (
    <section className={styles.container}>
      <main className={styles.wrapper}>
        <button
          className={styles.socialButton}
          onClick={() => signIn('google')}
        >
          Sign in with Google
        </button>
      </main>
    </section>
  );
};

export default LoginPage;
