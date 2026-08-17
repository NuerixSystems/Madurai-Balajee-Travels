import { TESTIMONIALS } from "../data/testimonials.js";

function Stars({ rating }) {
  return (
    <div className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className={`fas fa-star${i < rating ? "" : " dim"}`}></i>
      ))}
    </div>
  );
}

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="section-header">
        <span className="section-eyebrow">Customer stories</span>
        <h2 className="section-title"><i className="fas fa-quote-right"></i> What Our Customers Say</h2>
        <p className="section-desc">Real experiences from families, companies, and groups we've travelled with</p>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <i className="fas fa-quote-left testimonial-quote-icon"></i>
            <Stars rating={t.rating} />
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-footer">
              <div className="testimonial-avatar">{initials(t.name)}</div>
              <div>
                <strong className="testimonial-name">{t.name}</strong>
                <span className="testimonial-trip">{t.trip}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
