'use client';

import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button 
      onClick={onToggle}
      className={`p-2 rounded-full ${isDark ? 'text-stone-200 hover:bg-stone-800' : 'text-stone-800 hover:bg-stone-200'}`}
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
} 