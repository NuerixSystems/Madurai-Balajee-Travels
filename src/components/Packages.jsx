import { Link } from "react-router-dom";
import { TOUR_PACKAGES, PACKAGE_BUS_RENT } from "../data/packages.js";

export default function Packages() {
  const bookHrefFor = (pkg) =>
    `https://wa.me/919791135678?text=${encodeURIComponent(
      `Hi, I'd like a quote for the Sabarimala tour package ${pkg.title} — ${pkg.duration}, ${pkg.km} coverage.`
    )}`;

  return (
    <section className="section section-alt" id="packages">
      <div className="section-header">
        <span className="section-eyebrow">Pilgrimage tours</span>
        <h2 className="section-title"><i className="fas fa-om"></i> Sabarimala Tour Packages</h2>
        <p className="section-desc">Fixed multi-day itineraries covering major temples along the way</p>
      </div>

      <div className="packages-grid">
        {TOUR_PACKAGES.map((pkg) => (
          <div className="package-card" key={pkg.id}>
            <div className="package-card-head">
              <div className="service-icon"><i className="fas fa-route"></i></div>
              <div>
                <h4>{pkg.title}</h4>
                <span className="package-duration">{pkg.duration} &bull; {pkg.km} Coverage</span>
              </div>
            </div>
            <p className="package-route-preview">{pkg.stops.join(" - ")}</p>
            <a href={bookHrefFor(pkg)} target="_blank" rel="noreferrer" className="btn btn-secondary package-btn">
              <i className="fab fa-whatsapp"></i> Enquire Now
            </a>
          </div>
        ))}
      </div>

      <div className="package-rent-note">
        <h4><i className="fas fa-bus-alt"></i> Bus Rent (300 Kms coverage per day)</h4>
        <div className="tariff-table-wrap">
          <table className="tariff-table">
            <thead>
              <tr>
                <th>Bus Type</th>
                <th>Rent</th>
                <th>Extra Km</th>
              </tr>
            </thead>
            <tbody>
              {PACKAGE_BUS_RENT.map((row) => (
                <tr key={row.type}>
                  <td className="tariff-row-label">{row.type}</td>
                  <td>{"\u20B9" + row.rate}</td>
                  <td>{"\u20B9" + row.extraKm + "/km"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="tariff-note">
          Dec 15th to Jan 15th: &#8377;1,000 extra per day. Driver batta, tollgate, parking, permit
          &amp; check-post expenses are extra.
        </p>
      </div>

      <div className="occasions-cta">
        <Link to="/tariff#tour-packages" className="btn btn-primary">
          <i className="fas fa-list"></i> View Full Itinerary Details
        </Link>
      </div>
    </section>
  );
}
