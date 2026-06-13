import React from 'react'
import Navbar from '../components/navbar'
import { motion } from 'framer-motion'
const Home = () => {
    return (
        <div className="md:h-screen">
            <Navbar />
            <div>
                <motion.p className="text-blue-400 md:text-xl text-xs mx-10 font-bold"
                initial={{ opacity: 0 , y: -10 }}
                whileInView={{ opacity: 1 , y: 0}}
                transition={{ duration: 0.7 }}
                delay={0.3}
                >
                    I DON'T JUST WRITE CODE, I SOLVE PROBLEMS, BUILD PRODUCTS, AND CREATE EXPERIENCES PEOPLE REMEMBER.
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                delay={0.2}
                className="mx-10">
                <p className="text-white text-4xl md:text-8xl font-extrabold text-left ">
                    TURNING COFFEE INTO <span className="text-blue-700">CODE</span>,<br />
                    IDEAS INTO <span className="text-blue-700">PRODUCTS</span>,<br />
                    AND PROBLEMS INTO <span className="text-blue-700 md:text-9xl sm:text-6xl tracking-widest">SOLUTIONS</span>
                </p>
            </motion.div>
            <motion.div className="flex text-center justify-center mt-20"
                animate={{
                    y: [0, -20, 0], // up then back down
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <p className="text-white ">
                    ^ <br />
                    Scroll to view
                </p>
            </motion.div>
        </div>
    )
}

export default Home