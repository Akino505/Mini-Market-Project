import { useEffect, useState } from 'react';
import { dark, light, type AppTheme } from './theme';

const KEY = 'mini-market-theme';
type Mode = AppTheme['name'];

function getInitialMode(): Mode {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useThemeMode() {
  const [mode, setMode] = useState<Mode>(getInitialMode);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, mode);
    } catch {
    }
  }, [mode]);

  const toggle = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));
  return { theme: mode === 'dark' ? dark : light, mode, toggle };
}