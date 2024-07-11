import React from 'react';
import styles from './menu.module.css';
import WhatsHot from '../WhatsHot/WhatsHot';
import EditorsChoice from '../EditorsChoice/EditorsChoice';
import MenuCategories from '../MenuCategories/MenuCategories';

const Menu = () => {
  return (
    <section className={styles.container}>
      <WhatsHot styles={styles} />
      <MenuCategories styles={styles} />
      <EditorsChoice styles={styles} />
    </section>
  );
};

export default Menu;
