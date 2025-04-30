"use client";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Layout,
  Server,
  PenToolIcon as Tool,
  Code,
  Database,
  Globe,
  Layers,
  Palette,
  FileCode,
  Monitor,
  Cloud,
  GitBranch,
  Package,
  Smartphone,
  Flame,
  Table,
  Lock,
  Send,
  FileJson,
  Cpu,
  Wind,
  Component,
  Repeat,
  LayoutGrid,
  Boxes,
  TestTube,
  Triangle,
  Paintbrush,
  Braces,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";

// Updated skills data with more accurate icons
const skills = {
  frontend: [
    { name: "HTML", icon: <Braces className="h-5 w-5" /> },
    { name: "CSS", icon: <Paintbrush className="h-5 w-5" /> },
    { name: "JavaScript", icon: <FileCode className="h-5 w-5" /> },
    { name: "TypeScript", icon: <Code className="h-5 w-5" /> },
    { name: "React", icon: <Component className="h-5 w-5" /> },
    { name: "Next.js", icon: <Triangle className="h-5 w-5" /> },
    { name: "Tailwind CSS", icon: <Wind className="h-5 w-5" /> },
    { name: "Redux", icon: <Repeat className="h-5 w-5" /> },
    { name: "Responsive Design", icon: <LayoutGrid className="h-5 w-5" /> },
    { name: "React Native", icon: <Smartphone className="h-5 w-5" /> },
    { name: "Expo", icon: <Component className="h-5 w-5" /> },
  ],
  backend: [
    { name: "Node.js", icon: <Server className="h-5 w-5" /> },
    { name: "Express", icon: <Workflow className="h-5 w-5" /> },
    { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
    { name: "SQL", icon: <Table className="h-5 w-5" /> },
    { name: "REST APIs", icon: <Globe className="h-5 w-5" /> },
    { name: "GraphQL", icon: <Cpu className="h-5 w-5" /> },
    { name: "Authentication", icon: <Lock className="h-5 w-5" /> },
    { name: "Server Deployment", icon: <Cloud className="h-5 w-5" /> },
    { name: "Supabase", icon: <Database className="h-5 w-5" /> },
    { name: "Firebase", icon: <Flame className="h-5 w-5" /> },
    { name: "Redis", icon: <Database className="h-5 w-5" /> },
    { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
  ],
  tools: [
    { name: "Git/GitHub", icon: <GitBranch className="h-5 w-5" /> },
    { name: "VS Code", icon: <Code className="h-5 w-5" /> },
    { name: "npm/yarn", icon: <Package className="h-5 w-5" /> },
    { name: "Docker", icon: <Boxes className="h-5 w-5" /> },
    { name: "CI/CD", icon: <Workflow className="h-5 w-5" /> },
    { name: "Testing Library", icon: <TestTube className="h-5 w-5" /> },
    { name: "Jest", icon: <TestTube className="h-5 w-5" /> },
    { name: "Figma", icon: <Palette className="h-5 w-5" /> },
    { name: "Vercel", icon: <Triangle className="h-5 w-5" /> },
    { name: "Postman", icon: <Send className="h-5 w-5" /> },
    { name: "Swagger", icon: <FileJson className="h-5 w-5" /> },
  ],
};

// Display options
type DisplayOption = "grid" | "cloud" | "categories" | "logos";

export default function SkillsNoRatings() {
  const [displayOption, setDisplayOption] = useState<DisplayOption>("grid");

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="flex justify-center mb-8 mt-8">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
            <button
              onClick={() => setDisplayOption("grid")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
                displayOption === "grid"
                  ? "bg-background text-foreground shadow-sm"
                  : ""
              }`}
            >
              <Layout className="h-4 w-4 mr-2" /> Grid View
            </button>

            <button
              onClick={() => setDisplayOption("categories")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
                displayOption === "categories"
                  ? "bg-background text-foreground shadow-sm"
                  : ""
              }`}
            >
              <Layers className="h-4 w-4 mr-2" /> Categories
            </button>
          </div>
        </div>

        {displayOption === "grid" && (
          <Tabs defaultValue="frontend" className="mt-8">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger
                  value="frontend"
                  className="flex items-center gap-2"
                >
                  <Layout className="h-4 w-4" /> Frontend
                </TabsTrigger>
                <TabsTrigger
                  value="backend"
                  className="flex items-center gap-2"
                >
                  <Server className="h-4 w-4" /> Backend
                </TabsTrigger>
                <TabsTrigger value="tools" className="flex items-center gap-2">
                  <Tool className="h-4 w-4" /> Tools
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(skills).map(([category, skillList]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skillList.map((skill) => (
                    <Card
                      key={skill.name}
                      className="overflow-hidden group hover:shadow-md transition-all"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center justify-center text-center h-full">
                          <div className="mb-3 text-primary">{skill.icon}</div>
                          <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                            {skill.name}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}

        {displayOption === "cloud" && (
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {Object.values(skills)
              .flat()
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Badge
                    variant={
                      index % 3 === 0
                        ? "default"
                        : index % 3 === 1
                        ? "secondary"
                        : "outline"
                    }
                    className="text-sm py-2 px-3 cursor-pointer hover:scale-105 transition-transform"
                  >
                    <span className="mr-1.5">{skill.icon}</span>
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
          </div>
        )}

        {displayOption === "categories" && (
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Layout className="h-5 w-5" />
                  <h3 className="text-xl font-medium">Frontend</h3>
                </div>
                <div className="space-y-3">
                  {skills.frontend.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 group"
                    >
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {skill.icon}
                      </div>
                      <span className="group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Server className="h-5 w-5" />
                  <h3 className="text-xl font-medium">Backend</h3>
                </div>
                <div className="space-y-3">
                  {skills.backend.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 group"
                    >
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {skill.icon}
                      </div>
                      <span className="group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Tool className="h-5 w-5" />
                  <h3 className="text-xl font-medium">Tools</h3>
                </div>
                <div className="space-y-3">
                  {skills.tools.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 group"
                    >
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {skill.icon}
                      </div>
                      <span className="group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {displayOption === "logos" && (
          <div className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {Object.values(skills)
                .flat()
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border bg-card hover:shadow-md transition-all hover:border-primary"
                  >
                    <div className="w-16 h-16 flex items-center justify-center text-primary mb-3">
                      {skill.icon}
                    </div>
                    <h3 className="text-center font-medium">{skill.name}</h3>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
