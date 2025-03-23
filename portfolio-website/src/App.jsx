import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="bg-darkBg text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;