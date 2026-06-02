import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle blur background
      setScrolled(window.scrollY > 30);

      // Simple active link checking based on current scroll position
      let currentSection = 'home';
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const sectionEl = document.getElementById(id);
        if (sectionEl) {
          const rect = sectionEl.getBoundingClientRect();
          // Check if section is centered or occupies the viewport
          if (rect.top <= 180 && rect.bottom >= 180) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update hash in URL silently
      window.history.pushState(null, '', href);
      setActiveSection(href.substring(1));
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
      scrolled 
        ? 'py-4 bg-[#050505]/75 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Branding Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-2.5 font-display font-extrabold text-xl tracking-tight text-white group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00f2fe] to-[#7f00ff] p-[1px] transition-transform duration-300 group-hover:rotate-6">
            <div className="w-full h-full bg-[#050505] rounded-[7px] flex items-center justify-center">
              <Terminal size={15} className="text-[#00f2fe] transition-colors group-hover:text-white" />
            </div>
          </div>
          <span className="bg-gradient-to-r from-white to-[#d1d5db] bg-clip-text text-transparent group-hover:to-[#00f2fe] transition-colors">
            Vishnu P
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-300 py-1.5 ${
                activeSection === link.href.substring(1) 
                  ? 'text-[#00f2fe]' 
                  : 'text-[#9ca3af] hover:text-white'
              }`}
            >
              {link.name}
              
              {/* Slidable glowing line under active link */}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] rounded shadow-[0_0_8px_#00f2fe]" />
              )}
            </a>
          ))}
        </div>

        {/* CTA Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white border border-[#00f2fe]/30 rounded-full hover:border-[#00f2fe] hover:bg-gradient-to-r hover:from-[#00f2fe]/10 hover:to-[#7f00ff]/10 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle Menu */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      <div className={`md:hidden fixed inset-y-0 right-0 w-[75vw] max-w-xs bg-[#050505] border-l border-white/10 z-50 p-8 shadow-2xl transition-transform duration-500 ease-in-out transform ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center mb-10">
          <span className="font-display font-bold text-lg text-white">Navigation</span>
          <button 
            onClick={() => setMenuOpen(false)}
            className="p-1 text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`font-display text-lg font-medium transition-colors border-b border-white/5 pb-2 ${
                activeSection === link.href.substring(1) 
                  ? 'text-[#00f2fe]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="mt-4 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Mobile Backdrop Overlay */}
      {menuOpen && (
        <div 
          onClick={() => setMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}
    </nav>
  );
}
