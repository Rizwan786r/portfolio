import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData.ts';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-slate-200 dark:border-slate-800/80 px-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Academic Foundations
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 mt-1">
            <GraduationCap className="w-6 h-6 text-sky-600 dark:text-sky-400 shrink-0" />
            <span>Education</span>
          </h2>
        </div>

        <div className="space-y-6">
          {EDUCATION_DATA.map((item, index) => (
            <div
              key={item.id}
              className="p-6 md:p-7 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 relative hover:border-slate-300 dark:hover:border-slate-700/80 transition-all shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {item.status ? (
                    <span className="text-xs font-semibold text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 px-2 py-0.5 rounded">
                      {item.status}
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded">
                      Milestone {index + 1}
                    </span>
                  )}
                  {item.period && (
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                      {item.period}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1 flex items-center gap-2">
                  <span>{item.institution}</span>
                </p>
              </div>

              {item.details && (
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                  {item.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
