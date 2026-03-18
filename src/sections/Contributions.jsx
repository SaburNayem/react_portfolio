const buildContributionMap = () => {
  const weeks = 20;
  const days = 7;
  return Array.from({ length: weeks * days }, (_, index) => {
    const intensity = (index * 37) % 5;
    return intensity;
  });
};

const contributionMap = buildContributionMap();

export default function Contributions({ lampOn }) {
  return (
    <section id="contributions" className={`panel contributions ${lampOn ? "visible" : "hidden"}`}>
      <h3>GitHub Contributions</h3>
      <p>Consistency snapshot inspired by GitHub activity.</p>
      <div className="contrib-grid">
        {contributionMap.map((level, index) => (
          <span key={`${level}-${index}`} className={`contrib-cell level-${level}`} />
        ))}
      </div>
    </section>
  );
}
