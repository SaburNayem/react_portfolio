import { FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiDart, SiFirebase, SiNestjs, SiFlutter } from "react-icons/si";

const items = [
  { icon: SiFlutter, label: "Flutter" },
  { icon: SiDart, label: "Dart" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: FaDatabase, label: "REST API" },
  { icon: FaNodeJs, label: "Node.js" },
  { icon: SiNestjs, label: "NestJS" },
  { icon: FaPython, label: "Python" }
];

export default function Skills({ lampOn }) {
  return (
    <section id="skills" className={`skills panel ${lampOn ? "visible" : "hidden"}`}>
      <h3>Skills</h3>
      <div className="skill-grid">
        {items.map((item, index) => (
          <div key={item.label} className="skill-chip" style={{ "--delay": `${index * 0.18}s` }}>
            <item.icon />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
