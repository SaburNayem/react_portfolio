import { useState } from "react";
import { basicInfo, stats } from "../data/portfolioData";

export default function Hero({ lampOn }) {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className={`hero panel ${lampOn ? "visible" : "hidden"}`}>
      <div className="hero-grid">
        <div className="hero-content">
          <p className="tag">Developer Portfolio</p>
          <h1>{basicInfo.fullName}</h1>
          <h2>{basicInfo.title}</h2>
          <p className="hero-bio">{basicInfo.shortBio}</p>
          <div className="hero-cta">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn ghost" href={basicInfo.resume}>
              Download CV
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((item) => (
              <div key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-profile">
          {!imageError ? (
            <img
              src={basicInfo.profilePhoto}
              alt={basicInfo.fullName}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="avatar-fallback">
              <span>{basicInfo.fullName.split(" ").map((part) => part[0]).join("")}</span>
              <small>Add your photo</small>
            </div>
          )}
          <div className="hero-contact">
            <span>{basicInfo.location}</span>
            <span>{basicInfo.email}</span>
            <span>{basicInfo.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
