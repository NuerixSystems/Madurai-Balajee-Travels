// components/Confetti.jsx
import { useEffect, useRef } from 'react'

export default function Confetti({ count = 50, colors = ['#2563eb', '#06b6d4', '#f59e0b', '#10b981', '#ef4444'] }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height - canvas.height
        this.size = Math.random() * 6 + 2
        this.speedX = Math.random() * 4 - 2
        this.speedY = Math.random() * 4 + 2
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.rotation = Math.random() * 360
        this.rotationSpeed = Math.random() * 10 - 5
        this.opacity = 1
        this.deceleration = 0.98
      }

      update() {
        this.x += this.speedX
        this.speedY += 0.05
        this.y += this.speedY
        this.rotation += this.rotationSpeed
        this.speedX *= this.deceleration
        this.speedY *= this.deceleration
        this.opacity -= 0.005

        if (this.opacity < 0) this.opacity = 0
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate((this.rotation * Math.PI) / 180)
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.fillRect(-this.size/2, -this.size/4, this.size, this.size/2)
        ctx.restore()
      }
    }

    const init = () => {
      particles = []
      for (let i = 0; i < count; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      let active = false
      particles.forEach(particle => {
        particle.update()
        particle.draw()
        if (particle.opacity > 0) active = true
      })

      if (active) {
        animationId = requestAnimationFrame(animate)
      }
    }

    init()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [count, colors])

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }} />
}