import { useState } from "react";

// Hero media: a single looping landscape video. No image slides.
const HERO_VIDEO = { src: "/Videos/bus2.mp4", poster: "/Images/hero.jpg", alt: "Madurai Balaje Bus" };

function HeroVideo() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="hero-image-wrap hero-video-frame">
      {!videoFailed ? (
        <video
          className="hero-video"
          poster={HERO_VIDEO.poster}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
        >
          <source src={HERO_VIDEO.src} type="video/mp4" />
        </video>
      ) : (
        <img src={HERO_VIDEO.poster} alt={HERO_VIDEO.alt} loading="lazy" className="bus-photo" />
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">Premium Bus Rentals in Chennai</p>
          <h2>Safe, Comfortable & <span className="accent">Memorable</span> Journeys</h2>
          <p className="hero-sub">Across South India · Family & Group Travel · 36–50 Seater Buses</p>
          <div className="hero-badges">
            <span><i className="fas fa-shield-alt"></i> Safe Travel</span>
            <span><i className="fas fa-clock"></i> On-time</span>
            <span><i className="fas fa-users"></i> 36–50 Seater</span>
          </div>
          <div className="hero-cta">
            <a href="tel:+919791135678" className="btn btn-primary">
              <i className="fas fa-phone-alt"></i> Call Now <span className="cta-phone">: +91 97911 35678</span>
            </a>
            <a
              href="https://wa.me/919791135678?text=Hi%20Madurai%20Balaje%2C%20I%20want%20to%20book%20a%20bus."
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
