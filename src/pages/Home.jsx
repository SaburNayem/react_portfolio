import { lazy, Suspense, useState } from "react";
import RopePull from "../components/RopePull";
import LightOverlay from "../components/LightOverlay";
import BackgroundGrid from "../components/BackgroundGrid";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import useLampToggle from "../hooks/useLampToggle";

const LampModel = lazy(() => import("../components/LampModel"));

export default function Home() {
  const { lampOn, toggleLamp } = useLampToggle(false);
  const [waveToken, setWaveToken] = useState(0);

  const onToggleLamp = () => {
    toggleLamp();
    setWaveToken((prev) => prev + 1);
  };

  return (
    <main id="hero" className="home-page">
      <BackgroundGrid />
      <section className={`room ${lampOn ? "lamp-on" : "lamp-off"}`}>
        <LightOverlay lampOn={lampOn} />

        <div className="reveal-mask" />
        <div className="beam-cut" />
        <div className="desk">
          <div className="laptop" />
          <div className="mug" />
          <div className="plant" />
        </div>

        <nav className="top-nav">
          <a href="#hero">
            Hero
          </a>
          <a href="#about">
            About
          </a>
          <a href="#skills">
            Skills
          </a>
          <a href="#projects">
            Projects
          </a>
          <a href="#contact">
            Contact
          </a>
        </nav>

        <div className="lamp-zone">
          <Suspense fallback={null}>
            <LampModel lampOn={lampOn} />
          </Suspense>
          <RopePull toggleLamp={onToggleLamp} waveToken={waveToken} />
        </div>

        <section className={`portfolio-content ${lampOn ? "active" : ""}`}>
          <Hero lampOn={lampOn} />
          <About lampOn={lampOn} />
          <Skills lampOn={lampOn} />
          <Projects lampOn={lampOn} />
          <Experience lampOn={lampOn} />
          <Contact lampOn={lampOn} />
        </section>
      </section>
    </main>
  );
}
