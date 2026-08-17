import { useMemo, useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { fleetGallery } from "../data/gallery.js";

// One fleet card: a single fixed cover photo. Clicking it opens the
// lightbox where all of that bus's 3-4 photos can be browsed.
function GalleryCard({ item, onOpen }) {
  const images = item.images && item.images.length ? item.images : [item.src];
  const cover = images[0];

  return (
    <div className="gallery-item" onClick={() => onOpen(item)}>
      <span className="gallery-badge">{item.type === "ac" ? "AC" : "Non-AC"}</span>
      <img src={cover} alt={item.alt} loading="lazy" />
      <div className="gallery-overlay">
        <span className="gallery-label">{item.label}</span>
        <span className="gallery-desc">{item.desc}</span>
        {images.length > 1 && (
          <span className="gallery-count">
            <i className="fas fa-images"></i> {images.length} photos
          </span>
        )}
      </div>
    </div>
  );
}

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState("all");
  const [seatFilter, setSeatFilter] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  // Pick up ?type=ac|non-ac and ?seats=NN from links like the navbar's
  // "Bus Types" dropdown, e.g. /?type=ac&seats=45#gallery
  useEffect(() => {
    const type = searchParams.get("type");
    const seats = searchParams.get("seats");
    if (type === "ac" || type === "non-ac") setFilter(type);
    if (seats) setSeatFilter(Number(seats));
  }, [searchParams]);

  const counts = useMemo(
    () => ({
      all: fleetGallery.length,
      ac: fleetGallery.filter((g) => g.type === "ac").length,
      "non-ac": fleetGallery.filter((g) => g.type === "non-ac").length,
    }),
    []
  );

  const visibleFleet = useMemo(() => {
    return fleetGallery.filter((g) => {
      const typeMatch = filter === "all" || g.type === filter;
      const seatMatch = !seatFilter || g.seats === seatFilter;
      return typeMatch && seatMatch;
    });
  }, [filter, seatFilter]);

  const clearSeatFilter = () => {
    setSeatFilter(null);
    const next = new URLSearchParams(searchParams);
    next.delete("seats");
    setSearchParams(next, { replace: true });
  };

  const openLightbox = (item) => {
    setLightbox({ item, index: 0 });
  };

  const lightboxImages = lightbox
    ? lightbox.item.images && lightbox.item.images.length
      ? lightbox.item.images
      : [lightbox.item.src]
    : [];

  const showPrev = useCallback((e) => {
    e && e.stopPropagation();
    setLightbox((l) =>
      l ? { ...l, index: (l.index - 1 + lightboxImages.length) % lightboxImages.length } : l
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxImages.length]);

  const showNext = useCallback((e) => {
    e && e.stopPropagation();
    setLightbox((l) =>
      l ? { ...l, index: (l.index + 1) % lightboxImages.length } : l
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxImages.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showPrev, showNext]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
  }, [lightbox]);

  return (
    <section className="section" id="gallery">
      <div className="section-header">
        <span className="section-eyebrow">Our fleet</span>
        <h2 className="section-title"><i className="fas fa-images"></i> Bus Gallery</h2>
        <p className="section-desc">Browse our AC and Non-AC buses separately, or view the full fleet</p>
      </div>

      <div className="gallery-tabs" role="tablist" aria-label="Filter buses by type">
        {[
          { key: "all", label: "All Buses" },
          { key: "ac", label: "AC" },
          { key: "non-ac", label: "Non-AC" },
        ].map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={filter === tab.key}
            className={`gallery-tab${filter === tab.key ? " active" : ""}`}
            onClick={() => setFilter(tab.key)}
          >
            {tab.label} <span className="count">({counts[tab.key]})</span>
          </button>
        ))}
        {seatFilter && (
          <button className="gallery-tab active seat-filter-chip" onClick={clearSeatFilter}>
            {seatFilter} Seater <i className="fas fa-times"></i>
          </button>
        )}
      </div>

      <div className="gallery-grid">
        {visibleFleet.length === 0 && <p className="gallery-empty">No buses in this category yet.</p>}
        {visibleFleet.map((item, i) => (
          <GalleryCard key={i} item={item} onOpen={openLightbox} />
        ))}
      </div>

      {lightbox && (
        <div className="gallery-modal" onClick={() => setLightbox(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            {lightboxImages.length > 1 && (
              <button className="modal-nav modal-prev" aria-label="Previous image" onClick={showPrev}>
                <i className="fas fa-chevron-left"></i>
              </button>
            )}

            <img src={lightboxImages[lightbox.index]} alt={lightbox.item.alt} />

            {lightboxImages.length > 1 && (
              <button className="modal-nav modal-next" aria-label="Next image" onClick={showNext}>
                <i className="fas fa-chevron-right"></i>
              </button>
            )}

            <button className="modal-close" aria-label="Close" onClick={() => setLightbox(null)}>
              <i className="fas fa-times"></i>
            </button>

            {lightboxImages.length > 1 && (
              <div className="modal-dots" onClick={(e) => e.stopPropagation()}>
                {lightboxImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`modal-dot${i === lightbox.index ? " active" : ""}`}
                    aria-label={`Show image ${i + 1}`}
                    onClick={() => setLightbox((l) => ({ ...l, index: i }))}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
