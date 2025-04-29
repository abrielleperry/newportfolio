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
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
    image: "/ecommerce-dashboard-overview.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/yourusername/project",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity app that helps users organize tasks, set deadlines, and track progress.",
    image: "/digital-workflow-dashboard.png",
    tags: ["React", "Firebase", "Tailwind CSS", "Context API"],
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/yourusername/project",
    category: "frontend",
  },
  {
    id: 3,
    title: "API Service",
    description:
      "A RESTful API service that provides data for mobile and web applications.",
    image: "/api-monitoring-dashboard.png",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/yourusername/project",
    category: "backend",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    image: "/clean-creative-portfolio.png",
    tags: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/yourusername/project",
    category: "frontend",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description:
      "A dashboard for managing and analyzing social media accounts and performance.",
    image:
      "/placeholder.svg?height=600&width=800&query=social media analytics dashboard",
    tags: ["React", "Node.js", "Express", "Chart.js", "OAuth"],
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/yourusername/project",
    category: "fullstack",
  },
  {
    id: 6,
    title: "Database Migration Tool",
    description:
      "A tool for migrating data between different database systems.",
    image:
      "/placeholder.svg?height=600&width=800&query=database migration tool",
    tags: ["Python", "SQL", "Docker", "CLI"],
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/yourusername/project",
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
