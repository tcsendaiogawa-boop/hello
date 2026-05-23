'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const industries = [
  {
    id: 'construction',
    label: '建設業',
    en: 'Construction',
    icon: '🏗',
    cases: [
      { title: '現場報告書の自動生成', desc: '音声や写真からAIが現場報告書を自動作成。現場担当者の事務作業を80%削減。' },
      { title: '施工計画の最適化', desc: '過去プロジェクトのデータをAIが分析し、工期短縮・コスト削減の施工計画を提案。' },
      { title: 'AI安全管理', desc: '作業手順書・ヒヤリハット事例をAIが整理し、現場安全管理の標準化を実現。' },
    ],
  },
  {
    id: 'realestate',
    label: '不動産',
    en: 'Real Estate',
    icon: '🏢',
    cases: [
      { title: '物件提案の自動化', desc: '顧客の要望をAIが分析し、最適な物件をレコメンド。成約率向上と営業工数削減を同時に実現。' },
      { title: 'AI契約書レビュー', desc: '賃貸・売買契約書の審査をAIが支援。見落としリスクを低減し、審査スピードを3倍に。' },
      { title: '問い合わせ自動対応', desc: 'LINEやWebからの物件問い合わせにAIが24時間対応。機会損失ゼロの顧客接点を構築。' },
    ],
  },
  {
    id: 'hr',
    label: '人材',
    en: 'HR / Staffing',
    icon: '👥',
    cases: [
      { title: 'スカウト文章の自動生成', desc: '候補者プロフィールからAIが最適化されたスカウト文を生成。返信率が平均2.3倍向上。' },
      { title: '面接質問の最適化', desc: 'ポジション要件と候補者情報をAIが分析し、有効な面接質問セットを自動設計。' },
      { title: 'AI求人票作成', desc: '職種・条件を入力するだけでAIが訴求力の高い求人票を作成。媒体ごとに最適化。' },
    ],
  },
  {
    id: 'manufacturing',
    label: '製造業',
    en: 'Manufacturing',
    icon: '⚙️',
    cases: [
      { title: 'AI品質管理', desc: '検査データをAIがリアルタイム分析。不良品の早期発見と歩留まり改善を実現。' },
      { title: '設備保全の予測', desc: '設備の稼働データからAIが故障を事前予測。計画外停止を最小化し、生産効率を向上。' },
      { title: 'AI作業マニュアル', desc: '熟練者のノウハウをAIが体系化。技術伝承と新人育成の仕組みをデジタルで構築。' },
    ],
  },
  {
    id: 'food',
    label: '飲食業',
    en: 'Food & Beverage',
    icon: '🍽',
    cases: [
      { title: 'AI発注・在庫管理', desc: '売上・天気・曜日をAIが学習し、最適な発注量を提案。廃棄ロスを50%削減。' },
      { title: 'AI接客トレーニング', desc: '優れた接客事例をAIが学習し、スタッフ向けのトレーニングコンテンツを自動生成。' },
      { title: 'メニュー改善提案', desc: '注文データと顧客レビューをAIが分析し、売上向上につながるメニュー改善を提案。' },
    ],
  },
  {
    id: 'professional',
    label: '士業',
    en: 'Professional Services',
    icon: '⚖️',
    cases: [
      { title: 'AI書類作成支援', desc: '定型書類の作成をAIが支援。税理士・司法書士・弁護士の事務処理時間を大幅削減。' },
      { title: '法令・判例検索の高速化', desc: '自然言語でAIに質問するだけで、関連法令・判例を瞬時に検索・要約。調査時間を90%削減。' },
      { title: '顧客対応メール自動化', desc: 'ご相談メールをAIが分類・整理し、適切な返信案を自動生成。対応品質と速度を両立。' },
    ],
  },
]

export default function UseCases() {
  const [activeId, setActiveId] = useState(industries[0].id)
  const active = industries.find((i) => i.id === activeId)!

  return (
    <section id="usecases" className="relative py-32 lg:py-48 bg-[#111827] overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00D1FF]/4 blur-[120px] pointer-events-none" />

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
            <span className="text-xs text-[#00D1FF] font-display tracking-widest uppercase">Use Cases</span>
          </div>
          <h2 className="font-noto font-bold text-3xl lg:text-5xl text-white leading-tight mb-4">
            業種別AI活用事例
          </h2>
          <p className="text-lg text-text-muted font-noto font-light max-w-xl">
            「うちでも使えそう」と感じていただくために、業種ごとの具体的な活用例をご紹介します。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[300px,1fr] gap-8 lg:gap-16">
          {/* Industry tabs */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide pb-2 lg:pb-0">
            {industries.map((industry, i) => (
              <motion.button
                key={industry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                onClick={() => setActiveId(industry.id)}
                className={`group relative flex items-center gap-3 px-5 py-3.5 rounded-xl text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${
                  activeId === industry.id
                    ? 'bg-white/6 border border-[#00D1FF]/20'
                    : 'border border-transparent hover:bg-white/4'
                }`}
              >
                {activeId === industry.id && (
                  <motion.div
                    layoutId="activeIndustry"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00D1FF]/5 to-[#7C3AED]/5"
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span className="text-xl relative">{industry.icon}</span>
                <div className="relative">
                  <div className={`font-noto font-medium text-sm transition-colors duration-300 ${
                    activeId === industry.id ? 'text-white' : 'text-text-muted group-hover:text-white/70'
                  }`}>
                    {industry.label}
                  </div>
                  <div className="text-xs text-text-muted/40 font-display">{industry.en}</div>
                </div>
                {activeId === industry.id && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Cases panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              {/* Industry label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{active.icon}</span>
                <div>
                  <h3 className="font-noto font-bold text-xl text-white">{active.label}</h3>
                  <span className="text-xs text-text-muted/50 font-display tracking-wider">{active.en}</span>
                </div>
              </div>

              {active.cases.map((c, ci) => (
                <motion.div
                  key={ci}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#00D1FF]/15 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold font-display text-[#00D1FF]">
                        {String(ci + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-noto font-bold text-base text-white/80 group-hover:text-white transition-colors duration-300 mb-2">
                        {c.title}
                      </h4>
                      <p className="text-sm text-text-muted font-noto font-light leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 text-sm text-[#00D1FF]/70 hover:text-[#00D1FF] transition-colors duration-300 font-display"
                >
                  {active.label}の事例について詳しく相談する
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
