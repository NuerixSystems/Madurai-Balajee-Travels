// Fleet gallery — split by AC / Non-AC, each tagged with a seat count so the
// Navbar's "Bus Types" dropdown can deep-link into a filtered view.
//
// Each entry now has an `images` array (3-4 photos) instead of a single
// `src` — the Gallery component turns this into a mini carousel per card
// with dot navigation and auto-play. `src` is kept as the cover/thumbnail
// (first image) for anything that still expects a single image.
//
// Note: a few entries intentionally reuse the same placeholder photos
// (hero/bus1/bus4/bus5/bus6/bus7/bus9) with different captions — swap in
// real photos of each bus in public/Images/ and update the `images` arrays
// below when you have them.
// bus8.jpeg and images10.jpeg are left out because they are composite/collage
// images (multiple bus photos combined into one file), which look confusing
// inside a single-bus carousel or the lightbox.
export const fleetGallery = [
  // ---------------- AC (8) ----------------
  {
    src: "/Images/hero.jpg",
    images: ["/Images/hero.jpg", "/Images/bus1.jpg", "/Images/bus9.jpeg"],
    alt: "AC Sleeper Bus",
    label: "50 Seater AC Sleeper",
    desc: "Premium long-distance comfort",
    type: "ac",
    seats: 50,
  },
  {
    src: "/Images/bus1.jpg",
    images: ["/Images/bus1.jpg", "/Images/bus5.jpeg", "/Images/bus6.jpeg"],
    alt: "AC Luxury Bus",
    label: "45 Seater AC Luxury",
    desc: "Ideal for corporate & weddings",
    type: "ac",
    seats: 45,
  },
  {
    src: "/Images/bus5.jpeg",
    images: ["/Images/bus5.jpeg", "/Images/bus7.jpeg", "/Images/hero.jpg"],
    alt: "AC Bus Interior",
    label: "40 Seater AC Pushback",
    desc: "Reclining seats, cool & quiet",
    type: "ac",
    seats: 40,
  },
  {
    src: "/Images/bus6.jpeg",
    images: ["/Images/bus6.jpeg", "/Images/bus9.jpeg", "/Images/bus1.jpg"],
    alt: "AC Bus Fleet",
    label: "36 Seater AC",
    desc: "Perfect for small group outings",
    type: "ac",
    seats: 36,
  },
  {
    src: "/Images/bus9.jpeg",
    images: ["/Images/bus9.jpeg", "/Images/bus4.jpeg", "/Images/bus5.jpeg"],
    alt: "AC Sleeper Coach",
    label: "50 Seater AC Sleeper Coach",
    desc: "Overnight outstation trips",
    type: "ac",
    seats: 50,
  },
  {
    src: "/Images/bus6.jpeg",
    images: ["/Images/bus6.jpeg", "/Images/bus7.jpeg", "/Images/bus9.jpeg", "/Images/hero.jpg"],
    alt: "AC Volvo Multi-Axle Bus",
    label: "45 Seater AC Volvo Multi-Axle",
    desc: "Extra legroom for long routes",
    type: "ac",
    seats: 45,
  },
  {
    src: "/Images/bus6.jpeg",
    images: ["/Images/bus6.jpeg", "/Images/bus1.jpg", "/Images/bus4.jpeg"],
    alt: "AC Semi Sleeper Bus",
    label: "40 Seater AC Semi Sleeper",
    desc: "Comfortable seats for day trips",
    type: "ac",
    seats: 40,
  },
  {
    src: "/Images/bus4.jpeg",
    images: ["/Images/bus4.jpeg", "/Images/bus5.jpeg", "/Images/bus6.jpeg", "/Images/bus9.jpeg"],
    alt: "AC Mini Bus",
    label: "32 Seater AC Mini Bus",
    desc: "Nimble rides for small groups",
    type: "ac",
    seats: 32,
  },

  // ---------------- Non-AC (4) ----------------
  {
    src: "/Images/bus4.jpeg",
    images: ["/Images/bus4.jpeg", "/Images/bus7.jpeg", "/Images/bus1.jpg"],
    alt: "Non-AC Bus",
    label: "45 Seater Non-AC",
    desc: "Budget-friendly group travel",
    type: "non-ac",
    seats: 45,
  },
  {
    src: "/Images/bus7.jpeg",
    images: ["/Images/bus7.jpeg", "/Images/bus9.jpeg", "/Images/bus6.jpeg"],
    alt: "Non-AC Bus Fleet",
    label: "40 Seater Non-AC",
    desc: "Great for school & local trips",
    type: "non-ac",
    seats: 40,
  },
  {
    src: "/Images/bus1.jpg",
    images: ["/Images/bus1.jpg", "/Images/bus4.jpeg", "/Images/hero.jpg"],
    alt: "Non-AC Bus Interior",
    label: "36 Seater Non-AC",
    desc: "Reliable everyday commutes",
    type: "non-ac",
    seats: 36,
  },
  {
    src: "/Images/bus5.jpeg",
    images: ["/Images/bus5.jpeg", "/Images/bus6.jpeg", "/Images/bus7.jpeg", "/Images/bus4.jpeg"],
    alt: "Non-AC Deluxe Bus",
    label: "50 Seater Non-AC Deluxe",
    desc: "Spacious seating for large groups",
    type: "non-ac",
    seats: 50,
  },
];

// Destination highlights gallery.
export const destinationGallery = [
  { src: "/Images/madurai.jpg", alt: "Madurai Temple", label: "Madurai", desc: "The Temple City", large: true },
  { src: "/Images/pondycherry.jpg", alt: "Pondicherry Beach", label: "Pondicherry" },
  { src: "/Images/kodaikanl.jpg", alt: "Kodaikanal Lake", label: "Kodaikanal" },
  { src: "/Images/mahabalipuram.jpg", alt: "Mahabalipuram Temple", label: "Mahabalipuram" },
  { src: "/Images/images10.jpeg", alt: "Rameswaram Bridge", label: "Rameswaram", desc: "The Pilgrim Isle" },
];
