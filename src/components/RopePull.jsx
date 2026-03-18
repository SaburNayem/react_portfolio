import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RopePull({ toggleLamp, waveToken }) {
  const [isWaving, setIsWaving] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);

  useEffect(() => {
    if (!waveToken) return;
    setIsWaving(true);
    const timer = setTimeout(() => setIsWaving(false), 700);
    return () => clearTimeout(timer);
  }, [waveToken]);

  return (
    <motion.button
      type="button"
      className={`rope-wrap ${isPulling ? "pulling" : ""} ${isWaving ? "waving" : ""}`}
      style={{ "--pull-distance": `${pullDistance}px` }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 120 }}
      dragElastic={0.28}
      dragSnapToOrigin
      onDragStart={() => {
        setIsPulling(true);
        setPullDistance(0);
      }}
      onDrag={(_, info) => {
        setPullDistance(Math.max(0, Math.min(96, info.offset.y)));
      }}
      onDragEnd={() => {
        setIsPulling(false);
        setPullDistance(0);
        toggleLamp();
      }}
      aria-label="Pull rope to toggle lamp"
    >
      <span className="rope" />
      <span className="rope-tail" />
    </motion.button>
  );
}
