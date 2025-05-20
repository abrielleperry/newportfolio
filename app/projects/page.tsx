import ProjectsSection from "@/components/sections/projects";

export const metadata = {
  title: "Projects | Abrielle Perry – Web & Mobile Developer Portfolio",
  description:
    "Explore featured projects by Abrielle Perry across full stack, front-end, and mobile development. Built with React, TypeScript, Tailwind CSS, and more.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ProjectsSection />
    </main>
  );
}
