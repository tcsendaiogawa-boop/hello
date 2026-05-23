'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section id="cta" ref={containerRef} className="relative py-32 lg:py-48 bg-[#0B0F19] overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0B0F19] to-[#0B0F19]" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00D1FF]/6 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-[#7C3AED]/8 blur-[80px] pointer-events-none" />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 209, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 209, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Scan line animation */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/20 to-transparent pointer-events-none"
        animate={{ y: ['-20px', 'calc(100% + 20px)'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        style={{ top: 0 }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00D1FF]/40" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D1FF]/20 bg-[#00D1FF]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
            <span className="text-xs text-[#00D1FF] font-display tracking-widest uppercase">Free Consultation</span>
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00D1FF]/40" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-noto font-bold leading-tight mb-8"
          style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}
        >
          まずは無料で、
          <br />
          <span className="text-gradient-cyan">あなたの会社にAIが必要か</span>
          <br />
          診断します。
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-text-muted font-noto font-light leading-loose mb-12 max-w-2xl mx-auto"
        >
          AIのことがよくわからなくても大丈夫です。
          <br />
          「何に困っているか」を話していただくだけで、可能性が見えてきます。
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="mailto:info@truecolors.ai"
            className="group relative overflow-hidden px-10 py-5 rounded-full font-medium text-white text-lg font-noto transition-all duration-300 hover:shadow-[0_0_60px_rgba(0,209,255,0.25)]"
          >
            {/* Button background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF] to-[#7C3AED] rounded-full" />
            <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full -translate-x-full"
              animate={{ x: ['−100%', '200%'] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            />

            <span className="relative z-10 flex items-center gap-3">
              無料AI相談をする
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Trust markers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs text-text-muted/50 font-noto"
        >
          {[
            '完全無料・契約不要',
            'オンライン対応',
            '全国対応',
            '押し売りなし',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#00D1FF]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
