import React from 'react';
import { UserCheck, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  const highlights = [
    {
      title: 'Practical Software Architecture',
      desc: 'Developing end-to-end web apps with clean data models and component reusability.'
    },
    {
      title: 'Workflow & API Automation',
      desc: 'Designing automated pipelines using n8n, webhooks, and REST APIs to bridge systems.'
    },
    {
      title: 'Hackathon-Tested Problem Solving',
      desc: 'Finalist at Hacksagon 2026, delivering high-impact community solutions under tight deadlines.'
    },
    {
      title: 'Immediate Internship Availability',
      desc: 'Eager to contribute to production codebases, learn team workflows, and build reliable software.'
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-slate-200 dark:border-slate-800/80 px-6 transition-colors duration-200">
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Background &amp; Goals
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 mt-1">
            <UserCheck className="w-6 h-6 text-sky-600 dark:text-sky-400 shrink-0" />
            <span>About Me</span>
          </h2>
        </div>

        {/* Narrative Card */}
        <div className="p-6 md:p-8 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl space-y-5 shadow-sm">
          {PERSONAL_INFO.about.map((paragraph, index) => (
            <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Key Competency Callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-xl flex items-start gap-3.5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
