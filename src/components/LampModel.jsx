import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import LightCone from "./LightCone";
import DustParticles from "./DustParticles";
import MouseLight from "./MouseLight";

function LampMesh({ lampOn, aimRef }) {
  const groupRef = useRef(null);
  const bulbColor = useMemo(() => (lampOn ? "#ffe0a0" : "#5a5a5a"), [lampOn]);

  useFrame(() => {
    if (!groupRef.current) return;
    const target = (aimRef.current * Math.PI) / 180;
    groupRef.current.rotation.y += (target - groupRef.current.rotation.y) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, -0.95, 0]} receiveShadow>
        <cylinderGeometry args={[0.95, 1.1, 0.24, 40]} />
        <meshStandardMaterial color="#d7dde8" metalness={0.6} roughness={0.35} />
      </mesh>
      <mesh position={[0, -0.2, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 1.25, 24]} />
        <meshStandardMaterial color="#c8d0de" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0.36, 0.63, 0]} rotation={[0, 0, 0.5]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 1.2, 24]} />
        <meshStandardMaterial color="#c9d1e0" metalness={0.75} roughness={0.26} />
      </mesh>
      <mesh position={[0.79, 1.13, 0]} castShadow>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshStandardMaterial color="#dbe3ee" metalness={0.75} roughness={0.22} />
      </mesh>
      <group position={[1.25, 1.33, 0]} rotation={[0, 0, -0.35]}>
        <mesh castShadow>
          <coneGeometry args={[0.62, 0.94, 44]} />
          <meshStandardMaterial color="#7d8f7b" roughness={0.65} metalness={0.06} />
        </mesh>
        <mesh position={[0, -0.39, 0]} castShadow>
          <sphereGeometry args={[0.14, 24, 24]} />
          <meshStandardMaterial
            emissive={bulbColor}
            emissiveIntensity={lampOn ? 1.8 : 0}
            color={bulbColor}
            roughness={0.2}
          />
        </mesh>
      </group>
      <LightCone lampOn={lampOn} />
      <MouseLight />
      <DustParticles lampOn={lampOn} />
    </group>
  );
}

export default function LampModel({ lampOn, aimRef }) {
  return (
    <div className="lamp-canvas">
      <Canvas camera={{ position: [0, 0.8, 4.7], fov: 42 }} shadows dpr={[1, 2]}>
        <ambientLight intensity={0.28} />
        <directionalLight position={[3, 4, 2]} intensity={0.35} />
        <LampMesh lampOn={lampOn} aimRef={aimRef} />
        <ContactShadows position={[0, -1.05, 0]} opacity={0.4} blur={1.8} scale={6} />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={1.6} minPolarAngle={1.2} />
      </Canvas>
    </div>
  );
}
