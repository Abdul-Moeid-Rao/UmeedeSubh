'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface ThemeSwitcherProps {
  variant?: 'icon' | 'badge';
  className?: string;
}

export default function ThemeSwitcher({
  variant = 'icon',
  className = '',
}: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'badge') {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-200 cursor-pointer ${
          isDark
            ? 'bg-white/10 border-white/20 text-[#FCC609] hover:bg-white/15'
            : 'bg-paper border-mist text-ink hover:bg-paper/80'
        } ${className}`}
      >
        <span className="relative flex items-center justify-center w-4 h-4">
          {isDark ? (
            <Sun className="w-3.5 h-3.5 text-[#FCC609] transition-transform duration-300 rotate-0 hover:rotate-90" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-pen-gray transition-transform duration-300" />
          )}
        </span>
        <span>{isDark ? 'Light Theme' : 'Dark Theme'}</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      className={`relative w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs group ${
        isDark
          ? 'bg-[#1E202B] border-[#2E3142] text-[#FCC609] hover:border-[#FCC609]/60 hover:bg-[#252838]'
          : 'bg-white border-mist text-ink hover:border-ink/30 hover:bg-paper'
      } ${className}`}
    >
      <div className="relative flex items-center justify-center w-4 h-4">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#FCC609] transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" />
        ) : (
          <Moon className="w-4 h-4 text-ink/75 group-hover:text-ink transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
        )}
      </div>
    </button>
  );
}
