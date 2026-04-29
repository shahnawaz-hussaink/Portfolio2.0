const projects = [
  {
    title: "IRCTC-Style Railway Booking Backend",
    image: "./irctc-backend.webp",
    desc: "This project is a production-grade railway booking backend built with PostgreSQL and Prisma, designed to handle the core challenges of a real ticketing system. It implements row-level locking via SELECT FOR UPDATE inside ACID transactions to prevent race conditions and double bookings under concurrent load. Features include JWT-based auth, role-separated admin and user routes, automated seat generation, and a full payment flow — all structured around a normalized relational schema.",
    stack: [
      "Node.js, Express",
      "PostgreSQL (Neon)",
      "Prisma ORM",
      "JWT Authentication",
      "ACID Transactions & Row-Level Locking",
      "REST API Design"
    ],
    github: "https://github.com/shahnawaz-hussaink/irctc-backend",
    live: "https://github.com/shahnawaz-hussaink/irctc-backend",
  },
  {
    title: "Debug Arena – Live Competitive Coding Platform",
    image: "./debugarena.webp",
    desc: "Debug Arena is a real-time competitive coding platform built for hosting structured DSA tournaments at college scale. It was successfully used in a live multi-college event with 35+ participants, delivering a seamless, crash-free experience with real-time monitoring, strict timers, and controlled competition environments.",
    stack: [
      "React 18",
      "Tailwind CSS",
      "Node.js, Express",
      "Firebase Firestore (Realtime)",
      "Monaco Editor",
      "Judge0 API",
      "Vercel & Render (Deployment)"
    ],
    github: "https://github.com/shahnawaz-hussaink/debug-arena",
    live: "https://debug-arena.vercel.app/",
  },
  {
    title: "VideoTube – Mini YouTube Backend",
    image: "./VideoTube.webp",
    desc: "VideoTube is a YouTube-style backend built to production standards. It covers the complete content lifecycle — video upload via Multer, Cloudinary storage, JWT access/refresh token rotation, subscription management, like/comment/tweet feeds, and aggregation pipelines for watch history. Architected with reusable asyncHandler, apiResponse, and apiError utilities to mirror real-world backend codebases.",
    stack: [
      "Node.js, Express",
      "MongoDB, Mongoose",
      "JWT (Access & Refresh Tokens)",
      "Multer, Cloudinary",
      "Aggregation Pipelines",
      "MVC Architecture"
    ],
    github: "https://github.com/shahnawaz-hussaink/Backend_Video_Tube",
    live: "https://github.com/shahnawaz-hussaink/Backend_Video_Tube",
  },
  {
    title: "URL Shortener – Scalable Link Management Backend",
    image: "./url_Shortener.webp",
    desc: "A backend-focused URL shortening service built with system design principles. Supports custom slugs, link expiry, IP-based geolocation, and per-link click analytics. Uses NanoID for collision-resistant short code generation and JWT for authenticated link management, with Redis-ready architecture for caching at scale.",
    stack: [
      "Node.js, Express",
      "MongoDB",
      "JWT Authentication",
      "NanoID",
      "IP Geolocation",
      "Click Analytics"
    ],
    github: "https://github.com/shahnawaz-hussaink/URL-Shortener",
    live: "https://github.com/shahnawaz-hussaink/URL-Shortener",
  },
  {
    title: "pyFit – Fitness & Ranking Platform",
    image: "./run2rank.webp",
    desc: "pyFit is my first vibe-coding project, built with the help of my lovable AI. It's a fitness-based ranking platform designed to motivate users through challenges, leaderboards, and progress tracking, blending creativity, experimentation, and real-world problem solving.",
    stack: [
      "React 18, TypeScript",
      "Tailwind CSS, Framer Motion",
      "Leaflet.js (Maps)",
      "Supabase (Auth & Backend)",
      "PostgreSQL"
    ],
    github: "https://github.com/shahnawaz-hussaink/pyFit",
    live: "https://pyFit.in/",
  },
  {
    title: "STUDx – Campus Exchange Hub",
    image: "./Studx.png",
    desc: "STUDx is a full-stack MERN platform built exclusively for college students to buy, sell, or swap pre-owned items like books, gadgets, and furniture within their campus community. Features a student-centric marketplace with categories, best deals, and featured listings — backed by JWT auth and MongoDB Cloud.",
    stack: [
      "React, Tailwind CSS",
      "Node.js, Express.js, JWT Authentication",
      "MongoDB Cloud"
    ],
    github: "https://github.com/shahnawaz-hussaink/studx",
    live: "https://github.com/shahnawaz-hussaink/studx",
  },
  {
    title: "Portfolio Website 2.0",
    image: "./Portfolio.webp",
    desc: "I designed and developed a fully responsive personal portfolio using React and Tailwind CSS. It showcases my projects, skills, and experience in a clean and accessible layout, with smooth transitions and a modern UI to highlight my web development capabilities.",
    stack: [
      "HTML, CSS, JavaScript, React"
    ],
    github: "https://github.com/shahnawaz-hussaink/portfolio2.0",
    live: "https://portfolio2-0-pi-nine.vercel.app",
  },
  {
    title: "Personal Portfolio",
    image: "./OldPortfolio.webp",
    desc: "An earlier version of my personal portfolio built with vanilla HTML, CSS, and JavaScript. Featured a responsive layout, smooth scrolling, and interactive sections for About, Projects, and Contact.",
    stack: ["HTML, CSS, JavaScript"],
    github: "https://github.com/shahnawaz-hussaink/Portfolio",
    live: "https://shahnawaz-hussaink.github.io/Portfolio/"
  },
  {
    title: "Netflix.com Clone",
    image: "./netflix.webp",
    desc: "A visually faithful Netflix landing page clone built with HTML, CSS, and JavaScript. Focuses on responsive layout, clean UI, and smooth interactions that closely mirror the original platform's design.",
    stack: ["HTML, CSS, JavaScript"],
    github: "https://github.com/shahnawaz-hussaink/Netflix",
    live: "https://shahnawaz-hussaink.github.io/Netflix/",
  },
  {
    title: "Random Dog Image Generator",
    image: "./RandomDog.webp",
    desc: "A fun interactive app that fetches and displays a new dog image on every button click using the Dog CEO API. Demonstrates Fetch API, async/await patterns, and DOM manipulation in a lightweight vanilla JS project.",
    stack: [
      "HTML, CSS, JavaScript",
      "Dog CEO API",
      "Fetch API, async/await"
    ],
    github: "https://github.com/shahnawaz-hussaink/Project-Dog",
    live: "https://shahnawaz-hussaink.github.io/Project-Dog/",
  },
  {
    title: "E-Commerce App Homepage",
    image: "./ShopOn.webp",
    desc: "Frontend of ShopOn, a modern e-commerce homepage built with HTML, CSS, and JavaScript. Includes product listings, navigation menus, and a fully responsive layout focused on clean UI and smooth shopping UX.",
    stack: ["HTML, CSS, JavaScript"],
    github: "https://github.com/shahnawaz-hussaink/ShopOn",
    live: "https://shahnawaz-hussaink.github.io/ShopOn/",
  },
  {
    title: "Simon Says – Color Memory Game",
    image: "./SimonSay.webp",
    desc: "A classic Simon Says memory game with smooth color transitions and sound feedback. Challenges users to recall and repeat increasingly complex color sequences — built entirely in vanilla JavaScript.",
    stack: ["HTML, CSS, JavaScript"],
    github: "https://github.com/shahnawaz-hussaink/SimonSaysGame",
    live: "https://shahnawaz-hussaink.github.io/SimonSaysGame",
  },
];

export default projects;