"use client";

import { useEffect, useState, useRef } from "react";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { Mesh, Color, MathUtils } from "three";
import { useTheme } from "next-themes";
import { useMobile } from "@/hooks/use-mobile";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";

export default function Model3D() {
  const [error, setError] = useState(false);
  const { scene } = useGLTF("/assets/3d/whitebglaptop.glb");
  const { theme } = useTheme();
  const isMobile = useMobile();
  const modelRef = useRef<THREE.Group>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);

  // Animation state with mobile-specific parameters
  const animationState = useRef({
    phase: "slide-in", // "slide-in", "spin", "transition", "hover"
    startTime: 0,
    slideInDuration: isMobile ? 2 : 4, // faster on mobile
    spinDuration: isMobile ? 0.8 : 1.2, // faster on mobile
    transitionDuration: 0.8, // seconds for smooth transition
    startX: isMobile ? 5 : 8, // start position (closer on mobile)
    targetX: isMobile ? 0 : 1.5, // centered on mobile
    // Adjusted rotation values to face more toward the front
    spinStartRotation: Math.PI * 0.9,
    spinEndRotation: Math.PI * 0.9 + Math.PI * 2, // full 360 degree spin + starting rotation
    hoverAmplitude: isMobile ? 0.05 : 0.1, // smaller hover on mobile
    hoverFrequency: 0.5,
    // Store the actual final rotation from spin phase
    finalSpinRotation: 0,
    // Target rotation for hover phase
    hoverRotation: Math.PI * 0.9, // Same as initial rotation
    // Store vertical position for smooth transition
    verticalPosition: -0.2,
    // Consistent tilt value (X rotation)
    baseTilt: 0.3, // Base tilt value used across all phases
    tiltVariation: 0.05, // How much the tilt can vary during hover
  });

  // Apply sequenced animation
  useFrame(({ clock }) => {
    if (!modelRef.current) return;

    const t = clock.getElapsedTime();
    const state = animationState.current;

    // Initialize start time on first frame
    if (state.startTime === 0) {
      state.startTime = t;
    }

    const elapsedTime = t - state.startTime;

    // Phase 1: Slide in from right
    if (state.phase === "slide-in") {
      // Calculate progress (0 to 1)
      const slideProgress = Math.min(elapsedTime / state.slideInDuration, 1);

      // Ease-out function for smoother deceleration
      const easeOutProgress = 1 - Math.pow(1 - slideProgress, 3);

      // Interpolate position
      const xPos = MathUtils.lerp(state.startX, state.targetX, easeOutProgress);

      // Apply position
      modelRef.current.position.x = xPos;
      modelRef.current.position.y = -0.2; // Keep at base height during slide
      modelRef.current.rotation.y = state.spinStartRotation;
      modelRef.current.rotation.x = state.baseTilt; // Consistent tilt

      // Transition to spin phase when complete
      if (slideProgress >= 1) {
        state.phase = "spin";
        state.startTime = t;
      }
    }
    // Phase 2: Do one spin
    else if (state.phase === "spin") {
      // Calculate progress (0 to 1)
      const spinProgress = Math.min(elapsedTime / state.spinDuration, 1);

      // Ease in-out function for smoother spin
      const easeInOutProgress =
        spinProgress < 0.5
          ? 2 * spinProgress * spinProgress
          : 1 - Math.pow(-2 * spinProgress + 2, 2) / 2;

      // Interpolate rotation
      const rotation = MathUtils.lerp(
        state.spinStartRotation,
        state.spinEndRotation,
        easeInOutProgress
      );

      // Apply rotation
      modelRef.current.position.x = state.targetX;
      modelRef.current.position.y = -0.2; // Keep at base height during spin
      modelRef.current.rotation.y = rotation;
      modelRef.current.rotation.x = state.baseTilt; // Consistent tilt

      // Store the actual rotation value at the end of spin
      if (spinProgress >= 0.99) {
        state.finalSpinRotation = modelRef.current.rotation.y;
      }

      // Transition to transition phase when complete
      if (spinProgress >= 1) {
        state.phase = "transition";
        state.startTime = t;
      }
    }
    // Phase 2.5: Transition smoothly to hover
    else if (state.phase === "transition") {
      // Calculate progress (0 to 1)
      const transProgress = Math.min(elapsedTime / state.transitionDuration, 1);

      // Ease in-out function for smoother transition
      const easeInOutProgress =
        transProgress < 0.5
          ? 2 * transProgress * transProgress
          : 1 - Math.pow(-2 * transProgress + 2, 2) / 2;

      // Calculate normalized rotation values to prevent large jumps
      const currentRotation = state.finalSpinRotation;
      const baseTargetRotation =
        state.hoverRotation +
        Math.PI * 2 * Math.floor(currentRotation / (Math.PI * 2));

      // Ensure we're taking the shortest path - calculate adjusted target rotation
      let adjustedTargetRotation = baseTargetRotation;
      const rotationDiff = baseTargetRotation - currentRotation;

      if (Math.abs(rotationDiff) > Math.PI) {
        if (rotationDiff > 0) {
          adjustedTargetRotation = baseTargetRotation - Math.PI * 2;
        } else {
          adjustedTargetRotation = baseTargetRotation + Math.PI * 2;
        }
      }

      // Interpolate rotation
      const rotation = MathUtils.lerp(
        currentRotation,
        adjustedTargetRotation,
        easeInOutProgress
      );

      // Start introducing vertical motion
      const startVertical = -0.2;
      const initialHoverY =
        Math.sin(0) * state.hoverAmplitude + Math.sin(0 * 1.5) * 0.05 - 0.2;
      const verticalPosition = MathUtils.lerp(
        startVertical,
        initialHoverY,
        easeInOutProgress
      );

      // Apply position and rotation
      modelRef.current.position.x = state.targetX;
      modelRef.current.position.y = verticalPosition;
      modelRef.current.rotation.y = rotation;
      modelRef.current.rotation.x = state.baseTilt; // Consistent tilt

      // Store the current vertical position for smooth transition
      state.verticalPosition = verticalPosition;

      // Transition to hover phase when complete
      if (transProgress >= 1) {
        state.phase = "hover";
        state.startTime = t;
      }
    }
    // Phase 3: Hover up and down
    else if (state.phase === "hover") {
      // Calculate hover motion
      const hoverTime = elapsedTime;

      // Primary vertical motion
      const primaryMotion =
        Math.sin(hoverTime * state.hoverFrequency) * state.hoverAmplitude;

      // Secondary smaller, faster oscillation for more organic feel
      const secondaryMotion = Math.sin(hoverTime * 1.5) * 0.05;

      // Combine motions and offset from base position
      const verticalPosition = primaryMotion + secondaryMotion - 0.2;

      // Apply position and rotation
      modelRef.current.position.x = state.targetX;
      modelRef.current.position.y = verticalPosition;

      // Keep the rotation stable during hover
      modelRef.current.rotation.y = state.hoverRotation;

      // Apply a subtle tilt variation based on vertical position, but centered around baseTilt
      modelRef.current.rotation.x =
        state.baseTilt - (verticalPosition + 0.2) * state.tiltVariation;

      // Animate spotlight to create subtle dynamic lighting
      if (spotLightRef.current) {
        // Subtle movement of the spotlight
        spotLightRef.current.position.x = Math.sin(hoverTime * 0.3) * 0.5 + 2;
        spotLightRef.current.position.z = Math.cos(hoverTime * 0.2) * 0.5 - 2;
      }
    }
  });

  useEffect(() => {
    if (scene) {
      // Store references to original textures and materials
      const originalTextures = new Map();
      const originalMaps = new Map();

      scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          const materials = Array.isArray(child.material)
            ? child.material
            : [child.material];

          materials.forEach((mat) => {
            if (!mat) return;

            // Store original textures before modifying
            if (mat.map) {
              originalTextures.set(mat.uuid, mat.map);
            }

            // For Apple logo - make it more visible
            else if (
              mat.name?.toLowerCase().includes("logo") ||
              mat.name?.toLowerCase().includes("apple")
            ) {
              // Make the logo slightly emissive to stand out
              mat.emissive = new Color(0xffffff);
              mat.emissiveIntensity = 0.2; // Reduced from 0.3
              mat.metalness = 0.7; // Reduced from 0.9
              mat.roughness = 0.2; // Increased from 0.1
              mat.envMapIntensity = 1.0; // Reduced from 1.5
            }
            // For metallic parts (like aluminum body)
            else if (
              mat.name?.toLowerCase().includes("metal") ||
              mat.name?.toLowerCase().includes("body")
            ) {
              mat.metalness = 0.4; // Significantly reduced from 0.6
              mat.roughness = 0.5; // Increased from 0.3
              mat.envMapIntensity = 0.4; // Significantly reduced from 0.7
            }
            // For plastic parts
            else if (
              mat.name?.toLowerCase().includes("plastic") ||
              mat.name?.toLowerCase().includes("key")
            ) {
              mat.metalness = 0.05; // Reduced from 0.1
              mat.roughness = 1.0; // Increased to maximum
              mat.envMapIntensity = 0.2; // Added low env map intensity
            }
            // For all other materials, set reasonable defaults
            else {
              mat.metalness = 0.1; // Reduced from 0.2
              mat.roughness = 0.8; // Increased from 0.6
              mat.envMapIntensity = 0.3; // Added low env map intensity
            }

            // Reduce any color brightness if present
            if (mat.color) {
              const color = mat.color.clone();
              // Convert to HSL to reduce lightness
              const hsl = { h: 0, s: 0, l: 0 };
              color.getHSL(hsl);
              // Reduce lightness by 20%
              hsl.l = Math.max(0, hsl.l * 0.8);
              color.setHSL(hsl.h, hsl.s, hsl.l);
              mat.color.copy(color);
            }

            mat.needsUpdate = true;
          });
        }
      });
    }
  }, [scene]);

  if (error || !scene) {
    return (
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          color={theme === "dark" ? "#7c3aed" : "#8b5cf6"}
        />
      </mesh>
    );
  }

  const scale = isMobile ? 0.55 : 0.6; // Smaller on mobile
  const isDarkTheme = theme === "dark";

  return (
    <>
      {/* Minimal ambient light */}
      <ambientLight
        intensity={0.1}
        color={isDarkTheme ? "#1a2530" : "#d0d8e0"}
      />

      {/* Main directional light - significantly reduced */}
      <directionalLight
        ref={directionalLightRef}
        position={[5, 5, 2]}
        intensity={0.25} // Significantly reduced from 0.5
        color={isDarkTheme ? "#8090b0" : "#fff5e0"}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />

      {/* Fill light from opposite side - minimal */}
      <directionalLight
        position={[-3, 2, -2]}
        intensity={0.1}
        color={isDarkTheme ? "#6080c0" : "#ffe0c0"}
      />

      {/* Spotlight for highlights - minimal */}
      <spotLight
        ref={spotLightRef}
        position={[2, 3, -2]}
        angle={0.5}
        penumbra={0.8}
        intensity={0.2} // Significantly reduced from 0.4
        color={isDarkTheme ? "#7090d0" : "#fff8f0"}
        castShadow
        shadow-mapSize={[512, 512]}
      />

      {/* Back light to highlight the Apple logo - reduced */}
      <spotLight
        position={[-2, 1, -3]}
        angle={0.6}
        penumbra={0.5}
        intensity={0.15} // Reduced from 0.3
        color={"#ffffff"}
        castShadow={false}
      />

      {/* Environment for reflections - minimal */}
      <Environment
        preset={isDarkTheme ? "night" : "apartment"}
        background={false}
        intensity={0.015}
      />

      {/* Soft contact shadows - darker */}
      <ContactShadows
        position={[0, -0.8, 0]}
        opacity={0.7} // Increased from 0.5 for stronger shadows
        scale={10}
        blur={2}
        far={4}
        color={isDarkTheme ? "#000000" : "#000000"}
      />

      <group ref={modelRef}>
        <primitive
          object={scene}
          scale={scale}
          position={[0, 0, 0]}
          rotation={[animationState.current.baseTilt, Math.PI * 0.7, 0]}
        />
      </group>
    </>
  );
}
