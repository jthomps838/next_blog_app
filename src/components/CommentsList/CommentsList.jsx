import React from 'react';
import Image from 'next/image';

const CommentsList = ({ data, isLoading, styles }) => {
  return (
    <section className={styles.comments}>
      {isLoading
        ? 'loading'
        : data?.map((item) => (
            <main className={styles.comment} key={item.id}>
              <section className={styles.user}>
                {item?.user?.image && (
                  <Image
                    src={item.user.image}
                    alt=''
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                )}
                <section className={styles.userInfo}>
                  <span className={styles.username}>{item.user.name}</span>
                  <span className={styles.date}>{item.createdAt}</span>
                </section>
              </section>
              <p className={styles.desc}>{item.desc}</p>
            </main>
          ))}
    </section>
  );
};

export default CommentsList;
