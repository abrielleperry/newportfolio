"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Model3D from "@/components/3d/model";
import RotatingText from "@/components/rotating-text";
import SectionVantaBackground from "@/components/section-vanta-background";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Add Vanta background to hero section */}
      <SectionVantaBackground />

      {/* Background gradient */}

      {/* 3D Model */}
      <div className="absolute inset-0 -z-5">
        {mounted && (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            shadows
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            className="bg-transparent"
          >
            <Suspense fallback={null}>
              <Model3D />
              {/* Ambient light for overall illumination */}
              <ambientLight intensity={1.0} />

              {/* Main spotlight adjusted for the tilted laptop */}
              <spotLight
                position={[1.5, 3, 6]}
                angle={0.4}
                penumbra={1}
                intensity={1.8}
                castShadow
              />

              {/* Secondary spotlight for side illumination */}
              <spotLight
                position={[5, 4, 3]}
                angle={0.3}
                penumbra={1}
                intensity={1}
                castShadow
              />

              {/* Fill light from below to reduce harsh shadows */}
              <directionalLight position={[-5, -2, 3]} intensity={0.3} />

              {/* Top light for general illumination */}
              <directionalLight position={[0, 5, 2]} intensity={0.6} />

              {/* Screen-specific light adjusted for the tilted laptop - updated to match new color scheme */}
              <pointLight
                position={[1.5, -1, 4]}
                intensity={1.5}
                color="#71bbb2"
                distance={10}
                decay={2}
              />
            </Suspense>
            {/* Disable auto-rotation since we have our own animation sequence */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Canvas>
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl backdrop-blur-sm bg-background/30 dark:bg-background/40 p-6 rounded-xl">
            <p className="text-lg sm:text-xl font-medium text-primary mb-2">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Abrielle Perry
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 flex items-center">
              <RotatingText
                texts={["Full Stack", "Front End", "Back End", "Web", "Mobile"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-primary text-primary-foreground overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg mr-2"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
              <span>Developer</span>
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Recent graduate passionate about building beautiful, functional,
              and user-friendly web applications. Seeking opportunities to grow
              and contribute to innovative projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>

            <div className="flex items-center mt-8 gap-4">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* This empty div helps balance the grid on larger screens */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
