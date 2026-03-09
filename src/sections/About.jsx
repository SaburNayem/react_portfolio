export default function About({ lampOn }) {
  return (
    <section id="about" className={`panel ${lampOn ? "visible" : "hidden"}`}>
      <h3>About</h3>
      <p>
        I build high-performance Flutter apps with clean architecture and scalable backend APIs.
        My work focuses on practical UX and stable production delivery.
      </p>
    </section>
  );
}
