import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  { name: "Steganography Project", link: "https://github.com/abhinavv22/Data-hiding-using-Steganography" },
  { name: "Project 2", link: "#" },
];

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center text-4xl font-bold py-10">
        Hi, I'm Abhinav Singh 👋
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center text-lg mb-10">
        A 4th-year Computer Science student passionate about Python, web development, and security.
      </motion.div>

      <div className="text-center text-2xl font-semibold mb-5">Projects</div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.a key={index} href={project.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="block">
            <div className="bg-gray-800 text-white p-5 rounded-xl shadow-md">{project.name}</div>
          </motion.a>
        ))}
      </div>

      <div className="text-center text-2xl font-semibold mt-10">Contact Me</div>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com/abhinavv22" target="_blank" className="text-white text-3xl"><FaGithub /></a>
        <a href="#" className="text-white text-3xl"><FaLinkedin /></a>
        <a href="mailto:your.email@example.com" className="text-white text-3xl"><FaEnvelope /></a>
      </div>
    </div>
  );
}