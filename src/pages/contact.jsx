import React from 'react'
import LinkedIn from '../assets/linkedinconnect.png'
import Twitter from '../assets/Twitter.png'
import GitHub from '../assets/Github.png'
import Leetcode from '../assets/leetcode.png'
import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'LinkedIn', image: LinkedIn, link: 'https://www.linkedin.com/in/anurag-singh-469019381/' },
  { name: 'Twitter', image: Twitter, link: 'https://twitter.com/@AnuragSingh300a' },
  { name: 'GitHub', image: GitHub, link: 'https://github.com/anuragsinghofficial2611' },
  { name: 'LeetCode', image: Leetcode, link: 'https://leetcode.com/u/BlZVSBLJIv/' },
]

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Let&apos;s Connect</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Open for collaborations, internships, and meaningful projects.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
          If you want to build something impactful or simply want to say hello, I&apos;d be happy to connect.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {socialLinks.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-3xl border border-white/10 bg-slate-950/50 p-6 text-center shadow-[0_0_60px_rgba(0,0,0,0.2)] backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/40"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.06 }}
          >
            <img src={item.image} alt={item.name} className="h-20 w-20 rounded-2xl object-cover transition duration-300 group-hover:scale-110" />
            <h3 className="mt-4 text-lg font-semibold text-white">{item.name}</h3>
            <p className="mt-2 text-sm text-slate-400">Visit profile</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Contact