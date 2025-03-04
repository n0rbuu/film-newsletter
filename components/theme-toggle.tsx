'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useIsClient } from '@/hooks/use-is-client';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isClient = useIsClient();
  const isDark = theme === 'dark';

  // During server-side rendering, show a placeholder button
  if (!isClient) {
    return (
      <button 
        className="p-2 rounded-full text-stone-200"
        aria-label="Toggle theme"
      >
        <Sun size={24} />
      </button>
    );
  }

  return (
    <button 
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`p-2 rounded-full ${isDark ? 'text-stone-200 hover:bg-stone-800' : 'text-stone-800 hover:bg-stone-200'}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
} 