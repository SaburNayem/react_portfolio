import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RopePull({ toggleLamp, waveToken }) {
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    if (!waveToken) return;
    setIsWaving(true);
    const timer = setTimeout(() => setIsWaving(false), 700);
    return () => clearTimeout(timer);
  }, [waveToken]);

  return (
    <motion.button
      type="button"
      className={`rope-wrap ${isWaving ? "waving" : ""}`}
      drag="y"
      dragConstraints={{ top: 0, bottom: 120 }}
      dragElastic={0.28}
      dragSnapToOrigin
      onDragEnd={toggleLamp}
      whileTap={{ scaleY: 1.2 }}
      aria-label="Pull rope to toggle lamp"
    >
      <span className="rope" />
      <span className="rope-knob" />
    </motion.button>
  );
}
