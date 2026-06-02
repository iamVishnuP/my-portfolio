import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Database, Award, Sparkles, CodeXml } from 'lucide-react';

export default function Experience() {
  const credentials = [
    {
      title: "MERN Stack Mastery",
      category: "Full Stack Paradigm",
      icon: <CodeXml className="text-[#00f2fe]" size={22} />,
      description: "Advanced engineering of high-performance web systems using React 19, Tailwind CSS v4, Node.js, and Express.js, combined with robust Mongoose data schemas.",
      achievement: "Completed 2 major full-stack deployments"
    },
    {
      title: "Intelligent Systems Integration",
      category: "AI & Natural Language",
      icon: <Cpu className="text-[#7f00ff]" size={22} />,
      description: "Integrating modern LLMs (such as Llama 3.1 models) with dynamic validation algorithms, fuzzy searches, and time-based route recommendation systems.",
      achievement: "Engineered AI chatbot system with stops DB filtering"
    },
    {
      title: "Secure API Engineering",
      category: "Backend Security & Speed",
      icon: <ShieldCheck className="text-[#00f2fe]" size={22} />,
      description: "Formulating enterprise-level security paradigms using JWT tokens, HTTP-only refresh cookies, role-based access control, and optimized TTL caching.",
      achievement: "Reduced redundant API queries by 45% using Node-Cache"
    }
  ];

  return (
    <section id="specializations" className="relative py-28 bg-[#050505] overflow-hidden border-b border-white/5">
      <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-[#7f00ff]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-[#00f2fe] uppercase tracking-wider mb-4"
          >
            <Award size={12} />
            <span>Key Specializations</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight"
          >
            Core Focus & <span className="bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent">Achievements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 font-sans text-sm sm:text-base mt-4 max-w-lg select-text"
          >
            Translating complex engineering principles into production-ready software solutions optimized for speed and user experience.
          </motion.p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="interactive-card glass-panel flex flex-col p-8 rounded-3xl hover:border-[#00f2fe]/30 hover:bg-white/[0.04] transition-all duration-300 shadow-xl group text-left relative"
            >
              {/* Spinning background hover effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#00f2fe]/5 to-transparent rounded-tr-3xl group-hover:scale-[1.05] transition-transform duration-300 pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {cred.icon}
              </div>

              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">{cred.category}</span>
              <h3 className="font-display font-bold text-lg text-white mb-4 group-hover:text-[#00f2fe] transition-colors select-text">{cred.title}</h3>
              <p className="text-sm text-gray-400 font-sans leading-relaxed mb-6 select-text">{cred.description}</p>
              
              {/* Highlight badge tag */}
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#00f2fe]/95 tracking-wide select-text">
               
                <span>{cred.achievement}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
