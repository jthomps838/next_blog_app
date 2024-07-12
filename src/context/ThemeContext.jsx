'use client';

import { DARK_THEME, LIGHT_THEME } from '@/constants';
import { createContext, useState, useContext, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(localStorage.getItem('theme') || LIGHT_THEME);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggle = () =>
    setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
