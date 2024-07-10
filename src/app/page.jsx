import Featured from '@/components/Featured/Featured';
import styles from './homepage.module.css';
import CategoryList from '@/components/CategoryList/CategoryList';
import CardList from '@/components/CardList/CardList';
import Menu from '@/components/Menu/Menu';

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryList className={styles.container} />
      <section className={styles.content}>
        <CardList />
        <Menu />
      </section>
    </main>
  );
}
