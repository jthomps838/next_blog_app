import React from 'react';

import MenuItem from '../MenuItem/MenuItem';

const FakeMenuItem = {
  src: '/p1.jpeg',
  href: '/',
  category: 'tools',
  title:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam repellat alias nostrum voluptate!',
  username: 'John Doe',
  date: '10.10.2024',
};

const WhatsHot = ({ styles }) => {
  return (
    <>
      <h2 className={styles.subtitle}>What's Hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <section className={styles.items}>
        <MenuItem {...FakeMenuItem} hasImage />
        <MenuItem {...FakeMenuItem} category='pM' hasImage />
        <MenuItem {...FakeMenuItem} category='tech' hasImage />
      </section>
    </>
  );
};

export default WhatsHot;
