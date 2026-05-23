'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Claude導入支援',
    desc: 'Anthropic社の最先端AIモデル「Claude」を企業内業務に統合。コーパス構築から運用まで一貫してサポート。',
    tags: ['Claude API', 'カスタマイズ', '業務統合'],
  },
  {
    number: '02',
    title: 'ChatGPT導入支援',
    desc: 'OpenAIのChatGPTを業務フローに組み込み、即戦力のAIアシスタントとして機能させるための支援。',
    tags: ['GPT-4o', 'プロンプト設計', 'API連携'],
  },
  {
    number: '03',
    title: 'AI業務改善',
    desc: '現状業務を可視化・分析し、AIが最も効果を発揮できるポイントを特定。費用対効果の高い改善を実現。',
    tags: ['業務分析', 'ROI最大化', 'プロセス設計'],
  },
  {
    number: '04',
    title: 'AI社内研修',
    desc: '経営層から現場まで、AIリテラシーを底上げする体系的な研修プログラム。実践演習で確実に定着。',
    tags: ['ワークショップ', 'e-learning', '実践演習'],
  },
  {
    number: '05',
    title: 'AIツール選定',
    desc: '膨大なAIツールの中から、企業規模・予算・課題に最適なものを選定。ベンダーロックインを回避する設計。',
    tags: ['要件定義', '比較評価', 'PoC支援'],
  },
  {
    number: '06',
    title: 'AI運用支援',
    desc: '導入後の定着・改善・アップデート対応まで継続的にサポート。AIが事業成長のエンジンになるよう伴走。',
    tags: ['継続サポート', 'パフォーマンス監視', 'アップデート'],
  },
  {
    number: '07',
    title: 'AI営業構築',
    desc: '営業プロセス全体をAIで自動化・効率化。リード獲得から商談・クロージングまでの仕組みを設計。',
    tags: ['営業自動化', 'CRM連携', 'リード最適化'],
  },
  {
    number: '08',
    title: 'AI活用設計',
    desc: '中長期のAI戦略を策定。競合優位性を持続するためのAIロードマップを経営視点で設計・提案。',
    tags: ['AI戦略', 'ロードマップ', '経営支援'],
  },
]

export default function Service() {
  return (
    <section id="service" className="relative py-32 lg:py-48 bg-[#0B0F19] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[#00D1FF]/4 blur-[100px] pointer-events-none" />

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
            <span className="text-xs text-[#00D1FF] font-display tracking-widest uppercase">Services</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-noto font-bold text-3xl lg:text-5xl text-white leading-tight">
              提供サービス
            </h2>
            <p className="text-text-muted font-noto font-light max-w-sm lg:text-right">
              課題に応じて、最適なAI活用を一緒に設計します。
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative p-8 lg:p-10 bg-[#0B0F19] hover:bg-[#111827] transition-colors duration-500 cursor-pointer"
            >
              {/* Hover border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00D1FF]/30 via-[#7C3AED]/30 to-transparent" />
              </div>

              {/* Number */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-5xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 leading-none">
                  {service.number}
                </span>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="text-[#00D1FF]/60"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="font-noto font-bold text-xl text-white/80 group-hover:text-white transition-colors duration-300 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-muted font-noto font-light leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-display text-text-muted/60 border border-white/5 group-hover:border-[#00D1FF]/10 group-hover:text-[#00D1FF]/60 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
