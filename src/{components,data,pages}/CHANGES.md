# Nav links fix — this is why some links weren't clickable

## The bug (2 separate ones stacked together)

**Bug 1 — Header.jsx navigated to routes that don't exist.**
Clicking "Packages", "Gallery", "Testimonials", or "Contact" in the
nav called `navigate('/packages')`, `navigate('/gallery')`, etc. But
`App.jsx` only ever defined `/home/packages`, `/home/gallery`, etc.
(nested under `/home`) — bare `/packages` matched no route at all,
so the page went blank. This happened whether you clicked from the
homepage or from a locality page like
`/ac-bus-rent-in/madurai-avaniyapuram`. The same bug was also in the
"Bus Types" dropdown links and the "Local Tariff" dropdown link.

**Bug 2 — even when correctly routed, Home.jsx scrolled to the
wrong place.** Its logic read `pathname.split("/")[1]` to figure out
which section to scroll to. For a URL like `/home/packages`, that
index is always `"home"` (not `"packages"`) — so it never actually
found the right section, even on a working route.

## What I fixed
- `Header.jsx`: every nav item, dropdown link, and "Bus Types" filter
  link now points to a real `/home/...` route (e.g. `/home/packages`,
  `/home/gallery?type=ac`), matching what `App.jsx` actually defines.
- `App.jsx`: added the one missing route, `/home/local-tariff`
  (needed by the "Local Tariff" dropdown link), and added a catch-all
  route so any future broken/old link lands on Home instead of a
  blank page, rather than failing silently.
- `Home.jsx`: fixed the scroll logic to read the correct URL segment
  (`pathname.split("/")[2]`), so navigating to `/home/gallery` now
  actually scrolls to the Gallery section.
- `Footer.jsx`: the "Quick Links" column had the exact same problem
  (`<a href="#home">`, `<a href="#gallery">` etc. — plain anchors
  that only work if you're already on the homepage). Switched these
  to the same real `/home/...` routes so they work from any page,
  including every locality page.

## Result
Every nav item — in the header and the footer — is now a real route
that works from anywhere on the site: the homepage, `/tariff`,
`/areas`, or any of the 330 locality pages. Clicking "Contact" from
`/ac-bus-rent-in/koyambedu`, for example, now correctly takes you to
`/home/contact` and scrolls to the Contact section.

## Where each file goes
| File | Path |
|---|---|
| `Header.jsx` | `src/components/Header.jsx` |
| `App.jsx` | `src/App.jsx` |
| `Home.jsx` | `src/pages/Home.jsx` |
| `Footer.jsx` | `src/components/Footer.jsx` |

Then `npm run build` and redeploy as usual.
