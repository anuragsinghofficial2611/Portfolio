import React from 'react'
import LinkedIn from '../assets/linkedinconnect.png'
import Twitter from '../assets/Twitter.png'
import GitHub from '../assets/github.png'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div id = "contact" className = "text-white text-2xl text-center h-100">
      <h2 className = "text-3xl font-bold my-20">Connect With Me</h2>
      <div className = "flex justify-center gap-30">

      <motion.img src = {LinkedIn} className = "h-70 w-70 rounded-4xl :hover cursor-pointer transition-all hover:scale-120"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      />
      <motion.img src = {Twitter} className = "h-70 w-90 rounded-4xl :hover cursor-pointer transition-all hover:scale-120"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      />
      <motion.img src = {GitHub} className = "h-70 w-70 rounded-4xl :hover cursor-pointer transition-all hover:scale-120"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      />
      </div>
    </div>
  )
}

export default Contact