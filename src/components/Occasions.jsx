const OCCASIONS = [
  { title: "Buses for Wedding", img: "/Images/bus7.jpeg", icon: "fa-ring" },
  { title: "Buses for Tours", img: "/Images/kodaikanl.jpg", icon: "fa-map-marked-alt" },
  { title: "Airport Transfers", img: "/Images/bus9.jpeg", icon: "fa-plane-arrival" },
  { title: "Corporate Bus Rental", img: "/Images/bus1.jpg", icon: "fa-briefcase" },
  { title: "School & College Trips", img: "/Images/bus4.jpeg", icon: "fa-graduation-cap" },
  { title: "Temple & Pilgrimage Tours", img: "/Images/mahabalipuram.jpg", icon: "fa-om" },
];

// Duplicate the list so the CSS marquee animation can loop seamlessly.
const LOOPED_OCCASIONS = [...OCCASIONS, ...OCCASIONS];

export default function Occasions() {
  return (
    <section className="section occasions-section" id="occasions">
      <div className="section-header">
        <span className="section-eyebrow">What we're booked for</span>
        <h2 className="section-title"><i className="fas fa-calendar-check"></i> Select For Various Occasions</h2>
        <p className="section-desc">From weddings to corporate travel, we have the right bus for every occasion</p>
      </div>

      <div className="occasions-marquee-wrap">
        <div className="occasions-marquee-track">
          {LOOPED_OCCASIONS.map((occ, i) => (
            <div className="occasion-card" key={`${occ.title}-${i}`}>
              <img src={occ.img} alt={occ.title} loading="lazy" />
              <div className="occasion-overlay">
                <div className="occasion-icon"><i className={`fas ${occ.icon}`}></i></div>
                <h3>{occ.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
