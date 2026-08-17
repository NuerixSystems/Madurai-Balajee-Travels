const FEATURES = [
  { icon: "fa-shield-alt", title: "Safe Travel", desc: "Well-maintained vehicles with experienced, licensed drivers for your peace of mind" },
  { icon: "fa-clock", title: "On-time Service", desc: "Punctual pickups and drop-offs, every single time — we value your schedule" },
  { icon: "fa-smile", title: "Customer First", desc: "Dedicated 24/7 support for all your travel needs and last-minute changes" },
  { icon: "fa-rupee-sign", title: "Best Rates", desc: "Competitive pricing with transparent billing — no hidden charges, ever" },
];

export default function WhyUs() {
  return (
    <section className="section section-alt" id="whyus">
      <div className="section-header">
        <span className="section-eyebrow">Our promise</span>
        <h2 className="section-title"><i className="fas fa-star"></i> Why Choose Us</h2>
        <p className="section-desc">We go the extra mile to make your journey exceptional</p>
      </div>
      <div className="features-grid">
        {FEATURES.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-icon"><i className={`fas ${f.icon}`}></i></div>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
