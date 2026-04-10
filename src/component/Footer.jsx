import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaInstagram size={18} />, link: "#" },
    { icon: <FaFacebookF size={18} />, link: "#" },
    { icon: <FaTwitter size={18} />, link: "#" },
    { icon: <FaTiktok size={18} />, link: "#" },
  ];

  const quickLinks = [
    { name: "Home", id: "#home" },
    { name: "About", id: "#about" },
    { name: "Projects", id: "#projects" },
    { name: "Contact", id: "#contact" },
  ];

  return (
    <footer className="relative backdrop-blur-lg bg-black/30 pt-24 pb-12 overflow-hidden border-t border-white/5">

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 opacity-80" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* 1. Brand */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl font-black tracking-tighter text-white">
              ZENTI
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                BOO
              </span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing magic to every childhood. We design toys that spark creativity and safe play for kids worldwide.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  whileHover={{ y: -5 }}
                  className="w-10 h-10 flex items-center justify-center 
      bg-white/5 border border-white/10 rounded-full 
      text-gray-400 transition-all duration-300
      hover:text-white hover:border-indigo-500 hover:shadow-[0_0_10px_rgba(99,102,241,0.6)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Links */}
          <div className="lg:pl-10">
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em]">
              Explore
            </h4>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.id} className="text-gray-400 hover:text-white transition-all text-sm font-medium flex items-center group">

                    <span className="w-0 group-hover:w-3 h-[2px] bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 mr-0 group-hover:mr-2 transition-all"></span>

                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact */}
         <div className="lg:col-span-1">
  <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em]">
    Say Hello
  </h4>

  <ul className="space-y-5 text-sm text-gray-400">

    <li className="flex items-start gap-4">
      <div className="p-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600">
        <HiOutlineMail size={16} className="text-white" />
      </div>
      <span className="hover:text-white transition-colors cursor-pointer">
        info@zentiboo.com
      </span>
    </li>

    <li className="flex items-start gap-4">
      <div className="p-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600">
        <HiOutlineLocationMarker size={16} className="text-white" />
      </div>
      <span className="leading-relaxed">
        China, Beijing, Shunyi District, 陶家坟中街
      </span>
    </li>

  </ul>
</div>

          {/* 4. Card */}
          <div className="flex flex-col justify-start">
            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl space-y-4">

              <p className="text-white font-bold text-sm">
                Ready to play?
              </p>

              <p className="text-gray-500 text-xs">
                Join our journey in crafting the best toys.
              </p>

              <button
                onClick={scrollToTop}
                className="group flex items-center justify-between w-full px-5 py-3 rounded-2xl text-white font-bold text-[10px] uppercase tracking-widest transition-all bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:opacity-90"
              >
                Back to Top

                <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} ZENTIBOO TOYS
          </p>

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;