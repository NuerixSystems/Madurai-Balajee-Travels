// Shared tariff & FAQ data — used by both the condensed home-page "Local
// Tariff" section and the full /tariff page, so rates only need updating
// in one place.
//
// Each package row shows all-inclusive pricing across four bus categories:
// Non A/C, A/C, AC Sleeper and Volvo Seater. A `null` price means that bus
// category isn't offered for that route.
export const LOCAL_TARIFF = [
  { place: "Chennai Local", days: "1", km: "100", nonAc: "8,500", ac: "11,500", acSleeper: null, volvo: "15,500" },
  { place: "Mahabalipuram", days: "1", km: "150", nonAc: "12,500", ac: "15,500", acSleeper: null, volvo: "18,500" },
  { place: "Mahabalipuram - 2 Day", days: "2", km: "150", nonAc: "20,000", ac: "29,000", acSleeper: null, volvo: "35,000" },
  { place: "Kodaikanal / Ooty", days: "3", km: "1,200", nonAc: "78,000", ac: "98,000", acSleeper: "1,20,000", volvo: "1,30,000" },
  { place: "Munnar", days: "3", km: "1,400", nonAc: "86,000", ac: "1,05,000", acSleeper: "1,25,000", volvo: "1,35,000" },
  { place: "Yercaud", days: "2", km: "800", nonAc: "53,000", ac: "64,000", acSleeper: "70,000", volvo: "80,000" },
  { place: "Yelagiri - 1 Day", days: "1", km: "1,200", nonAc: "28,500", ac: "37,000", acSleeper: "46,000", volvo: "52,000" },
  { place: "Yelagiri - 2 Days", days: "2", km: "1,200", nonAc: "33,000", ac: "45,000", acSleeper: "64,000", volvo: "64,000" },
  { place: "Thirukadiyur", days: "2", km: "600", nonAc: "39,000", ac: "49,000", acSleeper: "55,000", volvo: "59,000" },
  { place: "Tirupathi - 1 Day", days: "1", km: "300", nonAc: "22,500", ac: "28,500", acSleeper: "33,500", volvo: "35,500" },
  { place: "Tirupathi - 2 Days", days: "2", km: "350", nonAc: "33,500", ac: "40,000", acSleeper: "45,500", volvo: "48,500" },
  { place: "Vellore - 1 Day", days: "1", km: "300", nonAc: "19,500", ac: "24,500", acSleeper: null, volvo: "33,000" },
  { place: "Vellore - 2 Days", days: "2", km: "350", nonAc: "29,500", ac: "36,500", acSleeper: null, volvo: "42,500" },
  { place: "Tindivanam - 1 Day", days: "1", km: "250", nonAc: "22,500", ac: "29,000", acSleeper: null, volvo: "33,500" },
  { place: "Tindivanam - 2 Days", days: "2", km: "300", nonAc: "33,000", ac: "40,000", acSleeper: null, volvo: "45,500" },
  { place: "Kanchipuram", days: "1", km: "200", nonAc: "15,500", ac: "22,500", acSleeper: null, volvo: "27,500" },
  { place: "Pondicherry - 1 Day", days: "1", km: "300", nonAc: "18,500", ac: "28,500", acSleeper: "32,500", volvo: "35,500" },
  { place: "Pondicherry - 2 Day", days: "2", km: "350", nonAc: "30,000", ac: "40,000", acSleeper: "50,000", volvo: "55,000" },
];

// A short pick from LOCAL_TARIFF shown on the home page — the full list
// lives on the /tariff page so the home page doesn't get too long.
export const LOCAL_TARIFF_HIGHLIGHTS = [
  "Chennai Local",
  "Mahabalipuram",
  "Kodaikanal / Ooty",
  "Munnar",
  "Yercaud",
  "Yelagiri - 1 Day",
  "Tirupathi - 1 Day",
  "Pondicherry - 1 Day",
].map((place) => LOCAL_TARIFF.find((row) => row.place === place));

export const FAQS = [
  {
    q: "What types of buses do you offer for rental?",
    a: "We offer a diverse fleet of 36, 40, 45, and 50 seater AC and Non-AC buses, including AC Sleeper and Pushback options, to suit every group size and budget.",
  },
  {
    q: "How can I book a bus with Madurai Balaje Tours & Travels?",
    a: "You can book easily by calling us or messaging on WhatsApp with your travel date, route, and passenger count. Our team will confirm the right bus and share a clear quote.",
  },
  {
    q: "What amenities are available on your buses?",
    a: "Our buses come with comfortable pushback seating, air conditioning (on AC buses), ample luggage space, and experienced drivers who prioritise your comfort and safety.",
  },
  {
    q: "Are drivers provided with the rental buses?",
    a: "Yes, every booking includes an experienced, licensed driver who is familiar with the route and focused on passenger safety.",
  },
  {
    q: "Can I customize my travel itinerary or route?",
    a: "Absolutely. Let us know your stops, route preferences, and any special requirements, and we'll tailor the itinerary to your group's needs.",
  },
  {
    q: "Are there any additional charges apart from the quoted price?",
    a: "Our quotes generally include driver batta, toll, and permit charges. Any extra hours or extra kilometres beyond the package are billed at the standard rate, which we'll always confirm with you upfront.",
  },
  {
    q: "Is support available during the journey?",
    a: "Yes, our team is reachable by phone or WhatsApp throughout your trip for any assistance, changes, or emergencies.",
  },
];
