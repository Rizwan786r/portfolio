import React from 'react';
import { X, Printer, Download, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, EDUCATION_DATA, SKILLS_DATA } from '../data/portfolioData.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
======================================================
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.role}
======================================================
Email: ${PERSONAL_INFO.primaryEmail} / ${PERSONAL_INFO.secondaryEmail}
Location: ${PERSONAL_INFO.location}
University: ${PERSONAL_INFO.university}
GitHub: ${PERSONAL_INFO.githubUrl}

SUMMARY:
${PERSONAL_INFO.about.join('\n\n')}

TECHNICAL SKILLS:
${SKILLS_DATA.map(s => `- ${s.title}: ${s.skills.join(', ')}`).join('\n')}

FEATURED PROJECTS:
${PROJECTS_DATA.map(p => `
* ${p.title} (${p.subtitle})
  ${p.description.join('\n  ')}
  Tech Stack: ${p.technologies.join(', ')}
  ${p.liveDemoUrl ? `Demo: ${p.liveDemoUrl}` : ''}
  Repo: ${p.repoUrl || 'GitHub'}
`).join('\n')}

EDUCATION:
${EDUCATION_DATA.map(e => `
* ${e.title}
  ${e.institution} (${e.period || ''})
  ${e.details || ''}
`).join('\n')}
======================================================
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rizwan_Naguru_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-2">
            <h3 id="resume-title" className="text-base font-bold text-slate-900 dark:text-white">
              Resume Preview — {PERSONAL_INFO.name}
            </h3>
            <span className="text-xs px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20">
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="px-3 py-1.5 text-xs font-medium text-white bg-sky-600 hover:bg-sky-500 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 bg-slate-50/50 dark:bg-slate-900/50">
          {/* Header block */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-semibold text-sky-600 dark:text-sky-400">
              {PERSONAL_INFO.role}
            </p>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.primaryEmail}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <span>{PERSONAL_INFO.university}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {PERSONAL_INFO.about.join(' ')}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILLS_DATA.map((cat) => (
                <div key={cat.id} className="p-3 bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
                  <span className="font-semibold text-slate-900 dark:text-white block mb-1">{cat.title}:</span>
                  <span className="text-slate-600 dark:text-slate-300">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Key Engineering Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="p-4 bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-lg space-y-2 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{proj.title}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">— {proj.subtitle}</span>
                    </div>
                    {proj.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">
                        {proj.badge}
                      </span>
                    )}
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
                    {proj.description.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    Technologies: {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Education
            </h2>
            <div className="space-y-2">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="p-3 bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs shadow-sm">
                  <div>
                    <strong className="text-slate-900 dark:text-white block">{edu.title}</strong>
                    <span className="text-slate-500 dark:text-slate-400">{edu.institution}</span>
                  </div>
                  <span className="text-sky-600 dark:text-sky-400 font-mono font-medium">{edu.period || edu.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
