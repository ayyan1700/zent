import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter, FaPlay } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight, HiOutlineSparkles } from 'react-icons/hi';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// CEO Image import
import profileImg from '../../assets/ceo.jpg';

gsap.registerPlugin(TextPlugin);

const Home = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // 1. CEO Image Floating Animation
        gsap.to(imageRef.current, {
            y: -20,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // 2. Typing Text Animation
        const words = ["Magic.", "Safety.", "Future.", "Dreams."];
        let mainTimeline = gsap.timeline({ repeat: -1 });

        words.forEach(word => {
            let textTimeline = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 });
            textTimeline.to(textRef.current, {
                duration: 0.8,
                text: word,
                ease: "power2.inOut"
            });
            mainTimeline.add(textTimeline);
        });
    }, []);

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center b justify-center overflow-hidden pt-25 pb-10">

            <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20"
                        >
                            <HiOutlineSparkles className="text-indigo-400 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.1em] text-indigo-300">
                                Crafting Tomorrow's Joy
                            </span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-8xl font-black text-white leading-[1.0] tracking-tighter"
                            >
                                CREATE THE <br />
                                <span ref={textRef} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600">
                                    {/* GSAP Injection */}
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="max-w-md text-gray-400 text-lg font-light leading-relaxed"
                            >
                                Premium toys designed with a focus on safety, innovation, and pure childhood wonder.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap gap-5 items-center"
                        >
                            {/* Projects Button */}
                            <div className="flex flex-wrap gap-10 items-center pt-4">
                                {/* Modern Text Link with Smooth Scroll */}
                                <a
                                    href="#projects"
                                    onClick={(e) => handleScroll(e, '#projects')}
                                    className="group relative flex items-center gap-4 cursor-pointer"
                                >
                                    <div className="relative flex flex-col">
                                        <span className="text-white font-black text-xs uppercase tracking-[0.3em] group-hover:text-purple-400 transition-colors duration-300">
                                            View Projects
                                        </span>
                                        {/* Premium Gradient Underline */}
                                        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-purple-700 via-blue-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    </div>

                                    {/* Floating Arrow Icon */}
                                    <motion.div
                                        whileHover={{ x: 8 }}
                                        className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300"
                                    >
                                        <HiOutlineArrowNarrowRight size={18} className="text-gray-400 group-hover:text-purple-400" />
                                    </motion.div>
                                </a>

                                {/* Secondary Link: Watch Story */}

                            </div>

                        </motion.div>
                    </div>

                    {/* Right Content: CEO Image with Rotating Circle */}
                  <div className="lg:col-span-5 flex justify-center relative">
  <div ref={imageRef} className="relative group">

    {/* 1. Rotating Border Circle */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute -inset-6 border border-dashed border-purple-500/30 rounded-full"
    />

    {/* 2. Outer Glowing Ring */}
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-600/20 via-transparent to-pink-600/20 blur-xl"
    />

    {/* 3. Image Container (SQUARE CHANGED) */}
    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-white/10 relative z-10">
      <img
        src={profileImg}
        alt="Zentiboo CEO"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    {/* 4. Floating Info Tag (same) */}
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-4 -right-4 bg-black/35 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl z-20"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black italic text-xs">
          Z
        </div>
        <div>
          <h4 className="text-white font-black text-[10px] leading-none uppercase tracking-tighter">
            CEO Vision
          </h4>
          <p className="text-[8px] text-indigo-200 font-bold uppercase mt-1">
            Founder 2026
          </p>
        </div>
      </div>
    </motion.div>

  </div>
</div>

                </div>
            </div>
        </section>
    );
};

export default Home;