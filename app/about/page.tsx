import AboutSection from "@/components/sections/about";

export const metadata = {
  title: "About | Abrielle Perry – Full Stack Web Developer",
  description:
    "Get to know Abrielle Perry, a full stack developer who blends technical expertise and creativity to build functional, user-focused web and mobile applications.",
};

export default function AboutPage() {
  return (
    <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <AboutSection />
    </main>
  );
}
