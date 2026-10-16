import React, { useState } from 'react';
import { 
  Code, 
  Laptop, 
  Globe, 
  Layers, 
  GitFork, 
  Wrench
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData.ts';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'programming', label: 'Programming & Logic' },
    { id: 'webdev', label: 'Web Development' },
    { id: 'workflow', label: 'Workflow & APIs' },
    { id: 'tools', label: 'Tools & Platforms' },
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Laptop className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'webdev':
        return <Globe className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'core':
        return <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'workflow':
        return <GitFork className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      default:
        return <Code className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
    }
  };

  const filteredCategories = SKILLS_DATA.filter((cat) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'programming') return cat.id === 'programming' || cat.id === 'core';
    if (activeTab === 'webdev') return cat.id === 'webdev';
    if (activeTab === 'workflow') return cat.id === 'workflow';
    if (activeTab === 'tools') return cat.id === 'tools';
    return true;
  });

  return (
    <section id="skills" className="py-20 border-b border-slate-200 dark:border-slate-800/80 px-6 transition-colors duration-200">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Technical Stack &amp; Competencies
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 mt-1">
              <Code className="w-6 h-6 text-sky-600 dark:text-sky-400 shrink-0" />
              <span>Technical Skills</span>
            </h2>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-sky-50 dark:bg-slate-800/80 rounded-lg">
                    {getIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {category.highlight}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex flex-wrap gap-2 text-sm">
                    {category.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 px-2.5 py-1 rounded"
                      >
                        <span className="w-1 h-1 rounded-full bg-sky-500 dark:bg-sky-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 text-[11px] text-slate-400 dark:text-slate-500 font-mono flex items-center justify-between">
                <span>{category.skills.length} competencies</span>
                <span className="text-sky-600 dark:text-sky-400 font-medium">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
