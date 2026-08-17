// Fleet split by type so the Services section can render AC and Non-AC
// as two distinct groups.
export const acServices = [
  { icon: "fa-bus", title: "36 Seater", note: "AC", rate: "\u20B975/km", seats: 36 },
  { icon: "fa-bus", title: "40 Seater", note: "AC", rate: "\u20B975/km", seats: 40 },
  { icon: "fa-bus", title: "45 Seater", note: "AC", rate: "\u20B980/km", seats: 45 },
  { icon: "fa-bus", title: "50 Seater", note: "AC", rate: "\u20B980/km", seats: 50 },
];

export const nonAcServices = [
  { icon: "fa-bus", title: "36 Seater", note: "Non-AC", rate: "\u20B965/km", seats: 36 },
  { icon: "fa-bus", title: "40 Seater", note: "Non-AC", rate: "\u20B965/km", seats: 40 },
  { icon: "fa-bus", title: "45 Seater", note: "Non-AC", rate: "\u20B970/km", seats: 45 },
  { icon: "fa-bus", title: "50 Seater", note: "Non-AC", rate: "\u20B970/km", seats: 50 },
];

export const wideServices = [
  { icon: "fa-map-marked-alt", title: "Local Sightseeing", desc: "City Tours & Day Trips" },
  { icon: "fa-plane-arrival", title: "Airport Transfers", desc: "Pick & Drop Service" },
  { icon: "fa-road", title: "Outstation Trips", desc: "Long Distance Travel" },
  { icon: "fa-users", title: "Family & Group", desc: "Custom Tour Packages" },
  { icon: "fa-ring", title: "Weddings & Events", desc: "Special Occasions" },
  { icon: "fa-graduation-cap", title: "School Trips", desc: "Educational Tours" },
  { icon: "fa-briefcase", title: "Corporate Travel", desc: "Business & Office Commutes" },
  { icon: "fa-om", title: "Pilgrimage Tours", desc: "Religious & Spiritual Trips" },
];

export const destinations = [
  "Madurai", "Pondicherry", "Yercaud", "Mahabalipuram", "Thiruchendur",
  "Kodaikanal", "Rameswaram", "Kanyakumari", "Ooty",
];

// Ready-made package details shown alongside the plain per-km rates —
// gives customers a sense of what's included for common trip types.
export const packages = [
  {
    icon: "fa-ring",
    title: "Wedding Package",
    price: "Starts at \u20B99,500",
    duration: "1 Day / up to 250 KM",
    inclusions: [
      "Decorated AC or Non-AC bus",
      "Driver bata included",
      "Toll & permit charges included",
      "Extra KM billed at standard per-km rate",
    ],
  },
  {
    icon: "fa-briefcase",
    title: "Corporate Package",
    price: "Starts at \u20B98,000",
    duration: "1 Day / up to 200 KM",
    inclusions: [
      "AC bus with pickup & drop",
      "Driver bata included",
      "Toll & permit charges included",
      "Monthly / recurring billing available",
    ],
  },
  {
    icon: "fa-om",
    title: "Temple Tour Package",
    price: "Starts at \u20B910,500",
    duration: "1 Day / up to 300 KM",
    inclusions: [
      "AC or Non-AC bus for group pilgrimage",
      "Driver bata & waiting charges included",
      "Toll & permit charges included",
      "Multiple temple stops on one route",
    ],
  },
  {
    icon: "fa-graduation-cap",
    title: "School & College Trip Package",
    price: "Starts at \u20B97,500",
    duration: "1 Day / up to 150 KM",
    inclusions: [
      "Non-AC or AC bus options",
      "Experienced drivers for group travel",
      "Toll & permit charges included",
      "Discounted rates for recurring bookings",
    ],
  },
  {
    icon: "fa-road",
    title: "Outstation Package",
    price: "Custom quote",
    duration: "Multi-day / as per itinerary",
    inclusions: [
      "AC Sleeper or Pushback buses available",
      "Driver bata & night halt charges included",
      "Toll & permit charges included",
      "Flexible multi-city routing",
    ],
  },
  {
    icon: "fa-map-marked-alt",
    title: "Local Sightseeing Package",
    price: "Starts at \u20B94,500",
    duration: "Half Day / up to 80 KM",
    inclusions: [
      "AC or Non-AC bus for city sightseeing",
      "Driver bata included",
      "Multiple stop-and-wait points",
      "Ideal for family & friends outings",
    ],
  },
  {
    icon: "fa-plane-arrival",
    title: "Airport Transfer Package",
    price: "Starts at \u20B91,800",
    duration: "One-way / Pickup or Drop",
    inclusions: [
      "On-time airport pickup & drop",
      "Flight tracking for delays",
      "Comfortable AC bus with driver",
      "Group luggage space included",
    ],
  },
  {
    icon: "fa-users",
    title: "Family & Group Tour Package",
    price: "Starts at \u20B99,000",
    duration: "1 Day / up to 250 KM",
    inclusions: [
      "AC or Non-AC bus for family groups",
      "Driver bata included",
      "Toll & permit charges included",
      "Custom multi-spot itinerary planning",
    ],
  },
];
