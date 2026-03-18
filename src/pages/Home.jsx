import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import LightOverlay from "../components/LightOverlay";
import BackgroundGrid from "../components/BackgroundGrid";
import Hero from "../sections/Hero";
import BasicInfo from "../sections/BasicInfo";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Certifications from "../sections/Certifications";
import Achievements from "../sections/Achievements";
import Services from "../sections/Services";
import Gallery from "../sections/Gallery";
import Testimonials from "../sections/Testimonials";
import Contributions from "../sections/Contributions";
import Contact from "../sections/Contact";
import useLampToggle from "../hooks/useLampToggle";
import { basicInfo } from "../data/portfolioData";

const LampModel = lazy(() => import("../components/LampModel"));

export default function Home() {
  const { lampOn, toggleLamp } = useLampToggle(false);
  const [waveToken, setWaveToken] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [layout, setLayout] = useState("desktop");

  const navLinks = useMemo(
    () => [
      { label: "Hero", href: "#hero" },
      { label: "Basic", href: "#basic" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Stack", href: "#stack" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Certs", href: "#certifications" },
      { label: "Achievements", href: "#achievements" },
      { label: "Services", href: "#services" },
      { label: "Gallery", href: "#gallery" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contribs", href: "#contributions" },
      { label: "Contact", href: "#contact" }
    ],
    []
  );

  const onToggleLamp = () => {
    toggleLamp();
    setWaveToken((prev) => prev + 1);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width <= 760) {
        setLayout("mobile");
      } else if (width <= 1024) {
        setLayout("tablet");
      } else {
        setLayout("desktop");
      }
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <main className={`home-page ${layout}`} data-layout={layout}>
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

        <header className="site-header">
          <div className="brand">
            <span className="brand-mark">SN</span>
            <div>
              <strong>{basicInfo.fullName}</strong>
              <span>{basicInfo.title}</span>
            </div>
          </div>
          <div className="header-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
            <a className="btn ghost" href={basicInfo.resume}>
              Download CV
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label="Open navigation"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="burger" />
            </button>
          </div>
        </header>

        <div className={`drawer ${isMenuOpen ? "open" : ""}`}>
          <div className="drawer-backdrop" onClick={() => setIsMenuOpen(false)} />
          <div className="drawer-panel">
            <div className="drawer-header">
              <strong>Navigate</strong>
              <button type="button" onClick={() => setIsMenuOpen(false)}>
                Close
              </button>
            </div>
            <nav>
              {navLinks.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="drawer-actions">
              <a className="btn primary" href={basicInfo.resume}>
                Download CV
              </a>
              <a className="btn ghost" href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="lamp-zone">
          <Suspense fallback={null}>
            <LampModel lampOn={lampOn} toggleLamp={onToggleLamp} waveToken={waveToken} />
          </Suspense>
        </div>

        <section className={`portfolio-content ${lampOn ? "active" : ""}`}>
          <Hero lampOn={lampOn} />
          <BasicInfo lampOn={lampOn} />
          <About lampOn={lampOn} />
          <Skills lampOn={lampOn} />
          <Projects lampOn={lampOn} />
          <Experience lampOn={lampOn} />
          <Education lampOn={lampOn} />
          <Certifications lampOn={lampOn} />
          <Achievements lampOn={lampOn} />
          <Services lampOn={lampOn} />
          <Gallery lampOn={lampOn} />
          <Testimonials lampOn={lampOn} />
          <Contributions lampOn={lampOn} />
          <Contact lampOn={lampOn} />
        </section>
      </section>
    </main>
  );
}
