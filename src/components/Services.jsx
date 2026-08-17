import { acServices, nonAcServices, packages } from "../data/services.js";

export default function Services() {
  const bookHrefFor = (pkg) =>
    `https://wa.me/919791135678?text=${encodeURIComponent(
      `Hi, I'd like to know more about the ${pkg.title} (${pkg.duration}, ${pkg.price}).`
    )}`;

  return (
    <section className="section" id="services">
      <div className="section-header">
        <span className="section-eyebrow">What we offer</span>
        <h2 className="section-title"><i className="fas fa-concierge-bell"></i> Our Services</h2>
        <p className="section-desc">Choose from our wide range of well-maintained buses for every occasion</p>
      </div>

      <div className="service-group" id="services-ac">
        <h3 className="service-group-title">
          <i className="fas fa-snowflake"></i> AC Buses
        </h3>
        <div className="services-grid">
          {acServices.map((s, i) => (
            <div className="service-card" key={`ac-${i}`}>
              <div className="service-icon"><i className={`fas ${s.icon}`}></i></div>
              <h3>{s.title} <small>{s.note}</small></h3>
              <span className="rate">{s.rate}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="service-group" id="services-non-ac">
        <h3 className="service-group-title">
          <i className="fas fa-bus-alt"></i> Non-AC Buses
        </h3>
        <div className="services-grid">
          {nonAcServices.map((s, i) => (
            <div className="service-card" key={`nonac-${i}`}>
              <div className="service-icon"><i className={`fas ${s.icon}`}></i></div>
              <h3>{s.title} <small>{s.note}</small></h3>
              <span className="rate">{s.rate}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="service-group">
        <h3 className="service-group-title">
          <i className="fas fa-box-open"></i> Package Details
        </h3>
        <div className="packages-grid">
          {packages.map((pkg, i) => (
            <div className="package-card" key={i}>
              <div className="package-card-head">
                <div className="service-icon"><i className={`fas ${pkg.icon}`}></i></div>
                <div>
                  <h4>{pkg.title}</h4>
                  <span className="package-duration">{pkg.duration}</span>
                </div>
              </div>
              <span className="package-price">{pkg.price}</span>
              <ul className="package-inclusions">
                {pkg.inclusions.map((line, j) => (
                  <li key={j}><i className="fas fa-check"></i> {line}</li>
                ))}
              </ul>
              <a href={bookHrefFor(pkg)} target="_blank" rel="noreferrer" className="btn btn-secondary package-btn">
                <i className="fab fa-whatsapp"></i> Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
