// components/TypingEffect.jsx
import { useState, useEffect } from 'react'

export default function TypingEffect({ texts, delay = 2000 }) {
  const [currentText, setCurrentText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        }
      } else {
        if (charIndex < texts[textIndex].length) {
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), delay)
        }
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, texts, delay])

  useEffect(() => {
    setCurrentText(texts[textIndex].substring(0, charIndex))
  }, [charIndex, textIndex, texts])

  return <span className="typing-effect">{currentText}<span className="cursor">|</span></span>
}