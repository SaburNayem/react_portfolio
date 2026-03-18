import { experience } from "../data/portfolioData";

export default function Experience({ lampOn }) {
  return (
    <section id="experience" className={`panel experience ${lampOn ? "visible" : "hidden"}`}>
      <h3>Experience</h3>
      <div className="timeline">
        {experience.map((item) => (
          <div key={item.title} className="timeline-item">
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
          </div>
        ))}
      </div>
    </section>
  );
}
