import React from "react";
import { motion } from "framer-motion";
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, 
  FaGitAlt, FaGithub, FaDocker, FaWindows
} from "react-icons/fa";
import { 
  SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, 
  SiFirebase, SiPostman, SiVercel, SiRender, SiNetlify,
  SiJsonwebtokens, SiGoogle
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { TbApi, TbBrandVscode } from "react-icons/tb";
import { FiTriangle, FiZap } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

// Dynamic Icon Map
const iconMap = {
  "C++": <SiCplusplus className="text-[#00599C]" />,
  "Java": <FaJava className="text-[#f89820]" />,
  "Python": <FaPython className="text-[#3776AB]" />,
  "HTML": <FaHtml5 className="text-[#E34F26]" />,
  "CSS": <FaCss3Alt className="text-[#1572B6]" />,
  "JavaScript": <span className="text-[#F7DF1E] font-bold">JS</span>,
  "React": <FaReact className="text-[#61DAFB] animate-spin-slow" />,
  "React.js": <FaReact className="text-[#61DAFB] animate-spin-slow" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  "Express.js": <SiExpress className="text-white" />,
  "MongoDB": <SiMongodb className="text-[#47A248]" />,
  "SQL": <DiMysql className="text-[#4479A1]" />,
  "Firebase": <SiFirebase className="text-[#FFCA28]" />,
  "JWT": <SiJsonwebtokens className="text-[#d63aff]" />,
  "JWT Authentication": <SiJsonwebtokens className="text-[#d63aff]" />,
  "REST APIs": <TbApi className="text-brand-cyan text-xl" />,
  "Rest APIs": <TbApi className="text-brand-cyan text-xl" />,
  "Gemini API": <SiGoogle className="text-[#1a73e8]" />,
  "Git": <FaGitAlt className="text-[#F05032]" />,
  "GitHub": <FaGithub className="text-white" />,
  "Docker": <FaDocker className="text-[#2496ED]" />,
  "VS Code": <TbBrandVscode className="text-[#007ACC]" />,
  "Visual Studio Code": <TbBrandVscode className="text-[#007ACC]" />,
  "Postman": <SiPostman className="text-[#FF6C37]" />,
  "Vercel": <SiVercel className="text-white" />,
  "Render": <SiRender className="text-[#46E3B7]" />,
  "Netlify": <SiNetlify className="text-[#00C8BC]" />,
  "Antigravity": <FiTriangle className="text-brand-cyan animate-pulse rotate-180" />,
  "Bruno": <FiZap className="text-[#eab308] animate-pulse" />,
  "Windows 11": <FaWindows className="text-[#0078d4]" />
};

export default function Skills() {
  const skillsData = portfolioData.skills;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
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
            Skills & Toolkit
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[1px] w-24 bg-gradient-to-r from-brand-accent to-brand-cyan origin-left mt-2"
          />
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: "rgba(6, 182, 212, 0.25)",
                boxShadow: "0 12px 30px rgba(6, 182, 212, 0.04)"
              }}
              className="glass-panel p-6 rounded-2xl border border-white/5 relative group transition-all duration-300 flex flex-col justify-between"
            >
              {/* Blur Circle Glow Behind Category Name */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-cyan/10 transition-all duration-500" />
              
              <div>
                <h3 className="text-lg font-bold text-white font-display mb-6 tracking-wide border-b border-white/5 pb-2">
                  {category.category}
                </h3>

                <div className="space-y-3">
                  {category.items.map((skill, sIdx) => {
                    // Extract base name for icon lookup, e.g. "C++ [Intermediate]" -> "C++"
                    const coreName = skill.split(" [")[0];
                    return (
                      <motion.div 
                        key={sIdx} 
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/20 hover:bg-white/[0.05] transition-all"
                      >
                        <span className="text-lg flex items-center justify-center shrink-0 w-6 h-6">
                          {iconMap[coreName] || <span className="text-zinc-500">•</span>}
                        </span>
                        <span className="text-zinc-300 text-sm font-medium font-sans">
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
