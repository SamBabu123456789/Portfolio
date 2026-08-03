import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiFileText, FiSend } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";
import Magnetic from "./Magnetic";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  const { name, titles, resumeUrl, github, linkedin } = portfolioData.personalInfo;
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter parameters
  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const PAUSE_DURATION = 2000;

  useEffect(() => {
    let timer;
    const activeTitle = titles[titleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, DELETING_SPEED);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => activeTitle.slice(0, prev.length + 1));
      }, TYPING_SPEED);
    }

    // Handle lifecycle
    if (!isDeleting && currentText === activeTitle) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && currentText === "") {
      // Transition to next word
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, titles]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-[80vh] md:min-h-[85vh] relative flex items-center justify-center pt-32 pb-16 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Typography Content */}
        <div className="lg:col-span-7 text-left space-y-6 md:space-y-8 flex flex-col justify-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-xs text-zinc-300 tracking-wider font-mono">AVAILABLE FOR INTERNSHIPS</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-2 md:space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-400 font-mono text-sm md:text-base tracking-widest uppercase"
            >
              Hello, I am
            </motion.h4>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-tight"
            >
              {name}
            </motion.h1>

            {/* Typewriter Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-display font-medium text-zinc-300 h-10 flex items-center"
            >
              <span>A&nbsp;</span>
              <span className="text-gradient-purple-cyan font-semibold typewriter-cursor">
                {currentText}
              </span>
            </motion.h2>
          </div>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed font-sans"
          >
            Aspiring Software Product Engineer specializing in building scalable web architectures, 
            creative interfaces, and intelligent, AI-infused applications.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {/* Resume Button */}
            <Magnetic>
              <a
                href={resumeUrl}
                download
                className="px-6 py-3.5 rounded-full bg-brand-accent text-white font-medium flex items-center space-x-2 shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 hover:bg-brand-accent/90 transition-all cursor-pointer font-display text-sm md:text-base border border-white/10"
              >
                <FiFileText />
                <span>Resume</span>
              </a>
            </Magnetic>

            {/* Contact Button */}
            <Magnetic>
              <button
                onClick={() => handleScrollTo("contact")}
                className="px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium flex items-center space-x-2 hover:bg-white/15 transition-all cursor-pointer font-display text-sm md:text-base"
              >
                <FiSend />
                <span>Contact</span>
              </button>
            </Magnetic>

            {/* Social Icons */}
            <div className="flex items-center space-x-2 pl-2">
              <Magnetic>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all text-lg cursor-pointer"
                >
                  <FiGithub />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all text-lg cursor-pointer"
                >
                  <FiLinkedin />
                </a>
              </Magnetic>
            </div>
          </motion.div>

        </div>

        {/* Right Illustration Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <HeroIllustration />
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() => handleScrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-white transition-colors cursor-pointer flex flex-col items-center space-y-2 z-10"
      >
        <span className="text-xs tracking-widest font-mono uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-base"
        >
          <FiArrowDown />
        </motion.div>
      </motion.button>
    </section>
  );
}
