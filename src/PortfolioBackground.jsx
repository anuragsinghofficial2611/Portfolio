
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function Ring({ position, color, scale }) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;

    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <Float speed={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.08, 32, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          metalness={1}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

function FloatingParticles() {
  const particlesRef = useRef();

  const count = 2000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 40;
  }

  useFrame((state) => {
    particlesRef.current.rotation.y =
      state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        color="#00ffff"
        transparent
        opacity={0.8}
      />
    </points>
  );
}

function Scene() {
  useFrame((state) => {
    state.camera.position.x =
      Math.sin(state.clock.elapsedTime * 0.1) * 2;

    state.camera.position.y =
      Math.cos(state.clock.elapsedTime * 0.1) * 1;

    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={["#000000"]} />

      <ambientLight intensity={0.5} />

      <pointLight
        position={[5, 5, 5]}
        intensity={10}
        color="#00ffff"
      />

      <pointLight
        position={[-5, -5, -5]}
        intensity={8}
        color="#ff00ff"
      />

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <FloatingParticles />

      <Ring
        position={[-3, 0, -2]}
        color="#00ffff"
        scale={1.5}
      />

      <Ring
        position={[3, 1, -4]}
        color="#ff00ff"
        scale={1.2}
      />

      <Ring
        position={[0, -2, -3]}
        color="#7c3aed"
        scale={2}
      />
    </>
  );
}

export default function ThreeDBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}