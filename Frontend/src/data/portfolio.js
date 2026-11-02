// Portfolio data — projects, skills, experience, education, bio

export const personalInfo = {
  name: 'Zeel Mukeshkumar Kadiya',
  shortName: 'Zeel',
  role: 'Full Stack Developer',
  email: 'kadiyazeel209@gmail.com',
  phone: '+91 6356125457',
  location: 'Ahmedabad, Gujarat, India',
  github: 'https://github.com/zeel1409',
  linkedin: 'https://www.linkedin.com/in/zeel-kadiya-5733a7349/',
  summary:
    'Full stack developer and B.E. (Information Technology) graduate from GTU who builds end-to-end: React.js interfaces, Node.js & Express.js REST APIs with JWT authentication, and MongoDB databases. Built production CRUD APIs at Innovexis.in and deployed Wanderlust, an Airbnb-inspired travel platform optimized for performance and accessibility.',
};

export const experiences = [
  {
    role: 'Web Development Intern',
    company: 'Innovexis.in',
    period: 'Jan 2026 – Apr 2026',
    type: '3 Months Internship',
    location: 'Ahmedabad, India',
    highlights: [
      'Built JWT-based authentication (signup, login, protected routes) and RESTful CRUD APIs using Node.js, Express.js and MongoDB, thoroughly tested via Postman.',
      'Developed responsive React.js interfaces integrated with backend APIs for end-to-end full-stack workflows.',
      'Collaborated with engineering team on debugging, feature development, and deployment workflows using Git.',
      'Improved application performance and UX through code optimizations and UI enhancements across the full stack.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'Postman', 'Git'],
  },
  {
    role: 'Web Development Intern',
    company: 'AnveshnaAI.com',
    period: 'Jul 2025 – Jul 2025',
    type: 'GTU Internship',
    location: 'Remote',
    highlights: [
      'Developed responsive frontend components using HTML, CSS, and JavaScript to enhance usability and site navigation.',
      'Built and deployed multiple webpages with strong focus on performance and accessibility standards.',
      'Worked with Git branching workflows and debugging techniques in a collaborative team environment.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Responsive Design'],
  },
];

export const education = [
  {
    degree: 'Bachelor of Engineering (Information Technology)',
    institution: 'Gujarat Technological University (GTU)',
    location: 'Ahmedabad, India',
    score: 'CGPA: 7.33 / 10',
    period: 'Nov 2022 – Aug 2026',
  },
  {
    degree: 'Higher Secondary (Class 12)',
    institution: 'Adarsh Vidhyalaya, Visnagar',
    location: 'Gujarat, India',
    score: '76.35%',
    period: '2022',
  },
  {
    degree: 'Secondary School (Class 10)',
    institution: 'Adarsh Vidhyalaya, Visnagar',
    location: 'Gujarat, India',
    score: '83.33%',
    period: '2020',
  },
];

export const projects = [
  {
    id: 'wanderlust',
    title: 'Wanderlust',
    tagline: 'Full-stack travel listing platform with real bookings & maps.',
    category: 'Full Stack Web App',
    year: '2024',
    status: 'Live',
    color: '#06b6d4',
    colorSecondary: '#6366f1',
    problem:
      'Travelers struggle to find authentic, unique stays. Existing platforms are bulky and slow on mobile networks.',
    solution:
      'A full-stack travel listing platform with JWT authentication and full CRUD operations to create, edit, delete, and view verified travel listings with interactive map location picking.',
    impact:
      'Cut ~1.5 MB (85%) of image payload using responsive srcSet/sizes, CDN quality parameters & fetchpriority hints, boosting Lighthouse LCP. Built debounced (500ms) search with AbortController to cancel stale queries.',
    tech: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Cloudinary', 'Mapbox', 'Tailwind CSS'],
    features: [
      'JWT-based secure authentication & session management',
      'Full CRUD operations for travel accommodations',
      'Optimized image uploads pipeline via Cloudinary CDN',
      'Debounced (500ms) live search with AbortController for cancelable requests',
      'Reusable useLocalStorage hook with cross-tab sync for dark mode & wishlist',
      'Route-level error boundaries, skeleton loaders & toast notifications',
      'Fixed SEO issues (meta/OG tags, robots.txt) and eliminated 310ms font render-blocking',
    ],
    myContribution: 'Solo full-stack developer — designed data models, backend REST APIs, client architecture, and deployed on Vercel.',
    github: 'https://github.com/zeel1409/WanderLust',
    demo: 'https://wander-lust-ivory-eight.vercel.app/',
    image: '/images/wanderlust.png',
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    tagline: 'High-performance, editorial portfolio engineered with React & Vite.',
    category: 'Full Stack Web App',
    year: '2025',
    status: 'Live',
    color: '#6366f1',
    colorSecondary: '#8b5cf6',
    problem:
      'Recruiters review hundreds of candidate profiles every day and default templates make every candidate look identical.',
    solution:
      'Built a fast, accessible, mobile-first portfolio using React, Vite, Tailwind CSS and Framer Motion with real case studies, zero AI bloat, and a live Node.js/MongoDB contact backend.',
    impact:
      'Optimized performance and accessibility using Lighthouse audits (lazy-loaded assets, semantic HTML, responsive images), achieving 98 (Desktop) / 85 (Mobile) Lighthouse scores.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Comprehensive project case study format (Problem, Solution, Impact, Tech)',
      'Clean typography and restrained single-accent color system',
      'Lighthouse audit-tuned performance (98 Desktop / 85 Mobile)',
      'Full-stack working contact form with Node.js & MongoDB backend',
      'Fully responsive, mobile-first design with dark / light mode support',
    ],
    myContribution: 'Architected and built both the React frontend and Express/MongoDB backend service.',
    github: 'https://github.com/zeel1409',
    demo: 'https://zeel-portfolio-gamma.vercel.app/',
    image: '/images/portfolio.png',
  },
];

export const skills = {
  languages: [
    { name: 'JavaScript (ES6+)', level: 'Core Stack', badge: 'Daily Driver', desc: 'Modern async/await, closures, promises, DOM manipulation, modular architecture' },
    { name: 'TypeScript', level: 'Proficient', badge: 'Typed Stack', desc: 'Type safety, interfaces, generics, and enhanced developer tooling' },
    { name: 'Java', level: 'Foundation', badge: 'OOP Core', desc: 'Object-oriented programming, data structures, and core software design principles' },
  ],
  frontend: [
    { name: 'React.js', level: 'Core Stack', badge: 'Production', desc: 'Component architecture, custom hooks, state management, memoization & performance tuning' },
    { name: 'Tailwind CSS', level: 'Core Stack', badge: 'Production', desc: 'Custom design systems, utility-first styling, responsive fluid layouts' },
    { name: 'HTML5 & CSS3', level: 'Core Stack', badge: 'Solid Foundation', desc: 'Semantic markup, accessibility (a11y), CSS Grid, Flexbox, modern layout specs' },
    { name: 'Framer Motion', level: 'Proficient', badge: 'Interactive', desc: 'Fluid animations, layout transitions, spring physics & gesture controls' },
    { name: 'Responsive Web Design', level: 'Core Stack', badge: 'Mobile-First', desc: 'Fluid typography, media queries, touch ergonomics, cross-browser compatibility' },
  ],
  backend: [
    { name: 'Node.js', level: 'Core Stack', badge: 'Production Ready', desc: 'Event-driven server runtime, async I/O, streams, and robust micro-services' },
    { name: 'Express.js', level: 'Core Stack', badge: 'Production Ready', desc: 'RESTful API routing, custom middleware pipelines, error handling, auth guards' },
    { name: 'RESTful APIs', level: 'Core Stack', badge: 'Architecture', desc: 'Clean resource modeling, HTTP status conventions, pagination, input validation' },
    { name: 'JWT & Authentication', level: 'Production', badge: 'Security', desc: 'Token life-cycle, bcrypt password hashing, protected routes, Passport.js' },
    { name: 'Multer', level: 'Proficient', badge: 'File Uploads', desc: 'Multipart form-data handling, upload limits, memory/disk storage pipelines' },
  ],
  databases: [
    { name: 'MongoDB', level: 'Core Stack', badge: 'Production DB', desc: 'NoSQL document schemas, indexing, aggregation pipelines, Mongoose ODM, Atlas' },
    { name: 'PostgreSQL & SQL', level: 'Proficient', badge: 'Relational DB', desc: 'Relational modeling, primary/foreign keys, joins, normalization, SQL queries' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 'Core Stack', badge: 'Daily Workflow', desc: 'Branching strategies, pull requests, code reviews, version control' },
    { name: 'Postman', level: 'Proficient', badge: 'API Testing', desc: 'Automated test scripts, environment configs, endpoint documentation' },
    { name: 'Docker', level: 'Familiar', badge: 'DevOps', desc: 'Containerization, reproducible dev environments, Dockerfile configs' },
    { name: 'Vercel', level: 'Production', badge: 'Deployment', desc: 'CI/CD pipeline, serverless functions, production deployments' },
    { name: 'Lighthouse', level: 'Production', badge: 'Performance', desc: 'Performance profiling, Core Web Vitals (LCP, CLS, FID), accessibility audits' },
    { name: 'Cloudinary', level: 'Proficient', badge: 'Media CDN', desc: 'Image transformation, CDN optimization, responsive srcset generation' },
    { name: 'Figma', level: 'Proficient', badge: 'UI/UX Design', desc: 'Wireframing, component mockups, design tokens, responsive layout prototyping' },
  ],
};

export const stats = {
  github: 'zeel1409',
  degree: 'B.E. Information Technology',
  university: 'GTU',
  cgpa: '7.33 / 10',
};
