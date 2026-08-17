import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://chennaibusrental.in";

/**
 * Route-aware canonical tag, rendered through react-helmet-async.
 *
 * Some pages (currently Home.jsx, LocationPage.jsx) declare their own
 * page-level <Helmet><link rel="canonical" .../></Helmet>. react-helmet-async
 * dedupes <link> tags by their `rel` attribute, and the most specific /
 * most-recently-rendered <Helmet> instance wins — so on those routes, this
 * component's value is safely superseded by the page's own canonical rather
 * than being appended alongside it as a duplicate <link> in <head>.
 *
 * On routes that don't yet declare their own canonical (e.g. Tariff.jsx,
 * rendered at both "/" and "/tariff"), this component's route-aware value is
 * what actually reaches <head>, so canonical coverage is never lost while
 * pages are migrated to their own <Helmet> one at a time.
 *
 * Previously this component wrote directly to the DOM with
 * document.querySelector/createElement, entirely outside React's render
 * cycle and with no awareness of react-helmet-async's own tag management —
 * that could race with page-level Helmet canonicals or leave two competing
 * <link rel="canonical"> tags in <head>. Rendering through <Helmet> instead
 * lets both systems share one, consistent merge/dedupe mechanism.
 */
export default function CanonicalTag() {
  const { pathname } = useLocation();

  return (
    <Helmet>
      <link rel="canonical" href={`${SITE_URL}${pathname}`} />
    </Helmet>
  );
}
