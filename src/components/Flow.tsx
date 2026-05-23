'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: '無料相談',
    subtitle: 'Free Consultation',
    desc: '現状の課題や目標を、気軽にお話しください。AIに詳しくなくても大丈夫。「何がわからないかわからない」という状態からでも一緒に整理します。',
    duration: '30〜60分',
    note: 'オンライン・全国対応',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: '業務分析',
    subtitle: 'Business Analysis',
    desc: 'ヒアリングを通じて業務フローを可視化。AIが効果を発揮できるポイントを具体的に特定し、費用対効果を試算します。',
    duration: '1〜2週間',
    note: '詳細ヒアリング込み',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'AI導入提案',
    subtitle: 'AI Proposal',
    desc: '業務分析の結果をもとに、最適なAI活用プランを提案。ツール選定から実装方針まで、具体的なロードマップをご提示します。',
    duration: '1〜2週間',
    note: '詳細見積もり付き',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'テスト運用',
    subtitle: 'Pilot Testing',
    desc: '小規模から実際の業務でテスト。現場の反応を確認しながら調整を重ね、本導入前にリスクを最小化します。',
    duration: '2〜4週間',
    note: '現場フィードバック重視',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: '社内導入',
    subtitle: 'Full Deployment',
    desc: '全体展開に向けたセットアップ・研修・マニュアル整備を実施。スムーズな導入と現場定着を同時に実現します。',
    duration: '2〜8週間',
    note: '研修・マニュアル込み',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: '06',
    title: '定着支援',
    subtitle: 'Ongoing Support',
    desc: '導入後の継続的な改善・モニタリング・アップデート対応まで伴走。AIが事業成長のエンジンとして機能し続けるよう支援します。',
    duration: '継続的に',
    note: '月次レポート付き',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

export default function Flow() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section id="flow" ref={containerRef} className="relative py-32 lg:py-48 bg-[#0B0F19] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />

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
            <span className="text-xs text-[#00D1FF] font-display tracking-widest uppercase">Process</span>
          </div>
          <h2 className="font-noto font-bold text-3xl lg:text-5xl text-white leading-tight mb-4">
            導入までの流れ
          </h2>
          <p className="text-lg text-text-muted font-noto font-light max-w-xl">
            相談から定着まで、6つのステップで確実に伴走します。
            <br />
            急かさず、押しつけず、一緒に進みます。
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] lg:left-[35px] top-0 bottom-0 w-px bg-white/5">
            <motion.div
              className="w-full bg-gradient-to-b from-[#00D1FF]/40 to-[#7C3AED]/40"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-4 lg:space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-6 lg:gap-10 group"
              >
                {/* Step circle */}
                <div className="relative z-10 shrink-0">
                  <div className="w-[55px] h-[55px] lg:w-[70px] lg:h-[70px] rounded-full border border-white/10 bg-[#0B0F19] flex items-center justify-center group-hover:border-[#00D1FF]/30 transition-colors duration-500">
                    <div className="text-text-muted/60 group-hover:text-[#00D1FF]/70 transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#0B0F19] border border-white/10 flex items-center justify-center">
                    <span className="text-[9px] font-bold font-mono text-[#00D1FF]/60">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-8 lg:pb-10">
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3 className="font-noto font-bold text-xl text-white/80 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <span className="text-xs text-text-muted/40 font-display tracking-wider">{step.subtitle}</span>
                  </div>

                  <p className="text-sm text-text-muted font-noto font-light leading-relaxed mb-4 max-w-xl">
                    {step.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02]">
                      <svg className="w-3 h-3 text-[#00D1FF]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs text-text-muted/60 font-display">{step.duration}</span>
                    </div>
                    <span className="text-xs text-text-muted/40 font-noto">{step.note}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="font-noto font-bold text-lg text-white/80">まずは無料相談から始めましょう</p>
            <p className="text-sm text-text-muted font-noto font-light mt-1">契約不要・押し売りなし。ご相談だけでも大歓迎です。</p>
          </div>
          <a
            href="#cta"
            className="shrink-0 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-[#00D1FF]/30 hover:bg-[#00D1FF]/5 text-white font-noto font-medium text-sm transition-all duration-300 flex items-center gap-2"
          >
            無料相談を予約する
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
