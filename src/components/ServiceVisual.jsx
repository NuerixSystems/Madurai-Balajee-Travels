// src/components/ServiceVisual.jsx
//
// Reusable ANIMATED graphic panel used in place of stock photography on
// service pages. Real stock photos would be generic, licensed, and never
// truly match all 20 services — this stays on-brand, loads instantly, and
// looks sharp on every screen. Swap `variant` for a slightly different
// composition so the two hero/detail panels don't look identical.

import '../styles/ServiceVisual.css'

export default function ServiceVisual({ icon: Icon, variant = 'a', label }) {
  return (
    <div className={`service-visual service-visual--${variant}`} role="img" aria-label={label}>
      <div className="service-visual__shape service-visual__shape--1" />
      <div className="service-visual__shape service-visual__shape--2" />
      <div className="service-visual__grid" />

      {/* Corner brackets — subtle "scanner / viewfinder" tech accent */}
      <span className="service-visual__corner service-visual__corner--tl" />
      <span className="service-visual__corner service-visual__corner--tr" />
      <span className="service-visual__corner service-visual__corner--bl" />
      <span className="service-visual__corner service-visual__corner--br" />

      {/* Sweeping scan line */}
      <div className="service-visual__scan" />

      {/* Floating orbit particles */}
      <span className="service-visual__particle service-visual__particle--1" />
      <span className="service-visual__particle service-visual__particle--2" />
      <span className="service-visual__particle service-visual__particle--3" />

      <div className="service-visual__orbit">
        <div className="service-visual__icon-wrap">
          <Icon className="service-visual__icon" />
        </div>
      </div>
    </div>
  )
}
