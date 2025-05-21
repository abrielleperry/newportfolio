import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { aileron, cursive } from "./fonts";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://abrielleperry.com"),
  title: "Abrielle Perry | Full Stack Web & Mobile Developer",
  description:
    "Portfolio of Abrielle Perry, a full stack developer specializing in front-end, back-end, and mobile development. Focused on building accessible, user-friendly websites and applications that meet business goals and enhance user experience.",
  openGraph: {
    title: "Abrielle Perry | Full Stack Developer",
    description:
      "Explore Abrielle Perry's portfolio of web and mobile development work, showcasing a blend of technical and creative expertise with modern frameworks like React, TypeScript, and Tailwind CSS.",
    url: "https://abrielleperry.com",
    siteName: "Abrielle Perry Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abrielle Perry | Full Stack Developer",
    description:
      "Discover full stack, front-end, and mobile projects by Abrielle Perry, built with a focus on accessibility, usability, and modern design.",
    images: ["https://abrielleperry.com/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} ${aileron.variable} ${cursive.variable}`}
    >
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
