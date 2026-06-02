import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, MousePointer, Sparkles } from 'lucide-react';

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "Computer Science Graduate"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // High fidelity typewriter animation logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
      }, 40); // deletion speed
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentRole.slice(0, currentText.length + 1));
      }, 80); // typing speed
    }

    // Handles switching states between typing and deleting
    if (!isDeleting && currentText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200); // linger duration
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/iamVishnuP", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/vishnu-ps-00a650341", label: "LinkedIn" },
    { icon: <Mail size={20} />, url: "mailto:officialvishnups@gmail.com", label: "Email" }
  ];

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid">

      {/* Background Mesh Gradient Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Cyan Orb */}
        <div className="absolute top-[20%] left-[10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-cyan-500/10 blur-[120px] animate-float-slow" />
        {/* Purple Orb */}
        <div className="absolute bottom-[20%] right-[10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-purple-600/10 blur-[120px] animate-float-medium" />
        {/* Dark radial glow centered on content */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/70 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

        {/* Hero Left: Text Content */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          {/*}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00f2fe] tracking-wide w-fit mb-6 shadow-inner"
          >

          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1] mb-4 text-white"
          >
            Hi, I'm <span className="bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent drop-shadow-sm select-text">Vishnu P</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-gray-300 min-h-[40px] flex items-center mb-6"
          >
            I am a&nbsp;
            <span className="text-[#00f2fe] font-semibold typewriter-cursor bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">
              {currentText}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 font-sans leading-relaxed mb-10 max-w-xl select-text"
          >
            Computer Science Engineering graduate specializing in building robust full stack applications and RESTful APIs using the MERN stack. I design scalable, secure, and AI driven digital ecosystems that elevate performance and user experience.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center mb-10"
          >
            <button
              onClick={() => handleScrollTo('#projects')}
              className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] text-white font-semibold text-sm rounded-full shadow-[0_4px_20px_rgba(0,242,254,0.3)] hover:shadow-[0_4px_30px_rgba(127,0,255,0.5)] hover:scale-[1.03] transition-all duration-300 pointer-events-auto cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo('#contact')}
              className="px-7 py-3.5 bg-white/5 border border-white/10 hover:border-[#00f2fe]/40 text-white font-semibold text-sm rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-5"
          >

            <div className="w-1 h-[1px] bg-gray-700" />
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-[#00f2fe] hover:border-[#00f2fe]/40 hover:bg-[#00f2fe]/5 transition-all duration-300 hover:-translate-y-1"
                  title={link.label}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Hero Right: Profile Portrait (USER.png) */}
        <div className="col-span-1 lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 }}
            className="relative w-[280px] sm:w-[360px] h-[280px] sm:h-[360px]"
          >
            {/* Ambient Backlight Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00f2fe] to-[#7f00ff] opacity-40 blur-[40px] animate-pulse-slow z-0" />

            {/* Glowing border ring 1 */}
            <div className="absolute inset-[-4px] rounded-full border border-dashed border-[#00f2fe]/20 animate-[spin_40s_linear_infinite]" />

            {/* Glowing border ring 2 */}
            <div className="absolute inset-[6px] rounded-full border border-gradient-to-tr from-[#00f2fe] to-[#7f00ff] opacity-40 p-[2px] animate-[spin_25s_linear_infinite]" />

            {/* Main Picture Mask Card */}
            <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr from-[#00f2fe] via-transparent to-[#7f00ff] shadow-2xl overflow-hidden z-10 select-none">
              <div className="w-full h-full bg-[#070707] rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/vishnu_og.png"
                  alt="Vishnu P Portrait"
                  className="w-full h-full object-cover scale-[1.02] hover:scale-[1.1] transition-transform duration-700 ease-out"
                  onError={(e) => {
                    // Fallback to stylized text if image has issues loading
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<span class="text-white font-display text-7xl font-extrabold bg-gradient-to-tr from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent">VP</span>';
                  }}
                />
              </div>
            </div>

            {/* Interactive floating stats overlay */}
            {/* <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -left-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2.5 shadow-lg z-20"
            >
              <div className="w-3 h-3 rounded-full bg-[#00f2fe] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-200">Open to Opportunities</span>
            </motion.div> */}
          </motion.div>
        </div>

      </div>

      {/* Floating Mouse Scroll Indicator 
      <div className="absolute bottom-6 left-50% transform -translate-x-50% hidden md:flex flex-col items-center gap-2 opacity-50 z-20">
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold font-sans">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1"
        >
          <div className="w-1.5 h-1.5 bg-[#00f2fe] rounded-full" />
        </motion.div>
      </div> */}

    </section>
  );
}
