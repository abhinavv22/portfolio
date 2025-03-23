import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Data Hiding Using Steganography",
    description: "A Python-based tool for securely embedding secret messages in images.",
    github: "https://github.com/abhinavv22/Data-hiding-using-Steganography",
  },
  {
    title: "Smart Door Lock Using Fingerprint",
    description: "An Arduino-powered fingerprint security system for home automation.",
    github: "https://github.com/abhinavv22/Samrt-door-lock-Using-Fingerprint",
  },
  {
    title: "Voting System Using Blockchain",
    description: "A blockchain-based online voting system ensuring security and transparency.",
    github: "https://github.com/abhinavv22/Voting-System-Using-Blockchain",
  },
];

const Projects = () => {
  return (
    <section className="p-10">
      <motion.h2
        className="text-3xl text-neon"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <motion.div 
        className="grid md:grid-cols-2 gap-6 mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;