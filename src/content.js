export const profile = {
  name: 'John Lee Aeolus Cadaño',
  role: 'Developer • Database Administration',
  location: '',
  blurb:
    "Salutations! I'm a passionate and committed developer with extensive knowledge in database administration.",
  heroImage: '/me.jpg',
  contactImage: '/me.jpg',
  email: 'johnleeeolusc@gmail.com',

  links: {
    github: 'https://github.com/JohnLeeAeolus',
    facebook: 'https://facebook.com/aeoluscadano/',
    instagram: 'https://www.instagram.com/johnleeaeoluscadano/',
    telegram: 'https://t.me/Aeoluscadano',
    linkedin: 'https://linkedin.com/',
  },
}

export const about = {
  intro:
    "I started my career by pursuing a bachelor's degree in Information Technology, which gave me a strong foundation in the ever-evolving field of technology.",
  education: [
    {
      program: 'BS Information Technology',
      school: 'New Era University',
      years: '2023–Present',
    },
  ],
  certifications: [
    'Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate',
    'Oracle Cloud Data Management 2023 Certified Foundations Associate',
    'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',
    'SQL and Relational Databases 101',
    'NoSQL and DBaaS 101',
  ],
}

export const work = [
  {
    years: '2023–Present',
    title: 'BS Information Technology',
    subtitle: 'New Era University',
    description: 'Building a strong foundation in software development and systems.',
    icon: 'ring',
  },
  {
    years: '2023',
    title: 'Oracle Cloud Foundations',
    subtitle: 'AI + Data Management + Infrastructure',
    description: 'Completed multiple Oracle Cloud foundations certifications.',
    icon: 'spark',
  },
  {
    years: '2024–2026',
    title: 'Project Development',
    subtitle: 'Apps + databases + UI',
    description: 'Learning by shipping projects and iterating on real features.',
    icon: 'nodes',
  },
]

export const projects = [
  {
    title: 'InternQuest Mobile Application',
    description:
      'A mobile app project (see repository for details).',
    slug: 'internquest-mobile-application',
    category: 'Mobile App',
    date: '',
    client: '',
    heroImage: '/internQuest-mobileside/download.jpg',
    gallery: [
      '/internQuest-mobileside/download.jpg',
      '/internQuest-mobileside/download (3).jpg',
      '/internQuest-mobileside/download (1).jpg',
      '/internQuest-mobileside/download (2).jpg',
      '/internQuest-mobileside/download (1) (1).jpg',
    ],
    detailHeading: 'What I worked on',
    detailText:
      'This project focuses on building a mobile experience that helps users navigate internships and opportunities. I worked on shaping the flow, improving clarity, and organizing the app features into a consistent UI.',
    tech: ['Mobile App'],
    links: {
      live: '',
      code: 'https://github.com/Justine1193/InternQuest-Mobile-Application.git',
    },
    thumb: '/internQuest-mobileside/download (3).jpg',
  },
  {
    title: 'UniLearn Nexus',
    description:
      'A responsive Learning Management System (LMS) web app concept—similar to an NEU VLE—for managing courses, assignments, and communication.',
    slug: 'unilearn-nexus',
    category: 'LMS • School Project',
    date: '',
    client: '',
    heroImage:
      '/student-side-unilearnNexus/612399917_2063877847676356_1106514963270566074_n.png',
    gallery: [
      '/student-side-unilearnNexus/612281540_886808570422668_7360130296537412602_n.png',
      '/student-side-unilearnNexus/614078072_1577386330080996_1366072222295167076_n.png',
      '/student-side-unilearnNexus/610881515_1448242463970953_4360542532112567985_n.png',
      '/student-side-unilearnNexus/612330570_1562527991684317_6337024470227483350_n.png',
    ],
    detailHeading: 'Key features',
    detailText:
      'UniLearn Nexus is a user-friendly LMS concept designed for students and instructors. It includes a unified course dashboard, announcements/discussions, centralized learning resources, assignment submission and grading workflows, basic progress tracking/analytics, and a responsive layout for mobile, tablet, and desktop.',
    tech: ['React', 'Responsive', 'LMS', 'UI/UX'],
    links: {
      live: '',
      code: 'https://github.com/JohnLeeAeolus/CodTech.git',
    },
    thumb:
      '/student-side-unilearnNexus/612330570_1562527991684317_6337024470227483350_n.png',
  },
  {
    title: 'Project Three',
    description:
      'A short description highlighting a feature, performance win, or design.',
    slug: 'project-three',
    category: 'React',
    date: '',
    client: '',
    heroImage: '/work-hero.svg',
    gallery: ['/work-gallery-1.svg', '/work-gallery-2.svg'],
    detailHeading: 'What I learned',
    detailText:
      'This page is designed like the template: strong hierarchy, a large hero image, supporting images, and an “Other projects” section to keep browsing.',
    tech: ['React', 'Accessibility', 'Responsive'],
    links: {
      live: 'https://example.com',
      code: 'https://github.com/your-username/project-three',
    },
    thumb: '/work-thumb-3.svg',
  },
]

export const skills = [
  'Java',
  'JavaScript',
  'IBM DB2 Cloud',
  'Lucidchart',
  'Jaspersoft Studio',
  'Eclipse',
  'HTML',
]

export const skillGroups = [
  {
    title: 'Programming',
    items: ['Java', 'JavaScript'],
  },
  {
    title: 'Databases',
    items: ['IBM DB2 Cloud'],
  },
  {
    title: 'Tools',
    items: ['Lucidchart', 'Jaspersoft Studio', 'Eclipse', 'HTML'],
  },
]

export const hobbyProjects = [
  { title: 'Prototype Build', subtitle: 'UI experiments', image: '/hobby-1.svg' },
  { title: 'Case Study', subtitle: 'Layouts & components', image: '/hobby-2.svg' },
  { title: 'Micro project', subtitle: 'Small feature', image: '/hobby-3.svg' },
  { title: 'Practice app', subtitle: 'Learning project', image: '/hobby-4.svg' },
]
