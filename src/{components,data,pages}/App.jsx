import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FloatingButtons from "./components/FloatingButtons.jsx";
import CanonicalTag from "./components/CanonicalTag.jsx";
import Home from "./pages/Home.jsx";
import LocationPage from "./pages/LocationPage.jsx";
import AllAreas from "./pages/AllAreas.jsx";
import Tariff from "./pages/Tariff.jsx";

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTopOnNavigate />
      <CanonicalTag />
      <Header />
      <Routes>
  <Route path="/" element={<Navigate to="/tariff" replace />} />

  <Route path="/home" element={<Home />} />
  <Route path="/home/local-tariff" element={<Home />} />
  <Route path="/home/packages" element={<Home />} />
  <Route path="/home/occasions" element={<Home />} />
  <Route path="/home/gallery" element={<Home />} />
  <Route path="/home/why-us" element={<Home />} />
  <Route path="/home/testimonials" element={<Home />} />
  <Route path="/home/contact" element={<Home />} />

  <Route path="/tariff" element={<Tariff />} />
  <Route path="/areas" element={<AllAreas />} />
  <Route path="/ac-bus-rent-in/:area" element={<LocationPage />} />

  {/* Any unmatched URL (e.g. an old/broken link) lands on Home
      instead of a blank page. */}
  <Route path="*" element={<Navigate to="/home" replace />} />
</Routes>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
