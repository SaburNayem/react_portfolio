import { testimonials } from "../data/portfolioData";

const buildStars = (count) => "?".repeat(count).padEnd(5, "?");

export default function Testimonials({ lampOn }) {
  return (
    <section id="testimonials" className={`panel testimonials ${lampOn ? "visible" : "hidden"}`}>
      <h3>Testimonials</h3>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div key={item.name} className="testimonial-card">
            <p>{item.feedback}</p>
            <div className="testimonial-footer">
              <strong>{item.name}</strong>
              <span>{buildStars(item.rating)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
