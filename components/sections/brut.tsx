"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import FlyingPosters from "@/components/flying-posters";
import BlurText from "@/components/BlurText";
import { useMobile } from "@/hooks/use-mobile";

// Project images for the flying posters
const projectImages = ["/pic1.jpg", "/pic2.jpg", "/pic3.jpg"];

export default function Brut() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const animationCompletedRef = useRef(false);
  const isMobile = useMobile();

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
    setAnimationComplete(true);
  };

  // Adjust poster dimensions based on screen size
  const getPosterDimensions = () => {
    if (isMobile) {
      return {
        width: 200,
        height: 300,
        distortion: 1.5,
        cameraZ: 12,
      };
    } else {
      return {
        width: 280,
        height: 400,
        distortion: 2,
        cameraZ: 15,
      };
    }
  };

  const { width, height, distortion, cameraZ } = getPosterDimensions();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-6 sm:py-8 md:py-12">
      <div className="container relative z-10 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4 sm:mb-6 w-full"
            >
              {isLoaded && (
                <BlurText
                  text="LET'S TURN YOUR NEXT BIG IDEA INTO SOMETHING REAL, RESPONSIVE, AND READY TO SCALE"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-aileron tracking-[-0.087em] leading-[0.9] sm:leading-[0.8]"
                />
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-10">
                <div className="text-center sm:text-left">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">
                    STORY/
                  </h3>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">
                    STRATEGY/
                  </h3>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">
                    DEVELOP/
                  </h3>
                </div>
              </div>

              {/* First row - text aligned to the left */}
              <div className="text-left">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  FULL STACK
                </p>
              </div>
              <div className="mb-4 sm:mb-6 text-left">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  FULL IMPACT
                </p>
              </div>

              {/* Second row - text aligned to the right with responsive width */}
              <div className="mb-6 sm:mb-10 flex justify-center lg:justify-end">
                <p className="text-xs sm:text-sm md:text-base text-center lg:text-right max-w-[280px] sm:max-w-xs font-aileron tracking-[-0.020em] leading-[1.2] sm:leading-[1.1] md:leading-[1.0]">
                  "A SUCCESSFUL WEBSITE DOES THREE THINGS: IT ATTRACTS THE RIGHT
                  KINDS OF VISITORS. GUIDES THEM TO THE MAIN SERVICES OR
                  PRODUCTS YOU OFFER. COLLECTS CONTACT DETAILS FOR FUTURE
                  ONGOING RELATION." - MOHAMED SAAD
                </p>
              </div>
            </motion.div>
          </div>

          {/* Flying Posters with responsive height */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full"
          >
            <FlyingPosters
              items={projectImages}
              planeWidth={width}
              planeHeight={height}
              distortion={distortion}
              scrollEase={0.08}
              cameraFov={45}
              cameraZ={cameraZ}
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements with responsive positioning */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0.5 : 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-[10%] left-[5%] w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0.4 : 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-[10%] right-[5%] w-20 sm:w-24 md:w-32 lg:w-40 h-20 sm:h-24 md:h-32 lg:h-40 rounded-full bg-primary/10 blur-3xl"
      />
    </section>
  );
}
