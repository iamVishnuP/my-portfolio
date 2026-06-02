import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Film, Bus } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Movie Discovery Platform",
      category: "Full Stack (React 19 & Node.js)",
      image: "images/MOVIE.png",
      icon: <Film className="text-[#00f2fe]" size={20} />,
      description: "An advanced entertainment discovery system engineered with React 19, Tailwind v4, and Framer Motion. Implements forced IPv4 TMDB API operations, custom Node Cache TTL mechanisms for reducing database load, secure JWT authentication with HTTP only cookies, and Brevo transactional emails.",
      tags: ["React 19", "Tailwind v4", "Node.js", "Express.js", "MongoDB", "TMDB API", "JWT Auth", "Node Cache"],
      liveUrl: "https://movie-project-vishnu.vercel.app/",
      githubUrl: "https://github.com/iamVishnuP/Movie-Project"
    },
    {
      id: 2,
      title: "Smart Bus Availability Checking System",
      category: "Full Stack MERN & AI Integration",
      image: "images/BUS.png",
      icon: <Bus className="text-[#7f00ff]" size={20} />,
      description: "A comprehensive transit fleet and scheduling platform with a custom AI assistant powered by Llama 3.1. Features backend validation algorithms, fuzzy search stop listings, dynamic fare calculation, time based bus scheduling, and a secure real time stops CRUD admin dashboard.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Llama 3.1 AI", "Fuzzy Search", "Admin CRUD", "Vite"],
      liveUrl: "https://smart-bus-availability-checking-system.vercel.app/",
      githubUrl: "https://github.com/iamVishnuP/Smart-bus-availability-checking-system"
    }
  ];

  return (
    <section id="projects" className="relative py-28 bg-[#050505] overflow-hidden border-b border-white/5">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#00f2fe]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-[#7f00ff]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-[#00f2fe] uppercase tracking-wider mb-4"
          >
           
            <span>Featured Creations</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight"
          >
            What I Have <span className="bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent">Architected</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 font-sans text-sm sm:text-base mt-4 max-w-lg select-text"
          >
            Take a deep dive into full stack systems built with standard coding policies, clean schema definitions, and high performance boundaries.
          </motion.p>
        </div>

        {/* Projects Alternating Stack */}
        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="interactive-card glass-panel flex flex-col lg:flex-row rounded-3xl overflow-hidden hover:border-[#00f2fe]/30 hover:bg-white/[0.03] transition-all duration-500 shadow-2xl relative"
              >
                {/* Background Card Ambient Glow */}
                <div className="absolute inset-0 bg-radial from-transparent to-[#050505]/40 opacity-30" />

                {/* Left/Right Column: Image Frame */}
                <div className={`w-full lg:w-1/2 relative h-[250px] sm:h-[350px] lg:h-auto overflow-hidden group select-none ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  {/* Subtle dark layout overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#050505]/60 lg:to-transparent z-10 mix-blend-multiply" />
                  
                  {/* Glowing mask outline */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 z-10" />

                  {/* Main Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#00f2fe]/10 to-[#7f00ff]/10 flex items-center justify-center"><span class="text-white font-display font-extrabold text-xl">${project.title}</span></div>`;
                    }}
                  />

                  {/* Category Pill Over Image */}
                  <div className="absolute top-6 left-6 z-20 px-3.5 py-1.5 rounded-full bg-[#050505]/75 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5 shadow-md">
                    {project.icon}
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Left/Right Column: Content Box */}
                <div className={`w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center text-left relative z-20 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  
                  <span className="text-xs font-semibold text-[#00f2fe] uppercase tracking-widest mb-2.5">Featured Work</span>
                  
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4 select-text hover:text-[#00f2fe] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed mb-8 select-text">
                    {project.description}
                  </p>

                  {/* Project Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1.5 text-xs text-gray-400 bg-white/5 border border-white/5 rounded-lg select-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* External Links buttons */}
                  <div className="flex flex-wrap gap-4 items-center mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#050505] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] hover:scale-[1.02] transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-white/30 text-white font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <Github size={14} />
                      <span>Code Repository</span>
                    </a>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
