import React from 'react';
import { motion } from 'framer-motion';
import { RiMapPin2Fill, RiMailFill, RiTimeFill, RiSendPlaneFill, RiGamepadFill } from 'react-icons/ri';

export default function Contact() {

  const tags = ["3D Toy Portfolios", "Interactive SaaS", "Game UI Design"];

  return (
    <section id="contact" className="w-full py-20 px-4 md:px-10 relative bg-transparent overflow-hidden text-white">

      {/* Background Zentiboo Glows */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto">

        {/* Main Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent inline-block italic">
            Start the Factory
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-purple-500 to-indigo-600 mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* LEFT COLUMN: THE TOY BOX (FORM) */}
          <div className="w-full space-y-8">
            <form className="space-y-6">

              <div className="space-y-2">
                <label className="text-[14px] font-black uppercase tracking-wider  via-indigo-400  ml-1 italic">Name</label>
                <input
                  type="text"
                  placeholder="Who's calling?"
                  className="w-full bg-[#000000b2] border border-white/5 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-purple-600 transition-all placeholder:text-gray-700 text-sm shadow-sm font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-black uppercase tracking-wider via-indigo-400 ml-1 italic">email</label>
                <input
                  type="email"
                  placeholder="Your digital address"
                  className="w-full bg-[#000000b2] border border-white/5 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-indigo-600 transition-all placeholder:text-gray-700 text-sm shadow-sm font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-black uppercase tracking-wider via-indigo-400 ml-1 italic">Messege</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about the magic you want to build..."
                  className="w-full bg-[#000000b2] border border-white/5 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-purple-600 transition-all placeholder:text-gray-700 text-sm resize-none shadow-sm font-medium"
                ></textarea>
              </div>

              {/* Action Button */}
              <button className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 font-black uppercase tracking-[0.4em] text-[12px] flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(79,70,229,0.3)] group italic">
                Blast Message
                <RiSendPlaneFill size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: FACTORY STATS */}
          <div className="w-full space-y-10 pt-2">
            <div>
              <div className="flex items-center gap-3 mb-6 group">
                {/* Animated Gradient Icon */}
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-600/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out">
                  <RiGamepadFill className="animate-pulse" size={24} />
                </div>
                <h3 className="text-3xl font-[1000] italic text-white uppercase tracking-tighter bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-purple-400 transition-colors">
                  Let's Connect
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium border-l-2 border-white/5 pl-6">
                Mera inbox hamesha naye ideas ke liye khula hai. Chahay wo koi complex 3D world ho ya elite web experience—let's make it real.
              </p>
            </div>

            {/* Info Items List */}
            <div className="space-y-6">
              {/* Toy Station Item */}
              <div className="flex items-center gap-5 group">
                <div className="text-white bg-white/5 p-2 rounded-md group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:via-indigo-600 group-hover:to-purple-600 transition-all duration-500 shadow-lg shadow-purple-600/10">
                  <RiMapPin2Fill size={18} />
                </div>
                <div>
                  <h4 className="font-[1000] text-[10px] uppercase tracking-[0.2em] text-indigo-400  italic">
                    Toy Station
                  </h4>
                  <p className="text-white text-sm font-bold mt-0.5 tracking-tight">China, Beijing, Shunyi District, 陶家坟中街</p>
                </div>
              </div>

              {/* Direct Signal Item */}
              <div className="flex items-center gap-5 group">
                <div className="text-white bg-white/5 p-2 rounded-md group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:via-indigo-600 group-hover:to-purple-600 transition-all duration-500 shadow-lg shadow-indigo-600/10">
                  <RiMailFill size={18} />
                </div>
                <div>
                  <h4 className="font-[1000] text-[10px] uppercase tracking-[0.2em] text-indigo-400 italic">
                    Direct Signal
                  </h4>
                  <p className="text-white text-sm font-bold mt-0.5 tracking-tight">devayyan761@gmail.com</p>
                </div>
              </div>

              {/* Assembly Time Item */}
              <div className="flex items-center gap-5 group">
                <div className="text-white bg-white/5 p-2 rounded-md group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:via-indigo-600 group-hover:to-purple-600 transition-all duration-500 shadow-lg shadow-purple-600/10">
                  <RiTimeFill size={18} />
                </div>
                <div>
                  <h4 className="font-[1000] text-[10px] uppercase tracking-[0.2em] text-indigo-400 italic">
                    Assembly Time
                  </h4>
                  <p className="text-white text-sm font-bold mt-0.5 tracking-tight">Response within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Toy Specialization Tags */}
            <div className="pt-6 border-t border-white/5">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 italic">Specializing In:</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-md border border-white/5 bg-white/5 text-gray-400 text-[9px] font-black uppercase tracking-[0.1em] hover:text-white hover:border-indigo-500 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}