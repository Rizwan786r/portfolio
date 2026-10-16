import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      className={`relative inline-flex items-center h-8 w-14 shrink-0 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-sky-500 ${
        isDark 
          ? 'bg-slate-800 border border-slate-700 hover:border-slate-600' 
          : 'bg-sky-100 border border-sky-300 hover:border-sky-400'
      } ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Background icons */}
      <span className="absolute left-1.5 text-amber-500 opacity-90 transition-opacity">
        <Sun className="w-3.5 h-3.5" />
      </span>
      <span className="absolute right-1.5 text-sky-400 opacity-90 transition-opacity">
        <Moon className="w-3.5 h-3.5" />
      </span>

      {/* Sliding Knob */}
      <span
        className={`pointer-events-none z-10 flex items-center justify-center h-6 w-6 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
          isDark
            ? 'translate-x-6 bg-slate-900 text-sky-400 border border-slate-700'
            : 'translate-x-0 bg-white text-amber-500 border border-amber-200'
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 fill-sky-400/20" />
        ) : (
          <Sun className="w-3.5 h-3.5 fill-amber-500/20" />
        )}
      </span>
    </button>
  );
};
