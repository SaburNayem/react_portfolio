import { basicInfo } from "../data/portfolioData";

export default function BasicInfo({ lampOn }) {
  return (
    <section id="basic" className={`panel basic ${lampOn ? "visible" : "hidden"}`}>
      <h3>Basic Information</h3>
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
    </section>
  );
}
