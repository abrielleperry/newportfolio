import ContactSection from "@/components/sections/contact";

export const metadata = {
  title: "Contact | Abrielle Perry – Let’s Work Together",
  description:
    "Reach out to Abrielle Perry for collaboration, project inquiries, or freelance development work in full stack web and mobile technologies.",
};

export default function ContactPage() {
  return (
    <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ContactSection />
    </main>
  );
}
