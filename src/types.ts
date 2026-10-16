export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string[];
  longDescription?: string;
  badge?: string;
  liveDemoUrl?: string;
  repoUrl?: string;
  image: string;
  technologies: string[];
  keyFeatures: string[];
  category: 'Full-Stack' | 'Workflow Automation' | 'Frontend';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  highlight: string;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  status?: string;
  period?: string;
  details?: string;
}
