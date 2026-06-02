import React from 'react';
import { motion } from 'framer-motion';
import { Braces, Monitor, Server, Database, Sliders, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming",
      icon: <Braces className="text-[#00f2fe]" size={22} />,
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3"],
      accentClass: "hover:border-[#00f2fe]/30"
    },
    {
      category: "Frontend Dev",
      icon: <Monitor className="text-[#7f00ff]" size={22} />,
      skills: ["React.js", "React 19", "Tailwind CSS v4", "Vite", "Responsive Design"],
      accentClass: "hover:border-[#7f00ff]/30"
    },
    {
      category: "Backend Dev",
      icon: <Server className="text-[#00f2fe]" size={22} />,
      skills: ["Node.js", "Express.js", "RESTful API Design", "JWT Authentication", "Custom Caching", "Brevo Email API"],
      accentClass: "hover:border-[#00f2fe]/30"
    },
    {
      category: "Databases",
      icon: <Database className="text-[#7f00ff]" size={22} />,
      skills: ["MongoDB (NoSQL)", "MySQL (SQL)", "Mongoose Schemas"],
      accentClass: "hover:border-[#7f00ff]/30"
    },
    {
      category: "Tools & Workflow",
      icon: <Sliders className="text-[#00f2fe]" size={22} />,
      skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel Deployments"],
      accentClass: "hover:border-[#00f2fe]/30"
    }
  ];

  // Framer Motion staggered variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 15
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120
      }
    }
  };

  return (
    <section id="skills" className="relative py-28 bg-grid overflow-hidden border-b border-white/5">
      {/* Dynamic Mesh backgrounds */}
      <div className="absolute top-[10%] right-0 w-[400px] h-[400px] rounded-full bg-[#00f2fe]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[400px] h-[400px] rounded-full bg-[#7f00ff]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-[#7f00ff] uppercase tracking-wider mb-4"
          >

            <span>Tech Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight"
          >
           Core  <span className="bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent"> Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 font-sans text-sm sm:text-base mt-4 max-w-lg select-text"
          >
            A curated stack of tools, programming models, and databases structured to engineer fast, resilient web applications.
          </motion.p>
        </div>

        {/* Skills Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              variants={cardVariants}
              className={`interactive-card glass-panel flex flex-col p-8 rounded-3xl ${cat.accentClass} glass-panel-hover group`}
            >

              {/* Category Title + Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-[#00f2fe] transition-colors">{cat.category}</h3>
              </div>

              {/* Skill Badges Wrapper */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    variants={badgeVariants}
                    className="px-4 py-2 text-xs font-semibold text-gray-300 bg-white/5 border border-white/5 rounded-full hover:bg-gradient-to-r hover:from-[#00f2fe]/10 hover:to-[#7f00ff]/10 hover:text-white hover:border-[#00f2fe]/30 hover:shadow-[0_0_10px_rgba(0,242,254,0.15)] transition-all duration-300 select-text"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
