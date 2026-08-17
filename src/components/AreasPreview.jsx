// src/components/AreasPreview.jsx
//
// Homepage-only. Shows a handful of popular areas, then a single
// "View All Areas" button that leads to the full browsable list at
// /areas (src/pages/AllAreas.jsx). Keeps the homepage short while
// still linking every locality page from somewhere on the site.

import { Link } from "react-router-dom";
import locations, { chennaiAreas } from "../data/locations.js";

// Featured areas shown directly on the homepage. Edit this list to
// change which ones appear here — everything else is one click away
// on the /areas page.
const FEATURED_SLUGS = [
  "koyambedu",
  "t-nagar",
  "anna-nagar",
  "velachery",
  "tambaram",
  "porur",
  "adyar",
  "omr",
  "ashok-nagar",
  "madhavaram",
];

const featured = FEATURED_SLUGS
  .map((slug) => chennaiAreas.find((a) => a.slug === slug))
  .filter(Boolean);

export default function AreasPreview() {
  return (
    <section className="section section-alt" id="areas">
      <div className="section-header">
        <span className="section-eyebrow">Local coverage</span>
        <h2 className="section-title">
          <i className="fas fa-location-dot"></i> AC Bus Rent Across Chennai, Madurai &amp; Beyond
        </h2>
        <p className="section-desc">
          Madurai Balaje Tours &amp; Travels provides AC and Non-AC bus rental across every
          neighbourhood of Chennai and our home city of Madurai, plus outstation bus hire to
          Bangalore and beyond — a few popular areas below, or view the full list.
        </p>
      </div>

      <div className="areas-grid">
        {featured.map((area) => (
          <Link to={`/ac-bus-rent-in/${area.slug}`} className="area-link" key={area.slug}>
            <i className="fas fa-bus"></i>
            AC Bus Rent in {area.name}
          </Link>
        ))}
      </div>

      <div className="occasions-cta">
        <Link to="/areas" className="btn btn-primary">
          View All {locations.length} Areas We Serve
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
}
