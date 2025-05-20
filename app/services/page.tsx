import ServicesSection from "@/components/sections/services";

export const metadata = {
  title: "Services | Abrielle Perry – Web & App Development",
  description:
    "Discover development services offered by Abrielle Perry, including web and mobile app development, API integration, performance optimization, and UI/UX-focused design.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ServicesSection />
    </main>
  );
}
