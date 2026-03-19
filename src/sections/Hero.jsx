import { motion } from "framer-motion";
import { useState } from "react";
import { basicInfo, stats } from "../data/portfolioData";

const heroItemVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export default function Hero({ lampOn }) {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className={`hero panel ${lampOn ? "visible" : "hidden"}`}>
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          initial={false}
          animate={lampOn ? "visible" : "hidden"}
        >
          <motion.p className="tag" custom={0.05} variants={heroItemVariants}>
            Developer Portfolio
          </motion.p>
          <motion.h1 custom={0.12} variants={heroItemVariants}>
            {basicInfo.fullName}
          </motion.h1>
          <motion.h2 custom={0.2} variants={heroItemVariants} className="hero-title">
            {basicInfo.title}
          </motion.h2>
          <motion.p className="hero-bio" custom={0.3} variants={heroItemVariants}>
            {basicInfo.shortBio}
          </motion.p>
          <div className="hero-cta">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn ghost" href={basicInfo.resume}>
              Download CV
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((item) => (
              <div key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="hero-profile"
          initial={false}
          animate={
            lampOn
              ? {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)"
                }
              : {
                  opacity: 0.3,
                  x: 20,
                  scale: 0.97,
                  filter: "blur(10px)"
                }
          }
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {!imageError ? (
            <img
              className="hero-portrait"
              src={basicInfo.profilePhoto}
              alt={basicInfo.fullName}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="avatar-fallback">
              <span>{basicInfo.fullName.split(" ").map((part) => part[0]).join("")}</span>
              <small>Add your photo</small>
            </div>
          )}
          <div className="hero-contact">
            <span>{basicInfo.location}</span>
            <span>{basicInfo.email}</span>
            <span>{basicInfo.phone}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
