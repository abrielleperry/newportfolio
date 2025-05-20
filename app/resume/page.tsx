import ResumeSection from "@/components/sections/resume";

export const metadata = {
  title: "Resume | Abrielle Perry – Developer Experience & Education",
  description:
    "Review Abrielle Perry’s background in front-end and back-end development, technical education, and experience delivering accessible, scalable applications.",
};

export default function ResumePage() {
  return (
    <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ResumeSection />
    </main>
  );
}
