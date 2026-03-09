import { useEffect, useRef } from "react";

const projects = [
  { title: "Food Delivery App", text: "Flutter app with maps, cart, and realtime order tracking." },
  { title: "E-Learning Platform", text: "Course streaming with Firebase auth and progress sync." },
  { title: "Clinic Booking", text: "Appointment system with REST API and push notifications." }
];

function App() {
  const stageRef = useRef(null);
  const aimRef = useRef(null);
  const eyeLeftRef = useRef(null);
  const eyeRightRef = useRef(null);
  const rafRef = useRef(0);
  const currentRef = useRef({ x: 0, y: 0, a: 0, boost: 0 });
  const targetRef = useRef({ x: 0, y: 0, a: 0, boost: 0 });
  const lastMoveRef = useRef(Date.now());
  const centerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const root = document.documentElement;
    const stage = stageRef.current;
    if (!stage) return undefined;

    const setCenter = () => {
      const rect = stage.getBoundingClientRect();
      centerRef.current = {
        x: rect.left + rect.width * 0.56,
        y: rect.top + rect.height * 0.36
      };
      targetRef.current.x = centerRef.current.x;
      targetRef.current.y = centerRef.current.y;
    };

    const updateTargetFromPoint = (x, y) => {
      const rect = stage.getBoundingClientRect();
      targetRef.current.x = x;
      targetRef.current.y = y;
      const lampPivotX = rect.left + 132;
      const lampPivotY = rect.top + 158;
      const angle = Math.atan2(y - lampPivotY, x - lampPivotX) * (180 / Math.PI);
      targetRef.current.a = Math.max(-28, Math.min(22, angle + 34));
    };

    const onMove = (event) => {
      lastMoveRef.current = Date.now();
      updateTargetFromPoint(event.clientX, event.clientY);
    };

    const onLeave = () => {
      targetRef.current.x = centerRef.current.x;
      targetRef.current.y = centerRef.current.y;
      targetRef.current.a = 4;
    };

    const tick = () => {
      const now = Date.now();
      if (now - lastMoveRef.current > 2400) {
        targetRef.current.x = centerRef.current.x;
        targetRef.current.y = centerRef.current.y;
        targetRef.current.a += (4 - targetRef.current.a) * 0.06;
      }

      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.12;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.12;
      currentRef.current.a += (targetRef.current.a - currentRef.current.a) * 0.12;
      currentRef.current.boost += (targetRef.current.boost - currentRef.current.boost) * 0.1;

      root.style.setProperty("--mouse-x", `${currentRef.current.x}px`);
      root.style.setProperty("--mouse-y", `${currentRef.current.y}px`);
      root.style.setProperty("--lamp-angle", `${currentRef.current.a.toFixed(2)}deg`);
      root.style.setProperty("--light-boost", `${currentRef.current.boost.toFixed(3)}`);

      const eyeOffset = Math.max(-1.8, Math.min(1.8, currentRef.current.a * 0.08));
      if (eyeLeftRef.current && eyeRightRef.current) {
        eyeLeftRef.current.style.transform = `translateX(${eyeOffset}px)`;
        eyeRightRef.current.style.transform = `translateX(${eyeOffset}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    setCenter();
    currentRef.current = { x: centerRef.current.x, y: centerRef.current.y, a: 4, boost: 0 };
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

  const strengthenLight = () => {
    targetRef.current.boost = 1;
  };

  const normalizeLight = () => {
    targetRef.current.boost = 0;
  };

  const tiltToNav = (event) => {
    const box = event.currentTarget.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    lastMoveRef.current = Date.now();
    targetRef.current.x = x;
    targetRef.current.y = y;
  };

  return (
    <main id="hero" className="page">
      <section ref={stageRef} className="stage">
        <div className="dark-mask" />
        <div className="beam-cone" />
        <div className="soft-glow" />
        <div className="desk-line" />

        <nav className="nav">
          <a href="#hero" onMouseEnter={tiltToNav}>
            Hero
          </a>
          <a href="#about" onMouseEnter={tiltToNav}>
            About
          </a>
          <a href="#skills" onMouseEnter={tiltToNav}>
            Skills
          </a>
          <a href="#projects" onMouseEnter={tiltToNav}>
            Projects
          </a>
          <a href="#contact" onMouseEnter={tiltToNav}>
            Contact
          </a>
        </nav>

        <aside className="lamp-wrap">
          <div className="lamp-shadow" />
          <div ref={aimRef} className="lamp">
            <span className="lamp-head">
              <span className="lamp-face">
                <span ref={eyeLeftRef} className="eye eye-left" />
                <span ref={eyeRightRef} className="eye eye-right" />
                <span className="smile" />
              </span>
            </span>
            <span className="lamp-neck" />
            <span className="lamp-arm arm-top" />
            <span className="lamp-joint joint-top" />
            <span className="lamp-arm arm-mid" />
            <span className="lamp-joint joint-mid" />
            <span className="lamp-pole" />
            <span className="lamp-base" />
            <span className="bulb" />
          </div>
        </aside>

        <section className="content">
          <header className="hero-block panel">
            <p className="label">Developer Portfolio</p>
            <h1>Sabur Nayem</h1>
            <h2>Flutter Mobile App Developer</h2>
          </header>

          <section id="about" className="panel">
            <h3>About</h3>
            <p>
              I build clean, fast, and scalable mobile apps with Flutter and modern backend stacks.
              I focus on smooth UX, API reliability, and production-ready architecture.
            </p>
          </section>

          <section id="skills" className="panel">
            <h3>Skills</h3>
            <div className="chips">
              <span>Flutter</span>
              <span>Dart</span>
              <span>Firebase</span>
              <span>REST API</span>
              <span>Node.js</span>
              <span>NestJS</span>
              <span>Python</span>
            </div>
          </section>

          <section id="projects" className="projects">
            {projects.map((project) => (
              <article
                key={project.title}
                className="project panel"
                onMouseEnter={strengthenLight}
                onMouseLeave={normalizeLight}
              >
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </section>

          <section id="contact" className="panel contact">
            <h3>Contact</h3>
            <a href="mailto:nayem@example.com">nayem@example.com</a>
            <a href="https://github.com/SaburNayem" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </section>
        </section>
      </section>
    </main>
  );
}

export default App;
