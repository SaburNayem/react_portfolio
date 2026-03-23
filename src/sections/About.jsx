import { aboutInfo, basicInfo } from "../data/portfolioData";

export default function About({ lampOn }) {
  return (
    <section id="about" className={`panel about ${lampOn ? "visible" : "hidden"}`}>
      <h3>About Me</h3>
      <div className="basic-grid">
        <div>
          <h4>Profile</h4>
          <p>{basicInfo.shortBio}</p>
        </div>
        <div className="basic-list">
          <span>Full Name: {basicInfo.fullName}</span>
          <span>Title: {basicInfo.title}</span>
          <span>Location: {basicInfo.location}</span>
          <span>Email: {basicInfo.email}</span>
          <span>Phone: {basicInfo.phone}</span>
        </div>
        <div className="basic-links">
          <a className="btn ghost" href={basicInfo.resume}>
            Resume PDF
          </a>
          <a className="btn primary" href={basicInfo.website} target="_blank" rel="noreferrer">
            Portfolio Website
          </a>
        </div>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <h4>Who I Am</h4>
          <p>{aboutInfo.who}</p>
        </div>
        <div className="about-card">
          <h4>What I Specialize In</h4>
          <p>{aboutInfo.specialize}</p>
        </div>
        <div className="about-card">
          <h4>Years of Experience</h4>
          <p>{aboutInfo.experience}</p>
        </div>
        <div className="about-card">
          <h4>What Makes Me Different</h4>
          <p>{aboutInfo.difference}</p>
        </div>
        <div className="about-card">
          <h4>Career Goal</h4>
          <p>{aboutInfo.goal}</p>
        </div>
      </div>
    </section>
  );
}
