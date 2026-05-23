'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  pulse: number
  pulseSpeed: number
}

interface Connection {
  from: Particle
  to: Particle
  opacity: number
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    const PARTICLE_COUNT = 80
    const CONNECTION_DISTANCE = 140
    const MOUSE_INFLUENCE = 120

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const init = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      }))
    }

    const getConnections = (): Connection[] => {
      const connections: Connection[] = []
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) {
            connections.push({
              from: particles[i],
              to: particles[j],
              opacity: (1 - dist / CONNECTION_DISTANCE) * 0.15,
            })
          }
        }
      }
      return connections
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines (subtle)
      ctx.strokeStyle = 'rgba(0, 209, 255, 0.03)'
      ctx.lineWidth = 1
      const gridSize = 80
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw connections
      const connections = getConnections()
      connections.forEach(({ from, to, opacity }) => {
        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y)
        gradient.addColorStop(0, `rgba(0, 209, 255, ${opacity})`)
        gradient.addColorStop(1, `rgba(124, 58, 237, ${opacity})`)
        ctx.beginPath()
        ctx.strokeStyle = gradient
        ctx.lineWidth = 0.5
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.stroke()
      })

      // Draw particles
      particles.forEach((p) => {
        p.pulse += p.pulseSpeed
        const pulsedOpacity = p.opacity + Math.sin(p.pulse) * 0.15

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4)
        grd.addColorStop(0, `rgba(0, 209, 255, ${pulsedOpacity * 0.5})`)
        grd.addColorStop(1, 'rgba(0, 209, 255, 0)')
        ctx.beginPath()
        ctx.fillStyle = grd
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2)
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.fillStyle = `rgba(0, 209, 255, ${pulsedOpacity})`
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Mouse influence
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      if (mx > 0) {
        const mouseGrad = ctx.createRadialGradient(mx, my, 0, mx, my, MOUSE_INFLUENCE)
        mouseGrad.addColorStop(0, 'rgba(0, 209, 255, 0.05)')
        mouseGrad.addColorStop(1, 'rgba(0, 209, 255, 0)')
        ctx.beginPath()
        ctx.fillStyle = mouseGrad
        ctx.arc(mx, my, MOUSE_INFLUENCE, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const update = () => {
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        // Mouse repulsion
        const dx = p.x - mouseRef.current.x
        const dy = p.y - mouseRef.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_INFLUENCE) {
          const force = (MOUSE_INFLUENCE - dist) / MOUSE_INFLUENCE
          p.vx += (dx / dist) * force * 0.04
          p.vy += (dy / dist) * force * 0.04
        }

        // Damping
        p.vx *= 0.99
        p.vy *= 0.99

        // Clamp speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 0.8) {
          p.vx = (p.vx / speed) * 0.8
          p.vy = (p.vy / speed) * 0.8
        }

        // Wrap edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })
    }

    const animate = () => {
      update()
      draw()
      animationRef.current = requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const handleResize = () => {
      resize()
      init()
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0B0F19]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0B0F19] to-[#111827]" />

      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00D1FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#00D1FF]/4 blur-[80px] pointer-events-none" />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Horizon line */}
      <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D1FF]/20 bg-[#00D1FF]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
              <span className="text-xs text-[#00D1FF] font-medium tracking-widest uppercase">AI Consulting Partner</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold leading-none tracking-[-0.04em]"
              style={{ fontSize: 'clamp(72px, 12vw, 160px)' }}
            >
              <span className="text-gradient-cyan">THE AI</span>
              <br />
              <span className="text-white/90">SHIFT</span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <p className="text-2xl lg:text-3xl font-noto font-light text-white/80 leading-relaxed tracking-wide">
              企業の未来を、
              <br className="sm:hidden" />
              AIでアップデートする。
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base lg:text-lg text-text-muted font-noto font-light leading-loose max-w-2xl mb-12"
          >
            株式会社True Colorsは、Claude・ChatGPTなどの生成AIを活用し、
            <br className="hidden sm:block" />
            企業ごとの課題に合わせたAI導入支援を行っています。
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#cta"
              className="group relative overflow-hidden px-8 py-4 rounded-full font-medium text-white text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,209,255,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF] to-[#7C3AED] rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/90 to-[#7C3AED]/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-105" />
              <span className="relative z-10 flex items-center gap-2 font-noto">
                無料AI相談をする
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            <a
              href="#flow"
              className="group flex items-center gap-2 px-6 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 text-text-secondary hover:text-white text-base"
            >
              <span className="font-noto">AI導入診断を受ける</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-text-muted/60 tracking-widest uppercase font-display">Scroll</span>
        <div className="w-px h-12 overflow-hidden">
          <motion.div
            className="w-full h-full bg-gradient-to-b from-[#00D1FF]/60 to-transparent"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
