import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center p-10">
      <motion.h1
        className="text-5xl font-bold text-neon"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Abhinav Singh
      </motion.h1>
      <motion.h2
        className="text-xl mt-3 text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Web Developer | AI Enthusiast | Blockchain Engineer
      </motion.h2>
    </section>
  );
};

export default Hero;