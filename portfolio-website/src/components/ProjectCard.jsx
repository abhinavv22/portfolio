import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-900 p-5 rounded-lg shadow-lg hover:shadow-neon transition-all"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl text-neon">{project.title}</h3>
      <p className="text-gray-300">{project.description}</p>
      <a
        href={project.github}
        target="_blank"
        className="flex items-center gap-2 mt-3 text-neon hover:text-white"
      >
        <FaGithub /> View on GitHub
      </a>
    </motion.div>
  );
};

export default ProjectCard;