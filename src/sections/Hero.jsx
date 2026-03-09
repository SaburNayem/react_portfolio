export default function Hero({ lampOn }) {
  return (
    <section className={`hero panel ${lampOn ? "visible" : "hidden"}`}>
      <p className="tag">Developer Portfolio</p>
      <h1>Sabur Nayem</h1>
      <h2>Flutter Mobile App Developer</h2>
    </section>
  );
}
