"use client";

import { useEffect, useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";
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

  // Animation state
  const animationState = useRef({
    phase: "slide-in", // "slide-in", "spin", "transition", "hover"
    startTime: 0,
    slideInDuration: 4, // seconds
    spinDuration: 1.2, // seconds
    transitionDuration: 0.8, // seconds for smooth transition
    startX: 8, // start position off-screen to the right
    targetX: 1.5, // final x position (moved to the right)
    // Adjusted rotation values to face more toward the front
    spinStartRotation: Math.PI * 0.9,
    spinEndRotation: Math.PI * 0.9 + Math.PI * 2, // full 360 degree spin + starting rotation
    hoverAmplitude: 0.1,
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

      // Ease in-out function for smoother transition - FIXED: using transProgress instead of spinProgress
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
    }
  });

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          // Brighten materials
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => {
                if (mat.color) mat.color.multiplyScalar(1.5);

                // Increase emissive for screen parts if needed
                if (mat.name && mat.name.toLowerCase().includes("screen")) {
                  mat.emissive = new Color(0xffffff);
                  mat.emissiveIntensity = 0.8; // Increased intensity for better visibility
                }
              });
            } else if (child.material.color) {
              child.material.color.multiplyScalar(1.5);

              // Increase emissive for screen parts if needed
              if (
                child.material.name &&
                child.material.name.toLowerCase().includes("screen")
              ) {
                child.material.emissive = new Color(0xffffff);
                child.material.emissiveIntensity = 0.8; // Increased intensity for better visibility
              }
            }
          }
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

  const scale = isMobile ? 0.4 : 0.6;

  return (
    <group ref={modelRef}>
      {/* Adjusted initial rotation to match the baseTilt value */}
      <primitive
        object={scene}
        scale={scale}
        position={[0, 0, 0]}
        rotation={[animationState.current.baseTilt, Math.PI * 0.7, 0]}
      />
    </group>
  );
}
