// components/MouseParallax.jsx
import { useEffect, useRef, useState } from 'react'

export default function MouseParallax({ children, speed = 0.05, className = '' }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMouse({ x, y })
    }

    const element = ref.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  useEffect(() => {
    let animationId

    const animate = () => {
      setPosition(prev => ({
        x: prev.x + (mouse.x - prev.x) * speed,
        y: prev.y + (mouse.y - prev.y) * speed
      }))
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [mouse, speed])

  return (
    <div 
      ref={ref}
      className={className}
      style={{
        transform: `translate(${position.x * 20}px, ${position.y * 20}px)`,
        transition: 'transform 0.1s ease'
      }}
    >
      {children}
    </div>
  )
}