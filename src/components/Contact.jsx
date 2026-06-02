import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, Sparkles, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const socialCards = [
    {
      name: "Email",
      value: "officialvishnups@gmail.com",
      url: "mailto:officialvishnups@gmail.com",
      icon: <Mail className="text-[#00f2fe]" size={22} />,
      colorClass: "hover:border-[#00f2fe]/30 hover:bg-[#00f2fe]/5"
    },
    {
      name: "LinkedIn",
      value: "vishnu-ps-00a650341",
      url: "https://linkedin.com/in/vishnu-ps-00a650341",
      icon: <Linkedin className="text-[#7f00ff]" size={22} />,
      colorClass: "hover:border-[#7f00ff]/30 hover:bg-[#7f00ff]/5"
    },
    {
      name: "GitHub",
      value: "iamVishnuP",
      url: "https://github.com/iamVishnuP",
      icon: <Github className="text-[#00f2fe]" size={22} />,
      colorClass: "hover:border-[#00f2fe]/30 hover:bg-[#00f2fe]/5"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    
    // Simulate high-fidelity server endpoint post delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-28 bg-grid overflow-hidden border-b border-white/5">
      {/* Mesh Glow backlights */}
      <div className="absolute top-[20%] right-[15%] w-80 h-80 rounded-full bg-[#00f2fe]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[15%] w-80 h-80 rounded-full bg-[#7f00ff]/5 blur-[120px] pointer-events-none" />

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
           
            <span>Connect & Collab</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight"
          >
            Let's Build Something <span className="bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 font-sans text-sm sm:text-base mt-4 max-w-lg select-text"
          >
            Got a vision? An open internship or junior developer role? Let's discuss code architecture, workflows, or custom web products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left: Contact Info & Social Cards */}
          <div className="col-span-1 lg:col-span-5 space-y-6">
            
            {/* Quick Contact statistics panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl text-left border border-white/5 shadow-2xl relative"
            >
              <h3 className="font-display font-bold text-xl text-white mb-6">Contact Channels</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4 text-gray-400 select-text">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00f2fe] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="text-sm">
                    <span className="block font-semibold text-white">Location</span>
                    <span>Thrissur, Kerala, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-400 select-text">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7f00ff] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="text-sm">
                    <span className="block font-semibold text-white">Phone</span>
                    <span>+91 9037011230</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social cards map */}
            <div className="flex flex-col gap-4 w-full">
              {socialCards.map((card, idx) => (
                <motion.a
                  key={idx}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`interactive-card glass-panel flex items-center gap-5 p-5 rounded-2xl border border-white/5 ${card.colorClass} transition-all duration-300 shadow-xl text-left group`}
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                    {card.icon}
                  </div>
                  <div className="min-w-0 flex-1 select-text">
                    <span className="block font-display text-[10px] uppercase font-bold tracking-widest text-gray-500 leading-none mb-1.5">{card.name}</span>
                    <span className="block font-display text-sm font-semibold text-white truncate">{card.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

          </div>

          {/* Right: State-driven interactive contact form */}
          <div className="col-span-1 lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 shadow-2xl relative"
            >
              
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form
                    key="form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-6 text-left"
                  >
                    
                    {/* Name input */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-display">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        disabled={status === 'submitting'}
                        className="px-5 py-3.5 rounded-xl bg-[#090909] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f2fe] focus:bg-[#0c0c0c] transition-colors duration-300 text-sm font-sans"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-display">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        disabled={status === 'submitting'}
                        className="px-5 py-3.5 rounded-xl bg-[#090909] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f2fe] focus:bg-[#0c0c0c] transition-colors duration-300 text-sm font-sans"
                      />
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-display">Your Message</label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Hi Vishnu, I would love to collaborate on..."
                        disabled={status === 'submitting'}
                        className="px-5 py-3.5 rounded-xl bg-[#090909] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f2fe] focus:bg-[#0c0c0c] transition-colors duration-300 text-sm font-sans resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all duration-300 pointer-events-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>Routing Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send size={13} className="transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center text-[#00f2fe] mb-6 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
                      <CheckCircle size={32} className="glow-cyan" />
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-white mb-3">Transmission Successful</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed max-w-sm mb-8">
                      Thank you for reaching out! Your message has been routed successfully. I will review it and reply as soon as possible.
                    </p>

                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white border border-[#00f2fe]/30 rounded-lg hover:border-[#00f2fe] hover:bg-[#00f2fe]/5 transition-all duration-300 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
