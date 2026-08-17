const SEARCH_GROUPS = [
  {
    title: "Bus Rental Services",
    items: [
      "Bus Rental Madurai", "Bus Hire Madurai", "AC Bus Rental Madurai",
      "Luxury Bus Rental Madurai", "Mini Bus Rental Madurai", "Tempo Traveller Madurai",
      "Tourist Bus Rental Madurai", "Bus Booking Madurai", "Bus Service Madurai",
      "Travels in Madurai", "Madurai Travels", "Best Bus Rental in Madurai",
      "Best Travels in Madurai", "Book AC Bus in Madurai", "Book Luxury Bus in Madurai",
    ],
  },
  {
    title: "Occasion & Trip Type",
    items: [
      "Hire Bus for Wedding Madurai", "Wedding Bus Rental Madurai", "Marriage Bus Rental Madurai",
      "Corporate Bus Rental Madurai", "Corporate Bus Hire Madurai", "College Tour Bus Rental Madurai",
      "College Tour Bus Madurai", "School Trip Bus Rental Madurai", "School Trip Bus Madurai",
      "Temple Tour Bus Rental Madurai", "Temple Tour Bus Madurai", "Pilgrimage Bus Rental Madurai",
      "Outstation Bus Rental Madurai", "Holiday Tour Bus Madurai", "Airport Pickup Bus Madurai",
      "Airport Transfer Madurai", "Staff Transportation Madurai", "Employee Transport Madurai",
      "Industrial Visit Bus Madurai", "Family Tour Bus Rental", "Group Tour Bus Rental",
      "Tour Package Madurai",
    ],
  },
  {
    title: "Bus Rental by City",
    items: [
      "Bus Rental Chennai", "Bus Rental Coimbatore", "Bus Rental Trichy", "Bus Rental Salem",
      "Bus Rental Tirunelveli", "Bus Rental Erode", "Bus Rental Tiruppur", "Bus Rental Kanyakumari",
      "Bus Rental Rameswaram", "Bus Rental Ooty", "Bus Rental Kodaikanal", "Bus Rental Yercaud",
    ],
  },
  {
    title: "Near You",
    items: [
      "Bus Rental Near Me", "Travels Near Me", "AC Bus Near Me", "Luxury Bus Near Me",
      "Mini Bus Near Me", "Tempo Traveller Near Me", "Bus Booking Near Me", "Tourist Bus Near Me",
    ],
  },
];

export default function PopularSearches() {
  return (
    <section className="section popular-searches" aria-label="Popular searches">
      <div className="section-header">
        <span className="section-eyebrow">Also searched for</span>
        <h2 className="section-title"><i className="fas fa-magnifying-glass"></i> Popular Searches</h2>
        <p className="section-desc">
          Madurai Balaje Tours &amp; Travels is the trusted choice whichever way people search
          for bus rental, wedding buses, corporate travel, or outstation tour packages in and
          around Madurai.
        </p>
      </div>

      <div className="search-groups">
        {SEARCH_GROUPS.map((group) => (
          <div className="search-group" key={group.title}>
            <h4>{group.title}</h4>
            <div className="search-tags">
              {group.items.map((item) => (
                <span className="search-tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
