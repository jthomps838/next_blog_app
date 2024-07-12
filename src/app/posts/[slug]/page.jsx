import Image from 'next/image';

import styles from './blogPost.module.css';
import Menu from '@/components/Menu/Menu';
import Comments from '@/components/Comments/Comments';
import { getData } from '@/utils/helpers';

const BlogPost = async ({ params }) => {
  const { slug } = params;

  const data = await getData(`posts/${slug}`);

  return (
    <section className={styles.container}>
      <section className={styles.infoContainer}>
        <header className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <section className={styles.user}>
            {data?.user?.image && (
              <header className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt=''
                  fill
                  className={styles.avatar}
                />
              </header>
            )}
            <main className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>
                {data?.createdAt.substring(0, 10)}
              </span>
            </main>
          </section>
        </header>
        {data?.img && (
          <section className={styles.imageContainer}>
            <Image src={data.img} alt='' fill className={styles.image} />
          </section>
        )}
      </section>
      <section className={styles.content}>
        <section className={styles.post}>
          <main
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: data?.desc,
            }}
          />
          <section className={styles.comment}>
            <Comments postSlug={slug} />
          </section>
        </section>
        <Menu />
      </section>
    </section>
  );
};

export default BlogPost;
