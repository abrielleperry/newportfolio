"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionVantaBackground from "@/components/section-vanta-background";
import FlyingPosters from "@/components/flying-posters";
import BlurText from "@/components/BlurText";

// Project images for the flying posters
const projectImages = ["/pic1.jpg", "/pic2.jpg", "/pic3.jpg"];

export default function Intro() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const animationCompletedRef = useRef(false);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Add Vanta background to intro section */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 w-full"
            >
              {isLoaded && (
                <BlurText
                  text="LET'S TURN YOUR NEXT BIG IDEA INTO SOMETHING REAL, RESPONSIVE, AND READY TO SCALE"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-4xl sm:text-5xl md:text-7xl font-bold font-aileron tracking-[-0.087em] leading-[0.8]"
                />
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold mb-2">STORY/</h3>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold mb-2">STRATEGY/</h3>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold mb-2">DEVELOP/</h3>
                </div>
              </div>

              {/* First row - text aligned to the left */}
              <div className="text-left">
                <p className="text-xl sm:text-2xl ">FULL STACK</p>
              </div>
              <div className="mb-6 text-left">
                <p className="text-xl sm:text-2xl  ">FULL IMPACT</p>
              </div>

              {/* Second row - text aligned to the right with reduced width */}
              <div className="mb-10 flex justify-end">
                <p className="text-sm sm:text-md text-right max-w-xs font-aileron tracking-[-0.020em] leading-[0.8] ">
                  "A SUCCESSFUL WEBSITE DOES THREE THINGS: IT ATTRACTS THE RIGHT
                  KINDS OF VISITORS. GUIDES THEM TO THE MAIN SERVICES OR
                  PRODUCTS YOU OFFER. COLLECTS CONTACT DETAILS FOR FUTURE
                  ONGOING RELATION." - MOHAMED SAAD
                </p>
              </div>
            </motion.div>
          </div>

          {/* Flying Posters on the right side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[500px] lg:h-[600px] w-full"
          >
            <FlyingPosters
              items={projectImages}
              planeWidth={280}
              planeHeight={400}
              distortion={2}
              scrollEase={0.08}
              cameraFov={45}
              cameraZ={15}
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0.5 : 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0.4 : 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"
      />
    </section>
  );
}
