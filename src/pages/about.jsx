import React from 'react'
import {motion} from 'framer-motion'
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
const About = () => {
  return (
    <div id="about" className="md:h-200 mt-20 ">
      <motion.div className="text-white  text-center flex-row justify-between item-center"
        initial = {{opacity: 0, y: 40}}
        whileInView = {{opacity: 1, y: 0}}>
        <h2 className="text-4xl font-bold m-5">About Me</h2>
        <p className="md:text-lg mb-20">Hello! My Name is Anurag Singh. I am a Passionate Full Stack Developer || Machine Learning & Artifical Intelligence Enthusiast || Problem Solver  </p>
      </motion.div>
      <motion.div className="text-white  text-center flex-row justify-between item-center"
        initial = {{opacity: 0, y: 40}}
        whileInView = {{opacity: 1, y: 0}}>
        <h2 className="text-4xl font-bold m-5">Who I Am ?</h2>
        <p className="md:text-lg md:mx-55">Currently I am a collage student persuing BTech in Computer Science And Engeineering with Speicialization in Artificial Intelligence from GL BAJAJ INSTITUTE OF TECHNOLOGY AND MANGEMENT GREATER NOIDA </p>
      </motion.div>
      <motion.div className="text-white mt-20 text-center flex-row justify-between item-center"
        initial = {{opacity: 0, y: 40}}
        whileInView = {{opacity: 1, y: 0}}>
        <h2 className="text-4xl font-bold m-5">My Skills</h2>
        <p className="text-lg md:mx-40"> Full Stack Developement || Frontend - ReactJS , Tailwind CSS || Backend - ExpressJS , MongoDB || Problem Solving - LeetCode & Codechef || Engineering  <br /> || Programming Languages - JavaScript, Python, Java, C , C++ ||</p>
      </motion.div>

        <motion.div className = "flex flex-wrap md:flex-row  md:px-20 m-5 "
        initial = {{opacity: 0, y: 40 , scale : 0.8}}
        whileInView = {{opacity: 1, y: 0 , scale : 1}}> 
          <img src = {images} alt = "skills" className = "w-20 h-20 mx-auto mt-10 rounded-4xl hover:scale-150 transition-all hover:cursor-pointer"/>
          <img src = {image} alt = "skills" className = "w-20 h-20 mx-auto mt-10 rounded-4xl hover:scale-150 transition-all hover:cursor-pointer"/>
          <img src = {express} alt = "skills" className = "w-22 h-20 mx-auto mt-10 rounded-4xl hover:scale-150 transition-all hover:cursor-pointer"/>
          <img src = {mongodb} alt = "skills" className = "w-20 h-20 mx-auto mt-10 rounded-4xl hover:scale-150 transition-all hover:cursor-pointer"/>
          <img src = {leetcode} alt = "skills" className = "w-20 h-20 mx-auto mt-10 rounded-4xl hover:scale-150 transition-all hover:cursor-pointer"/>
          <img src = {codechef} alt = "skills" className = "w-20 h-20 mx-auto mt-10 rounded-4xl hover:scale-150 transition-all hover:cursor-pointer"/>
          <img src = {nodejs} alt = "skills" className = "w-20 h-20 mx-auto mt-10 rounded-4xl hover:scale-150 transition-all hover:cursor-pointer"/>
          <img src = {javascript} alt = "skills" className = "w-20 h-20 mx-auto mt-10 rounded-4xl hover:scale-150 transition-all hover:cursor-pointer"/>
          <img src = {python} alt = "skills" className = "w-20 h-20 mx-auto mt-10 rounded-4xl hover:scale-150 transition-all hover:cursor-pointer"/>
          <img src = {java} alt = "skills" className = "w-20 h-20 mx-auto mt-10 rounded-4xl hover:scale-150 transition-all hover:cursor-pointer"/>
          <img src = {c} alt = "skills" className = "w-20 h-20 mx-auto mt-10 rounded-4xl hover:scale-150 transition-all hover:cursor-pointer"/>
          <img src = {cpp} alt = "skills" className = "w-20 h-20 mx-auto mt-10 rounded-4xl hover:scale-150 transition-all hover:cursor-pointer"/>
        </motion.div>
       <motion.div className="text-white md:m-15 text-center flex-row  justify-between item-center"
        initial = {{opacity: 0, y: 40}}
        whileInView = {{opacity: 1, y: 0}}>
        <h2 className="text-4xl font-bold m-0 md:m-5">What I am Doing ?</h2>
        <p className="text-lg md:mx-55">Currently I am focussing on Diving more deep in full stack developement and keep grinding leetcode and problem solving and learning fundamentals of Machine learning to go in depth further </p>
      </motion.div>
    </div>
  )
}

export default About