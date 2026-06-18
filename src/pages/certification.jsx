import React from 'react'
import { motion } from 'framer-motion'
import Be10x from '../assets/be10xcertificate.png'
import { useState } from 'react'

const Certification = () => {
  const [certficationNo ,setCertficationNo] = useState(0);
  console.log(certficationNo)
  const certifications = [
    {
      image: Be10x,
      Name : "be10x",
      description : "by be10x"
    },
    {
      
    }
  ]
  return (
    <>
      <div className="md:m-40 flex-row md:flex-col  justify-center m-10 text-center gap-10 ">
        <motion.h1 className="text-3xl font-bold text-white text-center sm:hidden md:mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}>Certifications</motion.h1>
        <a href="https://www.linkedin.com/in/anurag-singh-469019381/details/certifications/" className=" mt-5  text-blue-500 bg-transparent border-1 hover:bg-white hover:text-black rounded-4xl px-4 md:px-10 py-2 "> Click to View on Linkedin </a>
      </div>
      <div className="flex justify-center mb-10 p-2">
        <div className="bg-black/80 text-center w-full h-cover md:h-200 md:w-400 ">
          <h1 className="h-40 text-white font-bold md:scale-200 md:p-10 ">Certifications</h1>
          <div className = "text-white flex gap-0 md:gap-5 justify-evenly flex-col md:flex-row">
            <button className = " p-5 bg-gray-400/20 rounded-2xl" onClick = {(e) => setCertficationNo(0)}>Certification 1</button>
            <button className = " p-5 bg-gray-400/20 rounded-2xl" onClick = {(e) => setCertficationNo(1)}>Certification 2</button>
            <button className = " p-5 bg-gray-400/20 rounded-2xl" onClick = {(e) => setCertficationNo(2)}>Certification 3</button>
            <button className = " p-5 bg-gray-400/20 rounded-2xl" onClick = {(e) => setCertficationNo(3)}>Certification 4</button>
            <button className = " p-5 bg-gray-400/20 rounded-2xl" onClick = {(e) => setCertficationNo(4)}>Certification 5</button>
          </div>
          <div className = "flex justify-center pt-5 md:pt-20">
            <div>
            <img src={certifications[certficationNo].image} className = "md:h-100" w-cover alt="" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Certification