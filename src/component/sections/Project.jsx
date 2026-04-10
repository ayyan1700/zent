import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../../assets/toybear.png';
import img2 from '../../assets/toydino.png';
import img3 from '../../assets/toyrobot.png';
import img4 from '../../assets/toyrabbit.png';
import model1 from '../../assets/model1.png';
import model2 from '../../assets/model2.png';
import model3 from '../../assets/model3.png';
import model4 from '../../assets/model4.png';

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
      desc: "Soft interactive teddy jo touch aur voice par react karta hai.",
      tech: ["Voice Response", "Touch Sensors", "Kid-Safe"]
    },
    { 
      title: "Dino Explorer Kit", 
      img: img2, 
      color: "from-green-500/40", 
      tag: "Educational Toy",
      desc: "STEM-based dinosaur kit jisme bachay khud apna dino assemble karte hain.",
      tech: ["STEM Learning", "DIY Assembly", "Safe Plastic"]
    },
    { 
      title: "Robo Buddy X", 
      img: img3, 
      color: "from-blue-500/40", 
      tag: "Interactive Robot",
      desc: "AI powered toy robot jo bachon ke sath games khelta hai.",
      tech: ["AI Interaction", "Voice Commands", "Smart Sensors"]
    },
    { 
      title: "Magic Bunny Lights", 
      img: img4, 
      color: "from-purple-500/40", 
      tag: "Creative Toy",
      desc: "Color-changing bunny jo lights aur music ke sath creativity boost karta hai.",
      tech: ["LED Effects", "Sound Sync", "Rechargeable"]
    },
  ];

  // Upcoming Toys Data for Bambluu
  const upcomingToys = [
    { img: model1,  },
    { img: model2, },
    { img: model3,},
    { img: model4,},
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
        <h1 className="text-[25vw] font-black uppercase italic leading-none text-white">
          Works
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Existing Projects Heading */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-[0.3em] uppercase text-xs mb-4"
          >
            Our Projects
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-tight bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Digital <br /> Masterpieces
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-20 mb-32">
          {projectData.map((proj, i) => (
            <motion.div
              key={i}
              ref={el => (cardsRef.current[i] = el)}
              whileHover={{ scale: 0.97 }}
              className="relative group h-[550px] rounded-[3.5rem] bg-white/[0.03] border border-white/10 overflow-hidden z-20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} to-transparent opacity-0 group-hover:opacity-100 transition duration-700 z-0`} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full flex justify-center z-10">
                <motion.img 
                  src={proj.img} 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[260px] md:w-[300px] object-contain drop-shadow-2xl"
                />
              </div>
              <div className="absolute bottom-0 w-full p-8 z-30 bg-gradient-to-t from-black/90 to-transparent">
                <span className="text-indigo-400 text-xs uppercase tracking-widest">{proj.tag}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{proj.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{proj.desc}</p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-gray-300 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- NEW SECTION: UPCOMING TOYS (BAMBLUU) --- */}
        <div className="mt-40">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black italic uppercase text-white"
            >
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 ">Bambluu</span> Toys
            </motion.h2>
            <p className="text-gray-500 mt-4 tracking-widest uppercase text-sm">Next Generation of Play</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {upcomingToys.map((toy, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="aspect-square rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 flex items-center justify-center overflow-hidden relative">
                  {/* Decorative Glow */}
                  <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <img 
                    src={toy.img} 
                    alt={toy.name} 
                    className="w-4/5 h-4/5 object-contain z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase z-20 shadow-lg">
                    New
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}