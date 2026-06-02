import React from 'react'
import LinkedIn from '../assets/linkedinconnect.png'
import Twitter from '../assets/Twitter.png'
import GitHub from '../assets/Github.png'
import Instagram from '../assets/instagram.jpg'
import Leetcode from '../assets/leetcode.png'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div id = "contact" className = "text-white text-2xl text-center h-100">
      <motion.h2 className = "text-3xl font-bold my-20" 
      initial = {{opacity: 0 , y: 20}}
      whileInView = {{opacity: 1 , y: 0}}
      >Social Media Plateforms</motion.h2>
      <div className = "flex justify-center gap-30 ">

      <a href="https://www.linkedin.com/in/anurag-singh-469019381/" target="_blank" rel="noopener noreferrer">
        <motion.img src = {LinkedIn} className = "h-50 w-50 rounded-4xl :hover cursor-pointer transition-all hover:scale-120"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        />
      </a>
      <a href="https://twitter.com/@AnuragSingh300a
" target="_blank" rel="noopener noreferrer">
        <motion.img src = {Twitter} className = "h-50 w-60 rounded-4xl :hover cursor-pointer transition-all hover:scale-120"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        />
      </a>
      <a href="https://github.com/anuragsinghofficial2611" target="_blank" rel="noopener noreferrer">
        <motion.img src = {GitHub} className = "h-50 w-50 rounded-4xl :hover cursor-pointer transition-all hover:scale-120"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        />
      </a>
      {/* <a href="https://www.instagram.com/its_silentspark2007_/" target="_blank" rel="noopener noreferrer">
        <motion.img src = {Instagram} className = "h-50 w-50 rounded-4xl :hover cursor-pointer transition-all hover:scale-120"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        />
      </a> */}
      <a href="https://leetcode.com/u/BlZVSBLJIv/" target="_blank" rel="noopener noreferrer">
        <motion.img src = {Leetcode} className = "h-50 w-50 rounded-4xl :hover cursor-pointer transition-all hover:scale-120"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        />
      </a>
      </div>
    </div>
  )
}

export default Contact