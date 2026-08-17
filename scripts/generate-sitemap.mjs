// Regenerates public/sitemap.xml from the site's real route data, so it can
// never silently fall out of sync with the pages that actually exist again.
//
// Usage:  node scripts/generate-sitemap.mjs
// Re-run this any time an area is added to src/data/locations.js, then
// re-deploy / re-upload public/sitemap.xml to the live server.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import areas from "../src/data/locations.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://chennaibusrental.in";
const today = new Date().toISOString().slice(0, 10);

const staticPages = [
  // "/" is the canonical home of the Tariff page (Tariff.jsx hardcodes its
  // <link rel="canonical"> to "/" regardless of whether it's rendered at "/"
  // or "/tariff" — see CanonicalTag.jsx). The sitemap must list the
  // canonical URL, so "/" is included here.
  { path: "/", changefreq: "weekly", priority: "1.0" },
  // "/home" renders a different page (Home.jsx) with its own self-canonical
  // ("/home"), so it's a distinct, legitimately indexable URL — kept as-is.
  { path: "/home", changefreq: "weekly", priority: "0.9" },
  // "/tariff" is intentionally NOT listed: it renders the same Tariff.jsx
  // component as "/" and always self-canonicalizes to "/", so including it
  // here would submit a non-canonical duplicate URL to Google.
  { path: "/areas", changefreq: "weekly", priority: "0.8" },
];

const locationPages = areas
  // Defensive filter: only ever emit a location URL for a real, non-empty
  // slug. locations.js already dedupes by slug, but this keeps the
  // generator itself safe against undefined/blank entries.
  .filter((area) => typeof area.slug === "string" && area.slug.trim() !== "")
  .map((area) => ({
    path: `/ac-bus-rent-in/${area.slug.trim()}`,
    changefreq: "monthly",
    priority: "0.7",
  }));

// Final safety net: de-duplicate by path (in case a future edit to
// locations.js or staticPages reintroduces a collision) so the generator
// can never emit the same URL twice.
const allPages = [...staticPages, ...locationPages].filter(
  (page, index, self) => index === self.findIndex((p) => p.path === page.path)
);

const urlEntries = allPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const outPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outPath, xml, "utf-8");

console.log(`Sitemap written to ${outPath}`);
console.log(`${allPages.length} URLs total (${staticPages.length} static + ${locationPages.length} locality pages).`);
