import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import LightOverlay from "../components/LightOverlay";
import BackgroundGrid from "../components/BackgroundGrid";
import useLampToggle from "../hooks/useLampToggle";
import { basicInfo } from "../data/portfolioData";

const LampModel = lazy(() => import("../components/LampModel"));

export default function SiteLayout() {
  const { lampOn, toggleLamp } = useLampToggle(false);
  const [waveToken, setWaveToken] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [layout, setLayout] = useState("desktop");

  const navLinks = useMemo(
    () => [
      { label: "Hero", to: "/" },
      { label: "Basic", to: "/basic" },
      { label: "About", to: "/about" },
      { label: "Skills", to: "/skills" },
      { label: "Stack", to: "/stack" },
      { label: "Projects", to: "/projects" },
      { label: "Experience", to: "/experience" },
      { label: "Education", to: "/education" },
      { label: "Certs", to: "/certifications" },
      { label: "Achievements", to: "/achievements" },
      { label: "Services", to: "/services" },
      { label: "Gallery", to: "/gallery" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "Contribs", to: "/contributions" },
      { label: "Contact", to: "/contact" }
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
          <nav className="site-nav">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
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
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="drawer-actions">
              <a className="btn primary" href={basicInfo.resume}>
                Download CV
              </a>
              <NavLink className="btn ghost" to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        <div className="lamp-zone">
          <Suspense fallback={null}>
            <LampModel lampOn={lampOn} toggleLamp={onToggleLamp} waveToken={waveToken} />
          </Suspense>
        </div>

        {!lampOn ? (
          <div className="lamp-message" role="status" aria-live="polite">
            <strong>Turn on the light</strong>
            <span>Pull the rope to see the full portfolio.</span>
          </div>
        ) : null}

        <section className={`page-content ${lampOn ? "active" : ""}`}>
          <Outlet context={{ lampOn }} />
        </section>
      </section>
    </main>
  );
}
