'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const solutions = [
  {
    id: 'sales',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    en: 'AI Sales',
    title: 'AI営業支援',
    desc: '提案書作成・商談分析・顧客フォローを自動化。営業チームが本質的な関係構築に集中できる環境を構築。',
    color: '#00D1FF',
  },
  {
    id: 'chat',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    en: 'AI Chat',
    title: 'AIチャット対応',
    desc: '24時間365日の問い合わせ自動対応。顧客満足度を維持しながら、対応コストを大幅削減。',
    color: '#7C3AED',
  },
  {
    id: 'minutes',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    en: 'AI Minutes',
    title: 'AI議事録',
    desc: '会議録の自動生成・要約・タスク抽出。会議後の作業時間をゼロに近づけ、意思決定を加速。',
    color: '#00D1FF',
  },
  {
    id: 'manual',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    en: 'AI Manual',
    title: 'AIマニュアル',
    desc: '業務手順の自動ドキュメント化。属人化を解消し、新人育成コストを最小化する社内知識基盤を構築。',
    color: '#7C3AED',
  },
  {
    id: 'hiring',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    en: 'AI Hiring',
    title: 'AI採用支援',
    desc: '求人票作成・書類選考・面接質問の自動生成。採用担当者の工数を削減し、より多くの候補者を評価。',
    color: '#00D1FF',
  },
  {
    id: 'marketing',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    en: 'AI Marketing',
    title: 'AIマーケティング',
    desc: 'コンテンツ生成・SNS運用・メール配信の自動化。マーケティング施策の実行速度を10倍に。',
    color: '#7C3AED',
  },
]

function SolutionCard({ item, index }: { item: typeof solutions[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-pointer"
    >
      <motion.div
        animate={hovered ? { y: -8, scale: 1.01 } : { y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative p-6 lg:p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden"
      >
        {/* Background glow on hover */}
        <motion.div
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, ${item.color}10, transparent 70%)`,
          }}
        />

        {/* Border glow */}
        <motion.div
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 rounded-2xl border border-transparent"
          style={{
            background: `linear-gradient(135deg, ${item.color}30, transparent) border-box`,
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude',
          }}
        />

        {/* Icon */}
        <div className="relative mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)`,
              border: `1px solid ${item.color}20`,
              color: hovered ? item.color : '#9CA3AF',
            }}
          >
            {item.icon}
          </div>
        </div>

        {/* Labels */}
        <div className="relative mb-3">
          <span
            className="text-xs font-display tracking-widest uppercase transition-colors duration-300"
            style={{ color: hovered ? item.color : 'rgba(156, 163, 175, 0.5)' }}
          >
            {item.en}
          </span>
        </div>

        <h3 className="relative text-xl font-noto font-bold text-white/80 group-hover:text-white transition-colors duration-300 mb-3">
          {item.title}
        </h3>

        <p className="relative text-sm text-text-muted font-noto font-light leading-relaxed">
          {item.desc}
        </p>

        {/* Arrow */}
        <motion.div
          animate={hovered ? { x: 4, opacity: 1 } : { x: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 right-6"
          style={{ color: item.color }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Solution() {
  return (
    <section className="relative py-32 lg:py-48 bg-[#111827] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-[#00D1FF]/40" />
            <span className="text-xs text-[#00D1FF] font-display tracking-widest uppercase">Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-noto font-bold text-3xl lg:text-5xl text-white leading-tight mb-4"
          >
            AIで解決できること
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-text-muted font-noto font-light max-w-xl"
          >
            業務の種類を問わず、AIは課題解決のパートナーになれます。
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {solutions.map((item, i) => (
            <SolutionCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
