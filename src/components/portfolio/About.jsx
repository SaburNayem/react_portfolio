export default function About({ lampOn }) {
  return (
    <section id="about" className={`about panel ${lampOn ? "visible" : "hidden"}`}>
      <h3>About</h3>
      <p>
        I design and build high-performance Flutter apps with robust APIs and clean architecture.
        My focus is smooth mobile UX, scalable backend services, and maintainable code.
      </p>
    </section>
  );
}
