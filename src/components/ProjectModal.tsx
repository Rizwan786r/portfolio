import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Award, CheckCircle } from 'lucide-react';
import { Project } from '../types.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-3">
            <h3 id="modal-project-title" className="text-lg font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            {project.badge && (
              <span className="px-2 py-0.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/30 rounded flex items-center gap-1">
                <Award className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span>{project.badge}</span>
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Image */}
          <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Subtitle & Tagline */}
          <div>
            <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              {project.subtitle}
            </p>
            <p className="text-base text-slate-800 dark:text-slate-200 mt-1 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Detailed narrative */}
          {project.longDescription && (
            <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Problem &amp; Solution Context
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          )}

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Key Capabilities &amp; Features
            </h4>
            <div className="space-y-2">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Technologies &amp; Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800/80 text-sky-700 dark:text-sky-300 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm shadow-sky-600/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Live Demo</span>
            </a>
          )}

          <a
            href={project.repoUrl || 'https://github.com/rizwannaguru'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
