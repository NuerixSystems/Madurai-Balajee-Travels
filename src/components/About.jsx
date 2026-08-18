import {
  FaCheckCircle,
  FaBullseye,
  FaEye,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import "../styles/About.css";

const whatWeBuild = [
  "Business Websites",
  "Landing Pages",
  "Portfolio Websites",
  "E-Commerce Websites",
  "React Applications",
  "Custom Web Applications",
];

// variant="summary" renders a short teaser (used on the homepage) instead
// of the full About content, which lives on the dedicated /about page.
// This avoids shipping the same paragraphs/lists on two URLs while keeping
// the section visually present on the homepage.
export default function About({ as: HeadingTag = 'h2', variant = 'full' }) {
  if (variant === 'summary') {
    return (
      <section className="about section" id="about">
        <div className="container">
          <Reveal type="fade-up">
            <div className="section-header">
              <span className="eyebrow">About Us</span>
              <HeadingTag className="section-title">
                Building Digital Experiences <br />
                <span>That Drive Results</span>
              </HeadingTag>
              <p className="section-description">
                We're a Chennai-based web development and digital marketing
                team building beautiful, fast and SEO-friendly websites,
                apps and campaigns that help businesses grow online.
              </p>
            </div>
          </Reveal>

          <Reveal type="fade-up" delay={80}>
            <div className="about__home-cta">
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
                <FaArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="about section" id="about">
      <div className="container">
        <Reveal type="fade-up">
          <div className="section-header">
            <span className="eyebrow">About Us</span>
            <HeadingTag className="section-title">
              Building Digital Experiences <br />
              <span>That Drive Results</span>
            </HeadingTag>
            <p className="section-description">
              NuerixDigital helps businesses establish a strong online presence
              through beautiful, fast and SEO-friendly websites.
            </p>
          </div>
        </Reveal>

        <div className="about__grid">
          <Reveal type="slide-right">
            <div className="about__content">
              <h3>Who We Are</h3>
              <p>
                We're a Chennai-based web development and digital marketing
                team creating professional websites that combine modern
                design, performance and business strategy. Every project is
                carefully crafted to increase customer engagement and
                business growth.
              </p>
              <ul className="about__list">
                {whatWeBuild.map((item) => (
                  <li key={item}>
                    <FaCheckCircle />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal type="slide-left">
            <div className="about__cards">
              <div className="about__info-card">
                <div className="card-icon-wrapper mission-icon">
                  <FaBullseye className="about__card-icon" />
                </div>
                <h3>Our Mission</h3>
                <p>
                  Deliver high-quality websites that help businesses grow
                  through technology and creativity.
                </p>
              </div>
              <div className="about__info-card">
                <div className="card-icon-wrapper vision-icon">
                  <FaEye className="about__card-icon" />
                </div>
                <h3>Our Vision</h3>
                <p>
                  Become a trusted digital partner for startups and businesses
                  around the world.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}