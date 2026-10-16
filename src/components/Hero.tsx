import React from 'react';
import { ArrowDown, Mail, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="hero" className="border-b border-slate-200 dark:border-slate-800/80 pt-16 pb-20 px-6 relative overflow-hidden transition-colors duration-200">
      {/* Subtle atmospheric ambient glow behind hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-400/10 dark:bg-sky-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Split Hero: Typography Left, Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[65vh]">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-100/80 dark:bg-sky-500/10 rounded-full border border-sky-200 dark:border-sky-500/20">
              <Code2 className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.role}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] [text-wrap:balance]">
              Hi, I'm <span className="text-sky-600 dark:text-sky-400">{PERSONAL_INFO.name}</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed [text-wrap:balance]">
              {PERSONAL_INFO.tagline}
            </p>

            <div className="pt-2 text-sm text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-y-2 gap-x-3">
              <span>{PERSONAL_INFO.degree}</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span className="text-sky-700 dark:text-sky-300 font-medium">{PERSONAL_INFO.university}</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 font-semibold text-white bg-sky-600 hover:bg-sky-500 active:scale-95 rounded-lg shadow-lg shadow-sky-600/25 transition-all inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onContactClick}
                className="px-6 py-3 font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 border border-slate-300 dark:border-slate-700/80 rounded-lg shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-2xl p-2 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                <img
                  src={PERSONAL_INFO.avatarImage}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-center">
                          <div class="w-20 h-20 rounded-full bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3 text-2xl font-bold">RN</div>
                          <span class="font-bold text-slate-900 dark:text-white text-lg">Rizwan Naguru</span>
                          <span class="text-xs text-sky-600 dark:text-sky-400 mt-1">Software Development Intern</span>
                        </div>
                      `;
                    }
                  }}
                />

                {/* Subtle highlight overlay bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-4 flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-xs font-semibold text-white tracking-wide">{PERSONAL_INFO.name}</p>
                    <p className="text-[11px] text-sky-300">Open for Internships</p>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-900/80 text-slate-200 border border-slate-700/60 font-mono">
                    Kadapa, IN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics Strip below the split */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight tabular-nums">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
