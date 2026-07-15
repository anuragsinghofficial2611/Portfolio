import React from 'react'
import Navbar from '../components/navbar'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <section id="home" className="relative px-4 pb-16 pt-2 scrollbar-hidden overflow-auto scroll-auto sm:px-6 lg:px-8">
            <Navbar />

            <div className="mx-auto flex flex-col justify-center gap-2 pt-8 sm:pt-12 lg:min-h-[80vh] lg:pt-0">
                <motion.p
                    className=" text-xs font-semibold uppercase font-extrabold text-blue-400 sm:text-sm md:text-base"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    delay={0.3}
                >
                    I DON'T JUST WRITE CODE, I SOLVE PROBLEMS, BUILD PRODUCTS, AND CREATE EXPERIENCES PEOPLE REMEMBER.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    delay={0.2}
                    className=""
                >
                    <p className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-8xl">
                        TURNING COFFEE INTO <span className="text-blue-600">CODE</span>,<br />
                        IDEAS INTO <span className="text-blue-600">PRODUCTS</span>,<br />
                        AND PROBLEMS INTO <span className="text-blue-600 md:text-7xl lg:text-8xl">SOLUTIONS</span>
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-3 sm:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    delay={0.35}
                >
                    <a href="#projects" className="w-fit rounded-full border border-cyan-400/70 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20">
                        Explore Projects
                    </a>
                    <a href="#contact" className="w-fit rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/60 hover:text-cyan-300">
                        Let&apos;s Connect
                    </a>
                </motion.div>

                <motion.div
                    className=" pt-0 "
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <p className="text-sm text-center tracking-[0.35em] text-slate-300 sm:text-base">
                        ^ <br />
                        Scroll to view
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Home