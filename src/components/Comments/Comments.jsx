'use client';

import Link from 'next/link';
import styles from './comments.module.css';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import CommentsList from '../CommentsList/CommentsList';

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `${process.env.URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState('');

  const handleSubmit = async () => {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <section className={styles.write}>
          <textarea
            placeholder='write a comment...'
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </section>
      ) : (
        <Link href='/login'>Login to write a comment</Link>
      )}
      <CommentsList data={data} isLoading={isLoading} styles={styles} />
    </section>
  );
};

export default Comments;
