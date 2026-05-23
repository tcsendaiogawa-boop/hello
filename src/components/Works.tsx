'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const works = [
  {
    category: '製造業・60名',
    result: '80%',
    unit: '削減',
    label: '業務時間',
    desc: '月次レポート作成・品質検査データ集計をAI自動化。担当者が本来業務に集中できるようになった。',
    tags: ['Claude API', '業務自動化'],
    color: '#00D1FF',
  },
  {
    category: '不動産・15名',
    result: '3.2×',
    unit: '向上',
    label: '成約率',
    desc: 'AIによる物件マッチング精度向上と提案書自動生成で、営業サイクルを大幅短縮。',
    tags: ['AI営業', 'ChatGPT'],
    color: '#7C3AED',
  },
  {
    category: '人材会社・30名',
    result: '94%',
    unit: '削減',
    label: '書類作成時間',
    desc: 'スカウト・求人票・面接シートをAIが自動生成。採用担当者の生産性が劇的に改善。',
    tags: ['AI採用', 'Claude'],
    color: '#00D1FF',
  },
  {
    category: '建設業・80名',
    result: '¥0',
    unit: '削減',
    label: '残業コスト',
    desc: '現場報告書・安全書類の自動生成により、現場担当者の月平均40時間の残業を解消。',
    tags: ['文書自動化', 'AI改善'],
    color: '#7C3AED',
  },
  {
    category: '士業事務所・8名',
    result: '90%',
    unit: '短縮',
    label: '調査時間',
    desc: '法令・判例検索をAIが支援。従来1日かかっていた調査が1〜2時間で完了するように。',
    tags: ['ChatGPT', 'RAG構築'],
    color: '#00D1FF',
  },
  {
    category: '飲食チェーン・12店舗',
    result: '52%',
    unit: '削減',
    label: '廃棄ロス',
    desc: 'AIによる需要予測・発注最適化システムを構築。季節・天気・イベントを考慮した精密な在庫管理を実現。',
    tags: ['AI予測', 'データ分析'],
    color: '#7C3AED',
  },
]

function Counter({ value, unit }: { value: string; unit: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <div ref={ref} className="flex items-baseline gap-1">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl lg:text-6xl font-display font-bold text-white leading-none tracking-tight"
      >
        {value}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg font-noto text-text-muted"
      >
        {unit}
      </motion.span>
    </div>
  )
}

export default function Works() {
  return (
    <section id="works" className="relative py-32 lg:py-48 bg-[#111827] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#00D1FF]/4 blur-[120px] pointer-events-none" />

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
            <span className="text-xs text-[#00D1FF] font-display tracking-widest uppercase">Results</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-noto font-bold text-3xl lg:text-5xl text-white leading-tight">
              導入後の変化
            </h2>
            <p className="text-text-muted font-noto font-light max-w-sm">
              数字が示す、AIの力。現場に根ざした実績です。
            </p>
          </div>
        </motion.div>

        {/* Works grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at 20% 30%, ${work.color}08, transparent 60%)`,
                }}
              />

              {/* Category */}
              <div className="text-xs text-text-muted/50 font-display tracking-wider mb-6">
                {work.category}
              </div>

              {/* Metric */}
              <div className="mb-2">
                <Counter value={work.result} unit={work.unit} />
              </div>
              <div className="text-sm text-text-muted font-noto mb-5">
                {work.label}
              </div>

              {/* Divider */}
              <div
                className="h-px mb-5 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: `linear-gradient(to right, ${work.color}, transparent)` }}
              />

              {/* Description */}
              <p className="text-sm text-text-muted font-noto font-light leading-relaxed mb-5">
                {work.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-display text-text-muted/50 border border-white/5"
                    style={{ borderColor: `${work.color}15` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-xs text-text-muted/30 font-noto text-center"
        >
          ※数値は導入後の効果目安です。企業規模・業種・導入範囲によって異なります。
        </motion.p>
      </div>
    </section>
  )
}
