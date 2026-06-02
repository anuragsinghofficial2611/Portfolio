import React from 'react'
import { motion } from 'framer-motion'
import demovideo from '../assets/weatherappdemo.mp4'
import portfoliovideo from '../assets/portfolioproject.mp4'
import crud from '../assets/CRUD.jpg'

const Projects = () => {
  return (
    <div id="projects" className="">
      <div className="text-white m-30 text-center">
        <motion.h2 className="text-4xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >My Works</motion.h2>
        <div>
          <motion.div className="flex justify-between mt-20"
          initial = {{opacity: 0 , y: 20}}
          whileInView = {{opacity: 1, y: 0}}>
            <div>
              <p className="flex justify-between ml-50  mb-10 font-bold text-2xl">Weather App</p>
              <video
                src={demovideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-150 h-70 object-cover"
              />
            </div>
            <div className="mt-10">
              <h2 className="font-bold text-2xl">Tech Stack</h2>
              <p>React , TailwindCSS</p>
              <h2 className="text-2xl font-bold mt-10 m">Description</h2>
              <p className="w-120 mb-10">This is an Weather App created in React enviornment It uses REST API to fetch weather data . Basically it makes get request on the server and receives the weather data and store it in variables and updates it on the page by using Hooks in react </p>
              <a href="https://github.com/anuragsinghofficial2611/Weather-App" className="w-100 font-bold px-30 border-1 py-3 rounded-4xl hover:bg-white hover:text-black">View On GitHub</a>
            </div>
            <div></div>
          </motion.div>
          <motion.div className="flex justify-between mt-20"
          initial = {{opacity: 0 , y: 20}}
          whileInView = {{opacity: 1, y: 0}}>
            <div>
              <p className="flex justify-between ml-35 mb-10 font-bold text-2xl">CRUD Application in Backend</p>
              <img src = {crud}
                className="w-150 h-70 object-cover"
              />
            </div>
            <div className="mt-10">
              <h2 className="font-bold text-2xl">Tech Stack</h2>
              <p>ExressJS , MongoDB</p>
              <h2 className="text-2xl font-bold mt-10 m">Description</h2>
              <p className="w-120 mb-10">This is an CRUD Application made in Backend using ExpressJS and MongoDB Atlas it store data online on google cloud. Basically it can take information from patient or blood donor and store it on the database and can update , change , delete their data based or requests made to server.  </p>
              <a href="https://github.com/anuragsinghofficial2611/LifeLink-Database-Demo" className="w-100 font-bold px-30 border-1 py-3 rounded-4xl hover:bg-white hover:text-black">View On GitHub</a>
            </div>
            <div></div>
          </motion.div>
          <motion.div className="flex justify-between mt-20"
          initial = {{opacity: 0 , y: 20}}
          whileInView = {{opacity: 1, y: 0}}>
            <div>
              <p className="flex justify-between ml-45  mb-10 font-bold text-2xl">Personal Portfolio</p>
              <video
                src={portfoliovideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-150 h-70 object-cover"
              />
            </div>
            <div className="mt-10">
              <h2 className="font-bold text-2xl">Tech Stack</h2>
              <p>ReactJS , TailwindCSS , Framer Motion</p>
              <h2 className="text-2xl font-bold mt-10 m">Description </h2>
              <p className = "w-120 mb-10">This is personal portfolio project to showcase skills and show people about myself and my acheivments to show my capabilities made by ReactJS designed by TailwindCSS and animated through framer motion</p>
              <a href="https://github.com/anuragsinghofficial2611/Portfolio" className="w-100 font-bold px-30 border-1 py-3 rounded-4xl hover:bg-white hover:text-black">View On GitHub</a>
            </div>
            <div></div>
          </motion.div>
          <motion.div
          initial = {{y: 20, opacity: 0}}
          whileInView = {{y: 0, opacity: 1}}
           className = "text-center text-2xl font-bold m-40">Currently Working on Many more projects.......</motion.div>

        </div>
      </div>
    </div>
  )
}

export default Projects