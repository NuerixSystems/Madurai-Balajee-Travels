import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
    document.title =
      "Madurai Balaje Tours & Travels | AC & Non-AC Bus Rental in Chennai";
  }, []);

 useEffect(() => {
  // "/home" -> ["", "home"] -> segment 2 is undefined -> scroll to top
  // "/home/packages" -> ["", "home", "packages"] -> segment 2 is "packages"
  const section = pathname.split("/")[2];

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