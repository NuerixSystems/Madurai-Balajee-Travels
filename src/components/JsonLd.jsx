import { useEffect } from "react";

/**
 * Injects a <script type="application/ld+json"> tag into <head> for the
 * lifetime of the mounting component, and removes it on unmount/route change.
 *
 * This project is a client-rendered SPA with no server-side rendering, so
 * page-specific JSON-LD (e.g. Review/AggregateRating on the homepage) has to
 * be added this way rather than baked into index.html. Google renders the
 * page's JavaScript before reading structured data, so this is a supported,
 * commonly-used pattern for React sites — but if this project ever moves to
 * SSR/SSG, this schema should be moved server-side for reliability.
 *
 * @param {string} id   Unique id for the script tag (so re-renders replace it
 *                       instead of stacking duplicates).
 * @param {object|null} data  The JSON-LD object (or array of objects). Pass
 *                       null/undefined to skip rendering.
 */
export default function JsonLd({ id, data }) {
  useEffect(() => {
    if (!data) return undefined;

    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [id, data]);

  return null;
}
