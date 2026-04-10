import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../../assets/toybear.png';
import img2 from '../../assets/toydino.png';
import img3 from '../../assets/toyrobot.png';
import img4 from '../../assets/toyrabbit.png';

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

 const projectData = [
  { 
    title: "Cuddle Bear Pro", 
    img: img1, 
    color: "from-pink-500/40", 
    tag: "Smart Plush Toy",
    desc: "Soft interactive teddy jo touch aur voice par react karta hai aur bachon ko comfort aur fun provide karta hai.",
    tech: ["Voice Response", "Touch Sensors", "Kid-Safe Material"]
  },
  { 
    title: "Dino Explorer Kit", 
    img: img2, 
    color: "from-green-500/40", 
    tag: "Educational Toy",
    desc: "STEM-based dinosaur kit jisme bachay khud apna dino assemble karte hain aur learning ke sath fun bhi lete hain.",
    tech: ["STEM Learning", "DIY Assembly", "Safe Plastic"]
  },
  { 
    title: "Robo Buddy X", 
    img: img3, 
    color: "from-blue-500/40", 
    tag: "Interactive Robot",
    desc: "AI powered toy robot jo bachon ke sath games khelta hai, questions ka jawab deta hai aur learning ko exciting banata hai.",
    tech: ["AI Interaction", "Voice Commands", "Smart Sensors"]
  },
  { 
    title: "Magic Bunny Lights", 
    img: img4, 
    color: "from-purple-500/40", 
    tag: "Creative Toy",
    desc: "Color-changing bunny jo lights aur music ke sath bachon ki creativity aur imagination ko boost karta hai.",
    tech: ["LED Effects", "Sound Sync", "Rechargeable"]
  },
];

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section 
      id='projects' 
      ref={sectionRef}
      className='min-h-screen py-22 px-6 relative overflow-hidden'
    >

      {/* Background Text */}
      <div className="absolute top-10 left-0 w-full flex justify-center opacity-[0.02] pointer-events-none select-none z-0">
        <h1 className="text-[25vw] font-black uppercase italic leading-none">
          Works
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600  bg-clip-text text-transparent tracking-[0.3em] uppercase text-xs mb-4"
          >
            Our Projects
          </motion.p>

          <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-tight bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Digital <br /> Masterpieces
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-20">
          {projectData.map((proj, i) => (
            <motion.div
              key={i}
              ref={el => (cardsRef.current[i] = el)}
              whileHover={{ scale: 0.97 }}
              className="relative group h-[550px] rounded-[3.5rem] bg-white/[0.03] border border-white/10 overflow-hidden z-20"
            >

              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} to-transparent opacity-0 group-hover:opacity-100 transition duration-700 z-0`} />

              {/* Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full flex justify-center z-10">
                <motion.img 
                  src={proj.img} 
                  alt={proj.title}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="w-[260px] md:w-[300px] object-contain drop-shadow-xl"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 w-full p-8 z-30 bg-gradient-to-t from-black/80 to-transparent">
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent text-xs uppercase">
                  {proj.tag}
                </span>

                <h3 className="text-2xl font-bold text-white mt-1">
                  {proj.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {proj.desc}
                </p>

                <div className="flex gap-2 mt-3 flex-wrap">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}