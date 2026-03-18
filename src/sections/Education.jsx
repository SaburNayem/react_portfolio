import { education } from "../data/portfolioData";

export default function Education({ lampOn }) {
  return (
    <section id="education" className={`panel education ${lampOn ? "visible" : "hidden"}`}>
      <h3>Education</h3>
      <div className="education-grid">
        {education.map((item) => (
          <div key={item.degree} className="education-card">
            <h4>{item.degree}</h4>
            <span>{item.university}</span>
            <span>{item.department}</span>
            <span>{item.year}</span>
            <div className="pill-list">
              {item.courses.map((course) => (
                <span key={course} className="pill">
                  {course}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
