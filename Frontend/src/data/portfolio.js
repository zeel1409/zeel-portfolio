// Portfolio data — projects, skills, timeline

export const projects = [
  {
    id: 'wanderlust',
    title: 'Wanderlust',
    tagline: 'Where every journey finds its home.',
    category: 'Full Stack Web App',
    year: '2024',
    status: 'Live',
    emoji: '🌍',
    color: '#06b6d4',
    colorSecondary: '#6366f1',
    problem:
      'Travelers struggle to find authentic, unique stays that feel more personal than a hotel. Existing platforms are overwhelming and impersonal.',
    solution:
      'A full-stack Airbnb-inspired platform that connects hosts with travelers. Users can list, discover, and book unique accommodations with an intuitive, map-integrated interface.',
    impact: 'Built a complete booking ecosystem with real authentication, image uploads, and an interactive map for property discovery.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Passport.js', 'Cloudinary', 'Bootstrap', 'Mapbox'],
    features: [
      'Full user authentication (Sign up / Login / Logout)',
      'Property listings with Cloudinary image uploads',
      'Interactive Mapbox location picker',
      'Create, edit, delete listings',
      'Review and rating system',
      'Responsive, mobile-first design',
      'Flash messaging & error handling',
    ],
    myContribution: 'Solo project — designed and built the entire application from schema design to deployment.',
    github: 'https://github.com/zeel1409/WanderLust',
    demo: 'https://wander-lust-ivory-eight.vercel.app/',
    image: '/images/wanderlust.png',   // ← apna screenshot yahan rakh: Frontend/public/images/wanderlust.png
  },
  // {
  //   id: 'cloudbase',
  //   title: 'Cloudbase',
  //   tagline: 'Your files, always in reach.',
  //   category: 'Cloud Storage App',
  //   year: '2024',
  //   status: 'Built',
  //   emoji: '☁️',
  //   color: '#8b5cf6',
  //   colorSecondary: '#06b6d4',
  //   problem:
  //     'Managing files across devices is fragmented. Users need a clean, fast, and secure interface to upload, organize, and access their files from anywhere.',
  //   solution:
  //     'A cloud file storage and manager web application that allows users to upload, preview, organize, and download files securely with a modern, intuitive UI.',
  //   impact: 'Delivered a clean file management experience with drag-and-drop uploads, file previews, and organized folder structures.',
  //   tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Multer', 'Cloudinary', 'JWT', 'Tailwind CSS'],
  //   features: [
  //     'Secure user authentication with JWT',
  //     'Drag & drop file uploads',
  //     'File preview for images and documents',
  //     'Organized folder structure',
  //     'File download and delete',
  //     'Storage usage tracking',
  //     'Responsive design',
  //   ],
  //   myContribution: 'Solo project — built the full stack from API design to the React UI.',
  //   github: 'https://github.com/zeel1409',
  //   demo: '#',
  //   gradient: 'from-violet-500/20 to-cyan-500/20',
  // },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    tagline: 'An experience, not just a website.',
    category: 'Interactive Experience',
    year: '2025',
    status: 'Live',
    emoji: '✨',
    color: '#6366f1',
    colorSecondary: '#8b5cf6',
    problem:
      "Developer portfolios are boring. They all look the same. A recruiter sees 50 portfolios a day and doesn't remember any of them.",
    solution:
      'An interactive storytelling portfolio that unfolds as a cinematic journey. Each scroll reveals a new chapter — built with React, Framer Motion, and a live Node.js backend.',
    impact: 'A memorable digital experience that communicates technical depth through the design itself.',
    tech: ['React.js', 'Vite', 'Framer Motion', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Nodemailer'],
    features: [
      'Interactive storytelling scroll experience',
      'Boot sequence intro animation',
      'Skills constellation visualization',
      'Cinematic project case studies',
      'Live GitHub stats integration',
      'Working contact form with MongoDB',
      'Dark / Light mode',
      'Developer Easter eggs',
    ],
    myContribution: 'Conceived the creative direction and built every layer of the stack.',
    github: 'https://github.com/zeel1409',
    demo: '#',
    image: '/images/portfolio.png',    // ← apna screenshot yahan rakh: Frontend/public/images/portfolio.png
  },
];

export const skills = {
  frontend: [
    { name: 'React.js', level: 'Core Stack', badge: 'Used in 3+ Projects', icon: '⚛️', desc: 'Component architecture, custom hooks, state management & performance' },
    { name: 'JavaScript', level: 'Core Stack', badge: 'Used in 10+ Repos', icon: '⚡', desc: 'ES6+, async/await, closures, promises & modular architecture' },
    { name: 'Tailwind CSS', level: 'Production', badge: 'Daily Driver', icon: '🌊', desc: 'Custom design systems, responsive layouts & glassmorphism UI' },
    { name: 'HTML5 & CSS3', level: 'Core', badge: 'Solid Foundation', icon: '🎨', desc: 'Semantic markup, accessibility, modern Grid/Flexbox layouts' },
  ],
  backend: [
    { name: 'Node.js', level: 'Core Stack', badge: 'Production Ready', icon: '🟢', desc: 'Server-side runtime, event loop, streams, REST service backends' },
    { name: 'Express.js', level: 'Core Stack', badge: 'Used in 4+ Projects', icon: '🚂', desc: 'REST API routing, custom middleware pipelines, error handling' },
    { name: 'MongoDB', level: 'Core Stack', badge: 'Production DB', icon: '🍃', desc: 'Document schemas, complex aggregations, indexing & Atlas clusters' },
    { name: 'Mongoose', level: 'Production', badge: 'Data Modeling', icon: '🔗', desc: 'Schema modeling, validations, middleware hooks & relationships' },
    { name: 'REST APIs', level: 'Core Stack', badge: 'Architecture', icon: '🔌', desc: 'Clean endpoint design, pagination, status codes & auth guards' },
    { name: 'JWT & Auth', level: 'Production', badge: 'Security', icon: '🔐', desc: 'Passport.js, token lifecycle, password hashing & route protection' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 'Core', badge: 'Daily Workflow', icon: '🐙', desc: 'Version control, feature branches, pull requests & code collaboration' },
    { name: 'Postman', level: 'Proficient', badge: 'API Testing', icon: '📬', desc: 'Endpoint debugging, automated collections & environment variables' },
    { name: 'Cloudinary', level: 'Proficient', badge: 'Media CDN', icon: '📸', desc: 'Asset upload pipeline, dynamic transformations & cloud optimization' },
    { name: 'Vite & Tooling', level: 'Proficient', badge: 'Modern Stack', icon: '⚡', desc: 'Bundler configuration, HMR & optimized production builds' },
  ],
};

export const timeline = [
  {
    year: '2023',
    title: 'The Beginning',
    subtitle: 'First Lines of Code',
    desc: 'Wrote my first "Hello, World!" and got hooked. Started learning HTML, CSS, and JavaScript through self-study and online courses.',
    icon: '🌱',
    type: 'start',
  },
  {
    year: '2023',
    title: 'JavaScript Deep Dive',
    subtitle: 'DOM, ES6, Async Programming',
    desc: 'Mastered JavaScript fundamentals — closures, promises, fetch API, and modern ES6+ patterns. Built small projects and interactive UIs.',
    icon: '⚡',
    type: 'learning',
  },
  {
    year: '2024',
    title: 'Going Full Stack',
    subtitle: 'Node.js, Express, MongoDB',
    desc: 'Discovered the MERN stack. Learned server-side development, REST API design, database modeling, and deployed my first full-stack applications.',
    icon: '🚀',
    type: 'milestone',
  },
  {
    year: '2024',
    title: 'Wanderlust',
    subtitle: 'First Major Project',
    desc: 'Built a full Airbnb-inspired platform from scratch — handling authentication, Cloudinary image uploads, Mapbox integration, and deployment.',
    icon: '🌍',
    type: 'project',
  },
  {
    year: '2024',
    title: 'Cloudbase',
    subtitle: 'Cloud Storage Platform',
    desc: 'Designed and built a cloud file manager with secure JWT authentication, drag-and-drop uploads, and a clean React UI.',
    icon: '☁️',
    type: 'project',
  },
  {
    year: '2025',
    title: 'Today',
    subtitle: 'Actively Building & Growing',
    desc: 'Deepening expertise in React, Framer Motion, and backend architecture. Open to full-stack opportunities and exciting challenges.',
    icon: '✨',
    type: 'now',
  },
];

export const stats = {
  github: 'zeel1409',
  projectsBuilt: 10,
  commits: '500+',
  coffees: '∞',
};
