import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IconContext } from "react-icons";
import {
  FaFingerprint, FaRocket, FaGem, FaUsers, FaLightbulb,
  FaAward, FaCloud, FaCogs, FaShieldAlt, FaChartLine,
  FaGamepad,
  FaMagic,
  FaRobot,
  FaPalette,
  FaBoxOpen,
  FaHeart,
  FaCertificate,
  FaShieldVirus
} from 'react-icons/fa';
import factory from '../../assets/factory.jpg';

import img1 from '../../assets/toybear.png';
import img2 from '../../assets/toydino.png';
import img3 from '../../assets/toyrobot.png';
import img4 from '../../assets/toyrabbit.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const missionImgRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1, y: 0, duration: 1.5, scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(missionImgRef.current,
      { scale: 0.8, rotate: -5 },
      {
        scale: 1, rotate: 0, duration: 2, scrollTrigger: {
          trigger: missionImgRef.current,
          scrub: true,
        }
      }
    );

    let obj = { value: 0 };
    gsap.to(obj, {
      value: 580,
      duration: 3,
      scrollTrigger: {
        trigger: "#counter",
        start: "top 90%",
      },
      onUpdate: () => setCount(Math.floor(obj.value))
    });
  }, []);

  const topItems = [
    img1,
    img2,
    img3,
    img4,
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-20 px-6 overflow-hidden bg-transparent text-white font-sans">

      <svg width="0" height="0" className="absolute">
        <linearGradient id="purple-indigo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="50%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
      </svg>

      {/* 1. HERO HEADER */}
      <div className="max-w-7xl mx-auto mb-25 text-center">
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0px" }}
          whileInView={{ opacity: 1, letterSpacing: "10px" }}
          className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-mono uppercase text-sm block mb-4"
        >
          Discover Our Legacy
        </motion.span>
        <h2 ref={textRef} className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent uppercase leading-none pb-2">
          Elite <br /> Engineering
        </h2>
      </div>

      {/* 2. TEXT LEFT | IMAGE RIGHT SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Our Mission & Technological Prowess
          </h3>
          <p className="text-gray-300 text-xl leading-relaxed">
            We don’t just make toys; we design futuristic wonders. Our mission is to give the world playthings that are as durable as they are imaginative, setting a new standard for quality and joy.
          </p>

          <IconContext.Provider value={{ attr: { fill: "url(#purple-indigo-gradient)" }, className: "text-2xl shrink-0" }}>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-center gap-3 italic font-semibold">
                <FaCogs /> Advanced System Architecture
              </li>
              <li className="flex items-center gap-3 italic font-semibold">
                <FaCloud /> Cloud Native Solutions
              </li>
              <li className="flex items-center gap-3 italic font-semibold">
                <FaShieldAlt /> Enterprise-Grade Security
              </li>
            </ul>
          </IconContext.Provider>
        </motion.div>

        <div className="relative group overflow-hidden rounded-[3rem] border-2 border-white/10 shadow-2xl" ref={missionImgRef}>
          <img src={factory} alt="Mission" className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-indigo-600/10 mix-blend-overlay"></div>
        </div>
      </div>










      {/* 3. 3D CIRCULAR SLIDER (Pure Image Loop - No Borders/No Text) */}
      <div className="relative h-[500px] md:h-[700px] flex items-center justify-center perspective-[2500px] mb-40 overflow-hidden">
        <style>
          {`
      @keyframes carousel3d {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(360deg); }
      }
      .carousel-container {
        width: 280px; 
        height: 380px;
        position: relative; 
        transform-style: preserve-3d;
        animation: carousel3d 25s linear infinite;
      }
      @media (min-width: 768px) {
        .carousel-container { width: 350px; height: 480px; }
      }
      .carousel-container:hover { animation-play-state: paused; }
      
      .item-3d {
        position: absolute; 
        inset: 0; 
        border-radius: 20px; /* Optional: Thoda sa curve rakha hai images ke liye */
        overflow: hidden;
        backface-visibility: visible;
        background: transparent;
        transition: transform 0.5s ease;
      }

      /* Desktop Distance */
      .item-3d:nth-child(1) { transform: rotateY(0deg) translateZ(400px); }
      .item-3d:nth-child(2) { transform: rotateY(90deg) translateZ(400px); }
      .item-3d:nth-child(3) { transform: rotateY(180deg) translateZ(400px); }
      .item-3d:nth-child(4) { transform: rotateY(270deg) translateZ(400px); }

      /* Mobile Distance */
      @media (max-width: 768px) {
        .item-3d:nth-child(1) { transform: rotateY(0deg) translateZ(250px); }
        .item-3d:nth-child(2) { transform: rotateY(90deg) translateZ(250px); }
        .item-3d:nth-child(3) { transform: rotateY(180deg) translateZ(250px); }
        .item-3d:nth-child(4) { transform: rotateY(270deg) translateZ(250px); }
      }
    `}
        </style>

        <div className="carousel-container">
          {topItems.slice(0, 4).map((img, i) => (
            <div key={i} className="item-3d">
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`Toy ${i + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Background Subtle Glow - Sirf 3D depth ke liye, isay bhi hata sakte hain agar bilkul saaf chahiye */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full -z-10"></div>
      </div>









      {/* 4. EXPANDED CARDS GRID (FIXED VISIBILITY) */}
      <div className="max-w-7xl mx-auto mb-40">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-black uppercase italic tracking-widest bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Toy Universe
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IconContext.Provider value={{ attr: { fill: "url(#purple-indigo-gradient)" }, className: "text-4xl mb-6 shrink-0" }}>
            {[
              { icon: <FaGamepad />, title: "Next-Gen Play", desc: "Toys designed with futuristic mechanics and interactive fun." },
              { icon: <FaMagic />, title: "Pure Wonder", desc: "Crafting magical experiences that spark limitless imagination." },
              { icon: <FaShieldAlt />, title: "Ultra Safety", desc: "Ironclad durability and safety standards for every creation." },
              { icon: <FaRobot />, title: "Smart Tech", desc: "Integrating intelligent play-features for the new generation." },
              { icon: <FaPalette />, title: "Vibrant Art", desc: "Aesthetic designs inspired by dreamworlds and neon fantasies." },
              { icon: <FaBoxOpen />, title: "Swift Delivery", desc: "Expanding the joy of play with seamless global scalability." }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15, borderColor: "rgba(147, 51, 234, 0.5)", backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="p-10 bg-white/[0.03] border-2 border-white/10 rounded-[3rem] backdrop-blur-md shadow-xl transition-all duration-500"
              >
                {card.icon}
                <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {card.title}
                </h4>
                <p className="text-gray-400 leading-relaxed font-medium">{card.desc}</p>
              </motion.div>
            ))}
          </IconContext.Provider>
        </div>
      </div>








      {/* 5. COUNTDOWN & CARE FOOTER (FIXED VISIBILITY) */}
      <div id="counter" className="max-w-7xl mx-auto pt-24 border-t-2 border-white/10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-24">
          <div className="relative">
            <span className="text-[10rem] font-black text-white/5 absolute -top-24 -left-12 select-none">
              STATS
            </span>
            <div className="text-9xl font-black bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center">
              {count}<span className="text-white text-5xl ml-4 italic leading-none">+ <br /><span className="text-sm font-mono tracking-widest text-gray-400">PROJS</span></span>
            </div>
            <p className="text-gray-400 font-bold uppercase tracking-[1em] mt-8">Global Impact</p>
          </div>



          <div className="grid grid-cols-1 gap-6 w-full lg:w-1/2">
            <IconContext.Provider value={{ attr: { fill: "url(#purple-indigo-gradient)" }, className: "text-4xl shrink-0" }}>
              {[
  {
    icon: <FaHeart />,
    t: "Kid-First Design",
    d: "We design every toy with the same love and care as if it were made for ourselves."
  },
  {
    icon: <FaCertificate />,
    t: "Global Safety",
    d: "Our quality is unmatched, ensuring children’s safety and happiness with complete assurance."
  },
  {
    icon: <FaMagic />,
    t: "Infinite Wonder",
    d: "We design every toy from a unique and creative perspective so imagination never ends."
  },
  {
    icon: <FaShieldVirus />,
    t: "Pure & Secure",
    d: "Your child’s safety is our top priority and our strongest promise."
  }
].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 20, backgroundColor: "rgba(79, 70, 229, 0.1)" }}
                  className="flex gap-8 p-8 bg-white/[0.03] border-2 border-white/5 rounded-3xl items-center border-r-4 border-r-indigo-500/50 backdrop-blur-sm shadow-lg"
                >
                  {item.icon}
                  <div>
                    <h5 className="font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent text-2xl uppercase italic">{item.t}</h5>
                    <p className="text-gray-400 mt-2 font-medium">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </IconContext.Provider>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;