'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button 
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`p-2 rounded-full ${isDark ? 'text-stone-200 hover:bg-stone-800' : 'text-stone-800 hover:bg-stone-200'}`}
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
} 