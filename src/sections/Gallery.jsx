import { gallery } from "../data/portfolioData";

export default function Gallery({ lampOn }) {
  return (
    <section id="gallery" className={`panel gallery ${lampOn ? "visible" : "hidden"}`}>
      <h3>App Screenshots Gallery</h3>
      <div className="gallery-grid">
        {gallery.map((item) => (
          <div key={item.title} className="gallery-card">
            <div className="gallery-preview">
              <span>{item.tag}</span>
            </div>
            <h4>{item.title}</h4>
            <p>{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
