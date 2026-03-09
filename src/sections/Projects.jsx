import { motion } from "framer-motion";

const projects = [
  { title: "ShopX Mobile", text: "Flutter commerce app with Firebase auth and secure checkout." },
  { title: "Doctor Finder", text: "Healthcare booking app with realtime doctor status and reminders." },
  { title: "Task Orbit", text: "Productivity platform with NestJS backend and modern dashboard UI." }
];

export default function Projects({ lampOn, boostLight = () => {}, normalizeLight = () => {} }) {
  return (
    <section id="projects" className="projects">
      {projects.map((project, i) => (
        <motion.article
          key={project.title}
          className={`project-card panel ${lampOn ? "visible" : "hidden"}`}
          initial={false}
          animate={{ opacity: lampOn ? 1 : 0.2, y: lampOn ? 0 : 12 }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          whileHover={{ scale: 1.03, y: -5 }}
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
