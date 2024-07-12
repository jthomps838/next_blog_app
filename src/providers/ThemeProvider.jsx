'use client';
import React, { useState, useEffect } from 'react';

import { useTheme } from '@/context/ThemeContext';

const ThemeProvider = ({ children }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(() => true);
  }, []);

  if (mounted) {
    return <section className={theme}>{children}</section>;
  }
};

export default ThemeProvider;
