'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const values = [
  {
    title: '現場主義',
    desc: '机上の空論ではなく、実際の業務を理解した上でAIを設計します。現場担当者が使いやすいことが最優先です。',
  },
  {
    title: '伴走型支援',
    desc: '導入したら終わりではありません。定着・改善・拡張まで長期的に並走するパートナーとして関わり続けます。',
  },
  {
    title: '透明性',
    desc: 'AIの限界も正直にお伝えします。できること・できないことを明確にし、期待値のずれが生じない関係を大切にします。',
  },
]

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="about" ref={containerRef} className="relative py-32 lg:py-48 bg-[#0B0F19] overflow-hidden">
      {/* Background text */}
      <motion.div
        style={{ y }}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-[180px] lg:text-[280px] font-display font-bold text-white/[0.018] leading-none pointer-events-none select-none"
      >
        ABOUT
      </motion.div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: main text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-8 bg-[#00D1FF]/40" />
              <span className="text-xs text-[#00D1FF] font-display tracking-widest uppercase">About Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-noto font-bold text-3xl lg:text-5xl text-white leading-tight mb-10"
            >
              AIは、
              <br />
              一部の大企業だけの
              <br />
              ものではありません。
            </motion.h2>

            <div className="space-y-6">
              {[
                '全国の中小企業が、AIによって業務を変革できる時代が来ています。しかし「何から始めればいいか」「本当に自社に使えるのか」という不安が、最初の一歩を遠ざけています。',
                'True Colorsは、その一歩を一緒に踏み出すためのパートナーです。コンサルティングで終わるのではなく、実際に手を動かして、現場に合ったAI活用を設計・実装します。',
                '企業ごとの課題は違います。だから私たちは、テンプレートではなく、あなたの会社に合わせた設計を大切にします。',
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base lg:text-lg text-text-muted font-noto font-light leading-loose"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 pt-10 border-t border-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00D1FF]/20 to-[#7C3AED]/20 flex items-center justify-center border border-white/10">
                  <span className="text-sm font-bold text-white/70 font-display">TC</span>
                </div>
                <div>
                  <div className="font-noto font-bold text-white/80 text-sm">株式会社True Colors</div>
                  <div className="text-xs text-text-muted/50 font-display mt-0.5">AI Consulting Partner</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: values */}
          <div className="space-y-4 lg:pt-20">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 lg:p-7 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#00D1FF]/10 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]/50 group-hover:bg-[#00D1FF] transition-colors duration-300" />
                  <h3 className="font-noto font-bold text-base text-white/80 group-hover:text-white transition-colors duration-300">
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm text-text-muted font-noto font-light leading-relaxed pl-4 border-l border-white/5">
                  {value.desc}
                </p>
              </motion.div>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {[
                { value: '全国', label: '対応エリア' },
                { value: '無料', label: '初回相談' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/5 text-center"
                >
                  <div className="text-3xl font-display font-bold text-gradient-cyan mb-1">{stat.value}</div>
                  <div className="text-xs text-text-muted/60 font-noto">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
