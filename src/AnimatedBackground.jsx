import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const AnimatedBackground = () => {
  // Denser particles data - 60 elements for "bht sare" effect
  const toyMesh = useMemo(() => 
    [...Array(60)].map((_, i) => ({
      id: i,
      // Random types of 3D-ish toy elements
      type: Math.random() > 0.6 ? 'cube' : Math.random() > 0.3 ? 'ring' : 'cone',
      size: Math.random() * 8 + 4, // 4px to 12px
      x: Math.random() * 100, // Percentage
      y: Math.random() * 100, // Percentage
      duration: Math.random() * 25 + 15, // Smooth floating
      delay: Math.random() * 8,
      opacity: Math.random() * 0.4 + 0.1, // 10% to 50% transparency
    })), []);

  useEffect(() => {
    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 80; // More intense move
      const yPos = (clientY / window.innerHeight - 0.5) * 80;

      // Parallax move for all mesh elements
      gsap.to(".toy-mesh", {
        x: xPos,
        y: yPos,
        duration: 2.5,
        ease: "power1.out",
        stagger: 0.01 // Slight ripple effect
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // Section ke peeche z-index set kiya
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      
      {/* --- FLOATING 3D TOY MESH --- */}
      {toyMesh.map((toy) => (
        <motion.div
          key={`toy-${toy.id}`}
          className="toy-mesh absolute shadow-2xl"
          style={{
            left: `${toy.x}%`,
            top: `${toy.y}%`,
            opacity: toy.opacity,
          }}
          animate={{
            y: [0, -150, 0], // Long floating path
            rotate: [0, 360, 0], // Slow rotation
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: toy.duration,
            repeat: Infinity,
            delay: toy.delay,
            ease: "linear"
          }}
        >
          {/* Base Color & internal glow for 3D look */}
          <div className={`toy-shape rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/5 ${toy.type === 'ring' ? 'rounded-full border-[3px]' : toy.type === 'cone' ? 'border-b-[30px] border-b-white/10 border-r-[15px] border-r-transparent border-l-[15px] border-l-transparent bg-transparent' : 'rounded-lg' } `}
            style={{
              width: `${toy.size}px`,
              height: `${toy.size}px`,
              boxShadow: '0 0 10px rgba(168,85,247,0.1)'
            }}
          />
        </motion.div>
      ))}

      {/* --- ADD DENSE NEON PARTICLES --- */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`neon-${i}`}
          className="toy-mesh absolute rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-60 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -200, 0],
            scale: [1, 2, 1],
            opacity: [0.1, 0.7, 0.1]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}

      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default AnimatedBackground;