import React from 'react';
import Navber from './component/Navber';
import Home from './component/sections/Home';
import About from './component/sections/About';
import Project from './component/sections/Project';
import Contact from './component/sections/Contact';
import Footer from './component/Footer';
import AnimatedBackground from './AnimatedBackground';

function App() {
  return (
    /* Tera original gradient background */
    <div className="relative min-h-screen bg-gradient-to-r from-indigo-950 via-purple-950 to-blue-950 overflow-x-hidden">
      
      {/* Background Animation Layer - Z-index 1 par */}
      <AnimatedBackground />

      {/* Actual Content - Z-index 10 par taaki button/links kaam karein */}
      <div className="relative z-10">
        <Navber />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;