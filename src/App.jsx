import { useMemo, useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);
  const [aim, setAim] = useState(6);

  const stageStyle = useMemo(
    () => ({
      "--aim": `${aim}deg`,
      "--beam": isOn ? 1 : 0,
      "--ambient": isOn ? 1 : 0
    }),
    [aim, isOn]
  );

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    const nextAim = -16 + ratio * 32;
    setAim(Math.max(-14, Math.min(18, nextAim)));
  };

  return (
    <main id="hero" className="page">
      <h1 className="title">Nayem Portfolio Lamp</h1>

      <section className={`stage ${isOn ? "on" : "off"}`} style={stageStyle} onMouseMove={onMouseMove}>
        <div className="desk" />
        <div className="beam-core" />
        <div className="beam-soft" />

        <div className="stage-grid">
          <div className="lamp-zone">
            <div className="lamp-shadow" />
            <button className="lamp" onClick={() => setIsOn((v) => !v)} aria-label="Toggle table lamp">
              <span className="lamp-head" />
              <span className="joint top" />
              <span className="arm upper" />
              <span className="joint mid" />
              <span className="arm lower" />
              <span className="joint base-joint" />
              <span className="pole" />
              <span className="base" />
              <span className="bulb" />
            </button>
            <p className="hint">Click lamp to turn {isOn ? "OFF" : "ON"}</p>
          </div>

          <section className={`portfolio ${isOn ? "show" : "hide"}`}>
            <header className="hero-card card">
              <p className="eyebrow">Full Stack Developer</p>
              <h2>Sabur Nayem</h2>
              <p>Building fast, practical, and user-friendly web products.</p>
            </header>

            <div className="cards">
              <article className="card">
                <h3>Skills</h3>
                <p>React, Next.js, Laravel, Node.js, TypeScript, PostgreSQL, Docker</p>
              </article>
              <article className="card">
                <h3>Projects</h3>
                <p>3D Portfolio Engine, Commerce Dashboard, Service Booking App</p>
              </article>
              <article className="card">
                <h3>Contact</h3>
                <p>Email: nayem@example.com</p>
                <p>Location: Dhaka, Bangladesh</p>
              </article>
            </div>

            <div className="actions card">
              <a href="https://github.com/SaburNayem/react_portfolio" target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
              <a href="https://saburnayem.github.io/react_portfolio/#hero" target="_blank" rel="noreferrer">
                Live Portfolio
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
