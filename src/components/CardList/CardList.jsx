import React from 'react';
import styles from './cardList.module.css';
import Card from '../Card/Card';
import Pagination from '@/components/Pagination/Pagination';

const FakeCard = {
  description:
    'Explore how AI is transforming healthcare with advanced diagnostic tools and personalized treatment plans. Learn how these innovations lead to faster, more accurate diagnoses and targeted therapies, revolutionizing patient care and outcomes.',
  title:
    'Revolutionizing Healthcare: AI-Driven Diagnostics and Personalized Treatment Plans',
  date: '11.02.2023',
  category: 'Tech',
  src: '/p1.jpeg',
};

const CardList = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <main className={styles.posts}>
        <Card {...FakeCard} />
        <Card {...FakeCard} />
      </main>
      <Pagination />
    </section>
  );
};

export default CardList;
