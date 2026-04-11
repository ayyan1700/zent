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
  const circleRef = useRef(null);

  const projectData = [
    { 
      title: "Cuddle Bear Pro", 
      img: img1, 
      color: "from-pink-500/40", 
      tag: "Smart Plush Toy",
      desc: "A soft interactive teddy that responds to touch and voice.",
      tech: ["Voice Response", "Touch Sensors", "Kid-Safe"]
    },
    { 
      title: "Dino Explorer Kit", 
      img: img2, 
      color: "from-green-500/40", 
      tag: "Educational Toy",
      desc: "A STEM-based dinosaur kit where kids can build their own dino.",
      tech: ["STEM Learning", "DIY Assembly", "Safe Plastic"]
    },
    { 
      title: "Robo Buddy X", 
      img: img3, 
      color: "from-blue-500/40", 
      tag: "Interactive Robot",
      desc: "An AI-powered toy robot that plays and interacts with kids.",
      tech: ["AI Interaction", "Voice Commands", "Smart Sensors"]
    },
    { 
      title: "Magic Bunny Lights", 
      img: img4, 
      color: "from-purple-500/40", 
      tag: "Creative Toy",
      desc: "A color-changing bunny that enhances creativity with lights and music.",
      tech: ["LED Effects", "Sound Sync", "Rechargeable"]
    },
  ];

  const upcomingToys = [
    { img: model1 },
    { img: model2 },
    { img: model3 },
    { img: model4 },
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

    // 3D CIRCULAR LOOP LOGIC
    const items = circleRef.current.children;
    const numItems = items.length;
    
    // RADIUS KAM KIYA HAI (Kareeb karne ke liye)
    const radius = 280; 

    const tl = gsap.timeline({ repeat: -1 });

    tl.to({}, {
      duration: 15,
      ease: "none",
      onUpdate: function () {
        const progress = this.progress();
        for (let i = 0; i < numItems; i++) {
          const angle = (progress * Math.PI * 2) + (i / numItems) * Math.PI * 2;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;
          
          const scale = gsap.utils.mapRange(-radius, radius, 0.7, 1.5, z);
          const opacity = gsap.utils.mapRange(-radius, radius, 0.2, 1, z);

          gsap.set(items[i], {
            x: x,
            z: z,
            scale: scale,
            opacity: opacity,
            zIndex: Math.round(z),
            transformOrigin: "50% 50%",
          });
        }
      }
    });
  }, []);

  return (
    <section 
      id='projects' 
      ref={sectionRef}
      className='min-h-screen py-22 px-6 relative overflow-hidden'
    >
      <div className="absolute top-10 left-0 w-full flex justify-center opacity-[0.02] pointer-events-none select-none z-0">
        <h1 className="text-[25vw] font-black uppercase italic leading-none text-white">
          Works
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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

        {/* --- UPCOMING TOYS SECTION --- */}
        <div className="mt-40">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black italic uppercase text-white"
            >
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 ">Bambluu</span> Toys
            </motion.h2>
            <p className="text-gray-500 mt-4 tracking-widest uppercase text-sm">Next Generation of Play</p>
          </div>

          <div className="h-[550px] flex items-center justify-center relative overflow-visible [perspective:1500px]">
            <div ref={circleRef} className="relative w-full h-full flex items-center justify-center">
              {upcomingToys.map((toy, index) => (
                <div key={index} className="absolute w-[400px] md:w-[500px]">
                  <img 
                    src={toy.img} 
                    alt="toy" 
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}