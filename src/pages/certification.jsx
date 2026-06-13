import React from 'react'
import { motion } from 'framer-motion'

const Certification = () => {
  return (
    <>
    <div className = "md:m-40 flex-row md:flex-col  justify-center m-10 text-center gap-10 ">
        <motion.h1 className = "text-3xl font-bold text-white text-center sm:hidden md:mb-5"
        initial = {{opacity: 0, y: 20}}
        whileInView = {{opacity: 1 , y: 0}}>Certifications</motion.h1>
        <a href = "https://www.linkedin.com/in/anurag-singh-469019381/details/certifications/" className = " mt-5  text-blue-500 bg-transparent border-1 hover:bg-white hover:text-black rounded-4xl px-4 md:px-10 py-2 "> Click to View on Linkedin </a>
    </div>
    </>
  )
}

export default Certification