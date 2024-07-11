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

const EditorsChoice = ({ styles }) => {
  return (
    <>
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <section className={styles.items}>
        <MenuItem {...FakeMenuItem} />
        <MenuItem {...FakeMenuItem} category='pM' />
        <MenuItem {...FakeMenuItem} category='tech' />
      </section>
    </>
  );
};

export default EditorsChoice;
