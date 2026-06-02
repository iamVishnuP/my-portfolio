import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socials = [
    { icon: <Github size={16} />, url: "https://github.com/iamVishnuP", name: "GitHub" },
    { icon: <Linkedin size={16} />, url: "https://linkedin.com/in/vishnu-ps-00a650341", name: "LinkedIn" },
    { icon: <Mail size={16} />, url: "mailto:officialvishnups@gmail.com", name: "Email" }
  ];

  return (
    <footer className="relative py-12 bg-[#050505] border-t border-white/5 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-center md:text-left">
        
        {/* Credit Line */}
        <div className="flex flex-col gap-1.5 font-sans text-xs sm:text-sm text-gray-500 select-text">
          <span className="font-semibold text-white">© 2026 Vishnu P</span>
          <span>Designed & Built with passion and code standards.</span>
        </div>

        {/* Social Row icons */}
        <div className="flex items-center gap-4">
          {socials.map((soc, idx) => (
            <a
              key={idx}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/5 text-gray-500 hover:text-[#00f2fe] hover:border-[#00f2fe]/30 hover:bg-[#00f2fe]/5 transition-all duration-300"
              title={soc.name}
              aria-label={soc.name}
            >
              {soc.icon}
            </a>
          ))}
        </div>

      </div>

      {/* Dynamic Scroll to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="fixed bottom-8 right-8 z-30 w-11 h-11 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] border border-white/10 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,242,254,0.35)] hover:shadow-[0_4px_25px_rgba(127,0,255,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

    </footer>
  );
}
