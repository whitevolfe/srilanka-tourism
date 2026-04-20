import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Island() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  // Low-poly stylised island (teardrop shape evoking Sri Lanka)
  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {/* Ocean disc */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <cylinderGeometry args={[2.6, 2.8, 0.3, 6]} />
        <meshStandardMaterial color="#1ea3a3" metalness={0.3} roughness={0.4} />
      </mesh>
      {/* Beach base */}
      <mesh position={[0, -0.25, 0]} scale={[1, 0.4, 1.35]}>
        <coneGeometry args={[1.3, 0.5, 5]} />
        <meshStandardMaterial color="#f3d9a4" flatShading roughness={0.9} />
      </mesh>
      {/* Land mass */}
      <mesh position={[0, 0.05, 0]} scale={[0.95, 0.55, 1.25]}>
        <coneGeometry args={[1.1, 0.7, 5]} />
        <meshStandardMaterial color="#3fa66a" flatShading roughness={0.85} />
      </mesh>
      {/* Mountain peaks */}
      <mesh position={[0.15, 0.45, -0.1]}>
        <coneGeometry args={[0.45, 0.9, 5]} />
        <meshStandardMaterial color="#2d7a52" flatShading />
      </mesh>
      <mesh position={[-0.25, 0.35, 0.2]}>
        <coneGeometry args={[0.35, 0.7, 5]} />
        <meshStandardMaterial color="#356b48" flatShading />
      </mesh>
      <mesh position={[0.05, 0.55, 0.25]}>
        <coneGeometry args={[0.28, 0.5, 5]} />
        <meshStandardMaterial color="#e88c4a" flatShading />
      </mesh>
      {/* Tiny palm dots */}
      {[...Array(8)].map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * 0.95, 0.05, Math.sin(a) * 1.15]}>
            <sphereGeometry args={[0.06, 6, 6]} />
            <meshStandardMaterial color="#e88c4a" />
          </mesh>
        );
      })}
    </group>
  );
}

export function IslandScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [3.5, 2.2, 3.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 6, 3]} intensity={1.4} color="#ffd9a8" />
        <directionalLight position={[-4, 2, -3]} intensity={0.6} color="#7ee6e6" />
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
          <Island />
        </Float>
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
