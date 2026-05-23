'use client'

import { motion } from 'framer-motion'

const tags = [
  { label: '全国対応', icon: '🗾' },
  { label: 'Claude対応', icon: '◆' },
  { label: 'ChatGPT対応', icon: '◇' },
  { label: '中小企業対応', icon: '◉' },
  { label: 'AI業務改善', icon: '◈' },
  { label: '営業AI化', icon: '▶' },
  { label: '採用AI化', icon: '▷' },
  { label: 'AI導入支援', icon: '◐' },
]

export default function TrustBar() {
  return (
    <section className="relative py-10 border-y border-white/5 overflow-hidden bg-[#0B0F19]">
      {/* Gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

      {/* Scrolling strip */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex items-center gap-10 shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...tags, ...tags].map((tag, i) => (
            <div key={i} className="flex items-center gap-2.5 shrink-0">
              <span className="text-[#00D1FF]/40 text-sm font-mono">{tag.icon}</span>
              <span className="text-sm text-text-muted whitespace-nowrap font-display tracking-wide">
                {tag.label}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
