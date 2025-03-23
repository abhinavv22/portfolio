import React from "react";
import ProjectCard from "../components/ProjectCard";

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
      <h2 className="text-3xl text-neon">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;