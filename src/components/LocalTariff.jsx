import { Link } from "react-router-dom";
import { LOCAL_TARIFF_HIGHLIGHTS } from "../data/tariff.js";

export default function LocalTariff() {
  return (
    <section className="section" id="local-tariff">
      <div className="section-header">
        <span className="section-eyebrow">Transparent pricing</span>
        <h2 className="section-title"><i className="fas fa-rupee-sign"></i> Local Tariff</h2>
        <p className="section-desc">Simple, upfront package rates for local &amp; outstation trips — no hidden charges</p>
      </div>

      <div className="tariff-table-wrap">
        <table className="tariff-table local-package-table">
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Days</th>
              <th>Km Coverage</th>
              <th>Non A/C Bus</th>
              <th>AC Bus</th>
              <th>AC Sleeper</th>
              <th>Volvo Seater</th>
            </tr>
          </thead>
          <tbody>
            {LOCAL_TARIFF_HIGHLIGHTS.map((row) => (
              <tr key={row.place}>
                <td className="tariff-row-label">{row.place}</td>
                <td>{row.days}</td>
                <td>{row.km}</td>
                <td>{"\u20B9" + row.nonAc}</td>
                <td>{"\u20B9" + row.ac}</td>
                <td>{row.acSleeper ? "\u20B9" + row.acSleeper : "—"}</td>
                <td>{"\u20B9" + row.volvo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="occasions-cta">
        <Link to="/tariff" className="btn btn-primary">
          <i className="fas fa-list"></i> Full Tariff &amp; Tour Packages
        </Link>
      </div>
    </section>
  );
}
