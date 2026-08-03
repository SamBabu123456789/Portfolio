import React from "react";
import { motion } from "framer-motion";

export default function HeroIllustration() {
  const lineVariants = {
    animate: {
      strokeDashoffset: [0, -40],
      transition: {
        strokeDashoffset: {
          repeat: Infinity,
          ease: "linear",
          duration: 2,
        },
      },
    },
  };

  const orbitVariants = (duration = 10, reverse = false) => ({
    animate: {
      rotate: reverse ? [360, 0] : [0, 360],
      transition: {
        rotate: {
          repeat: Infinity,
          ease: "linear",
          duration,
        },
      },
    },
  });

  const floatVariants = (delay = 0) => ({
    animate: {
      y: [0, -12, 0],
      transition: {
        y: {
          repeat: Infinity,
          ease: "easeInOut",
          duration: 4,
          delay,
        },
      },
    },
  });

  return (
    <div className="relative w-full max-w-[450px] aspect-square mx-auto flex items-center justify-center">
      {/* Glow Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-brand-cyan/20 rounded-full blur-[80px] animate-pulse-slow pointer-events-none" />

      {/* SVG Canvas */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full select-none"
      >
        {/* Outer Orbit */}
        <motion.circle
          cx="200"
          cy="200"
          r="160"
          stroke="rgba(6, 182, 212, 0.15)"
          strokeWidth="1.5"
          strokeDasharray="8 8"
          variants={orbitVariants(25, true)}
          animate="animate"
        />

        {/* Middle Orbit */}
        <motion.circle
          cx="200"
          cy="200"
          r="120"
          stroke="rgba(79, 70, 229, 0.2)"
          strokeWidth="1"
          variants={orbitVariants(18, false)}
          animate="animate"
        />

        {/* Core Node Connections */}
        <line x1="200" y1="200" x2="80" y2="120" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
        <line x1="200" y1="200" x2="320" y2="120" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
        <line x1="200" y1="200" x2="290" y2="290" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
        <line x1="200" y1="200" x2="110" y2="290" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />

        {/* Glowing connection lines */}
        <motion.line
          x1="200" y1="200" x2="80" y2="120"
          stroke="url(#cyanGlow)"
          strokeWidth="2"
          strokeDasharray="10 30"
          variants={lineVariants}
          animate="animate"
        />
        <motion.line
          x1="200" y1="200" x2="320" y2="120"
          stroke="url(#purpleGlow)"
          strokeWidth="2"
          strokeDasharray="10 30"
          variants={lineVariants}
          animate="animate"
        />

        {/* Floating tech nodes */}
        {/* Node 1 - AI */}
        <motion.g variants={floatVariants(0)} animate="animate">
          <circle cx="80" cy="120" r="16" fill="#09090B" stroke="#06B6D4" strokeWidth="2" />
          <path d="M76 116H84V124H76V116Z" fill="#06B6D4" opacity="0.4" />
          <circle cx="80" cy="120" r="4" fill="#06B6D4" />
          <text x="80" y="96" fill="#a1a1aa" fontSize="11" textAnchor="middle" fontFamily="monospace">&lt;AI&gt;</text>
        </motion.g>

        {/* Node 2 - React / UI */}
        <motion.g variants={floatVariants(1)} animate="animate">
          <circle cx="320" cy="120" r="20" fill="#09090B" stroke="#4F46E5" strokeWidth="2" />
          <circle cx="320" cy="120" r="14" stroke="rgba(79, 70, 229, 0.3)" strokeWidth="1" />
          <path d="M315 120H325M320 115V125" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
          <text x="320" y="92" fill="#a1a1aa" fontSize="11" textAnchor="middle" fontFamily="monospace">{`{JS}`}</text>
        </motion.g>

        {/* Node 3 - Server / DB */}
        <motion.g variants={floatVariants(0.5)} animate="animate">
          <circle cx="290" cy="290" r="18" fill="#09090B" stroke="#06B6D4" strokeWidth="2" />
          <rect x="284" y="284" width="12" height="12" rx="2" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="290" y="325" fill="#a1a1aa" fontSize="11" textAnchor="middle" fontFamily="monospace">DB</text>
        </motion.g>

        {/* Node 4 - Devops / Cloud */}
        <motion.g variants={floatVariants(1.5)} animate="animate">
          <circle cx="110" cy="290" r="15" fill="#09090B" stroke="#4F46E5" strokeWidth="2" />
          <circle cx="110" cy="290" r="5" fill="#4F46E5" />
          <text x="110" y="322" fill="#a1a1aa" fontSize="11" textAnchor="middle" fontFamily="monospace">API</text>
        </motion.g>

        {/* Core Center Hub */}
        <g>
          <circle cx="200" cy="200" r="28" fill="url(#coreGradient)" />
          <motion.circle
            cx="200"
            cy="200"
            r="32"
            stroke="rgba(79, 70, 229, 0.4)"
            strokeWidth="1.5"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          />
          {/* Inner details */}
          <circle cx="200" cy="200" r="12" fill="#09090B" />
          <circle cx="200" cy="200" r="4" fill="#06B6D4" />
        </g>

        {/* Definitions */}
        <defs>
          <linearGradient id="coreGradient" x1="170" y1="170" x2="230" y2="230" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="cyanGlow" x1="200" y1="200" x2="80" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" stopOpacity="0.8" />
            <stop offset="1" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="purpleGlow" x1="200" y1="200" x2="320" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F46E5" stopOpacity="0.8" />
            <stop offset="1" stopColor="#4F46E5" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
