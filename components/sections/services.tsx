"use client";

import SectionHeading from "@/components/section-heading";
import SpotlightCard from "@/components/ui/spotlight-card";
import {
  LayoutTemplate,
  Server,
  Database,
  Webhook,
  Gauge,
  Paintbrush,
  BarChart,
  Shield,
  Code,
  Globe,
  Smartphone,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

// Updated services data with more accurate icons
const services = [
  {
    title: "Front-End Development",
    description:
      "I design and build responsive, visually appealing, and user-friendly interfaces that enhance engagement and accessibility. My focus is on delivering seamless experiences using modern frameworks and best practices.",
    icon: "LayoutTemplate",
  },
  {
    title: "Back-End Development",
    description:
      "I develop secure and scalable server-side architectures that ensure seamless data processing and system performance. From authentication to database management, I build efficient back-end solutions tailored to your needs.",
    icon: "Server",
  },
  {
    title: "Database Management",
    description:
      "I design and manage efficient databases to ensure secure, structured, and scalable data storage. Whether handling SQL or NoSQL databases, I optimize performance for seamless data retrieval and processing.",
    icon: "Database",
  },
  {
    title: "API Development & Integration",
    description:
      "I build and integrate APIs to connect applications and services seamlessly. Whether it's third-party API integration or developing custom RESTful or GraphQL APIs, I ensure smooth data communication and interoperability.",
    icon: "Webhook",
  },
  {
    title: "Performance Optimization",
    description:
      "I optimize website and application performance by improving load times, reducing bottlenecks, and implementing best coding practices. My goal is to enhance speed, scalability, and overall efficiency.",
    icon: "Gauge",
  },
  {
    title: "UI/UX Design",
    description:
      "I craft visually compelling and intuitive user interfaces with a focus on accessibility and seamless interactions. My designs enhance engagement by prioritizing usability and modern design trends.",
    icon: "Paintbrush",
  },
  {
    title: "SEO & Web Analytics",
    description:
      "I optimize websites for search engines, improve visibility, and track user engagement through analytics. My approach enhances organic reach and ensures data-driven decision-making for better performance.",
    icon: "BarChart",
  },
  {
    title: "Security Implementation",
    description:
      "I implement security best practices to protect applications from vulnerabilities, unauthorized access, and data breaches. My focus includes authentication, encryption, and compliance with industry security standards.",
    icon: "Shield",
  },
];

// Updated icon mapping function with more accurate icons
const getIcon = (iconName: string) => {
  const iconProps = { className: "h-10 w-10 text-primary" };

  switch (iconName) {
    case "LayoutTemplate":
      return <LayoutTemplate {...iconProps} />;
    case "Server":
      return <Server {...iconProps} />;
    case "Database":
      return <Database {...iconProps} />;
    case "Webhook":
      return <Webhook {...iconProps} />;
    case "Gauge":
      return <Gauge {...iconProps} />;
    case "Paintbrush":
      return <Paintbrush {...iconProps} />;
    case "BarChart":
      return <BarChart {...iconProps} />;
    case "Shield":
      return <Shield {...iconProps} />;
    case "Code":
      return <Code {...iconProps} />;
    case "Globe":
      return <Globe {...iconProps} />;
    case "Smartphone":
      return <Smartphone {...iconProps} />;
    case "Layers":
      return <Layers {...iconProps} />;
    default:
      return <Code {...iconProps} />;
  }
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Services"
          subtitle="Specialized solutions to help your business grow"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard spotlightColor="rgba(113, 187, 178, 0.3)">
                <div className="flex flex-col h-full">
                  <div className="mb-4">{getIcon(service.icon)}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground flex-grow">
                    {service.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
