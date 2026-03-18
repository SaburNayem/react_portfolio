import { services } from "../data/portfolioData";

export default function Services({ lampOn }) {
  return (
    <section id="services" className={`panel services ${lampOn ? "visible" : "hidden"}`}>
      <h3>Services</h3>
      <div className="services-grid">
        {services.map((item) => (
          <div key={item} className="service-card">
            <h4>{item}</h4>
            <p>End-to-end delivery with clean code and reliable timelines.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
