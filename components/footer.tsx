import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import SectionVantaBackground from "@/components/section-vanta-background";

export default function Footer() {
  return (
    <footer className="border-t py-8 relative">
      {/* Add Vanta background to footer */}
      <SectionVantaBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} Abrielle Perry All rights
              reserved
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/abrielleperry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://linkedin.com/in/abriellerperry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>

            <Link href="mailto:abrielleperry22@icloud.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
