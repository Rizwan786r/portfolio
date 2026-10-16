import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle.tsx';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between gap-6 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#hero"
          className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
        >
          RIZWAN<span className="text-sky-500">.</span>N
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Theme Toggle Switch + Primary Resume Button + Mobile trigger) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme Toggle Switch */}
          <ThemeToggle />

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-2 text-xs md:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:scale-95 rounded-lg shadow-sm shadow-sky-600/25 transition-all cursor-pointer whitespace-nowrap shrink-0"
            aria-label="View or download resume"
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Resume</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 px-6 py-4 space-y-3 transition-all shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 border-b border-slate-100 dark:border-slate-800/40"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center justify-between py-1 px-1">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Appearance</span>
              <ThemeToggle />
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-sky-600 rounded-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View &amp; Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
