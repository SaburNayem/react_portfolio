import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";

export default function Experience({ lampOn }) {
  return (
    <section id="experience" className={`panel experience ${lampOn ? "visible" : "hidden"}`}>
      <h3>Experience</h3>
      <div className={`timeline ${lampOn ? "active" : ""}`}>
        {experience.map((item, index) => (
          <motion.div
            key={item.title}
            className="timeline-item"
            initial={false}
            animate={
              lampOn
                ? { opacity: 1, x: 0, filter: "blur(0px)" }
                : { opacity: 0.22, x: 18, filter: "blur(8px)" }
            }
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="timeline-head">
              <h4>{item.title}</h4>
              <span>{item.duration}</span>
            </div>
            <p className="timeline-company">{item.company}</p>
            <ul className="timeline-list">
              {item.responsibilities.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
            <div className="timeline-badges">
              {item.achievements.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
