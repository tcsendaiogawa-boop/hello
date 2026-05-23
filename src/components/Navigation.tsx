'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'サービス', href: '#service' },
  { label: '事例', href: '#usecases' },
  { label: '導入の流れ', href: '#flow' },
  { label: '実績', href: '#works' },
  { label: '会社概要', href: '#about' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[rgba(11,15,25,0.85)] backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00D1FF] to-[#7C3AED] opacity-90" />
                <div className="absolute inset-[1px] rounded-[7px] bg-bg-primary flex items-center justify-center">
                  <span className="text-xs font-bold font-display text-white tracking-tight">TC</span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[11px] text-text-muted font-medium tracking-widest uppercase">True Colors</span>
                <span className="text-[9px] text-text-muted/50 tracking-wider">株式会社</span>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative text-sm text-text-muted hover:text-white transition-colors duration-300 group py-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#00D1FF] to-[#7C3AED] group-hover:w-full transition-all duration-300 ease-out" />
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="hidden lg:flex items-center gap-3"
            >
              <a
                href="#cta"
                className="relative overflow-hidden group px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-[#00D1FF] to-[#7C3AED] text-white transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,209,255,0.3)]"
              >
                <span className="relative z-10">無料AI相談をする</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="メニュー"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-5 h-px bg-white"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-px bg-white"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-5 h-px bg-white"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0F19]/95 backdrop-blur-xl lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center h-full gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-display font-light text-text-secondary hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08, duration: 0.4 }}
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#00D1FF] to-[#7C3AED] text-white font-medium text-lg"
              >
                無料AI相談をする
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
