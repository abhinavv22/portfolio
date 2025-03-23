import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="p-10 text-center">
      <motion.h2
        className="text-3xl text-neon"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-gray-300 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Email: abhinavsinghh2019@gmail.com
      </motion.p>
      <motion.p
        className="text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        GitHub: <a href="https://github.com/abhinavv22" className="text-neon">abhinavv22</a>
      </motion.p>
      <motion.p
        className="text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        LinkedIn: <a href="http://www.linkedin.com/in/abhinav-singh-05bb9723a" className="text-neon">Abhinav Singh</a>
      </motion.p>
    </section>
  );
};

export default Contact;