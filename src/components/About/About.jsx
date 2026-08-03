import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

export default function About() {
  const { bio } = portfolioData.personalInfo;
  const education = portfolioData.education;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white font-display"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[1px] w-24 bg-gradient-to-r from-brand-accent to-brand-cyan origin-left mt-2"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Biography & Passion */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-xl md:text-2xl font-bold font-display text-white">
                Engineering software with a product-focused mindset.
              </h3>
              <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
                {bio}
              </p>
              <p className="text-zinc-400 leading-relaxed text-base">
                I thrive at the intersection of frontend elegance and backend robustness. 
                My training is built around creating performant, secure, and user-centric web applications, 
                leveraging artificial intelligence API services to build next-generation software products.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl font-bold font-display text-white flex items-center space-x-2"
            >
              <span>Education Journey</span>
            </motion.h3>

            <div className="relative pl-8 md:pl-10 space-y-12">
              {/* Vertical timeline line */}
              <div className="absolute top-2 bottom-2 left-3 md:left-4 w-[1px] bg-gradient-to-b from-brand-accent to-brand-cyan/20" />

              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline bullet */}
                  <div className="absolute -left-[37px] md:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#09090B] border-2 border-brand-accent flex items-center justify-center group-hover:border-brand-cyan transition-colors z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:bg-brand-cyan transition-colors" />
                  </div>

                  {/* Glassmorphic timeline card */}
                  <div className="glass-panel p-6 rounded-2xl space-y-4 hover:border-brand-cyan/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-xl font-bold text-white font-display group-hover:text-brand-cyan transition-colors">
                        {edu.institution}
                      </h4>
                      <span className="px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/20 text-brand-cyan font-mono text-xs font-semibold">
                        {edu.cgpa}
                      </span>
                    </div>

                    <p className="text-brand-accent font-medium text-sm">
                      {edu.degree}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-mono">
                      <span className="flex items-center space-x-1">
                        <FiCalendar className="text-zinc-500" />
                        <span>{edu.period}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <FiMapPin className="text-zinc-500" />
                        <span>India</span>
                      </span>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
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
