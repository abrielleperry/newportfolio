"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Plane } from "@react-three/drei";
import type { MeshStandardMaterial } from "three";
import type * as THREE from "three";

export default function ScreenContent() {
  const textRef = useRef<THREE.Mesh>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  // Animate the screen content
  useFrame(({ clock }) => {
    if (textRef.current) {
      // Subtle pulsing effect
      const t = clock.getElapsedTime();
      textRef.current.position.z = Math.sin(t * 2) * 0.01 + 0.01;
    }

    if (screenRef.current && screenRef.current.material) {
      // Subtle glow effect
      const material = screenRef.current.material as MeshStandardMaterial;
      const t = clock.getElapsedTime();
      material.emissiveIntensity = 0.8 + Math.sin(t * 1.5) * 0.2;
    }
  });

  return (
    <group>
      {/* Screen background */}
      <Plane ref={screenRef} args={[1.2, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#111827"
          emissive="#0066ff" // Blue emissive
          emissiveIntensity={0.8}
          roughness={0.2}
        />
      </Plane>

      {/* Screen content */}
      <Text
        ref={textRef}
        position={[0, 0.2, 0.01]}
        fontSize={0.1}
        color="#ffffff" // White text
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        Hello World!
      </Text>

      <Text
        position={[0, 0, 0.01]}
        fontSize={0.06}
        color="#4ade80" // Green text
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Medium.woff"
      >
        Fullstack Developer
      </Text>

      <Text
        position={[0, -0.15, 0.01]}
        fontSize={0.04}
        color="#f97316" // Orange text
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Regular.woff"
      >
        React • Next.js • TypeScript
      </Text>
    </group>
  );
}
