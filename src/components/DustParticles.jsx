import { Sparkles } from "@react-three/drei";

export default function DustParticles({ lampOn }) {
  if (!lampOn) return null;
  return <Sparkles count={140} size={2.6} speed={0.28} scale={[4.8, 3, 3]} color="#fff2cd" />;
}
