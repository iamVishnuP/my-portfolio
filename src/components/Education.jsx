import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      institution: "APJ Abdul Kalam Technological University",
      location: "Kerala, India",
      degree: "Bachelor of Technology",
      major: "Computer Science & Engineering",
      duration: "2022 — 2026",
      details: [
        "Specialized core tracks in Full Stack Engineering, Advanced Data Structures, and Database Management Systems.",
        "Architected academic projects focusing on modern RESTful microservices, JWT authentication schemes, and AI system routing.",
        "Proficient in relational (MySQL) and non-relational (MongoDB) database queries and optimized indexing procedures.",
        "Core studies: Operating Systems, Computer Networks, Software Engineering, and AI Algorithms."
      ]
    }
  ];

  return (
    <section id="education" className="relative py-28 bg-grid overflow-hidden border-b border-white/5">
      
      {/* Background Orbs */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-[#00f2fe]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-72 h-72 rounded-full bg-[#7f00ff]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-[#7f00ff] uppercase tracking-wider mb-4"
          >
            <GraduationCap size={12} />
            <span>Academic Route</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight"
          >
            Education & <span className="bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent">Qualifications</span>
          </motion.h2>
        </div>

        {/* Timeline Content */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical central glowing line tracer */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00f2fe] via-[#7f00ff] to-[#00f2fe] opacity-35" />

          {/* Timeline node */}
          {educationData.map((item, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row items-stretch mb-12">
              
              {/* Central spinning dot over the line */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-[7px] w-4.5 h-4.5 rounded-full bg-[#050505] border-2 border-[#00f2fe] flex items-center justify-center z-10 shadow-[0_0_10px_#00f2fe]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7f00ff]" />
              </div>

              {/* Left Spacer (only for desktop to offset timeline cards) */}
              <div className="hidden md:block w-1/2 pr-12 text-right">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col justify-center h-full gap-2 text-left md:text-right"
                >
                  <span className="font-display text-[#00f2fe] font-extrabold text-2xl tracking-tight leading-none">
                    {item.degree}
                  </span>
                  <span className="font-display text-lg font-bold text-white mb-2">
                    {item.major}
                  </span>
                  <div className="flex justify-end items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <Calendar size={13} />
                    <span>{item.duration}</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Side card */}
              <div className="w-full md:w-1/2 pl-12 md:pl-12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="interactive-card glass-panel p-8 rounded-3xl text-left border border-white/5 hover:border-[#00f2fe]/30 hover:bg-white/[0.04] transition-all duration-300 shadow-2xl relative"
                >
                  {/* Mobile header view (hidden on desktop) */}
                  <div className="md:hidden flex flex-col gap-1 mb-4">
                    <span className="font-display text-[#00f2fe] font-extrabold text-xl leading-none">
                      {item.degree}
                    </span>
                    <span className="font-display text-base font-bold text-white">
                      {item.major}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">
                      <Calendar size={12} />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <h4 className="font-display text-lg font-bold text-white tracking-tight mb-2.5">
                    {item.institution}
                  </h4>

                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold uppercase tracking-wider mb-6">
                    <MapPin size={13} className="text-gray-500" />
                    <span>{item.location}</span>
                  </div>

                  {/* Course Details checklist */}
                  <ul className="space-y-3.5">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm text-gray-400 font-sans leading-relaxed select-text">
                        <BookOpen size={15} className="text-[#7f00ff] mt-1 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                </motion.div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
