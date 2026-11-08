import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ isDark: true, toggleTheme: () => {} });

function readSavedTheme() {
  try {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // dark by default
  } catch {
    return true;
  }
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(readSavedTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {}
  }, [isDark]);

  const toggleTheme = () => setIsDark((d) => !d);

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
