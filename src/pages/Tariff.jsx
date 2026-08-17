import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LOCAL_TARIFF, FAQS } from "../data/tariff.js";
import { TOUR_PACKAGES, PACKAGE_BUS_RENT } from "../data/packages.js";
import AreasPreview from "../components/AreasPreview.jsx";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? " open" : ""}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
      </button>
      {isOpen && <div className="faq-answer">{item.a}</div>}
    </div>
  );
}

export default function Tariff() {
  const [openIndex, setOpenIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const header = document.getElementById("header");
          const offset = (header?.offsetHeight || 0) + 16;
          const targetPos = el.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: targetPos, behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Bus Rental in Chennai | Tariff &amp; Packages | Madurai Balaje Tours &amp; Travels</title>
        <meta
          name="description"
          content="Check transparent bus rental in Chennai tariff for AC & Non-AC buses, local packages, and outstation trips. Clear per-km pricing, no hidden charges. Call for instant quotes."
        />
        {/*
          Tariff is rendered at both "/" and "/tariff" with identical
          content. Canonical is fixed to "/" (not route-dependent) so both
          URLs consolidate to one indexable page instead of being treated as
          duplicate content. CanonicalTag.jsx (mounted globally) would
          otherwise render "/tariff" as its own self-canonical on that route,
          but react-helmet-async dedupes <link rel="canonical"> by the `rel`
          attribute and this page-level tag takes precedence, so only this
          value reaches <head> on either route.
        */}
        <link rel="canonical" href="https://chennaibusrental.in/" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bus Rental in Chennai | Tariff & Packages | Madurai Balaje Tours & Travels" />
        <meta
          property="og:description"
          content="Check transparent bus rental in Chennai tariff for AC & Non-AC buses, local packages, and outstation trips. Clear per-km pricing, no hidden charges."
        />
        <meta property="og:url" content="https://chennaibusrental.in/" />
        <meta property="og:image" content="https://chennaibusrental.in/Images/logo.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bus Rental in Chennai | Tariff & Packages | Madurai Balaje Tours & Travels" />
        <meta
          name="twitter:description"
          content="Check transparent bus rental in Chennai tariff for AC & Non-AC buses, local packages, and outstation trips. Clear per-km pricing, no hidden charges."
        />
      </Helmet>

      <section className="section" id="local-tariff">
        <div className="section-header">
          <span className="section-eyebrow">Rates &amp; packages</span>
          <h2 className="section-title"><i className="fas fa-city"></i>Outstation Tariff Details</h2>
          <p className="section-desc">Transparent bus rent &amp; local package pricing across Tamil Nadu</p>
        </div>

        <div className="package-rent-note" id="tour-packages-rent">
          <h4><i className="fas fa-bus-alt"></i> Bus Rent (300 Kms coverage per day)</h4>
          {/* Desktop Table */}
          <div className="desktop-bus-rent">
            <div className="tariff-table-wrap">
              <table className="tariff-table outstation-table">
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
                      <td>₹{row.rate}</td>
                      <td>₹{row.extraKm}/km</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="mobile-bus-rent">
            {PACKAGE_BUS_RENT.map((row) => (
              <div className="bus-rent-card" key={row.type}>
                <h4>{row.type}</h4>

                <div className="price-row">
                  <span>Rent</span>
                  <strong>₹{row.rate}</strong>
                </div>

                <div className="price-row">
                  <span>Extra KM</span>
                  <strong>₹{row.extraKm}/km</strong>
                </div>
              </div>
            ))}
          </div>

          <p className="tariff-note">
            Dec 15th to Jan 15th: &#8377;1,000 extra per day. Driver batta, tollgate, parking,
            permit &amp; check-post expenses are extra.
          </p>
          <div className="button-center">
            <div className="hero-cta">
              <a href="tel:+919791135678" className="btn btn-primary">
                <i className="fas fa-phone-alt"></i> Call Now
              </a>

              <a
                href="https://wa.me/919791135678"
                className="btn btn-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="section-header local-tariff-header">
          <h2 className="section-title"><i className="fas fa-city"></i>Local Tariff Details</h2>
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
              {LOCAL_TARIFF.map((row) => (
                <tr key={row.place}>
                  <td className="tariff-row-label">{row.place}</td>
                  <td>{row.days}</td>
                  <td>{row.km}</td>
                  <td>&#8377;{row.nonAc}</td>
                  <td>&#8377;{row.ac}</td>
                  <td>{row.acSleeper ? `\u20B9${row.acSleeper}` : "—"}</td>
                  <td>&#8377;{row.volvo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mobile-tariff-cards">
          {LOCAL_TARIFF.map((row) => (
            <div className="tariff-card" key={row.place}>
              <h3>{row.place}</h3>

              <div className="tariff-card-row">
                <span>Days</span>
                <strong>{row.days}</strong>
              </div>

              <div className="tariff-card-row">
                <span>Coverage</span>
                <strong>{row.km}</strong>
              </div>

              <div className="tariff-card-row">
                <span>Non A/C</span>
                <strong>₹{row.nonAc}</strong>
              </div>

              <div className="tariff-card-row">
                <span>A/C</span>
                <strong>₹{row.ac}</strong>
              </div>

              <div className="tariff-card-row">
                <span>AC Sleeper</span>
                <strong>{row.acSleeper ? `₹${row.acSleeper}` : "—"}</strong>
              </div>

              <div className="tariff-card-row">
                <span>Volvo Seater</span>
                <strong>₹{row.volvo}</strong>
              </div>
            </div>
          ))}
        </div>

        <p className="tariff-note">
          Rates shown are indicative starting prices. Final pricing depends on route, dates, and
          season — call or WhatsApp us for an exact quote.
        </p>
      </section>

      <AreasPreview />

      <section className="section section-alt" id="tour-packages">
        <div className="section-header">
          <span className="section-eyebrow">Pilgrimage tours</span>
          <h2 className="section-title"><i className="fas fa-om"></i> Sabarimala Tour Packages</h2>
          <p className="section-desc">Fixed multi-day itineraries covering major temples along the way</p>
        </div>
        <div className="tour-packages-list">
          {TOUR_PACKAGES.map((pkg) => (
            <div className="tour-package-item" key={pkg.id}>
              <div className="tour-package-item-head">
                <h3>{pkg.title} &mdash; {pkg.duration} <span>({pkg.km} Coverage)</span></h3>
              </div>
              <p className="tour-package-route">{pkg.stops.join(" — ")}</p>
              <a
                href={`https://wa.me/919791135678?text=${encodeURIComponent(
                  `Hi, I'd like a quote for the Sabarimala tour package ${pkg.title} — ${pkg.duration}, ${pkg.km} coverage.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary package-btn tour-package-btn"
              >
                <i className="fab fa-whatsapp"></i> Enquire Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section-header">
          <span className="section-eyebrow">Got questions?</span>
          <h2 className="section-title"><i className="fas fa-circle-question"></i> Frequently Asked Questions</h2>
          <p className="section-desc">Everything you need to know before you book</p>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
