import React from 'react'
import { motion } from 'framer-motion'
import images from '../assets/images.png'
import image from '../assets/images.jpg'
import express from '../assets/express.png'
import mongodb from '../assets/mongodb.png'
import leetcode from '../assets/leetcode.png'
import codechef from '../assets/ccemoji2.webp'
import nodejs from '../assets/nodejs.png'
import javascript from '../assets/javascript.png'
import python from '../assets/python.png'
import java from '../assets/java.png'
import c from '../assets/c.png'
import cpp from '../assets/c++.jpg'

const skillItems = [
  { src: images, alt: 'React' },
  { src: image, alt: 'Tailwind CSS' },
  { src: express, alt: 'Express' },
  { src: mongodb, alt: 'MongoDB' },
  { src: leetcode, alt: 'LeetCode' },
  { src: codechef, alt: 'CodeChef' },
  { src: nodejs, alt: 'Node.js' },
  { src: javascript, alt: 'JavaScript' },
  { src: python, alt: 'Python' },
  { src: java, alt: 'Java' },
  { src: c, alt: 'C' },
  { src: cpp, alt: 'C++' },
]

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">About Me</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Building thoughtful products with a problem-solving mindset.</h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          Hello! I&apos;m Anurag Singh, a passionate full-stack developer who enjoys turning ideas into polished web experiences and solving real-world challenges with clean, scalable code.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="rounded-3xl border border-white/10 bg-slate-950/50 p-8 shadow-[0_0_60px_rgba(0,0,0,0.2)] backdrop-blur"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
          <p className="mt-4 text-base leading-8 text-slate-300">
            I&apos;m currently pursuing B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence at GL Bajaj Institute of Technology and Management, Greater Noida.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {['Full Stack Development', 'AI Enthusiast', 'Problem Solving'].map((item) => (
              <span key={item} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-white/10 bg-slate-950/50 p-8 shadow-[0_0_60px_rgba(0,0,0,0.2)] backdrop-blur"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold text-white">My Skills</h3>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Frontend with React and Tailwind, backend with Express and MongoDB, and a strong habit of sharpening problem-solving through LeetCode and CodeChef.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4">
            {skillItems.map((item) => (
              <div key={item.alt} className="group flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:bg-cyan-400/10">
                <img src={item.src} alt={item.alt} className="h-14 w-14 object-contain transition duration-300 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 rounded-3xl border border-white/10 bg-slate-950/50 p-8 text-center shadow-[0_0_60px_rgba(0,0,0,0.2)] backdrop-blur"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-2xl font-semibold text-white">What I&apos;m Focused On</h3>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-300">
          I&apos;m diving deeper into full-stack development while continuing to strengthen my problem-solving fundamentals and explore the practical side of machine learning.
        </p>
      </motion.div>
    </section>
  )
}

export default About