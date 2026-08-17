// src/pages/LocationPage.jsx
//
// ONE component renders every locality page. Header/Footer are not
// imported here — App.jsx already renders them globally around every
// route, so this component only renders the page's own content.

import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import locations, {
  chennaiAreas,
  maduraiAreas,
  bangaloreAreas,
  otherCities,
} from "../data/locations";
import JsonLd from "../components/JsonLd";

const AREA_GROUPS = [
  { label: "Chennai", list: chennaiAreas },
  { label: "Madurai", list: maduraiAreas },
  { label: "Bangalore", list: bangaloreAreas },
  { label: "Outstation Cities", list: otherCities },
];

function getNearbyAreas(slug) {
  for (const group of AREA_GROUPS) {
    const index = group.list.findIndex((item) => item.slug === slug);
    if (index === -1) continue;
    const nearby = [];
    for (let i = 1; i <= 8 && nearby.length < 8; i += 1) {
      nearby.push(group.list[(index + i) % group.list.length]);
    }
    return { label: group.label, areas: nearby };
  }
  return null;
}

export default function LocationPage() {
  const { area } = useParams();
  const location = locations.find((l) => l.slug === area);

  // Unknown slug -> send home instead of a broken page
  if (!location) return <Navigate to="/" replace />;

  const { name, slug } = location;
  const nearby = getNearbyAreas(slug);
  const pageUrl = `https://chennaibusrental.in/ac-bus-rent-in/${slug}`;

  // Mirrors the visible breadcrumb ("Home / Areas We Serve / {name}") and the
  // page's own title/description above — no new claims, just the same facts
  // in structured-data form. No LocalBusiness schema here: this project only
  // has verified addresses for the Chennai and Madurai offices (see
  // index.html), and this page doesn't claim a physical office in {name}.
  const locationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `AC Bus Rental in ${name}`,
        serviceType: "AC Bus Rental",
        areaServed: {
          "@type": "Place",
          name,
        },
        provider: {
          "@type": "Organization",
          name: "Madurai Balaje Tours & Travels",
          url: "https://chennaibusrental.in/",
        },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://chennaibusrental.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas We Serve",
            item: "https://chennaibusrental.in/areas",
          },
          {
            "@type": "ListItem",
            position: 3,
            name,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{`AC Bus Rent in ${name} | Chennai Bus Rental`}</title>
        <meta
          name="description"
          content={`Book AC & Non-AC buses in ${name} with Chennai Bus Rental. Corporate, wedding, and outstation bus hire with professional drivers. Call for instant booking.`}
        />
        <link
          rel="canonical"
          href={`https://chennaibusrental.in/ac-bus-rent-in/${slug}`}
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={`AC Bus Rent in ${name} | Chennai Bus Rental`} />
        <meta
          property="og:description"
          content={`Book AC & Non-AC buses in ${name} with Chennai Bus Rental. Corporate, wedding, and outstation bus hire with professional drivers. Call for instant booking.`}
        />
        <meta property="og:url" content={`https://chennaibusrental.in/ac-bus-rent-in/${slug}`} />
        <meta property="og:image" content="https://chennaibusrental.in/Images/logo.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`AC Bus Rent in ${name} | Chennai Bus Rental`} />
        <meta
          name="twitter:description"
          content={`Book AC & Non-AC buses in ${name} with Chennai Bus Rental. Corporate, wedding, and outstation bus hire with professional drivers. Call for instant booking.`}
        />
      </Helmet>

      <JsonLd id="location-page-schema" data={locationSchema} />

      <main className="location-page">
        <section className="location-hero">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/areas">Areas We Serve</Link> / {name}
          </div>

          <h1>AC & Non-AC Bus Rent in {name}</h1>
          <p>
            Book comfortable AC sleeper, AC pushback, and Non-AC buses in {name}.
            Transparent pricing, licensed drivers, and fast service for weddings,
            corporate trips, school tours, and outstation journeys.
          </p>

          <div className="hero-cta">
            <a href="tel:+919791135678" className="btn btn-primary">
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
            <a
              href="https://wa.me/919791135678"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </section>

        <section className="location-body">
          <h2>Why book with us in {name}?</h2>
          <ul>
            <li>AC Sleeper, AC Pushback, and Non-AC buses in 36, 40, 45, and 50 seater options.</li>
            <li>Transparent per-kilometre pricing with no hidden charges.</li>
            <li>Licensed, experienced drivers familiar with {name} and nearby routes.</li>
            <li>Support for weddings, corporate travel, school trips, and pilgrimage tours.</li>
          </ul>

          <h2>Types of buses available in {name}</h2>
          <p>
            Choose from AC and Non-AC buses depending on your group size and budget.
            AC Sleeper and AC Pushback buses are also available for longer outstation
            journeys, so you can pick the right bus for a short local trip or a multi-day tour.
          </p>

          <h2>Occasions we cover in {name}</h2>
          <p>
            Customers in {name} book with us for weddings and family functions,
            corporate staff transport, school and college trips, temple and pilgrimage tours,
            airport pickup and drop, and outstation holiday travel.
          </p>

          <h2>How booking works in {name}</h2>
          <p>
            Call or send a WhatsApp message with your travel date, route, and number of passengers.
            We will confirm the right bus size and AC or Non-AC option, share a clear per-kilometre quote
            with no hidden charges, and arrange pickup in {name} at your preferred time.
          </p>

          <div className="location-body-cta">
            <p>
              Looking for a bus in {name}? <Link to="/tariff">Check our tariff</Link> or contact us for instant booking.
            </p>
          </div>
        </section>

        {nearby ? (
          <section className="location-nearby">
            <div className="location-body">
              <h2>Nearby {nearby.label} areas we also serve</h2>
              <div className="nearby-grid">
                {nearby.areas.map((areaCard) => (
                  <Link
                    className="nearby-card"
                    key={areaCard.slug}
                    to={`/ac-bus-rent-in/${areaCard.slug}`}
                  >
                    <i className="fas fa-bus"></i>
                    <span>AC Bus Rent in {areaCard.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
