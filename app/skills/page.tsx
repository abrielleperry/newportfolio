import SkillsSection from "@/components/sections/skills";

export const metadata = {
  title: "Skills | Abrielle Perry – Tech Stack & Tools",
  description:
    "View Abrielle Perry’s technical toolkit: React, TypeScript, Node.js, SQL/NoSQL, mobile frameworks, and tools for UI, testing, and deployment.",
};

export default function SkillsPage() {
  return (
    <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SkillsSection />
    </main>
  );
}
