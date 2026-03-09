import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function MouseLight() {
  const lightRef = useRef(null);

  useFrame(({ mouse }) => {
    if (!lightRef.current) return;
    lightRef.current.position.x = mouse.x * 2.5 + 1.3;
    lightRef.current.position.y = mouse.y * 1.2 + 0.6;
  });

  return <pointLight ref={lightRef} intensity={0.8} distance={8} color="#ffe2a6" />;
}
