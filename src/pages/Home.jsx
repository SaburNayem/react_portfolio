import { lazy, Suspense, useEffect, useRef } from "react";
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
  const stageRef = useRef(null);
  const ropeRef = useRef(null);
  const lampAimRef = useRef(0);
  const cursorRef = useRef({ x: 0, y: 0, aim: 0, boost: 0 });
  const targetRef = useRef({ x: 0, y: 0, aim: 0, boost: 0 });
  const centerRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const lastMoveRef = useRef(Date.now());

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const setCenter = () => {
      const rect = stage.getBoundingClientRect();
      centerRef.current = { x: rect.width * 0.62, y: rect.height * 0.3 };
      targetRef.current.x = centerRef.current.x;
      targetRef.current.y = centerRef.current.y;
    };

    const updateTarget = (clientX, clientY) => {
      const rect = stage.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      targetRef.current.x = Math.max(0, Math.min(rect.width, x));
      targetRef.current.y = Math.max(0, Math.min(rect.height, y));
      const lampX = 160;
      const lampY = 180;
      const angle = Math.atan2(y - lampY, x - lampX) * (180 / Math.PI);
      targetRef.current.aim = Math.max(-28, Math.min(22, angle + 30));
    };

    const onMove = (event) => {
      lastMoveRef.current = Date.now();
      updateTarget(event.clientX, event.clientY);
    };

    const onLeave = () => {
      targetRef.current.x = centerRef.current.x;
      targetRef.current.y = centerRef.current.y;
      targetRef.current.aim = 0;
    };

    const tick = () => {
      if (Date.now() - lastMoveRef.current > 2300) {
        targetRef.current.x += (centerRef.current.x - targetRef.current.x) * 0.05;
        targetRef.current.y += (centerRef.current.y - targetRef.current.y) * 0.05;
        targetRef.current.aim += (0 - targetRef.current.aim) * 0.05;
      }

      cursorRef.current.x += (targetRef.current.x - cursorRef.current.x) * 0.12;
      cursorRef.current.y += (targetRef.current.y - cursorRef.current.y) * 0.12;
      cursorRef.current.aim += (targetRef.current.aim - cursorRef.current.aim) * 0.1;
      cursorRef.current.boost += (targetRef.current.boost - cursorRef.current.boost) * 0.08;

      stage.style.setProperty("--mouse-x", `${cursorRef.current.x}px`);
      stage.style.setProperty("--mouse-y", `${cursorRef.current.y}px`);
      stage.style.setProperty("--lamp-angle", `${cursorRef.current.aim.toFixed(2)}deg`);
      stage.style.setProperty("--light-boost", cursorRef.current.boost.toFixed(3));
      lampAimRef.current = cursorRef.current.aim;

      rafRef.current = requestAnimationFrame(tick);
    };

    setCenter();
    cursorRef.current = { x: centerRef.current.x, y: centerRef.current.y, aim: 0, boost: 0 };
    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", setCenter);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      stage.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", setCenter);
    };
  }, []);

  const onToggleLamp = () => {
    toggleLamp();
    animateRopePull(ropeRef.current);
  };

  const boostLight = () => {
    targetRef.current.boost = 1;
  };

  const normalizeLight = () => {
    targetRef.current.boost = 0;
  };

  const tiltToLink = (event) => {
    const rect = stageRef.current?.getBoundingClientRect();
    const link = event.currentTarget.getBoundingClientRect();
    if (!rect) return;
    targetRef.current.x = link.left - rect.left + link.width / 2;
    targetRef.current.y = link.top - rect.top + link.height / 2;
    lastMoveRef.current = Date.now();
  };

  return (
    <main id="hero" className="home-page">
      <BackgroundGrid />
      <section ref={stageRef} className={`room ${lampOn ? "lamp-on" : "lamp-off"}`}>
        <LightOverlay lampOn={lampOn} />

        <div className="reveal-mask" />
        <div className="beam-cut" />
        <div className="desk">
          <div className="laptop" />
          <div className="mug" />
          <div className="plant" />
        </div>

        <nav className="top-nav">
          <a href="#hero" onMouseEnter={tiltToLink}>
            Hero
          </a>
          <a href="#about" onMouseEnter={tiltToLink}>
            About
          </a>
          <a href="#skills" onMouseEnter={tiltToLink}>
            Skills
          </a>
          <a href="#projects" onMouseEnter={tiltToLink}>
            Projects
          </a>
          <a href="#contact" onMouseEnter={tiltToLink}>
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
          <Projects lampOn={lampOn} boostLight={boostLight} normalizeLight={normalizeLight} />
          <Experience lampOn={lampOn} />
          <Contact lampOn={lampOn} />
        </section>
      </section>
    </main>
  );
}
