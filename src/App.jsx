import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// Custom hooks
import { useMousePosition } from "./hooks/useMousePosition";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const mousePosition = useMousePosition();

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Device capability check
    setIsTouchDevice(
      "ontouchstart" in window || 
      navigator.maxTouchPoints > 0 || 
      navigator.msMaxTouchPoints > 0
    );

    // Stop scroll on loading
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Timer for intro loader
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 2200);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Modern Gradient Background Blobs & Grid */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Glowing Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-accent/15 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-brand-cyan/10 rounded-full blur-[120px] animate-pulse-slow" />
        
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 bg-transparent opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      {/* Custom Interactive Cursor */}
      {!isTouchDevice && (
        <>
          <motion.div
            className="custom-cursor hidden md:block"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{
              type: "spring",
              stiffness: 800,
              damping: 35,
              mass: 0.1,
            }}
          />
          <motion.div
            className="custom-cursor-glow hidden md:block"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 25,
              mass: 0.3,
            }}
          />
        </>
      )}

      {/* Loading Intro Presentation Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#09090B] z-[9999] flex flex-col justify-center items-center select-none"
          >
            <div className="text-center space-y-4">
              {/* Spinning Loader */}
              <div className="relative w-16 h-16 mx-auto">
                <div className="absolute inset-0 rounded-full border-t-2 border-brand-cyan animate-spin" />
                <div className="absolute inset-2 rounded-full border-b-2 border-brand-accent animate-spin-slow" />
              </div>
              
              {/* Welcome text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-display font-black text-2xl md:text-3xl text-white tracking-widest"
              >
                Sam Babu
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="text-xs text-zinc-500 font-mono tracking-wider"
              >
                INITIALIZING PORTFOLIO SPACE
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portfolio Workspace Page Layout */}
      {!loading && (
        <div className="relative z-10 w-full min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow w-full">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
