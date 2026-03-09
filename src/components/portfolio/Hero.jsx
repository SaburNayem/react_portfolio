import { motion } from "framer-motion";

export default function Hero({ lampOn }) {
  return (
    <motion.section
      id="hero-section"
      className={`hero panel ${lampOn ? "visible" : "hidden"}`}
      initial={false}
      animate={{ opacity: lampOn ? 1 : 0.2, y: lampOn ? 0 : 10 }}
      transition={{ duration: 0.45 }}
    >
      <p className="tag">Developer Portfolio</p>
      <h1>Sabur Nayem</h1>
      <h2>Flutter Mobile App Developer</h2>
    </motion.section>
  );
}
