import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { label: 'About', to: '#about' },
  { label: 'Projects', to: '#projects' },
  { label: 'Contact', to: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-30 mb-10 w-full px-4 py-4 sm:px-6 lg:px-8"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-black/25 px-4 py-3 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-6">
        <HashLink smooth to="#home" className="text-lg font-semibold tracking-[0.25em] text-white sm:text-xl">
          ANURAG SINGH
        </HashLink>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <HashLink key={link.to} smooth to={link.to} className="text-sm font-medium text-slate-200 transition hover:text-cyan-400">
              {link.label}
            </HashLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <HashLink
            smooth
            to="#contact"
            className="rounded-full border border-cyan-400/70 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
          >
            Get in Touch
          </HashLink>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full border border-white/20 p-2 text-white transition hover:border-cyan-400/60 hover:text-cyan-300 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 flex max-w-7xl flex-col gap-2 rounded-2xl border border-white/10 bg-slate-950/80 p-3 text-sm shadow-lg backdrop-blur-xl md:hidden"
        >
          {links.map((link) => (
            <HashLink
              key={link.to}
              smooth
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-3 py-2 text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              {link.label}
            </HashLink>
          ))}
          <HashLink smooth to="#contact" onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-2 text-cyan-300 transition hover:bg-cyan-400/10">
            Get in Touch
          </HashLink>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Navbar