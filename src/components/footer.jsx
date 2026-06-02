import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="relative mt-32 border-t border-white/10 bg-black/30 backdrop-blur-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-white">
              Anurag Singh
            </h2>

            <p className="text-gray-400 mt-3 leading-relaxed">
              Full Stack Developer passionate about building
              scalable applications, solving DSA problems,
              and exploring AI technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect
            </h3>

            <p className="text-gray-400 mb-4 break-all">
              anuragsinghofficial2611@gmail.com
            </p>

            <div className="flex gap-5 text-2xl">
              <a
                href="https://github.com/anuragsinghofficial2611"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/anurag-singh-469019381/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://twitter.com/@AnuragSingh300a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 hover:scale-110 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-500">
            © 2026 Anurag Singh. Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;