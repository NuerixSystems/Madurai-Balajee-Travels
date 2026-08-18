import { FaClipboardList, FaPencilRuler, FaCode, FaRocket, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import '../styles/Process.css'

const steps = [
  { 
    icon: FaClipboardList, 
    title: 'Planning', 
    desc: 'We understand your goals, audience, and requirements.',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
  },
  { 
    icon: FaPencilRuler, 
    title: 'Design', 
    desc: 'A clean, modern UI/UX tailored to your brand.',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
  },
  { 
    icon: FaCode, 
    title: 'Development', 
    desc: 'Your website is built with clean, scalable code.',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)'
  },
  { 
    icon: FaRocket, 
    title: 'Launch', 
    desc: 'We deploy, test, and hand your website over — live.',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)'
  },
]

// variant="summary" renders a condensed teaser (used on the homepage):
// step titles only, without the per-step descriptions, plus a single
// link to the dedicated /process page for the full walkthrough.
export default function Process({ as: HeadingTag = 'h2', variant = 'full' }) {
  if (variant === 'summary') {
    return (
      <section id="process" className="section process process--summary">
        <div className="container">
          <Reveal type="fade-up">
            <div className="section-header">
              <span className="eyebrow">How We Work</span>
              <HeadingTag className="section-title">
                Our <span>Development</span> Process
              </HeadingTag>
              <p className="section-description">
                From planning to launch, we follow a clear four-step process
                so you always know what's happening and when your site goes live.
              </p>
            </div>
          </Reveal>

          <Reveal type="fade-up" delay={60}>
            <div className="process__home-steps">
              {steps.map((s, i) => (
                <div className="process__home-step" key={s.title}>
                  <div className="process__icon-wrapper" style={{ background: s.gradient }}>
                    <s.icon className="process__icon" />
                  </div>
                  <h3>{s.title}</h3>
                  {i < steps.length - 1 && (
                    <FaArrowRight className="process__home-step-arrow" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal type="fade-up" delay={120}>
            <div className="process__home-cta">
              <Link to="/process" className="btn btn-primary">
                See Our Full Process
                <FaArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section id="process" className="section process">
      <div className="container">
        <Reveal type="fade-up">
          <div className="section-header">
            <span className="eyebrow">How We Work</span>
            <HeadingTag className="section-title">
              Our <span>Development</span> Process
            </HeadingTag>
            <p className="section-description">
              A streamlined approach to bring your vision to life
            </p>
          </div>
        </Reveal>

        <div className="process__steps">
          {steps.map((s, i) => (
            <Reveal key={s.title} type="fade-up" delay={i * 120} className="process__step-wrap">
              <div className="process__step">
                <div className="process__number-wrapper">
                  <span className="process__number">{String(i + 1).padStart(2, '0')}</span>
                </div>
                
                <div className="process__icon-wrapper" style={{ background: s.gradient }}>
                  <s.icon className="process__icon" />
                </div>
                
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                
                <div className="process__step-line" style={{ background: s.color }}></div>
              </div>
              
              {i < steps.length - 1 && (
                <div className="process__connector">
                  <div className="connector-line"></div>
                  <FaArrowRight className="connector-arrow" />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}