const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  /*{
    name: "Testimonials",
    link: "#testimonials",
  }, */
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 1, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  //{ value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "The Game of the Amazons is a strategic board game that uses chess-like mechanics to inhibit the opponent's movements. The goal is to surround your oppnent's pieces with arrows to prevent them from having any legal moves left.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "The Game of the Amazons",
    date: "August 2025",
    responsibilities: [
      "Created a Menu system, that allows to to start a game, and select weather to play against a AI or another Human.",
      "Implemented a chess-like movement system, that allows the player to move pieces and shoot arrows.",
      "Created a AI systen that uses a minimax algorithm to calculate the best move and excute it.",
    ],
  },
  {
    review: "a production-ready Subscription Management System API that handles real users, real money, and real business logic. Authenticate users using JWTs, connect a database, create models and schemas, and integrate it with ORMs. Structure the architecture of your API to ensure scalability and seamless communication with the frontend.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "May 2025 - June 2025",
    responsibilities: [
      "Advanced Rate Limiting and Bot Protection: with Arcjet that helps you secure the whole app.",
      "Database Modeling: Models and relationships using MongoDB & Mongoose.",
      "JWT Authentication: User CRUD operations and subscription management.",
      "Global Error Handling: Input validation and middleware integration.",
      " Logging Mechanisms: For better debugging and monitoring.",
      "Email Reminders: Automating smart email reminders with workflows using Upstash.",
    ],
  },
  {
    review: "Built with React.js for the user interface, Appwrite for backend services, and styled with TailwindCSS, this Movie App lets users browse trending movies, search titles, and explore content using the TMDB API. It features a responsive layout and a sleek, modern design.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Movie Website",
    date: "April 2025",
    responsibilities: [
      "Browse All Movies: Explore a wide range of movies available on the platform.",
      "Search Movies: Easily search for specific movies using a search function.",
      "Trending Movies Algorithm: Displays trending movies based on a dynamic algorithm.",
      "Modern UI/UX: A sleek and user-friendly interface designed for a great experience.",
      "Responsiveness: Fully responsive design that works seamlessly across devices.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/harkeerat-lit-3abbaa358",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

