import {
  FaMobileAlt,FaBolt,FaSearch,FaShieldAlt,FaPaintBrush,FaLifeRing,FaCheckCircle,FaBullseye,FaEye
} from 'react-icons/fa'
import Reveal from './Reveal'
import '../styles/About.css'

const services=[
'Business Websites','Landing Pages','Portfolio Websites','E-Commerce Websites','React Applications','Custom Web Apps'
]
const why=[
{icon:FaMobileAlt,title:'Responsive'},
{icon:FaBolt,title:'Fast'},
{icon:FaSearch,title:'SEO'},
{icon:FaShieldAlt,title:'Secure'},
{icon:FaPaintBrush,title:'Modern UI'},
{icon:FaLifeRing,title:'Support'},
]

export default function About(){
return(
<section id="about" className="about section">
<div className="container">
<Reveal type="fade-up">
<div className="section-header">
<span className="eyebrow">About Us</span>
<h2 className="section-title">About NuerixSystems</h2>
<p className="section-description">We build fast, responsive and SEO-friendly websites that help businesses grow online.</p>
</div>
</Reveal>

<div className="about__grid">
<Reveal type="slide-right">
<div className="about__content">
<h3>Who We Are</h3>
<p>NuerixSystems creates modern websites with clean UI, performance and business-focused design.</p>
<ul className="about__list">
{services.map(s=><li key={s}><FaCheckCircle/>{s}</li>)}
</ul>
</div>
</Reveal>

<Reveal type="slide-left">
<div className="about__cards">
<div className="about__info-card">
<FaBullseye className="about__card-icon"/>
<h3>Mission</h3>
<p>Deliver high-quality websites that help businesses succeed online.</p>
</div>
<div className="about__info-card">
<FaEye className="about__card-icon"/>
<h3>Vision</h3>
<p>Become a trusted technology partner for startups and businesses.</p>
</div>
</div>
</Reveal>
</div>

{/* <div className="why-us">
{why.map((w,i)=><Reveal key={w.title} type="fade-up" delay={i*60}>
<div className="why-card">
<w.icon className="why-icon"/>
<h3>{w.title}</h3>
</div>
</Reveal>)}
</div> */}

</div>
</section>
)}