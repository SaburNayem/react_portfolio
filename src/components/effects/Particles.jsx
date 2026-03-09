import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function DustParticles({ lampOn }) {
  const init = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      className={`dust ${lampOn ? "on" : ""}`}
      init={init}
      options={{
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: lampOn ? 36 : 0 },
          color: { value: ["#ffe8b0", "#fff6cf"] },
          opacity: { value: { min: 0.05, max: 0.35 } },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: { min: 0.2, max: 0.8 },
            direction: "none",
            random: true,
            outModes: { default: "out" }
          }
        },
        interactivity: { events: { onHover: { enable: false } } },
        background: { color: "transparent" }
      }}
    />
  );
}
