import React from 'react'
import { motion } from 'framer-motion'     
import { HashLink } from 'react-router-hash-link'   
const Navbar = () => {
  return (
    <>
    <motion.div className = "justify-between items-center p-5 mb-20 w-full z-20 flex flex-wrap "
    initial = {{y: 20, opacity: 0}}
    whileInView = {{y: 0, opacity: 1}}
    transition = {{duration: 0.3}}
    >
        <h2 className = "text-white font-cursive">Anurag Singh</h2>
        <div className = "flex gap-5">
            <HashLink smooth to = "#contact" className = "text-white">Contact</HashLink>
            <HashLink smooth to = "#projects" className = "text-white">Project</HashLink>
            <HashLink smooth to = "#about" className = "text-white">About</HashLink>
        </div>
        <div>
          <button className = "bg-transparent text-white border-1 border-white px-6 py-2 rounded hover:border-0 hover:bg-gray-500">Get in Touch</button>
        </div>
    </motion.div>
    </>
  )
}

export default Navbar