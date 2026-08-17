import { useState } from "react";
import { destinations } from "../data/services.js";

export default function Destinations() {
  const [toast, setToast] = useState(null);

  const handleClick = (dest) => {
    setToast(`Explore ${dest} with Madurai Balaje Tours!`);
    window.clearTimeout(handleClick._t);
    handleClick._t = window.setTimeout(() => setToast(null), 2500);
  };

  return (
    <section className="section section-alt" id="destinations">
      <div className="section-header">
        <span className="section-eyebrow">Explore South India</span>
        <h2 className="section-title"><i className="fas fa-map-pin"></i> Popular Destinations</h2>
        <p className="section-desc">We cover all major tourist spots across Tamil Nadu and beyond</p>
      </div>
      <div className="destinations">
        {destinations.map((d) => (
          <span className="dest-tag" key={d} onClick={() => handleClick(d)}>{d}</span>
        ))}
        <span className="dest-tag more">& Many More</span>
      </div>

      {toast && (
        <div className="toast-notification" role="status">
          <i className="fas fa-bus"></i>
          <span>{toast}</span>
        </div>
      )}
    </section>
  );
}
