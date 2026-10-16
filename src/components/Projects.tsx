import React from 'react';
import { 
  FolderOpen, 
  Github, 
  Award, 
  Info,
  ArrowUpRight 
} from 'lucide-react';
import { Project } from '../types.ts';
import { PROJECTS_DATA } from '../data/portfolioData.ts';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 border-b border-slate-200 dark:border-slate-800/80 px-6 transition-colors duration-200">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Work &amp; Prototypes
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 mt-1">
              <FolderOpen className="w-6 h-6 text-sky-600 dark:text-sky-400 shrink-0" />
              <span>Featured Projects</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Selected engineering projects demonstrating full-stack thinking, responsive interfaces, and workflow integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm"
            >
              {/* Media Preview Container with Fallback */}
              <div 
                className="relative aspect-video w-full bg-slate-900 overflow-hidden cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-center">
                          <span class="font-bold text-slate-900 dark:text-white text-base">${project.title}</span>
                          <span class="text-xs text-sky-600 dark:text-sky-400 mt-1">${project.subtitle}</span>
                        </div>
                      `;
                    }
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-medium text-white flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-sky-400" />
                    <span>Click for architectural details</span>
                  </span>
                </div>

                {/* Badge if available (e.g. Hacksagon Finalist) */}
                {project.badge && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-white/90 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/30 rounded backdrop-blur-sm flex items-center gap-1 shadow-sm">
                      <Award className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span>{project.badge}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 
                        onClick={() => onSelectProject(project)}
                        className="text-xl font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-500">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-sky-600 dark:text-sky-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Bullet points strictly matching user source code */}
                  <ul className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm list-disc list-inside space-y-1.5 leading-relaxed">
                    {project.description.map((bullet, idx) => (
                      <li key={idx}>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/40 px-2 py-0.5 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-3 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap shadow-sm shadow-sky-600/20"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-sm"
                  >
                    <Info className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    <span>Overview</span>
                  </button>

                  <a
                    href={project.repoUrl || 'https://github.com/rizwannaguru'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-3 py-2 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ml-auto"
                    title="View GitHub repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
