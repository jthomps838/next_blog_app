'use client';

import Image from 'next/image';

import styles from './themeToggle.module.css';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <section className={styles.container} onClick={() => toggle()}>
      <Image src='/moon.png' alt='dark theme' width={14} height={14} />
      <section
        className={styles.ball}
        style={
          theme === 'dark'
            ? { left: 1, background: '#0f172a' }
            : { right: 1, background: 'white' }
        }
      ></section>
      <Image src='/sun.png' alt='light theme' width={14} height={14} />
    </section>
  );
};

export default ThemeToggle;
