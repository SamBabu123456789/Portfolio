import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FiGithub, FiExternalLink, FiCpu, FiUnlock, FiBookmark, FiSearch, FiList, FiClock, FiGrid, FiMoon, FiSun, FiMail } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

// Reusable Tilt Card Wrapper
function TiltCard({ children, className }) {
  const cardRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Set rotation scale
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized mouse positions (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`transition-all duration-100 ease-out ${className}`}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

// Simulated Smart Notes Mockup Panel
function SmartNotesMockup() {
  return (
    <div className="w-full aspect-[1.6/1] rounded-2xl bg-[#09090b] border border-white/5 overflow-hidden flex flex-col shadow-2xl relative font-sans text-left">
      {/* Browser Top Bar */}
      <div className="h-8 border-b border-white/5 bg-[#121214] px-4 flex items-center justify-between text-xs text-zinc-500">
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/40" />
        </div>
        <div className="text-[9px] text-zinc-400 font-mono">smart-notes-navy.vercel.app/login</div>
        <div className="w-8" />
      </div>

      {/* Split Screen Layout */}
      <div className="flex-1 grid grid-cols-12">
        {/* Left Column (50%): Dark Slate Green Branding */}
        <div className="col-span-6 bg-[#0f2d2c] p-4 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl" />

          {/* Header */}
          <div className="flex items-center space-x-1.5 z-10">
            <div className="w-6 h-6 rounded-md bg-[#ea580c] flex items-center justify-center shadow-md">
              <FiBookmark className="text-white text-xs" />
            </div>
            <span className="text-[10px] font-bold text-white tracking-wider font-display">SmartNotes</span>
          </div>

          {/* Body Info */}
          <div className="space-y-1.5 z-10 my-auto">
            <h4 className="text-[11px] md:text-sm font-extrabold text-white font-display leading-tight">
              Elevate Your Thoughts with Rich Text Editor
            </h4>
            <p className="text-[7px] text-zinc-300 leading-relaxed max-w-[170px]">
              Organize, write beautifully in rich formatting, use Markdown previews, and keep notes perfectly synchronized. The next-generation workspace for modern software developers.
            </p>
          </div>

          {/* Footer */}
          <span className="text-[5px] text-zinc-500 z-10">
            © 2026 SmartNotes App. Designed for engineers.
          </span>
        </div>

        {/* Right Column (50%): Cream Login Screen */}
        <div className="col-span-6 bg-[#f7f6f0] p-4 flex flex-col items-center justify-center">
          {/* Login Card */}
          <div className="w-full max-w-[140px] bg-white border border-black/5 rounded-lg p-2.5 shadow-sm space-y-2 text-[6px] text-zinc-700">
            <div className="space-y-0.5 text-center">
              <h5 className="text-[8px] font-bold text-zinc-900 font-display">Welcome Back</h5>
              <p className="text-[5px] text-zinc-400">Please enter your credentials to login</p>
            </div>

            {/* Form Input fields */}
            <div className="space-y-1 text-left">
              {/* Email */}
              <div className="space-y-0.5">
                <span className="text-[4px] font-bold text-zinc-500">EMAIL ADDRESS</span>
                <div className="flex items-center space-x-1 border border-zinc-200 rounded p-1 bg-zinc-50">
                  <FiMail className="text-zinc-400 text-[6px]" />
                  <span className="text-[5px] text-zinc-400">name@domain.com</span>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-0.5">
                <div className="flex items-center justify-between text-[4px]">
                  <span className="font-bold text-zinc-500">PASSWORD</span>
                  <span className="text-[#ea580c] font-bold">Forgot?</span>
                </div>
                <div className="flex items-center justify-between border border-zinc-200 rounded p-1 bg-zinc-50">
                  <div className="flex items-center space-x-1">
                    <FiUnlock className="text-zinc-400 text-[6px]" />
                    <span className="text-[5px] text-zinc-500">••••••••</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="w-full py-1 rounded bg-[#ea580c] text-white font-bold text-[5px] tracking-wide shadow shadow-[#ea580c]/10">
              Sign In
            </button>

            {/* Create Free Account */}
            <p className="text-[4px] text-center text-zinc-400">
              Don't have an account? <span className="text-[#ea580c] font-bold">Create free account</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simulated Scientific Calculator Mockup Panel
function CalculatorMockup() {
  return (
    <div className="w-full aspect-[1.6/1] rounded-2xl bg-[#0a0a0c] border border-white/5 overflow-hidden flex flex-col shadow-2xl relative font-sans text-left text-zinc-100">
      {/* Browser Top Bar */}
      <div className="h-8 border-b border-white/5 bg-[#121214] px-4 flex items-center justify-between text-xs text-zinc-500">
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/40" />
        </div>
        <div className="text-[9px] text-zinc-400 font-mono">web-calculator-coral.vercel.app</div>
        <div className="w-8" />
      </div>

      {/* App Frame */}
      <div className="flex-1 grid grid-cols-12 p-2.5 gap-2.5 bg-gradient-to-br from-[#121216] to-[#09090b]">
        {/* Left: Calculator Panel */}
        <div className="col-span-7 bg-[#1c1c22]/60 border border-white/5 rounded-xl p-2.5 flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between text-[8px] font-mono text-zinc-400">
            <span className="font-bold text-orange-400">Web Calculator</span>
            <div className="flex items-center space-x-1">
              <FiSun className="text-zinc-500 text-[8px]" />
              <div className="w-4 h-2 bg-white/10 rounded-full flex items-center p-0.5 justify-end">
                <div className="w-1 h-1 rounded-full bg-[#06B6D4]" />
              </div>
              <FiMoon className="text-[#06B6D4] text-[8px]" />
            </div>
          </div>

          {/* Display screen */}
          <div className="bg-black/30 rounded-lg p-1.5 text-right border border-white/5 my-1.5">
            <div className="text-[7px] text-zinc-500 font-mono">DEG</div>
            <div className="text-sm font-bold text-white font-mono tracking-wide leading-none py-0.5">0</div>
          </div>

          {/* Keys Pad */}
          <div className="grid grid-cols-5 gap-0.5 text-[6px]">
            {/* Scientific row */}
            {["sin", "cos", "tan", "log", "ln"].map(op => (
              <div key={op} className="h-3.5 flex items-center justify-center bg-white/5 border border-white/5 rounded text-zinc-400 font-mono">{op}</div>
            ))}
            {["√", "x²", "x^y", "π", "e"].map(op => (
              <div key={op} className="h-3.5 flex items-center justify-center bg-white/5 border border-white/5 rounded text-zinc-400 font-mono">{op}</div>
            ))}
            {/* Row 1 */}
            <div className="h-3.5 flex items-center justify-center bg-red-950/40 border border-red-500/10 rounded text-red-400 font-mono font-bold">C</div>
            <div className="h-3.5 flex items-center justify-center bg-red-950/40 border border-red-500/10 rounded text-red-400 font-mono font-bold">DEL</div>
            <div className="h-3.5 flex items-center justify-center bg-white/5 border border-white/5 rounded text-zinc-400 font-mono">(</div>
            <div className="h-3.5 flex items-center justify-center bg-white/5 border border-white/5 rounded text-zinc-400 font-mono">)</div>
            <div className="h-3.5 flex items-center justify-center bg-[#ea580c]/20 border border-[#ea580c]/30 rounded text-[#ea580c] font-bold">+</div>
            {/* Row 2 */}
            {["7", "8", "9"].map(n => (
              <div key={n} className="h-3.5 flex items-center justify-center bg-white/5 border border-white/5 rounded text-white font-mono">{n}</div>
            ))}
            <div className="h-3.5 flex items-center justify-center bg-white/5 border border-white/5 rounded text-zinc-400 font-mono">%</div>
            <div className="h-3.5 flex items-center justify-center bg-[#ea580c]/20 border border-[#ea580c]/30 rounded text-[#ea580c] font-bold">×</div>
            {/* Row 3 */}
            {["4", "5", "6"].map(n => (
              <div key={n} className="h-3.5 flex items-center justify-center bg-white/5 border border-white/5 rounded text-white font-mono">{n}</div>
            ))}
            <div className="h-3.5 flex items-center justify-center bg-white/5 border border-white/5 rounded text-zinc-400 font-mono">x!</div>
            <div className="h-3.5 flex items-center justify-center bg-[#ea580c]/20 border border-[#ea580c]/30 rounded text-[#ea580c] font-bold">-</div>
            {/* Row 4 */}
            {["1", "2", "3"].map(n => (
              <div key={n} className="h-3.5 flex items-center justify-center bg-white/5 border border-white/5 rounded text-white font-mono">{n}</div>
            ))}
            <div className="h-3.5 flex items-center justify-center bg-white/5 border border-white/10 rounded text-zinc-400 font-mono text-[5px]">DEG</div>
            <div className="h-3.5 flex items-center justify-center bg-[#ea580c]/20 border border-[#ea580c]/30 rounded text-[#ea580c] font-bold">+</div>
            {/* Row 5 */}
            <div className="h-3.5 col-span-2 flex items-center justify-center bg-white/5 border border-white/5 rounded text-white font-mono">0</div>
            <div className="h-3.5 flex items-center justify-center bg-white/5 border border-white/5 rounded text-white font-mono">.</div>
            <div className="h-3.5 col-span-2 flex items-center justify-center bg-[#ea580c] rounded text-white font-mono font-bold shadow-md shadow-[#ea580c]/25">=</div>
          </div>
        </div>

        {/* Right: History Panel */}
        <div className="col-span-5 bg-[#16161b]/50 border border-white/5 rounded-xl p-2 flex flex-col">
          <span className="text-[8px] font-bold font-mono text-zinc-400 flex items-center space-x-1 border-b border-white/5 pb-1">
            <FiClock className="text-zinc-500 text-[8px]" />
            <span>History</span>
          </span>
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-1.5">
            <FiClock className="text-zinc-600 text-lg animate-pulse" />
            <p className="text-[7px] text-zinc-500 font-mono">No calculations yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projectsData = portfolioData.projects;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-20 space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white font-display"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[1px] w-24 bg-gradient-to-r from-brand-accent to-brand-cyan origin-left mt-2"
          />
        </div>

        {/* Projects Layout */}
        <div className="space-y-24 md:space-y-32">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                
                {/* Text Content Column */}
                <div className={`col-span-1 lg:col-span-6 space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
                  
                  {/* Category / Subtitle */}
                  <span className="text-xs font-mono text-brand-cyan font-bold tracking-widest uppercase">
                    PROJECT {idx + 1}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-4xl font-bold font-display text-white group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Lists */}
                  <ul className="space-y-3.5 text-xs md:text-sm text-zinc-400 font-sans">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech badging */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-[10px] md:text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Buttons */}
                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-brand-accent text-white font-medium flex items-center space-x-1.5 shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 transition-all font-display text-xs md:text-sm border border-white/10"
                    >
                      <FiExternalLink />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-medium flex items-center space-x-1.5 hover:bg-white/10 transition-all font-display text-xs md:text-sm"
                    >
                      <FiGithub />
                      <span>GitHub Code</span>
                    </a>
                  </div>

                </div>

                {/* Simulated Interactive Mockup Column */}
                <div className={`col-span-1 lg:col-span-6 ${!isEven ? "lg:order-1" : ""}`}>
                  <TiltCard className="cursor-pointer relative overflow-hidden group">
                    {/* Glowing aura under card */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 to-brand-cyan/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Render matching mock structure */}
                    {project.id === "smart-notes" ? <SmartNotesMockup /> : <CalculatorMockup />}
                  </TiltCard>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
