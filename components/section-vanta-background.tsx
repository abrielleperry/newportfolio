"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

// Define a global type for the VANTA object
declare global {
  interface Window {
    VANTA: {
      FOG: (config: any) => any;
    };
    THREE: any;
  }
}

interface SectionVantaBackgroundProps {
  className?: string;
}

export default function SectionVantaBackground({
  className = "",
}: SectionVantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  // Initialize Vanta effect after scripts are loaded
  useEffect(() => {
    if (scriptsLoaded && !vantaEffect && vantaRef.current && window.VANTA) {
      const effect = window.VANTA.FOG({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x7ae2cf,
        midtoneColor: 0x077a7d,
        lowlightColor: 0x06202b,
        baseColor: 0xffffff,
        blurFactor: 0.9,
        speed: 2.5, // Adjusted speed
        zoom: 0.3,
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [scriptsLoaded, vantaEffect]);

  return (
    <>
      {/* Load Three.js and Vanta.js from CDN */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        onLoad={() => console.log("Three.js loaded")}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"
        onLoad={() => setScriptsLoaded(true)}
      />

      {/* Vanta background container */}
      <div ref={vantaRef} className={`absolute inset-0 -z-10 ${className}`} />
    </>
  );
}
