import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "@/components/section-heading";
import {
  Code,
  Database,
  Globe,
  Layout,
  Server,
  PenToolIcon as Tool,
  Workflow,
} from "lucide-react";

// Sample skills data - replace with your own skills
const skills = {
  frontend: [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Redux", level: 75 },
    { name: "Responsive Design", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 70 },
    { name: "REST APIs", level: 85 },
    { name: "GraphQL", level: 65 },
    { name: "Authentication", level: 80 },
    { name: "Server Deployment", level: 70 },
  ],
  tools: [
    { name: "Git/GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "npm/yarn", level: 85 },
    { name: "Webpack", level: 70 },
    { name: "Docker", level: 65 },
    { name: "CI/CD", level: 70 },
    { name: "Testing (Jest)", level: 75 },
    { name: "Figma", level: 70 },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with"
        />

        <Tabs defaultValue="frontend" className="mt-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="frontend" className="flex items-center gap-2">
                <Layout className="h-4 w-4" /> Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-2">
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
                  <Card key={skill.name}>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h3 className="font-medium mb-2">{skill.name}</h3>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div
                            className="bg-primary h-2.5 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {skill.level}% Proficiency
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
