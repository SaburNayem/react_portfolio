export default function LightCone({ lampOn }) {
  return (
    <spotLight
      position={[1.2, 1.1, 0]}
      angle={0.36}
      penumbra={0.85}
      intensity={lampOn ? 2.6 : 0.22}
      distance={9}
      color="#ffd48b"
      castShadow
    />
  );
}
