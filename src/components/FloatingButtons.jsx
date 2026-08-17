import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.pageYOffset > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="floating-buttons">
      {show && (
        <button
          className="scroll-top-btn show"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
      <a href="tel:+919791135678" className="call-float" aria-label="Call Now">
        <i className="fas fa-phone-alt"></i>
        <span className="call-tooltip">Call Now</span>
      </a>
      <a
        href="https://wa.me/919791135678?text=Hi%20Madurai%20Balaje%2C%20I%20want%20to%20book%20a%20bus."
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
