import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Terminal } from 'lucide-react';

// Import all sub-components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Set up high performance scroll progress tracker
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Artificial load wait to allow page resources to settle and render loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Dynamic GSAP Trailing Custom Cursor */}
      <CustomCursor />

      {/* Page Load Split-Reveal Screen Animation */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: '-100%',
              opacity: 0,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 bg-[#050505] z-50 flex flex-col items-center justify-center select-none"
          >
            {/* Spinning background mesh glow */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-[#00f2fe]/10 blur-[80px] animate-pulse" />

            <div className="relative flex flex-col items-center gap-6">
              
              {/* Terminal Logo Icon */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#00f2fe] to-[#7f00ff] p-[1.5px] shadow-[0_0_20px_rgba(0,242,254,0.3)]"
              >
                <div className="w-full h-full bg-[#050505] rounded-[14px] flex items-center justify-center">
                  <Terminal size={22} className="text-[#00f2fe] animate-pulse" />
                </div>
              </motion.div>

              {/* Staggered Split Text Reveal */}
              <div className="overflow-hidden h-9 flex items-center">
                <motion.span
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                  className="font-display font-extrabold text-2xl tracking-widest uppercase text-white bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                >
                  Vishnu P
                </motion.span>
              </div>

              {/* Progress Bar Loading Track */}
              <div className="w-40 h-[2px] bg-white/5 rounded-full overflow-hidden mt-1 relative">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#00f2fe] to-[#7f00ff]"
                />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Frame */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative min-h-screen"
        >
          {/* Scroll Progress Bar at the top edge */}
          <motion.div 
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#7f00ff] z-50 origin-left shadow-[0_0_10px_#00f2fe]"
          />

          {/* Frosted Glass Navigation */}
          <Navbar />

          {/* Section Components Assembly */}
          <main className="relative">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Experience />
            <Contact />
          </main>

          {/* Footer details */}
          <Footer />

        </motion.div>
      )}
    </>
  );
}
