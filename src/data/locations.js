
// src/data/locations.js
//
// One entry per locality. Add/remove freely — the page count scales
// automatically because LocationPage.jsx reads from this array.
//
// slug   -> used in the URL, e.g. /ac-bus-rent-in/korattur
// name   -> used in headings/body text, e.g. "Korattur"
//
// Tip: to eventually reach "400+ pages" like the reference site,
// combine this list with a second array of services
// (e.g. ["ac-bus-rent", "wedding-bus-rent", "corporate-bus-rent"])
// and generate routes as a cartesian product. Start with this
// single-service version first, confirm it works and is indexed,
// then expand.




export const chennaiAreas = [
  "Adyar", "Alandur", "Alwarpet", "Ambattur", "Anna Nagar",
  "Anna Nagar West", "Anna Salai", "Ashok Nagar", "Avadi", "Besant Nagar",

  "Broadway", "Chengalpattu", "Chintadripet", "Chromepet", "Egmore",
  "Ekkatuthangal", "Ennore", "George Town", "Guduvancheri", "Guindy",

  "Injambakkam", "Iyyappanthangal", "Keelkattalai", "Kelambakkam", "Kilpauk",
  "Kodambakkam", "Kolathur", "Korattur", "Kottivakkam", "Kotturpuram",

  "Koyambedu", "Madhavaram", "Madipakkam", "Manali", "Mandaveli",
  "Maraimalai Nagar", "Medavakkam", "Meenambakkam", "Mogappair", "Moolakadai",

  "Mount Road", "Mylapore", "Nandanam", "Nanganallur", "Navalur",
  "Neelankarai", "Nungambakkam", "OMR", "ECR", "Padi",

  "Palavakkam", "Pallavaram", "Pallikaranai", "Park Town", "Perambur",
  "Perungalathur", "Perungudi", "Poonamallee", "Porur", "Purasaiwakkam",

  "R A Puram", "Ramapuram", "Red Hills", "Royapettah", "Royapuram",
  "Saidapet", "Selaiyur", "Shenoy Nagar", "Sholinganallur", "Siruseri",

  "St Thomas Mount", "Tambaram", "Tambaram East", "Tambaram West", "Teynampet",
  "Thirumangalam", "Thirumullaivoyal", "Thiruvanmiyur", "Thoraipakkam", "T Nagar",

  "Tondiarpet", "Triplicane", "Urapakkam", "Vadapalani", "Valasaravakkam",
  "Vanagaram", "Vandalur", "Velachery", "Vepery", "Villivakkam",

  "Virugambakkam", "Washermanpet", "West Mambalam"
].map((name) => ({
  name,
  slug: name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-"),
}));

export const maduraiAreas = [
  "Anna Nagar", "KK Nagar", "Mattuthavani", "Thirunagar", "Simmakkal",
  "Goripalayam", "Tallakulam", "Arappalayam", "Bibikulam", "Koodal Nagar",

  "SS Colony", "Palanganatham", "Bypass Road", "Kalavasal", "Sellur",
  "Jaihindpuram", "Villapuram", "Avaniyapuram", "Pasumalai", "Kochadai",

  "Achampathu", "Anuppanadi", "Ellis Nagar", "Munichalai", "South Gate",
  "North Gate", "Periyar Bus Stand", "Yanaikkal", "Mahal", "Keelavasal",

  "Melur", "Othakadai", "Narimedu", "K Pudur", "Reserve Line",
  "Surveyor Colony", "Vilangudi", "Thathaneri", "Ponmeni", "Samayanallur",

  "Thiruparankundram", "Nagamalai Pudukottai", "Iyer Bungalow", "Karuppayurani", "Silaiman",
  "Kappalur", "Thoppur", "Paravai", "Alanganallur", "Vadipatti",

  "Thirumangalam", "Usilampatti", "Peraiyur", "Sholavandan", "Chekkanurani",
  "Kalligudi", "Elumalai", "Tirupparankundram", "Pudur", "Anaiyur",

  "Koodakovil", "Vandiyur", "Uthangudi", "Karuppayurani", "Kochadai",
  "Muthupatti", "Kamarajar Salai", "Arapalayam", "Sathamangalam", "Mahaboopalayam",

  "Viraganur", "Austinpatti", "TVS Nagar", "Thanakkankulam", "Achampathu",
  "Kadachanendal", "Kannanenthal", "Sambakulam", "Pykara", "Moolakarai"
].map((name) => ({
  name,
  slug: name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-"),
}));

export const bangaloreAreas = [
  "Whitefield", "Electronic City", "Marathahalli", "HSR Layout", "Koramangala",
  "Indiranagar", "MG Road", "Jayanagar", "JP Nagar", "Banashankari",

  "Rajajinagar", "Malleshwaram", "Yelahanka", "Hebbal", "RT Nagar",
  "Nagawara", "Manyata Tech Park", "Bellandur", "Sarjapur", "Sarjapur Road",

  "Brookefield", "KR Puram", "Mahadevapura", "Hoodi", "Kadugodi",
  "Varthur", "Domlur", "Ulsoor", "Frazer Town", "Cox Town",

  "Shivajinagar", "Richmond Town", "Richmond Road", "Lavelle Road", "Residency Road",
  "Basavanagudi", "Vijayanagar", "Magadi Road", "Peenya", "Yeshwanthpur",

  "Jalahalli", "Nelamangala", "Tumkur Road", "Bommanahalli", "Bommasandra",
  "Anekal", "Bannerghatta Road", "BTM Layout", "Arekere", "Begur",

  "Hennur", "Kalyan Nagar", "Horamavu", "Ramamurthy Nagar", "Banaswadi",
  "Kasturi Nagar", "CV Raman Nagar", "Murugeshpalya", "Kodihalli", "Old Airport Road",

  "Kengeri", "RR Nagar", "Mysore Road", "Uttarahalli", "Padmanabhanagar",
  "Kumaraswamy Layout", "Kanakapura Road", "Chandra Layout", "Nagarbhavi", "Basaveshwar Nagar",

  "Sahakar Nagar", "Vidyaranyapura", "Sanjay Nagar", "Mathikere", "Dollars Colony",
  "Sadashivanagar", "HBR Layout", "Thanisandra", "Jakkur", "Devanahalli"
].map((name) => ({
  name,
  slug: name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-"),
}));

export const otherCities = [
  "Chennai", "Coimbatore", "Madurai", "Trichy", "Salem",
  "Tirunelveli", "Erode", "Vellore", "Thoothukudi", "Dindigul",

  "Thanjavur", "Karur", "Namakkal", "Krishnagiri", "Dharmapuri",
  "Kanchipuram", "Tiruppur", "Sivakasi", "Virudhunagar", "Ramanathapuram",

  "Nagapattinam", "Mayiladuthurai", "Cuddalore", "Villupuram", "Kallakurichi",
  "Tenkasi", "Sivaganga", "Pudukkottai", "Ariyalur", "Perambalur",

  "Nilgiris", "Ooty", "Coonoor", "Kotagiri", "Pollachi",
  "Mettupalayam", "Gobichettipalayam", "Bhavani", "Sathyamangalam", "Udumalpet",

  "Palani", "Oddanchatram", "Kodaikanal", "Hosur", "Ranipet",
  "Tirupattur", "Ambur", "Gudiyatham", "Arakkonam", "Walajapet",

  "Chengalpattu", "Tambaram", "Maraimalai Nagar", "Avadi", "Poonamallee",
  "Kumbakonam", "Pattukkottai", "Mannargudi", "Thiruvarur", "Karaikal",

  "Nagercoil", "Marthandam", "Kanyakumari", "Kovilpatti", "Rajapalayam",
  "Srivilliputhur", "Aruppukkottai", "Paramakudi", "Rameswaram", "Devakottai",

  "Karaikudi", "Melur", "Usilampatti", "Thirumangalam", "Bodinayakanur",
  "Theni", "Periyakulam", "Cumbum", "Andipatti", "Chinnamanur",

  "Attur", "Mettur", "Rasipuram", "Komarapalayam", "Kulithalai",
  "Musiri", "Lalgudi", "Manapparai", "Sirkazhi", "Chidambaram"
].map((name) => ({
  name,
  slug: name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-"),
}));

const locations = [
  ...chennaiAreas,
  ...maduraiAreas,
  ...bangaloreAreas,
  ...otherCities
].filter(
  (location, index, self) =>
    index === self.findIndex((l) => l.slug === location.slug)
);


export default locations;
