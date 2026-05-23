'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const problems = [
  { text: '人手不足', en: 'Labor Shortage' },
  { text: '属人化', en: 'Knowledge Silo' },
  { text: '採用難', en: 'Hiring Crisis' },
  { text: '非効率業務', en: 'Inefficiency' },
  { text: 'DX未対応', en: 'No DX Yet' },
]

function ProblemItem({ text, en, index }: { text: string; en: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex items-baseline gap-6 py-8 border-b border-white/5 last:border-0 cursor-default"
    >
      {/* Number */}
      <span className="text-xs text-text-muted/40 font-mono w-8 shrink-0 pt-2">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Main text */}
      <div className="flex-1 overflow-hidden">
        <h3
          className="font-display font-bold text-white/10 group-hover:text-white/20 transition-all duration-500 leading-none tracking-tighter"
          style={{ fontSize: 'clamp(48px, 8vw, 112px)' }}
        >
          {text}
        </h3>
      </div>

      {/* En label */}
      <div className="hidden sm:flex flex-col items-end shrink-0">
        <span className="text-xs text-text-muted/30 font-display tracking-widest uppercase group-hover:text-[#00D1FF]/40 transition-colors duration-500">
          {en}
        </span>
      </div>

      {/* Hover line */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#00D1FF]/30 to-transparent group-hover:w-full transition-all duration-700 ease-out" />
    </motion.div>
  )
}

export default function Problem() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section
      ref={containerRef}
      className="relative py-32 lg:py-48 overflow-hidden bg-[#0B0F19]"
    >
      {/* Background text */}
      <motion.div
        style={{ y }}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] lg:text-[320px] font-display font-bold text-white/[0.015] leading-none pointer-events-none select-none whitespace-nowrap"
      >
        PROBLEM
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#00D1FF]/40" />
            <span className="text-xs text-[#00D1FF] font-display tracking-widest uppercase">Current State</span>
          </div>
          <h2 className="font-noto font-bold text-3xl lg:text-4xl text-white/80 leading-tight">
            多くの企業が、
            <br />
            同じ課題を抱えています。
          </h2>
        </motion.div>

        {/* Problem list */}
        <div>
          {problems.map((p, i) => (
            <ProblemItem key={p.text} text={p.text} en={p.en} index={i} />
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 max-w-xl"
        >
          <p className="text-lg text-text-muted font-noto font-light leading-loose">
            「AIを導入したいが、何から始めればいいかわからない」
            <br />
            そのひと言から、私たちとの会話は始まります。
          </p>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-[#00D1FF]/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
