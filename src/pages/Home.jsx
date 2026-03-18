import { useOutletContext } from "react-router-dom";
import Hero from "../sections/Hero";
import { achievements, basicInfo, projects, services, stats } from "../data/portfolioData";

export default function Home() {
  const { lampOn } = useOutletContext();

  const highlightProjects = projects.slice(0, 2);

  return (
    <>
      <Hero lampOn={lampOn} />
      <section className={`panel home-overview ${lampOn ? "visible" : "hidden"}`}>
        <div className="home-header">
          <div>
            <h3>Welcome</h3>
            <p>
              Build-ready mobile products, smooth UI, and reliable backend integrations. Explore
              highlights below or open the menu for full sections.
            </p>
          </div>
          <div className="home-cta">
            <a className="btn primary" href={basicInfo.resume}>
              Download CV
            </a>
            <a className="btn ghost" href="/react_portfolio/projects">
              View Projects
            </a>
          </div>
        </div>
        <div className="home-stats">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`panel home-extras ${lampOn ? "visible" : "hidden"}`}>
        <div className="home-col">
          <h4>Top Services</h4>
          <div className="pill-list">
            {services.slice(0, 4).map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
          <div className="home-cta">
            <a className="btn ghost" href="/react_portfolio/services">
              See All Services
            </a>
          </div>
        </div>
        <div className="home-col">
          <h4>Recent Achievements</h4>
          <ul className="home-list">
            {achievements.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="home-cta">
            <a className="btn ghost" href="/react_portfolio/achievements">
              More Achievements
            </a>
          </div>
        </div>
      </section>

      <section className={`panel home-projects ${lampOn ? "visible" : "hidden"}`}>
        <div className="section-head">
          <h3>Featured Projects</h3>
          <a className="btn ghost" href="/react_portfolio/projects">
            View All
          </a>
        </div>
        <div className="projects-grid">
          {highlightProjects.map((project) => (
            <article key={project.name} className="project-card panel">
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
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live / APK
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
