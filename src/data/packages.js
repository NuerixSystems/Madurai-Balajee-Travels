// Sabarimala pilgrimage tour packages — multi-day fixed itineraries with
// total km coverage. Shown as a "Packages" section on the home page and in
// full on the /tariff page.
export const TOUR_PACKAGES = [
  {
    id: 1,
    title: "Route 1",
    duration: "5 Days",
    km: "1,500 Kms",
    stops: [
      "Chennai", "Trichy", "Suruli Falls", "Kumily", "Palani", "Srirangam",
      "Samayapuram", "Brahma Temple", "Melmaruvathur", "Chennai",
    ],
  },
  {
    id: 2,
    title: "Route 2",
    duration: "6 Days",
    km: "1,800 Kms",
    stops: [
      "Chennai", "Thiruvannamalai", "Salem", "Maruthamalai", "Isha",
      "Guruvayur", "Pamba", "Courtallam", "Srivilliputhur",
      "Thiruparankundram", "Madurai", "Pazhamudircholai", "Alagarkoil",
      "Palani", "Srirangam", "Samayapuram", "Melmaruvathur", "Chennai",
    ],
  },
  {
    id: 3,
    title: "Route 3",
    duration: "7 Days",
    km: "2,100 Kms",
    stops: [
      "Chennai", "Rathnagiri", "Bavani", "Mettur", "Isha", "Maruthamalai",
      "Guruvayur", "Pamba", "Courtallam", "Thiruchendur", "Vana Thirupathi",
      "Thiruparankundram", "Madurai", "Pazhamudircholai", "Alagarkoil",
      "Palani", "Srirangam", "Samayapuram", "Melmaruvathur", "Chennai",
    ],
  },
  {
    id: 4,
    title: "Route 4",
    duration: "7 Days",
    km: "2,100 Kms",
    stops: [
      "Chennai", "Pondicherry", "Chidambaram", "Sirkazhi",
      "Vaitheeswarankoil", "Thirukadaiyur", "Kumbakonam", "Swamimalai",
      "Kundrakudi", "Pillayarpatti", "Devipattinam", "Rameshwaram",
      "Pazhamudircholai", "Alagarkoil", "Madurai", "Thiruparankundram",
      "Srivilliputhur", "Courtallam", "Pamba", "Palani", "Srirangam",
      "Samayapuram", "Melmaruvathur", "Chennai",
    ],
  },
  {
    id: 5,
    title: "Route 5",
    duration: "8 Days",
    km: "2,400 Kms",
    stops: [
      "Chennai", "Rathnagiri", "Bavani", "Mettur", "Isha", "Maruthamalai",
      "Guruvayur", "Pamba", "Courtallam", "Thiruchendur", "Rameshwaram",
      "Devipattinam", "Kundrakudi", "Pillayarpatti", "Alagarkoil", "Madurai",
      "Thiruparankundram", "Palani", "Srirangam", "Samayapuram",
      "Melmaruvathur", "Chennai",
    ],
  },
];

// Bus rent for the tour packages above — 300 Kms/day included, extra Km
// billed per the rate shown.
export const PACKAGE_BUS_RENT = [
  { type: "40 / 54 Non-AC Seater", rate: "19,500", extraKm: "60" },
  { type: "40 / 54 AC Seater", rate: "22,500", extraKm: "70" },
  { type: "30 / 36 Non-AC Sleeper", rate: "24,000", extraKm: "80" },
  { type: "30 / 36 AC Sleeper", rate: "25,500", extraKm: "85" },
];

export const PACKAGE_NOTE =
  "Bus rent is calculated at 300 Kms coverage per day. A season surcharge of \u20B91,000/day applies from Dec 15th to Jan 15th. Driver batta, tollgate, parking, permit & check-post expenses are extra.";
