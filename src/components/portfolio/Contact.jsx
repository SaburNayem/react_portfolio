export default function Contact({ lampOn }) {
  return (
    <section id="contact" className={`contact panel ${lampOn ? "visible" : "hidden"}`}>
      <h3>Contact</h3>
      <a href="mailto:nayem@email.com">nayem@email.com</a>
      <a href="https://github.com/SaburNayem" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </section>
  );
}
