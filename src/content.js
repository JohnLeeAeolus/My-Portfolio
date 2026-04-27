export const profile = {
  name: 'John Lee Aeolus Cadaño',
  role: 'Developer • Database Administration',
  location: '',
  blurb:
    "Salutations! I'm a passionate and committed developer with extensive knowledge in database administration.",
  heroImage: '/me.jpeg',
  contactImage: '/me.jpeg',
  email: 'johnleeeolusc@gmail.com',
  phone: '+639083464051',
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
    heroImage: '/work-hero.svg',
    gallery: ['/work-gallery-1.svg', '/work-gallery-2.svg'],
    detailHeading: 'What I worked on',
    detailText:
      'This project focuses on building a mobile experience that helps users navigate internships and opportunities. I worked on shaping the flow, improving clarity, and organizing the app features into a consistent UI.',
    tech: ['Mobile App'],
    links: {
      live: '',
      code: 'https://github.com/Justine1193/InternQuest-Mobile-Application.git',
    },
    thumb: '/work-thumb-1.svg',
  },
  {
    title: 'Project Two',
    description:
      'A short description of the problem you solved and what you learned.',
    slug: 'project-two',
    category: 'Web App',
    date: '',
    client: '',
    heroImage: '/work-hero.svg',
    gallery: ['/work-gallery-2.svg', '/work-gallery-1.svg'],
    detailHeading: 'Highlights',
    detailText:
      'A clean project page with a strong story: what the goal was, how it was built, and what improved. Replace this text with a real summary once you finalize the project details.',
    tech: ['JavaScript', 'API', 'UI'],
    links: {
      live: 'https://example.com',
      code: 'https://github.com/your-username/project-two',
    },
    thumb: '/work-thumb-2.svg',
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

export const testimonials = [
  {
    label: 'Testimonials',
    quote:
      'John is proactive, easy to work with, and communicates clearly. He consistently delivers reliable results and keeps improving with every project.',
    name: 'Name Client',
    meta: 'Company',
    image: '/portrait.svg',
  },
]
