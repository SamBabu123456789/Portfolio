import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiAward, FiLayers } from "react-icons/fi";
import { FaInfinity } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";

// Animated counter hook/sub-component
function Counter({ value, trigger }) {
  const [count, setCount] = useState(0);
  
  // Extract number if there's non-numeric suffixes like "+"
  const targetNumber = parseInt(value, 10);
  const isInfinite = value.includes("∞");
  const suffix = value.replace(/[0-9]/g, ""); // extracts "+", "%", etc.

  useEffect(() => {
    if (!trigger) return;
    if (isInfinite) {
      setCount("∞");
      return;
    }

    let start = 0;
    const duration = 1500; // ms
    const incrementTime = Math.max(Math.floor(duration / targetNumber), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(targetNumber / 100) || 1;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, trigger, targetNumber, isInfinite]);

  return (
    <span>
      {count}
      {suffix !== "∞" ? suffix : ""}
    </span>
  );
}

export default function Timeline() {
  const achievements = portfolioData.achievements;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <FiCode className="text-brand-cyan" />;
      case 1: return <FiAward className="text-brand-accent" />;
      case 2: return <FiLayers className="text-brand-cyan" />;
      default: return <FaInfinity className="text-brand-accent animate-pulse" />;
    }
  };

  return (
    <section id="achievements" ref={ref} className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-20 space-y-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono tracking-widest text-brand-cyan uppercase"
          >
            04 / Benchmarks
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white font-display"
          >
            Achievements
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[1px] w-24 bg-gradient-to-r from-brand-accent to-brand-cyan origin-left mt-2"
          />
        </div>

        {/* Timeline Achievements track */}
        <div className="relative pl-8 md:pl-12 space-y-12 max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute top-2 bottom-2 left-3 md:left-4 w-[1px] bg-gradient-to-b from-brand-cyan to-brand-accent/20" />

          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Bullet node */}
              <div className="absolute -left-[37px] md:-left-[41px] top-4 w-5 h-5 rounded-full bg-[#09090B] border-2 border-brand-cyan flex items-center justify-center group-hover:border-brand-accent transition-colors z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan group-hover:bg-brand-accent transition-colors" />
              </div>

              {/* Achievement Row Box */}
              <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-brand-cyan/20 transition-all duration-300">
                
                {/* Counter Metric */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shrink-0">
                    {getIcon(idx)}
                  </div>
                  <div>
                    <span className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-none text-gradient-purple-cyan block">
                      <Counter value={item.metric} trigger={isInView} />
                    </span>
                    <span className="text-sm font-semibold text-zinc-300 font-display mt-1 block">
                      {item.label}
                    </span>
                  </div>
                </div>

                {/* Description details */}
                <div className="md:max-w-md text-left">
                  <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
