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
  <Route path="/" element={<Tariff />} />
  <Route path="/home" element={<Home />} />
  <Route path="/home/:section" element={<Home />} />
  <Route path="/:section" element={<Home />} />

  <Route path="/tariff" element={<Tariff />} />
  <Route path="/areas" element={<AllAreas />} />
  <Route path="/ac-bus-rent-in/:area" element={<LocationPage />} />

  {/* Any unmatched URL lands on Tariff instead of Home */}
  <Route path="*" element={<Navigate to="/tariff" replace />} />
</Routes>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
