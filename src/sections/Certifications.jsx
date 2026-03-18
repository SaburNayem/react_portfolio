import { certifications } from "../data/portfolioData";

export default function Certifications({ lampOn }) {
  return (
    <section id="certifications" className={`panel certifications ${lampOn ? "visible" : "hidden"}`}>
      <h3>Certifications</h3>
      <div className="cert-grid">
        {certifications.map((item) => (
          <div key={item.name} className="cert-card">
            <h4>{item.name}</h4>
            <span>{item.platform}</span>
            <span>{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
