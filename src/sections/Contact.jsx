import { contact } from "../data/portfolioData";

export default function Contact({ lampOn }) {
  return (
    <section id="contact" className={`contact panel ${lampOn ? "visible" : "hidden"}`}>
      <h3>Contact</h3>
      <div className="contact-grid">
        <div>
          <p>Let us build something great together.</p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.whatsapp}</span>
        </div>
        <div className="contact-links">
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
