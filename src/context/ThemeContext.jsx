'use client';

import { DARK_THEME, LIGHT_THEME } from '@/constants';
import { createContext, useState, useContext, useEffect } from 'react';

export const ThemeContext = createContext();

const getLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || LIGHT_THEME;
  }
  return LIGHT_THEME;
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem('theme', theme);
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
