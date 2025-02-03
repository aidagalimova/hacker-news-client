import { useEffect, useState } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') === Theme.Dark ? Theme.Dark : Theme.Light);

  const toggleTheme = (): void => {
    if (theme === Theme.Light) {
      window.localStorage.setItem('theme', Theme.Dark);
      setTheme(Theme.Dark);
    } else {
      window.localStorage.setItem('theme', Theme.Light);
      setTheme(Theme.Light);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme === Theme.Dark ? Theme.Dark : Theme.Light);
    } else if (prefersDark) {
      setTheme(Theme.Dark);
    }
  }, []);

  return { theme, toggleTheme };
};
