import Intro from "@/components/sections/intro";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Resume from "@/components/sections/resume";
import Skills from "@/components/sections/skills";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Resume />
      <Intro />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
