import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Award, Zap, Code } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: <Cpu className="text-[#00f2fe]" size={22} />,
      value: "10+",
      label: "Tech Mastered",
      desc: "React, Node, Express, Mongo, SQL"
    },
    {
      icon: <Award className="text-[#7f00ff]" size={22} />,
      value: "2 Major",
      label: "Full Stack Systems",
      desc: "Robust, production-ready apps"
    },
    {
      icon: <Zap className="text-[#00f2fe]" size={22} />,
      value: "4 Years",
      label: "Engineering Studies",
      desc: "B.Tech in Computer Science"
    },
    {
      icon: <Code className="text-[#7f00ff]" size={22} />,
      value: "100%",
      label: "Performance Focus",
      desc: "Optimized caching & clean APIs"
    }
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-[#050505] border-b border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-[#00f2fe] uppercase tracking-wider mb-4"
          >
            <User size={12} />
            <span>About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight"
          >
            Engineering <span className="bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent">Digital Excellence</span>
          </motion.h2>
        </div>

        {/* Section Content: Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Detailed Narrative (7 columns on large screens) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-6 select-text leading-tight text-left">
                Developing Next Gen MERN stack applications with high performance APIs
              </h3>

              <div className="space-y-5 text-gray-400 font-sans leading-relaxed select-text text-sm sm:text-base">
                <p>
                  Hello! I'm <strong className="text-[#00f2fe]">Vishnu P</strong>, a Computer Science Engineering graduate with a strong interest in full stack web development, backend systems, and scalable application architecture. I enjoy building modern web applications that combine performance, usability, and clean engineering practices.
                </p>

                <p>
                  My development experience includes designing secure backend systems using Node.js, Express.js, MongoDB, and JWT based authentication, along with creating responsive and interactive frontend applications using React.js. I focus on writing maintainable code, optimizing application performance, and developing efficient API driven systems.
                </p>

                <p>
                  I have worked on projects involving AI powered integrations, intelligent search systems, caching strategies, and real time data handling. Whether developing scalable REST APIs or crafting modern user interfaces, I approach software engineering with a problem solving mindset and continuous learning attitude.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stats Block Grid (5 columns on large screens) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="interactive-card glass-panel flex flex-col justify-between p-6 rounded-2xl hover:border-[#00f2fe]/30 hover:bg-white/[0.04] transition-all duration-300 min-h-[160px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shrink-0">
                    {stat.icon}
                  </div>
                  <div className="text-left mt-auto">
                    <span className="block font-display text-2xl font-extrabold text-white leading-none mb-1.5">{stat.value}</span>
                    <span className="block font-display text-sm font-bold text-gray-300 mb-1">{stat.label}</span>
                    <span className="block font-sans text-xs text-gray-500 leading-normal">{stat.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
