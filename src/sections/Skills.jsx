import { FaLaravel, FaReact, FaGithub } from "react-icons/fa";
import { SiDart, SiFirebase, SiNestjs, SiFlutter, SiJavascript, SiPython } from "react-icons/si";
import { skills } from "../data/portfolioData";

const stackIcons = [
  { icon: SiFlutter, label: "Flutter" },
  { icon: SiDart, label: "Dart" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiNestjs, label: "NestJS" },
  { icon: FaLaravel, label: "Laravel" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: FaReact, label: "React" },
  { icon: SiPython, label: "Python" },
  { icon: FaGithub, label: "GitHub" }
];

export default function Skills({ lampOn }) {
  return (
    <section id="skills" className={`panel skills ${lampOn ? "visible" : "hidden"}`}>
      <h3>Skills</h3>
      <div className="skills-grid">
        <div className="skills-card">
          <h4>Programming Languages</h4>
          <div className="pill-list">
            {skills.languages.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="skills-card">
          <h4>Frameworks & Technologies</h4>
          <div className="pill-list">
            {skills.frameworks.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="skills-card">
          <h4>Tools</h4>
          <div className="pill-list">
            {skills.tools.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div id="stack" className="stack-icons">
        <h4>Tech Stack</h4>
        <div className="stack-grid">
          {stackIcons.map((item, i) => (
            <div key={item.label} className="stack-card" style={{ "--delay": `${i * 0.12}s` }}>
              <item.icon />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
