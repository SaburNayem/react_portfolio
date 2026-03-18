import { achievements } from "../data/portfolioData";

export default function Achievements({ lampOn }) {
  return (
    <section id="achievements" className={`panel achievements ${lampOn ? "visible" : "hidden"}`}>
      <h3>Achievements</h3>
      <div className="achievement-grid">
        {achievements.map((item) => (
          <div key={item} className="achievement-card">
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
