// src/pages/AllAreas.jsx
//
// The full browsable list of every area/city page, moved off the
// homepage. Reached via the "View All Areas" button on Home
// (AreasPreview.jsx) or a direct link to /areas.

import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AreasWeServe from "../components/AreasWeServe.jsx";
import locations from "../data/locations.js";

export default function AllAreas() {
  useEffect(() => {
    document.title = "Areas We Serve | Madurai Balaje Tours & Travels";
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={`Browse all ${locations.length} areas and cities where Madurai Balaje Tours & Travels provides AC and Non-AC bus rental — Chennai, Madurai, Bangalore, and outstation.`}
        />
      </Helmet>

      <div className="page-breadcrumb">
        <Link to="/">Home</Link> <span>/</span> <span>Areas We Serve</span>
      </div>

      <AreasWeServe />
    </>
  );
}
