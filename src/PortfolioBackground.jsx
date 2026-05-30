// PortfolioBackground.jsx

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Sphere,
  Torus,
  Icosahedron,
  MeshDistortMaterial,
} from "@react-three/drei";

/* =========================
   CSS
========================= */

const CSS = `
@keyframes orbFloat1 {
  0%,100% { transform: translate(0,0) scale(1); }
  50% { transform: translate(60px,-40px) scale(1.1); }
}

@keyframes orbFloat2 {
  0%,100% { transform: translate(0,0) scale(1); }
  50% { transform: translate(-50px,40px) scale(1.05); }
}

.pb-root {
  position: fixed;
  inset: 0;
  overflow: hidden;
  background: #050810;
  z-index: -1;
}

.pb-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}

.pb-orb-1 {
  width: 500px;
  height: 500px;
  top: -10%;
  left: -10%;
  background: rgba(112,80,255,0.25);
  animation: orbFloat1 12s ease-in-out infinite;
}

.pb-orb-2 {
  width: 400px;
  height: 400px;
  bottom: -10%;
  right: -10%;
  background: rgba(0,229,255,0.18);
  animation: orbFloat2 14s ease-in-out infinite;
}

.pb-grid {
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(rgba(112,80,255,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(112,80,255,0.08) 1px, transparent 1px);

  background-size: 60px 60px;
}

.pb-canvas {
  position: absolute;
  inset: 0;
}
`;

function injectCSS() {
  if (document.getElementById("portfolio-bg-css")) return;

  const style = document.createElement("style");
  style.id = "portfolio-bg-css";
  style.innerHTML = CSS;

  document.head.appendChild(style);
}

/* =========================
   WebGL Detection
========================= */

function useWebGLSupport() {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");

      const gl =
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

      setSupported(!!gl);
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}

/* =========================
   3D Scene
========================= */

function Scene3D() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    groupRef.current.rotation.y = t * 0.15;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.15;

    groupRef.current.position.x = state.mouse.x * 0.5;
    groupRef.current.position.y = state.mouse.y * 0.5;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        color="#7050ff"
      />

      <directionalLight
        position={[-5, -5, -5]}
        intensity={1}
        color="#00e5ff"
      />

      <Sphere args={[1.2, 64, 64]} position={[0, 0, -2]}>
        <MeshDistortMaterial
          color="#111827"
          emissive="#7050ff"
          emissiveIntensity={0.5}
          distort={0.35}
          speed={2}
        />
      </Sphere>

      <Torus
        args={[2, 0.04, 16, 100]}
        position={[0, 0, -3]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="#00e5ff"
          wireframe
          transparent
          opacity={0.4}
        />
      </Torus>

      <Icosahedron args={[0.6, 0]} position={[-2, 1, -2]}>
        <meshStandardMaterial
          color="#c040ff"
          wireframe
        />
      </Icosahedron>

      <Icosahedron args={[0.8, 0]} position={[2, -1, -2]}>
        <meshStandardMaterial
          color="#7050ff"
          wireframe
        />
      </Icosahedron>
    </group>
  );
}

/* =========================
   CSS Fallback
========================= */

function CSSFallback() {
  return (
    <>
      <div className="pb-orb pb-orb-1" />
      <div className="pb-orb pb-orb-2" />
      <div className="pb-grid" />
    </>
  );
}

/* =========================
   Main Component
========================= */

export default function PortfolioBackground() {
  const webGL = useWebGLSupport();

  useEffect(() => {
    injectCSS();
  }, []);

  return (
    <div className="pb-root">
      <CSSFallback />

      {webGL && (
        <div className="pb-canvas">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <Scene3D />
          </Canvas>
        </div>
      )}
    </div>
  );
}