import { Project, SkillCategory, EducationItem } from '../types.ts';

export const PERSONAL_INFO = {
  name: 'Rizwan Naguru',
  role: 'Software Development Intern',
  tagline: 'Computer Science student interested in Software Development, Web Applications, and AI Workflow Automation.',
  university: 'NIAT × Annamacharya University',
  degree: 'B.Tech — Computer Science and Engineering',
  location: 'Kadapa, Andhra Pradesh, India',
  primaryEmail: 'nagururizwan@gmail.com',
  secondaryEmail: 'rizwandevil122@gmail.com',
  githubUrl: 'https://github.com/Rizwan786r',
  linkedinUrl: 'https://linkedin.com/in/rizwannaguru',
  avatarImage: '/src/assets/images/developer_avatar_1792126293448.jpg',
  about: [
    'I am a Computer Science and Engineering student at NIAT × Annamacharya University with foundational knowledge in Java, Python, HTML, CSS, and JavaScript.',
    'I specialize in web application development, responsive UI creation, and system integrations using workflow automation tools like n8n and REST APIs. I am seeking an internship opportunity to apply my technical knowledge, develop hands-on software development skills, and contribute to real-world software products.'
  ],
  stats: [
    { label: 'Hacksagon Finalist', value: '2026' },
    { label: 'Featured Projects', value: '3+' },
    { label: 'Core Languages', value: 'Java · Python · JS' },
    { label: 'Target Availability', value: 'Immediate' },
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    icon: 'Laptop',
    highlight: 'Object-Oriented & Scripting Foundations',
    skills: ['Java', 'Python (Fundamentals)', 'Algorithms', 'Logic & Problem Solving']
  },
  {
    id: 'webdev',
    title: 'Web Development',
    icon: 'Globe',
    highlight: 'Modern Responsive Client Interfaces',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Web Design', 'Tailwind CSS']
  },
  {
    id: 'core',
    title: 'Core Concepts',
    icon: 'Layers',
    highlight: 'Software Engineering Fundamentals',
    skills: ['Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'Problem Solving', 'Modular Architecture']
  },
  {
    id: 'workflow',
    title: 'Workflow Automation',
    icon: 'GitFork',
    highlight: 'Event-driven Integrations & Data Pipelines',
    skills: ['n8n (Fundamentals)', 'Webhooks', 'REST API Concepts', 'JSON Manipulation', 'System Integrations']
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: 'Wrench',
    highlight: 'Version Control & Deployment Ecosystems',
    skills: ['Git', 'GitHub', 'Vercel', 'Lovable', 'Base44', 'VS Code']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'share-plate',
    title: 'Share Plate',
    subtitle: 'Surplus Food Sharing Platform',
    tagline: 'Community-driven food rescue platform reducing waste through real-time coordination.',
    category: 'Full-Stack',
    badge: 'Hacksagon 2026 Finalist',
    image: '/src/assets/images/project_shareplate_preview_1792126291932.jpg',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Location Services'],
    description: [
      'Designed to reduce community food waste by connecting surplus providers with local seekers.',
      'Enables listing surplus food with high-res photos, item descriptions, and exact pickup locations.',
      'Built around intuitive claiming workflows, time-sensitive reservations, and pickup coordination.'
    ],
    longDescription: 'Share Plate was created during the Hacksagon 2026 Hackathon where it was selected as a finalist project. It solves the critical social issue of edible surplus food disposal by providing commercial kitchens, bakeries, and community organizers an immediate channel to list excess provisions for nearby community members to claim before expiration.',
    keyFeatures: [
      'Surplus item catalog with expiration timers and proximity radius filtering',
      'Photo upload and quantity tracking per donation',
      'One-click claiming workflow with pickup instructions and recipient verification',
      'Community impact tracking metrics showing meals saved from landfills'
    ],
    repoUrl: 'https://github.com/Rizwan786r/share-plate',
  },
  {
    id: 'flow-ai',
    title: 'FlowAI',
    subtitle: 'AI Workflow Platform',
    tagline: 'Next-generation automation platform orchestrating webhooks, AI services, and REST APIs.',
    category: 'Workflow Automation',
    image: '/src/assets/images/project_flowai_preview_1792126291856.jpg',
    technologies: ['n8n', 'Node.js', 'REST APIs', 'Webhooks', 'Vercel', 'JSON'],
    liveDemoUrl: 'https://ai-workflow-platform-3r5h.vercel.app/',
    repoUrl: 'https://github.com/Rizwan786r/ai-workflow-platform',
    description: [
      'Platform designed to support workflow-related tasks and dynamic orchestration.',
      'Integrates incoming webhooks and outgoing REST API endpoints into seamless multi-step pipelines.',
      'Hosted on high-availability Vercel infrastructure with rapid event propagation.'
    ],
    longDescription: 'FlowAI acts as a visual automation engine that bridges disparate enterprise tools. By combining trigger endpoints with programmatic JSON manipulation and API connectors, users can automate customer notifications, order handling, and data synchronization without writing custom glue code from scratch.',
    keyFeatures: [
      'Interactive pipeline visualization showing connected execution nodes',
      'Custom webhook listener generating unique endpoints for external triggers',
      'In-browser payload inspector displaying request headers and JSON bodies',
      'Production deployment on Vercel with zero downtime'
    ]
  },
  {
    id: 'bahar-cafe',
    title: 'Bahar Cafe',
    subtitle: 'Restaurant Website',
    tagline: 'Artisanal dining showcase featuring responsive menu navigation and reservation inquiries.',
    category: 'Frontend',
    image: '/src/assets/images/project_baharcafe_preview_1792126291961.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Figma to Code'],
    repoUrl: 'https://github.com/Rizwan786r/bahar-cafe',
    description: [
      'Restaurant website project featuring responsive UI components and artisanal aesthetic.',
      'Carefully engineered for both mobile and desktop viewports with fluid typography.',
      'Interactive menu catalog with beverage categorization, pricing, and ingredients breakdown.'
    ],
    longDescription: 'Bahar Cafe delivers a warm, welcoming digital presence for a boutique cafe and restaurant. The interface focuses on high-touch culinary visuals, clean categorized menus, customer reviews, and a reservation inquiry module that is fully touch-optimized for handheld mobile devices.',
    keyFeatures: [
      'Mobile-first responsive layout with collapsible navigation and touch-friendly targets',
      'Interactive culinary menu with dietary highlights and pricing breakdowns',
      'Location and operational hours widget with embedded map directions',
      'Table reservation contact form with real-time field validation'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'btech',
    title: 'B.Tech — Computer Science and Engineering',
    institution: 'NIAT × Annamacharya University',
    status: 'Currently Pursuing',
    period: '2023 – 2027 (Expected)',
    details: 'Focusing on Core Computer Science principles, Data Structures, Algorithms, Software Engineering, Object-Oriented Programming in Java, and Web Technologies.'
  },
  {
    id: 'inter',
    title: 'Intermediate (MPC — Maths, Physics, Chemistry)',
    institution: 'Narayana Junior College, Kadapa',
    period: '2021 – 2023',
    details: 'Completed higher secondary education with a rigorous focus on analytical problem-solving, advanced mathematics, physics, and science foundations.'
  },
  {
    id: 'school',
    title: 'Secondary School Education (SSC)',
    institution: 'Vidya Mandir High School, Kadapa',
    period: 'Completed 2021',
    details: 'Achieved outstanding academic standing, laying early foundations in computer literacy, logic, science, and extracurricular leadership.'
  }
];
