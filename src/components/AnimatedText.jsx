// components/AnimatedText.jsx
import { useEffect, useRef, useState } from 'react'

export default function AnimatedText({ 
  text, 
  type = 'fade', 
  delay = 0,
  className = '',
  tag = 'span'
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClass = () => {
    const classes = {
      'fade': 'animate-fade-up',
      'slide-left': 'animate-slide-reveal-left',
      'slide-right': 'animate-slide-reveal-right',
      'slide-top': 'animate-slide-reveal-top',
      'slide-bottom': 'animate-slide-reveal-bottom',
      'scale': 'animate-zoom-in',
      'flip': 'animate-flip',
      'blur': 'animate-blur-in',
      'text-reveal': 'animate-text-reveal',
      'glitch': 'animate-glitch',
    }
    return classes[type] || 'animate-fade-up'
  }

  const Tag = tag

  return (
    <Tag 
      ref={ref}
      className={`${className} ${isVisible ? getAnimationClass() : ''}`}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {text}
    </Tag>
  )
}