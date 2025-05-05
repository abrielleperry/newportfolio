"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/count-up";
import { Code, GitCommit, BookOpen } from "lucide-react";

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
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
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
                    <li>
                      Honor Roll for excellence in Front-End, Back-End, and Full Stack Development Trimesters
                    </li>
                    <li>
                      Completed a 20-month, 74.5-credit intensive program
                      covering full stack development and computer science
                      fundamentals.
                    </li>
                    <li>
                      Completed an intensive, full-time Full Stack Web
                      Development program emphasizing hands-on learning,
                      real-world projects, and collaborative software
                      development workflows.
                    </li>
                    <li>
                      Gained mastery in building and deploying robust, scalable
                      web applications across the entire technology stack,
                      including modern front-end frameworks, secure back-end
                      development, RESTful APIs, and database management.
                    </li>
                    <li>
                      Trained in developer best practices, DevOps principles,
                      and career-ready professional skills.
                    </li>
                    <li>
                      Gained solid foundations in procedural and object-oriented
                      programming using C and object-oriented languages.
                    </li>
                    <li>
                      Explored algorithmic thinking, bit-level manipulation,
                      memory management, and modular code architecture.
                    </li>
                    <li>
                      Worked with libraries, Makefiles, and optimized code for
                      readability and performance.
                    </li>
                    <li>
                      Developed applications using concepts of inheritance,
                      encapsulation, and persistent data modeling.
                    </li>
                    <li>
                      Designed and developed complete web applications from
                      front-end to back-end, integrating modern tools and
                      libraries.
                    </li>
                    <li>
                      Built responsive user interfaces using HTML5, CSS3,
                      JavaScript, and UI frameworks such as React or Vue.js.
                    </li>
                    <li>
                      Implemented dynamic front-ends with real-time
                      client-server communication and local storage mechanisms.
                    </li>
                    <li>
                      Engineered RESTful APIs and managed user authentication,
                      session management, and secure routing.
                    </li>
                    <li>
                      Mastered the integration of backend services using Node.js
                      and Python, enabling efficient server-side logic.
                    </li>
                    <li>
                      Applied backend programming to solve real-world problems
                      involving data persistence, testing, and file system
                      interactions.
                    </li>
                    <li>
                      Managed structured and unstructured data with SQL and
                      NoSQL databases, including relational models and key-value
                      stores.
                    </li>
                    <li>
                      Designed systems for large-scale data processing, ensuring
                      optimized performance under heavy load.
                    </li>
                    <li>
                      Gained hands-on experience with Linux, shell environments,
                      and command-line tools.
                    </li>
                    <li>
                      Configured web servers, firewalls, and SSH environments,
                      exploring systems administration fundamentals.
                    </li>
                    <li>
                      Practiced file and permission management, user role setup,
                      and basic network configuration in secure environments.
                    </li>
                    <li>
                      Developed strong UI/UX skills including interface design,
                      developer tooling, and styling frameworks like Bootstrap
                      or Tailwind.
                    </li>
                    <li>
                      Built accessible, consistent, and user-friendly layouts
                      through iterative design and responsive web practices.
                    </li>
                    <li>
                      Converted designer mockups into functional interfaces
                      while maintaining cross-device compatibility.
                    </li>
                    <li>
                      Honed technical communication through whiteboarding
                      sessions, mock interviews, and public speaking exercises.
                    </li>
                    <li>
                      Developed a professional online presence and networking
                      strategy using social platforms and technical branding.
                    </li>
                    <li>
                      Completed a portfolio-ready capstone project from ideation
                      to deployment, integrating tools like Git, CI/CD
                      pipelines, and agile methodologies.
                    </li>
                    <li>
                      Learned best practices in email etiquette, event
                      follow-ups, and technical writing, preparing for long-term
                      career growth.
                    </li>
                    <li>
                      Built and deployed a full-featured, production-grade web
                      application featuring a responsive front-end,
                      authenticated user management, RESTful API back-end, and
                      real-time data integration. Project was pitched and
                      refined through peer and instructor reviews and represents
                      the culmination of the Full Stack curriculum.
                    </li>
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
                    <li>
                      Installed and configured 5,000+ FCC-regulated captioning
                      telephones at residential and commercial locations,
                      ensuring full device functionality and compatibility
                      across VoIP systems, analog landlines, mobile apps,
                      hotspots, and Bluetooth-enabled devices
                    </li>
                    <li>
                      Diagnosed and resolved connectivity issues involving
                      modem-router setups, network interference, phone line
                      stability, and Bluetooth pairing, reducing follow-up
                      support requests and improving customer experience
                    </li>
                    <li>
                      Provided customized in-person and remote training to a
                      diverse clientele of hard-of-hearing users, translating
                      complex technical concepts into accessible instruction and
                      fostering increased user confidence and engagement
                    </li>

                    <li>
                      Maintained strict compliance with FCC regulatory
                      requirements, conducting eligibility verification,
                      safeguarding personally identifiable information (PII),
                      and preparing accurate documentation through Excel,
                      Outlook, Onyx, and Microsoft Dynamics CRM
                    </li>
                    <li>
                      Managed a territory averaging 250 miles of daily travel,
                      coordinating and optimizing appointment schedules to
                      minimize idle time and maximize service coverage through
                      proactive communication and self-managed scheduling
                    </li>
                    <li>
                      Conducted outreach via phone, email, and cold calls to
                      schedule, confirm, or adjust appointments, ensuring high
                      booking efficiency and client satisfaction
                    </li>
                    <li>
                      Maintained accurate tracking of equipment inventory,
                      processed returns of defective units, and distributed
                      marketing materials, contributing to operational readiness
                      and service continuity
                    </li>
                    <li>
                      Adapted to day-to-day changes and shifting client needs by
                      leveraging strong organizational skills, calendar
                      management, and real-time decision-making to meet dynamic
                      service demands
                    </li>
                    <li>
                      Promoted to Trainer II in recognition of consistent
                      performance, superior client service, and the successful
                      mentorship of new field technicians, enhancing team-wide
                      competency and procedural adherence
                    </li>
                    <li>
                      Utilized advanced technical troubleshooting, CRM platform
                      management, and interpersonal communication skills to
                      exceed productivity targets and support the company’s
                      mission of accessible communication technology
                    </li>
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
