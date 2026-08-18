import { useEffect, useRef, useState } from 'react'
import "../styles/Reveal.css";

/**
 * Reusable scroll-reveal wrapper with multiple animation types
 * @param {string} type - Animation type: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'slide-left' | 'slide-right'
 * @param {number} delay - Animation delay in milliseconds
 * @param {string} className - Additional CSS classes
 * @param {number} threshold - Intersection observer threshold (0-1)
 * @param {boolean} once - Whether to animate only once
 */
export default function Reveal({ 
  children, 
  type = 'fade-up', 
  delay = 0, 
  className = '',
  threshold = 0.15,
  once = true
}) {
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Skip if already animated and once is true
    if (once && hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          setHasAnimated(true)
          if (once) {
            observer.unobserve(el)
          }
        } else if (!once) {
          // Remove class when out of view for repeat animations
          el.classList.remove('in-view')
        }
      },
      { threshold: threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once, hasAnimated])

  // Determine animation class based on type
  const getAnimationClass = () => {
    const baseTypes = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'scale']
    if (baseTypes.includes(type)) {
      return type
    }
    // Default to fade-up if type not recognized
    return 'fade-up'
  }

  return (
    <div
      ref={ref}
      className={`reveal ${getAnimationClass()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: '0.6s'
      }}
    >
      {children}
    </div>
  )
}