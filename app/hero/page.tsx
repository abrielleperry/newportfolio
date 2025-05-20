import HeroSection from "@/components/sections/hero";

export const metadata = {
  title: "Welcome | Abrielle Perry – Full Stack Developer",
  description:
    "Abrielle Perry builds user-friendly, accessible web and mobile applications that balance visual design with functionality and performance.",
};

export default function HeroPage() {
  return (
    <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <HeroSection />
    </main>
  );
}
