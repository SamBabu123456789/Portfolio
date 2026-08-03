import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "Home", target: "hero" },
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Achievements", target: "achievements" },
    { label: "Contact", target: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state for backdrop filter
      setIsScrolled(window.scrollY > 20);

      // Scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }

      // Track active section
      const sections = navItems.map(item => document.getElementById(item.target));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].target);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-4 bg-[#09090B]/60 backdrop-blur-md border-b border-white/5" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleScrollTo("hero")}
            className="text-2xl font-bold tracking-tight cursor-pointer font-display relative group"
          >
            <span className="text-white group-hover:text-brand-cyan transition-colors">Sam </span>
            <span className="text-brand-accent group-hover:text-white transition-colors">Babu</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan group-hover:w-full transition-all duration-300"></span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleScrollTo(item.target)}
                className={`relative px-1 py-2 text-sm tracking-wide transition-colors duration-200 cursor-pointer ${
                  activeSection === item.target ? "text-brand-cyan font-semibold" : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.target && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-accent to-brand-cyan"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Socials */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={portfolioData.personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-zinc-400 hover:text-white transition-colors text-lg"
            >
              <FiGithub />
            </a>
            <a 
              href={portfolioData.personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="text-zinc-400 hover:text-white transition-colors text-lg"
            >
              <FiLinkedin />
            </a>
            <a 
              href={`mailto:${portfolioData.personalInfo.email}`} 
              className="text-zinc-400 hover:text-white transition-colors text-lg"
            >
              <FiMail />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-zinc-400 hover:text-white cursor-pointer z-50 transition-colors"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
          <motion.div 
            className="h-full bg-gradient-to-r from-brand-accent to-brand-cyan origin-left"
            style={{ scaleX: scrollProgress }}
          />
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#09090B]/95 z-40 md:hidden flex flex-col justify-center items-center px-6"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleScrollTo(item.target)}
                  className={`text-2xl tracking-wider font-display font-medium ${
                    activeSection === item.target ? "text-brand-cyan" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="flex space-x-6 mt-12 text-2xl text-zinc-400">
              <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white">
                <FiGithub />
              </a>
              <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                <FiLinkedin />
              </a>
              <a href={`mailto:${portfolioData.personalInfo.email}`} className="hover:text-white">
                <FiMail />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
