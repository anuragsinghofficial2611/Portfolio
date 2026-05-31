import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white text-center py-10 mt-20">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer