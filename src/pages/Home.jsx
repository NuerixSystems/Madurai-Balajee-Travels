import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero.jsx";
import SeoIntro from "../components/SeoIntro.jsx";
import LocalTariff from "../components/LocalTariff.jsx";
import Packages from "../components/Packages.jsx";
import Occasions from "../components/Occasions.jsx";
import Gallery from "../components/Gallery.jsx";
import AreasPreview from "../components/AreasPreview.jsx";
import WhyUs from "../components/WhyUs.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  const { pathname } = useLocation();

 useEffect(() => {
  const segments = pathname.split("/").filter(Boolean);
  const section =
    segments[0] === "home" ? segments[1] : segments[0];

  // "/" or "/home" -> no section -> scroll to top
  // "/local-tariff" -> section is "local-tariff"
  // "/home/packages" -> section is "packages"
  if (section) {
    const el = document.getElementById(section);

    if (el) {
      setTimeout(() => {
        const header = document.getElementById("header");
        const offset = (header?.offsetHeight || 0) + 16;

        const target =
          el.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: target,
          behavior: "smooth",
        });
      }, 100);
    }
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}, [pathname]);

  return (
    <>
      <Helmet>
        <title>Bus Rental in Chennai | AC & Non-AC Buses | Madurai Balaje Tours &amp; Travels</title>
        <meta
          name="description"
          content="Trusted Chennai bus rental for AC & Non-AC coaches. Tourist bus rental Chennai, wedding, corporate, and outstation bus hire in Chennai with transparent pricing and professional drivers."
        />
        <link rel="canonical" href="https://chennaibusrental.in/home" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bus Rental in Chennai | AC & Non-AC Buses | Madurai Balaje Tours & Travels" />
        <meta
          property="og:description"
          content="Trusted Chennai bus rental for AC & Non-AC coaches. Tourist bus rental Chennai, wedding, corporate, and outstation bus hire in Chennai with transparent pricing and professional drivers."
        />
        <meta property="og:url" content="https://chennaibusrental.in/home" />
        <meta property="og:image" content="https://chennaibusrental.in/Images/logo.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bus Rental in Chennai | AC & Non-AC Buses | Madurai Balaje Tours & Travels" />
        <meta
          name="twitter:description"
          content="Trusted Chennai bus rental for AC & Non-AC coaches. Tourist bus rental Chennai, wedding, corporate, and outstation bus hire in Chennai with transparent pricing and professional drivers."
        />
      </Helmet>

      <Hero />
      <SeoIntro />
      <LocalTariff />
      <Packages />
      <Occasions />
      <Gallery />
      <AreasPreview />
      <WhyUs />
      <Testimonials />
      <Contact />
    </>
  );
}