import { useState } from "react";
import { Link } from "react-router-dom";
import { chennaiAreas, maduraiAreas, bangaloreAreas, otherCities } from "../data/locations.js";

const TABS = [
  { id: "chennai", label: "Chennai", list: chennaiAreas, mode: "grid" },
  { id: "madurai", label: "Madurai", list: maduraiAreas, mode: "grid" },
  { id: "bangalore", label: "Bangalore", list: bangaloreAreas, mode: "grid" },
  { id: "outstation", label: "Outstation Cities", list: otherCities, mode: "city" },
];

export default function AreasWeServe() {
  const [tabId, setTabId] = useState("chennai");
  const active = TABS.find((t) => t.id === tabId);

  return (
    <section className="section section-alt" id="areas">
      <div className="section-header">
        <span className="section-eyebrow">Local coverage</span>
        <h2 className="section-title"><i className="fas fa-location-dot"></i> AC Bus Rent Across Chennai, Madurai &amp; Beyond</h2>
        <p className="section-desc">
          Madurai Balaje Tours &amp; Travels provides AC and Non-AC bus rental across every
          neighbourhood of Chennai and our home city of Madurai, plus outstation bus hire to
          Bangalore, Salem, and Trichy — tap an area below for local pricing and pickup details.
        </p>
      </div>

      <div className="city-tabs" role="tablist" aria-label="Filter areas by city">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`gallery-tab${tabId === tab.id ? " active" : ""}`}
            onClick={() => setTabId(tab.id)}
          >
            {tab.label} <span className="count">({tab.list.length})</span>
          </button>
        ))}
      </div>

      {active.mode === "grid" ? (
        <div className="areas-grid">
          {active.list.map((area) => (
            <Link to={`/ac-bus-rent-in/${area.slug}`} className="area-link" key={area.slug}>
              <i className="fas fa-bus"></i>
              AC Bus Rent in {area.name}
            </Link>
          ))}
        </div>
      ) : (
        <div className="city-single-wrap">
          {active.list.map((area) => (
            <Link to={`/ac-bus-rent-in/${area.slug}`} className="city-single-card" key={area.slug}>
              <i className="fas fa-route"></i>
              <div>
                <h4>Bus Rental in {area.name}</h4>
                <p>AC &amp; Non-AC buses for outstation, corporate, and group travel to {area.name}</p>
              </div>
              <i className="fas fa-arrow-right"></i>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
