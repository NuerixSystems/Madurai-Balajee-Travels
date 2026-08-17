// src/pages/LocationPage.jsx
//
// ONE component renders every locality page. Header/Footer are NOT
// rendered here — App.jsx already wraps every route in <Header />
// and <Footer />, so this only renders the page's own content.
//
// Uses the site's existing .location-hero / .location-body CSS
// (already defined in index.css, previously unused) so these pages
// pick up the same look as the rest of the theme — no new CSS.

import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import locations from "../data/locations";

export default function LocationPage() {
  const { slug } = useParams();
  const location = locations.find((l) => l.slug === slug);

  // Unknown slug -> send home instead of a broken page
  if (!location) return <Navigate to="/" replace />;

  const { name } = location;

  return (
    <>
      <Helmet>
        <title>{`AC Bus Rent in ${name} | Chennai Bus Rental`}</title>
        <meta
          name="description"
          content={`Book AC & Non-AC buses in ${name} with Chennai Bus Rental. Corporate, wedding, and outstation bus hire with professional drivers. Call for instant booking.`}
        />
        {/* Canonical tag is handled globally by CanonicalTag.jsx on every
            route change — setting it again here would create a second,
            conflicting <link rel="canonical"> tag. */}
      </Helmet>

      <section className="location-hero">
        <div className="breadcrumb">
          <Link to="/home">Home</Link> / <Link to="/areas">Areas We Serve</Link> / {name}
        </div>
        <h1>AC Bus Rent in {name}</h1>
        <p>
          Book AC and Non-AC bus rental in {name} with Chennai Bus
          Rental. Safe, punctual, and affordable travel for corporate
          trips, weddings, school tours, and outstation journeys.
        </p>
      </section>

      <div className="location-body">
        <h2>Corporate Bus Rental in {name}</h2>
        <p>
          We provide reliable corporate bus rental in {name} for offices,
          business parks, and companies looking for daily staff transport
          or team outings. Our fleet includes AC and Non-AC buses with
          experienced, verified drivers.
        </p>

        <h2>Wedding Bus Rental in {name}</h2>
        <p>
          Make your wedding day travel smooth with our wedding bus
          rental service in {name}. Spacious, air-conditioned coaches
          for guest transport, available on a single-day or multi-day
          basis.
        </p>

        <h2>Outstation & Local Bus Hire in {name}</h2>
        <p>
          Whether it's a local sightseeing trip or an outstation tour
          from {name}, our buses come fully equipped for a comfortable
          journey, with flexible daily, weekly, and monthly rental
          plans.
        </p>

        <p>
          Looking for a bus in {name}? <Link to="/tariff">Check our tariff</Link>{" "}
          or contact us for instant booking.
        </p>
      </div>
    </>
  );
}
