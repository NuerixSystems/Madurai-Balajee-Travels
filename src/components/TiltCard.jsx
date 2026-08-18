// components/TiltCard.jsx
import { useState, useRef } from 'react'

export default function TiltCard({ children, className = '', maxTilt = 10, glare = true }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    
    const tiltX = (y - 0.5) * maxTilt * 2
    const tiltY = (x - 0.5) * maxTilt * -2
    
    setTilt({ x: tiltX, y: tiltY })
  }

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
        setTilt({ x: 0, y: 0 })
      }}
      style={{
        transform: isHovering 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)` 
          : 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
        transition: 'transform 0.2s ease',
        position: 'relative',
      }}
    >
      {children}
      {glare && isHovering && (
        <div 
          className="tilt-card__glare"
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at ${50 + tilt.y * 5}% ${50 + tilt.x * 5}%, rgba(255,255,255,0.15), transparent 70%)`,
            borderRadius: 'inherit',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  )
}