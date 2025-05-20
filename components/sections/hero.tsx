"use client";

import dynamic from "next/dynamic";
import { Suspense, useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import RotatingText from "@/components/rotating-text";
import SectionVantaBackground from "@/components/section-vanta-background";
import { useMobile } from "@/hooks/use-mobile";

// 💡 Dynamically import Canvas-related code only on client side
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  {
    ssr: false,
  }
);

const OrbitControls = dynamic(
  () => import("@react-three/drei").then((mod) => mod.OrbitControls),
  {
    ssr: false,
  }
);

const Model3D = dynamic(() => import("@/components/3d/model"), {
  ssr: false,
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMobile();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modelContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // This effect ensures the model doesn't block interactions on mobile
  useEffect(() => {
    if (!isMobile || !modelContainerRef.current) return;

    // Function to make the model container non-interactive when touching buttons or scrolling
    const makeNonInteractive = () => {
      if (modelContainerRef.current) {
        modelContainerRef.current.style.pointerEvents = "none";
      }
    };

    // Apply immediately and whenever window is resized
    makeNonInteractive();
    window.addEventListener("resize", makeNonInteractive);

    return () => {
      window.removeEventListener("resize", makeNonInteractive);
    };
  }, [isMobile, modelContainerRef]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Add Vanta background to hero section */}
      <SectionVantaBackground />

      {/* 3D Model - Desktop: Background, Mobile: On top visually but non-interactive */}
      {isMobile ? (
        // Mobile: Position the 3D model on top of the blur card and below the View Projects button
        <div
          ref={modelContainerRef}
          className="absolute left-0 right-0 top-[calc(100%-325px)] h-[300px] z-20 pointer-events-none"
          style={{ touchAction: "none" }}
        >
          {mounted && (
            <Canvas
              ref={canvasRef}
              camera={{ position: [0, 0, 5], fov: 45 }}
              shadows
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
              className="bg-transparent"
              style={{ pointerEvents: "none", touchAction: "none" }}
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
              {/* Disable controls on mobile */}
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                autoRotate={false}
              />
            </Canvas>
          )}
        </div>
      ) : (
        // Desktop: Keep the 3D model in the background
        <div className="absolute inset-0 -z-5">
          {mounted && (
            <Canvas
              ref={canvasRef}
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
              {/* Enable controls on desktop */}
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                autoRotate={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                makeDefault
              />
            </Canvas>
          )}
        </div>
      )}

      {/* Content - Ensure it's interactive by setting a higher pointer-events-auto */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-auto">
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
              With a detail-oriented approach, a focus on the end user, and
              alignment with business goals, I aim to contribute to project
              success and drive measurable results.{" "}
            </p>

            <div className="flex flex-wrap gap-4 relative z-30 pointer-events-auto">
              <Button size="lg" asChild className="relative z-30">
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="relative z-30"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>

            <div className="flex items-center mt-8 gap-4 relative z-30 pointer-events-auto">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="relative z-30">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="relative z-30">
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

      {/* Scroll Down Indicator - Ensure it's on top and interactive */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce pointer-events-auto">
        <Link href="#about">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full z-40 relative"
          >
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
