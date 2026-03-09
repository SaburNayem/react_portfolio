export default function Experience({ lampOn }) {
  return (
    <section className={`panel ${lampOn ? "visible" : "hidden"}`}>
      <h3>Experience</h3>
      <p>Freelance and product work across Flutter apps, backend APIs, and dashboard systems.</p>
    </section>
  );
}
