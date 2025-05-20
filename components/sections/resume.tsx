"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/count-up";
import { Code, GitCommit, BookOpen } from "lucide-react";
import educationList from "@/data/education.json";
import experienceList from "@/data/experience.json";

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Resume"
          subtitle="My education and experience"
        />

        <div className="mt-12 flex justify-center mb-8">
          <Button size="lg" asChild>
            <Link
              href="/Abrielle_Perry_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" /> Download Full Resume
            </Link>
          </Button>
        </div>

        <div className="space-y-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">
                        Computer Science and Full Stack Web Development
                      </h4>
                      <p className="text-muted-foreground">Atlas School</p>
                    </div>
                    <span className="text-sm bg-muted px-2 py-1 rounded">
                      2023 - 2025
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    {educationList.map((item, idx) => (
                      <li key={`edu-${idx}`}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">Installer Trainer II</h4>
                      <p className="text-muted-foreground">CaptionCall</p>
                    </div>
                    <span className="text-sm bg-muted px-2 py-1 rounded">
                      2019 - 2023
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    {experienceList.map((item, idx) => (
                      <li key={`exp-${idx}`}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats Section with CountUp */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 inline-flex mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    <CountUp to={136} duration={2.5} separator="," />+
                  </div>
                  <p className="text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 inline-flex mb-4">
                    <GitCommit className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    <CountUp to={4225} duration={2.5} separator="," />+
                  </div>
                  <p className="text-muted-foreground">GitHub Contributions</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 inline-flex mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    <CountUp to={34} duration={3} separator="," />+
                  </div>
                  <p className="text-muted-foreground">Technical Courses</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
