import { Link, useLocation } from "react-router-dom";
import { chennaiAreas, maduraiAreas, bangaloreAreas, otherCities } from "../data/locations.js";

// TODO: replace with your real Instagram profile URL (e.g. "https://instagram.com/maduraibalaje")
const INSTAGRAM_URL = "https://instagram.com/maduraibalaje";
// TODO: replace with your real Facebook page URL
const FACEBOOK_URL = "https://facebook.com/maduraibalaje";

const featuredChennai = chennaiAreas.slice(0, 4);
const featuredMadurai = maduraiAreas.slice(0, 4);

// Groups searched in order to find which city list the current area
// page's slug belongs to, so the footer can show nearby areas
// from that same list.
const AREA_GROUPS = [
  { label: "Chennai", list: chennaiAreas },
  { label: "Madurai", list: maduraiAreas },
  { label: "Bangalore", list: bangaloreAreas },
  { label: "Outstation Cities", list: otherCities },
];

function getNearbyAreas(slug) {
  for (const group of AREA_GROUPS) {
    const idx = group.list.findIndex((a) => a.slug === slug);
    if (idx === -1) continue;
    const { list, label } = group;
    const nearby = [];
    for (let i = 1; i <= 6 && nearby.length < 6 && list.length > 1; i++) {
      nearby.push(list[(idx + i) % list.length]);
    }
    return { label, nearby };
  }
  return null;
}

export default function Footer() {
  const location = useLocation();
  const match = location.pathname.match(/^\/ac-bus-rent-in\/([^/]+)/);
  const currentSlug = match ? match[1] : null;
  const nearby = currentSlug ? getNearbyAreas(currentSlug) : null;

  return (
    <footer className="footer">
      <div className="footer-main footer-main-wide">
        <div className="footer-brand-col">
          <div className="footer-brand">
            <img src="/Images/logo.jpg" alt="Madurai Balaje" className="footer-logo" />
            <div>
              <h3>Madurai Balaje</h3>
              <p>Travel with Pride · Your Journey, Our Priority</p>
            </div>
          </div>
          <p className="footer-about">
            Premium AC and Non-AC bus rental across Chennai, Madurai, and South India.
            Trusted by thousands of families, schools, and corporate clients for weddings,
            temple tours, corporate travel, and outstation trips.
          </p>
          <div className="footer-contact-box">
            <a href="tel:+919791135678" className="footer-phone-btn">
              <i className="fas fa-phone-alt"></i>
              Call Now: +91 97911 35678
            </a>
            <a
              href="https://wa.me/919791135678"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp footer-chat-btn"
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
          <div className="social-icons">
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="social-icon facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="social-icon instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/919791135678" target="_blank" rel="noreferrer" className="social-icon whatsapp" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-link-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/local-tariff">Local Tariff</Link></li>
            <li><Link to="/occasions">Select For Various Occasions</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/tariff">Tariff Details</Link></li>
            <li><Link to="/tariff#faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {nearby ? (
          <>
            <div className="footer-col">
              <h4>Nearby Areas — {nearby.label}</h4>
              <ul className="footer-link-list">
                {nearby.nearby.map((area) => (
                  <li key={area.slug}>
                    <Link to={`/ac-bus-rent-in/${area.slug}`}>Bus Rent in {area.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Explore More</h4>
              <ul className="footer-link-list">
                <li><Link to="/areas">View All Areas We Serve</Link></li>
                <li><Link to="/tariff">Tariff Details</Link></li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="footer-col">
              <h4>Popular Areas</h4>
              <ul className="footer-link-list">
                {featuredChennai.map((area) => (
                  <li key={area.slug}>
                    <Link to={`/ac-bus-rent-in/${area.slug}`}>Bus Rent in {area.name}</Link>
                  </li>
                ))}
                {featuredMadurai.map((area) => (
                  <li key={area.slug}>
                    <Link to={`/ac-bus-rent-in/${area.slug}`}>Bus Rent in {area.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>More Info</h4>
              <ul className="footer-link-list">
                <li><Link to="/areas">View All Areas We Serve</Link></li>
                <li><Link to="/tariff">Tariff Details</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </>
        )}

        <div className="footer-offices">
          <div className="office">
            <h4><i className="fas fa-building"></i> Chennai Head Office</h4>
            <p>G14 &amp; G15, Sriji Majestic Complex<br />Koyambedu, Chennai – 600107</p>
          </div>
          <div className="office">
            <h4><i className="fas fa-building"></i> Madurai Head Office</h4>
            <p>Corp-145 DPP Chavadi<br />Madurai – 625016</p>
          </div>
          <div className="office">
            <h4><i className="fas fa-phone-alt"></i> Talk to Us</h4>
            <p><a href="tel:+919791135678">+91 97911 35678</a></p>
          </div>
        </div>
      </div>

      <div className="footer-safe">
        <i className="fas fa-shield-alt"></i>
        <span>Safe Travel</span>
        <span className="dot">·</span>
        <span>Safe Journey</span>
        <i className="fas fa-route"></i>
      </div>

      <div className="footer-bottom">

        <p>
          &copy; 2026{" "}
          <a
            href="https://chennaibusrental.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Madurai Balaje Tours &amp; Travels
          </a>
          . All Rights Reserved.
        </p>
        <div className="footer-links">

          <a
            href="https://nuerix.in/login"
            target="_blank"
            rel="noreferrer"
            className="employee-login-btn"
          >
            <i className="fas fa-user-lock"></i> Employee Login
          </a>
          <span>|</span>

          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms &amp; Conditions</a>

        </div>
      </div>

      <div className="footer-credit">
        <p>
          Website by{" "}
          <a href="https://nuerixdigital.com/" target="_blank" rel="noreferrer">
            NuerixDigital - Professional Website Development Services
          </a>
        </p>
      </div>
    </footer>
  );
}
