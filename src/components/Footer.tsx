import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-900 bg-slate-100/70 dark:bg-slate-950 text-slate-600 dark:text-slate-500 text-sm transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-slate-700 dark:text-slate-400">
            &copy; 2026 {PERSONAL_INFO.name}. Built &amp; Deployed for Software Development Roles.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-600 mt-1">
            NIAT × Annamacharya University · Kadapa, Andhra Pradesh
          </p>
        </div>

        <div className="flex items-center gap-6 text-slate-600 dark:text-slate-400 text-xs">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.primaryEmail}`}
            className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ml-2 cursor-pointer shadow-sm"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
