import React from 'react'
import { motion } from 'framer-motion'
import demovideo from '../assets/weatherappdemo.mp4'
import portfoliovideo from '../assets/portfolioproject.mp4'
import crud from '../assets/CRUD.jpg'
import lifelink from '../assets/lifelink.png'
import Bloggingapp from '../assets/Bloggingapp.png'

const projects = [
  {
    title: 'Blogging App',
    image: Bloggingapp,
    type: 'image',
    tech: 'ReactJS, Framer Motion, ExpressJS, MongoDB, JWT Authentication',
    description: 'A full-stack blogging platform where users can create accounts, publish posts, and explore content from other writers with secure authentication and password protection.',
    link: 'https://github.com/Project-Lifelink/LifeLink-Frontend',
  },
  {
    title: 'LifeLink',
    image: lifelink,
    type: 'image',
    tech: 'ReactJS, Framer Motion, Redux',
    description: 'A responsive platform designed to connect patients with blood donors quickly during emergency situations while keeping the user experience simple and accessible.',
    link: 'https://github.com/Project-Lifelink/LifeLink-Frontend',
  },
  {
    title: 'Weather App',
    image: demovideo,
    type: 'video',
    tech: 'React, Tailwind CSS',
    description: 'A weather dashboard that fetches live weather data and updates the UI dynamically using React state and API responses.',
    link: 'https://github.com/anuragsinghofficial2611/Weather-App',
  },
  {
    title: 'CRUD and Authentication Backend',
    image: crud,
    type: 'image',
    tech: 'ExpressJS, MongoDB, JWT Authentication',
    description: 'A backend project for storing, updating, and deleting user information securely while handling authentication workflows effectively.',
    link: 'https://github.com/anuragsinghofficial2611/LifeLink-Database-Demo',
  },
  {
    title: 'Personal Portfolio',
    image: portfoliovideo,
    type: 'video',
    tech: 'ReactJS, Tailwind CSS, Framer Motion',
    description: 'A personal portfolio built to present skills, projects, and achievements with a modern and animated experience.',
    link: 'https://github.com/anuragsinghofficial2611/Portfolio',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">My Work</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Selected projects that reflect my growth.</h2>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 shadow-[0_0_60px_rgba(0,0,0,0.2)] backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
          >
            <div className="overflow-hidden">
              {project.type === 'video' ? (
                <video src={project.image} autoPlay loop muted playsInline className="h-64 w-full object-cover transition duration-500 hover:scale-105" />
              ) : (
                <img src={project.image} alt={project.title} className="h-64 w-full object-cover transition duration-500 hover:scale-105" />
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">{project.tech}</p>
              <p className="mt-4 flex-1 text-base leading-8 text-slate-300">{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 w-fit rounded-full border border-cyan-400/70 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10">
                View on GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="mt-12 text-center text-lg font-semibold text-slate-300"
      >
        Currently building more exciting projects and refining the details.
      </motion.div>
    </section>
  )
}

export default Projects