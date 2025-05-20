export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  shortDescription: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Music Player App",
    description:
      "This Music Player is a fully responsive, feature-rich audio interface that I built from static design to full interactivity using modern React tooling and TypeScript. I translated a Figma design into custom Tailwind-styled components, implemented responsive layouts and dark mode support, and configured a personalized design system with custom colors, themes, and animations. From there, I architected the component logic using React hooks and centralized state, managing playback, shuffle, speed, volume, and song switching using real-time data fetched from an external API. Each component was written in TypeScript with strict prop typing, and the app features hoverable lyrics, a real-time playlist with dynamic selection, and an embedded custom audio player powered by HTML audio elements. I wrote snapshot tests, interaction tests, and API mocks using Vitest, React Testing Library, and MSW, achieving high test coverage. I also set up continuous integration with GitHub Actions to automate testing and coverage reporting on each commit. The project is deployed to Netlify and performs consistently across screen sizes and system color preferences.",
    image: "/music-player.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Netlify",
      "Vitest",
      "React Testing Library",
      "MSW",
    ],
    liveUrl: "https://atlas-music-player-aperry.netlify.app/",
    githubUrl: "https://github.com/abrielleperry/atlas-music-player",
    category: "fullstack",
    shortDescription:
      "A responsive music player with playback controls, playlists, and lyrics built with React, TypeScript, and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Rippl.",
    description:
      "Rippl is a cross-platform mobile application built to connect users based on shared interests, promoting genuine community interactions beyond typical social networking apps. As a core front-end developer on this capstone project, I led the development of key user experiences, from onboarding and profile creation to swiping, event discovery, and real-time messaging. I built responsive and accessible UI components using React Native and Tailwind CSS, ensuring a seamless user experience across both iOS and Android devices. The project also involved integrating a Supabase backend for authentication, database management, and real-time data synchronization. I collaborated closely with the back-end team to connect the front end to our Databricks-powered recommendation engine, which utilized machine learning models and Pandas for interest-based content suggestions. Additionally, I integrated GetStream for real-time chat functionality, building an engaging messaging experience that allowed users to form connections instantly. Through Rippl, I demonstrated the ability to architect scalable front-end systems, connect complex APIs, implement authentication workflows, and optimize mobile performance. This project highlights my full-stack collaboration skills, mobile-first development expertise, and my passion for building apps that prioritize meaningful user experiences.",
    image: "/rippl.png",
    tags: [
      "React Native",
      "TypeScript",
      "Expo",
      "Supabase",
      "Python",
      "Databricks",
      "Pandas",
      "GetStream",
      "Tailwind CSS",
    ],
    liveUrl: "https://youtu.be/rxa-jZwauvg?si=3ZD10nkyNYrR-R89",
    githubUrl: "https://github.com/Frankblation/Rippl_Capstone",
    category: "mobile",
    shortDescription:
      "A cross-platform mobile app connecting users based on shared interests, built with React Native, Supabase, and ML-powered recommendations.",
  },
  {
    id: 3,
    title: "Smiling School",
    description:
      "As part of my front-end development coursework, I recreated a fully responsive website from professional Figma designs, focusing on pixel-perfect accuracy, accessibility, and mobile responsiveness. The project involved building three distinct web pages: Homepage, Pricing, and Courses, using Bootstrap 4 components and minimizing custom CSS to optimize maintainability and performance. This project highlights my ability to transform high-fidelity UI designs into real, production-ready front-end code while adhering to best practices in responsive design, accessibility, and performance optimization.",
    image: "/smiling-school.png",
    tags: ["HTML5", "CSS3", "Bootstrap 4", "JQuery", "Figma"],
    liveUrl: "https://abrielleperry.github.io/atlas-smiling-school/",
    githubUrl: "https://github.com/abrielleperry/atlas-smiling-school",
    category: "fullstack",
    shortDescription:
      "A responsive website built from Figma designs with Bootstrap 4, focusing on pixel-perfect accuracy and accessibility.",
  },
  {
    id: 4,
    title: "Lumigram",
    description:
      "I built Lumigram, a fully responsive mobile social app using React Native, Expo, and Firebase. The app allows users to register, log in, and navigate through authenticated and unauthenticated routes using a stack and tab navigation system. Users can upload images with captions, view an infinite-scroll home feed, favorite posts with double-tap gestures, and manage their profile and media. I integrated Firebase Auth for secure authentication, Firebase Storage for media uploads, and Firestore to handle user data, posts, favorites, and profile metadata. The app features mobile-native gestures, paginated feeds using FlashList, and real-time data synchronization. This project highlights my skills in mobile-first UI development, backend integration, and building cross-platform apps with modern tooling.",
    image: "/lumigram-qr.png",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase Auth",
      "Firebase Storage",
      "Firestore",
      "FlashList",
      "React Native Gesture Handler",
    ],
    liveUrl: "/lumigram",
    githubUrl: "https://github.com/abrielleperry/atlas-lumigram",
    category: "mobile",
    shortDescription:
      "Developed a full stack mobile app using React Native, Expo, and Firebase with secure auth, media uploads, profile management, and gesture-based interaction, demonstrating expertise in mobile UI design, backend integration, and cross-platform development.",
  },
  {
    id: 5,
    title: "Reality Check Dashboard",
    description:
      "Reality Check is a dynamic web application developed to provide businesses with an intuitive dashboard for real-time data visualization and analysis. Designed with a focus on user-friendly interfaces and responsive design, the application enables users to interact with various data sources seamlessly. It integrates real-time data by utilizing APIs and CSV files to fetch and display up-to-date information. The application implements interactive visualizations, using Plotly and Dash to create insightful charts and graphs. A fully responsive layout ensures accessibility across devices, achieved through Bootstrap 4 and custom CSS. On the back end, Flask is used to manage server-side operations and data processing. This project exemplifies the integration of front-end and back-end technologies to create a cohesive and functional data analysis tool.",
    image: "/reality-check.jpeg",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 4",
      "Python",
      "Flask",
      "Dash",
      "Plotly",
    ],
    liveUrl: "https://youtu.be/jI2o5c4G3tk?si=evtnRGviZsKN5Y58",
    githubUrl: "https://github.com/abrielleperry/reality-check",
    category: "fullstack",
    shortDescription:
      "A dynamic dashboard for real-time data visualization using Flask, Plotly, and Dash with responsive design.",
  },
  {
    id: 6,
    title: "Course Directory",
    description:
      "An interactive school course directory built with React to demonstrate core concepts of state management, effects, and context. The app features real-time search filtering, dynamic sorting, pagination, and user course enrollment management using React Context.",
    image: "/school-catalog.png",
    tags: [
      "React",
      "JavaScript",
      "CSS",
      "useState",
      "useEffect",
      "useContext",
      "Netlify",
      "State Management",
    ],
    liveUrl: "https://atlas-react-state-intro-aperry.netlify.app",
    githubUrl: "https://github.com/abrielleperry/atlas-react-state-intro",
    category: "fullstack",
    shortDescription:
      "A React project demonstrating client-side state management with live filtering, sorting, pagination, and user enrollment using hooks and context.",
  },
  {
    id: 7,
    title: "E-Commerce Shop",
    description:
      "This project showcases my ability to build a full-stack web application that integrates real-world data, delivers a seamless user experience, and maintains strong responsiveness across all devices. I developed BloomHouse to demonstrate proficiency in both front-end and back-end development, using Flask to manage server-side operations and dynamic routing while leveraging JavaScript to fetch and render live plant data from an external API. I implemented advanced filtering logic to allow users to sort through over 10,000 plant entries by attributes like hardiness zones, sunlight requirements, and watering needs. To create an engaging and accessible interface, I applied Bootstrap 4 alongside custom CSS, ensuring the site performs and looks polished on any screen size. Through this project, I highlighted my strengths in integrating APIs, optimizing user flows, building scalable shopping cart functionality, and balancing clean UI design with robust technical architecture.",
    image: "/bloomhouse.jpeg",
    tags: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "Bootstrap 4"],
    liveUrl: "https://youtu.be/zLmg_9gNrF8?si=U1mVbBJsQGx6VfwJ",
    githubUrl: "https://github.com/abrielleperry/gardening-shop",
    category: "fullstack",
    shortDescription:
      "A full-stack e-commerce platform for plants with advanced filtering and responsive design built with Flask and JavaScript.",
  },

  {
    id: 8,
    title: "The Joy of Painting API",
    description:
      "This backend project demonstrates my ability to design, document, and deploy a fully functional REST API using real-world datasets. I built a scalable Node.js and Express application that serves structured data about all 403 episodes of The Joy of Painting by Bob Ross, with filtering options by season, episode, air date, painting title, and color palette. I used Python to develop an ETL pipeline that cleaned and transformed CSV data before storing it in MongoDB. I created a full Swagger UI for API documentation and used Postman to rigorously test each endpoint throughout development. The API was deployed to Heroku, making it accessible for both developers and future integrations. This project highlights my backend development skills, including data modeling, ETL processing, RESTful API architecture, and deployment.",
    image: "/tjop-api.png",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Swagger",
      "Heroku",
      "Postman",
      "JavaScript",
    ],
    liveUrl: "https://joy-of-painting-api-74b668857b2b.herokuapp.com/api-docs",
    githubUrl: "https://github.com/abrielleperry/atlas-the-joy-of-painting-api",
    category: "backend",
    shortDescription:
      "A REST API serving data about Bob Ross's 'The Joy of Painting' episodes, built with Node.js, Express, and MongoDB.",
  },
  {
    id: 9,
    title: "Topic-Based Discussion App",
    description:
      "This project demonstrates my ability to build and deploy a full-stack web application using the modern Next.js 13+ App Router architecture. I implemented dynamic routing, shared layouts, and loading states across multiple pages using React Server Components, and connected the application to a PostgreSQL database hosted on Vercel. I enabled authenticated user access with email and password using a login system that restricts access to all internal application routes and maintains secure session flow. The app allows users to create new topics, ask questions under those topics, and vote on questions in real time. I used server actions to securely handle form submissions and database mutations, and implemented client-side navigation using the next/link component for a smooth, single-page experience. I also deployed the application using Vercel and handled environment variables and protected routes for production readiness. This project reflects my ability to architect full-stack apps with authentication, data persistence, and modern performance-focused front-end design using the latest Next.js tools. Login to test the app with Email: user@atlasmail.com Password: 123456",
    image: "/qanda.png",
    tags: [
      "Next.js",
      "React Server Components",
      "PostgreSQL",
      "Vercel",
      "Next Auth",
      "Tailwind CSS",
      "JavaScript",
    ],
    liveUrl: "https://vercel.com/abrielleperrys-projects/atlas-nextjs",
    githubUrl: "https://github.com/abrielleperry/atlas-nextjs",
    category: "fullstack",
    shortDescription:
      "A discussion forum built with Next.js 13+ App Router, React Server Components, and PostgreSQL with authentication.",
  },
  {
    id: 10,
    title: "Movie Discovery App",
    description:
      "Cinema Guru is a full stack web application that allows users to browse, favorite, and save movies to a watch later list using a clean, responsive React interface. I built the application using Next.js 13's App Router, implementing both server-rendered and client-rendered components to balance performance and interactivity. I integrated GitHub OAuth for authentication and protected routes, ensuring only logged-in users could access the core features of the app. Users can filter movies by genre, release year, or title, and interact with hoverable movie cards that visually reflect each movie's favorited or saved state. I connected the frontend to a PostgreSQL database through a RESTful API and built a dynamic layout system with an expanding sidebar and real-time activity feed. I also deployed the app on Vercel, managing environment variables and database connections securely. This project demonstrates my ability to architect full stack React applications with authentication, stateful UI components, and backend integration.",
    image: "/cinema.png",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "OAuth",
      "Vercel",
    ],
    liveUrl: "https://atlas-cinema-guru-aperry.vercel.app/",
    githubUrl: "atlas-cinema-guru-aperry.vercel.app",
    category: "fullstack",
    shortDescription:
      "A movie discovery app with favorites and watch-later features built with Next.js, React, and PostgreSQL.",
  },

  {
    id: 11,
    title: "Files Manager",
    description:
      "Atlas Files Manager is a full back-end application that replicates the core functionality of a file hosting service. I built a robust RESTful API using Node.js and Express that handles user authentication, file uploads, permission management, background job processing, and dynamic file serving. Authentication is handled through token-based security, with Redis used for efficient session storage and expiration. I developed endpoints for uploading, listing, and viewing files, along with controlling public or private access permissions. MongoDB was used for persistent storage of users and files, and Redis provided fast in-memory management of authentication tokens and background job queues. For image uploads, I implemented a background worker using Bull that automatically generated multiple thumbnail sizes, offloading intensive processing tasks from the main API thread. I also created features for paginated file listings, dynamic folder structures, and direct file retrieval with MIME-type handling. This project showcases my ability to integrate databases, authentication systems, file storage, background processing, and scalable RESTful architecture into a cohesive and production-ready back-end service.",
    image: "/files-manager.jpeg",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Bull",
      "UUID",
      "SHA1",
      "MIME-Types",
      "Image Thumbnail",
      "Mocha",
      "JavaScript",
    ],
    liveUrl: "https://abrielleperry.github.io/atlas-atlas-files_manager/",
    githubUrl: "https://github.com/abrielleperry/atlas-atlas-files_manager",
    category: "backend",
    shortDescription:
      "A file hosting service backend with authentication, file uploads, and background processing using Node.js, Express, MongoDB, and Redis.",
  },

  {
    id: 12,
    title: "Step Counter",
    description:
      "Step Tracker is a mobile application built with React Native and Expo that allows users to log and manage their daily step count. I implemented multi-screen navigation using Expo Router and handled persistent data storage through an SQLite database integrated with the app. On the technical side, I created a fully functional activity log with dynamic insertion, deletion, and auto-refresh using SQL queries. I used FlashList to efficiently render large lists of step entries with high performance on mobile devices. To enhance interactivity, I implemented gesture-based controls, allowing users to swipe individual entries to reveal delete actions. I also built a global 'delete all' feature and ensured the app matched a provided Figma design using custom styles and layout techniques. This project demonstrates my ability to build interactive, database-driven mobile applications with smooth navigation, gesture handling, and performance optimization in React Native.",
    image: "/atlas-mobile-intro-qr.png",
    tags: [
      "React Native",
      "Expo",
      "SQLite",
      "FlashList",
      "Expo Router",
      "Gesture Handling",
      "Mobile UI",
      "SQL",
      "TypeScript",
      "JavaScript",
    ],
    liveUrl: "/step-counter",
    githubUrl: "https://github.com/abrielleperry/atlas-mobile-intro",
    category: "mobile",
    shortDescription:
      "A React Native app for tracking daily steps with SQLite persistence, gesture controls, and FlashList rendering.",
  },
];
