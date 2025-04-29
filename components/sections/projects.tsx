"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";

// Sample project data - replace with your own projects
const projects = [
  {
    id: 1,
    title: "Smiling School",
    description:
      "As part of my front-end development coursework, I recreated a fully responsive website from professional Figma designs, focusing on pixel-perfect accuracy, accessibility, and mobile responsiveness. The project involved building three distinct web pages: Homepage, Pricing, and Courses, using Bootstrap 4 components and minimizing custom CSS to optimize maintainability and performance. This project highlights my ability to transform high-fidelity UI designs into real, production-ready front-end code while adhering to best practices in responsive design, accessibility, and performance optimization.",
    image: "/smiling-school.png",
    tags: ["HTML5", "CSS3", "Bootstrap 4", "JQuery", "Figma"],
    liveUrl: "https://abrielleperry.github.io/atlas-smiling-school/",
    githubUrl: "https://github.com/abrielleperry/atlas-smiling-school",
    category: "frontend",
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    title: "E-Commerce Shop",
    description:
      "This project showcases my ability to build a full-stack web application that integrates real-world data, delivers a seamless user experience, and maintains strong responsiveness across all devices. I developed BloomHouse to demonstrate proficiency in both front-end and back-end development, using Flask to manage server-side operations and dynamic routing while leveraging JavaScript to fetch and render live plant data from an external API. I implemented advanced filtering logic to allow users to sort through over 10,000 plant entries by attributes like hardiness zones, sunlight requirements, and watering needs. To create an engaging and accessible interface, I applied Bootstrap 4 alongside custom CSS, ensuring the site performs and looks polished on any screen size. Through this project, I highlighted my strengths in integrating APIs, optimizing user flows, building scalable shopping cart functionality, and balancing clean UI design with robust technical architecture.",
    image: "/bloomhouse.jpeg",
    tags: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "Bootstrap 4"],
    liveUrl: "https://youtu.be/zLmg_9gNrF8?si=U1mVbBJsQGx6VfwJ",
    githubUrl: "https://github.com/abrielleperry/gardening-shop",
    category: "fullstack",
  },
  {
    id: 4,
    title: "Rippl.",
    description:
      "Rippl is a cross-platform mobile application built to connect users based on shared interests, promoting genuine community interactions beyond typical social networking apps. As a core front-end developer on this capstone project, I led the development of key user experiences, from onboarding and profile creation to swiping, event discovery, and real-time messaging. I built responsive and accessible UI components using React Native and Tailwind CSS, ensuring a seamless user experience across both iOS and Android devices. The project also involved integrating a Supabase backend for authentication, database management, and real-time data synchronization. I collaborated closely with the back-end team to connect the front end to our Databricks-powered recommendation engine, which utilized machine learning models and Pandas for interest-based content suggestions. Additionally, I integrated GetStream for real-time chat functionality, building an engaging messaging experience that allowed users to form connections instantly. Through Rippl, I demonstrated the ability to architect scalable front-end systems, connect complex APIs, implement authentication workflows, and optimize mobile performance. This project highlights my full-stack collaboration skills, mobile-first development expertise, and my passion for building apps that prioritize meaningful user experiences.",
    image: "/clean-creative-portfolio.png",
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
    category: "fullstack",
  },
  {
    id: 5,
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
  },
  {
    id: 6,
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
  },
  {
    id: 7,
    title: "Movie Discovery App",
    description:
      "Cinema Guru is a full stack web application that allows users to browse, favorite, and save movies to a watch later list using a clean, responsive React interface. I built the application using Next.js 13’s App Router, implementing both server-rendered and client-rendered components to balance performance and interactivity. I integrated GitHub OAuth for authentication and protected routes, ensuring only logged-in users could access the core features of the app. Users can filter movies by genre, release year, or title, and interact with hoverable movie cards that visually reflect each movie’s favorited or saved state. I connected the frontend to a PostgreSQL database through a RESTful API and built a dynamic layout system with an expanding sidebar and real-time activity feed. I also deployed the app on Vercel, managing environment variables and database connections securely. This project demonstrates my ability to architect full stack React applications with authentication, stateful UI components, and backend integration.",
    image: "cinema.png",
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
  },
  {
    id: 8,
    title: "Music Player App",
    description:
      "This Music Player is a fully responsive, feature-rich audio interface that I built from static design to full interactivity using modern React tooling and TypeScript. I translated a Figma design into custom Tailwind-styled components, implemented responsive layouts and dark mode support, and configured a personalized design system with custom colors, themes, and animations. From there, I architected the component logic using React hooks and centralized state, managing playback, shuffle, speed, volume, and song switching using real-time data fetched from an external API. Each component was written in TypeScript with strict prop typing, and the app features hoverable lyrics, a real-time playlist with dynamic selection, and an embedded custom audio player powered by HTML audio elements. I wrote snapshot tests, interaction tests, and API mocks using Vitest, React Testing Library, and MSW, achieving high test coverage. I also set up continuous integration with GitHub Actions to automate testing and coverage reporting on each commit. The project is deployed to Netlify and performs consistently across screen sizes and system color preferences.",
    image: "music-player.png",
    tags: [
      " React",
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
  },
  {
    id: 9,
    title: "Files Manager",
    description:
      "Atlas Files Manager is a full back-end application that replicates the core functionality of a file hosting service. I built a robust RESTful API using Node.js and Express that handles user authentication, file uploads, permission management, background job processing, and dynamic file serving. Authentication is handled through token-based security, with Redis used for efficient session storage and expiration. I developed endpoints for uploading, listing, and viewing files, along with controlling public or private access permissions. MongoDB was used for persistent storage of users and files, and Redis provided fast in-memory management of authentication tokens and background job queues. For image uploads, I implemented a background worker using Bull that automatically generated multiple thumbnail sizes, offloading intensive processing tasks from the main API thread. I also created features for paginated file listings, dynamic folder structures, and direct file retrieval with MIME-type handling. This project showcases my ability to integrate databases, authentication systems, file storage, background processing, and scalable RESTful architecture into a cohesive and production-ready back-end service.",
    image: "files-manager.png",
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
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Projects"
          subtitle="Check out some of my recent work"
        />

        <Tabs defaultValue="all" className="mt-12" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="fullstack">Fullstack</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
