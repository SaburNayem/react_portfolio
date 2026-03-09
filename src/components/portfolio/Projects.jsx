import { motion } from "framer-motion";

const projects = [
  { title: "ShopX Mobile", text: "Flutter commerce app with Firebase auth and payment checkout." },
  { title: "Doctor Finder", text: "Cross-platform healthcare booking app with realtime status." },
  { title: "Task Orbit", text: "Productivity suite built with NestJS backend and clean UI flows." }
];

export default function Projects({ lampOn, boostLight, normalizeLight }) {
  return (
    <section id="projects" className={`projects ${lampOn ? "visible" : "hidden"}`}>
      {projects.map((project, i) => (
        <motion.article
          key={project.title}
          className="project-card panel"
          initial={false}
          animate={{ opacity: lampOn ? 1 : 0.2, y: lampOn ? 0 : 16 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          whileHover={{ scale: 1.04, y: -6 }}
          onMouseEnter={boostLight}
          onMouseLeave={normalizeLight}
        >
          <h3>{project.title}</h3>
          <p>{project.text}</p>
        </motion.article>
      ))}
    </section>
  );
}
