import { lazy, Suspense, useRef } from "react";
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
import { animateRopePull } from "../utils/animations";

const LampModel = lazy(() => import("../components/LampModel"));

export default function Home() {
  const { lampOn, toggleLamp } = useLampToggle(false);
  const ropeRef = useRef(null);
  const lampAimRef = useRef(0);
  lampAimRef.current = 0;

  const onToggleLamp = () => {
    toggleLamp();
    animateRopePull(ropeRef.current);
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
            <LampModel lampOn={lampOn} aimRef={lampAimRef} />
          </Suspense>
          <div ref={ropeRef}>
            <RopePull toggleLamp={onToggleLamp} />
          </div>
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
