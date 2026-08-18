// src/components/ScrollProgress.jsx
import { useState, useEffect } from 'react'
import '../styles/ScrollProgress.css'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = height > 0 ? (scrollTop / height) * 100 : 0
      setProgress(scrolled)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="scroll-progress" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
      <div className="scroll-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  )
}