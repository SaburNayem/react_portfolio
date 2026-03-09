import { motion } from "framer-motion";

export default function RopePull({ toggleLamp }) {
  return (
    <motion.button
      type="button"
      className="rope-wrap"
      drag="y"
      dragConstraints={{ top: 0, bottom: 120 }}
      dragElastic={0.28}
      onDragEnd={toggleLamp}
      whileTap={{ scaleY: 1.2 }}
      aria-label="Pull rope to toggle lamp"
    >
      <span className="rope" />
      <span className="rope-knob" />
    </motion.button>
  );
}
