import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";

export default function Projects({ lampOn, boostLight = () => {}, normalizeLight = () => {} }) {
  return (
    <section id="projects" className="projects">
      <div className="section-head">
        <h3>Projects</h3>
        <p>Selected work with role, features, and live demos.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            className={`project-card panel ${lampOn ? "visible" : "hidden"}`}
            initial={false}
            animate={{ opacity: lampOn ? 1 : 0.2, y: lampOn ? 0 : 12 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ scale: 1.02, y: -4 }}
            onMouseEnter={boostLight}
            onMouseLeave={normalizeLight}
          >
            <div className="project-header">
              <h4>{project.name}</h4>
              <span className="project-role">{project.role}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <ul className="project-features">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="project-shots">
              {project.screenshots.map((shot) => (
                <div key={shot} className="shot-card">
                  <span>{shot}</span>
                </div>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live / APK
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
