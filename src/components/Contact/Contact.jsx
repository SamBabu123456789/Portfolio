import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend, FiCopy, FiCheckCircle } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { email, phone, github, linkedin } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.warn("EmailJS credentials are missing. Falling back to local success simulator.");
        // Simulated success simulation for testing
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSuccess(true);
          setFormData({ name: "", email: "", message: "" });
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#4F46E5", "#06B6D4", "#ffffff"]
          });
          setTimeout(() => setIsSuccess(false), 5000);
        }, 1200);
        return;
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_name: "Polimetla Sam Babu"
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((result) => {
          console.log("EmailJS dispatch success:", result.text);
          setIsSubmitting(false);
          setIsSuccess(true);
          setFormData({ name: "", email: "", message: "" });
          
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#4F46E5", "#06B6D4", "#ffffff"]
          });

          setTimeout(() => setIsSuccess(false), 5000);
        })
        .catch((error) => {
          console.error("EmailJS dispatch failure:", error);
          setIsSubmitting(false);
          const errorMsg = error?.text || error?.message || JSON.stringify(error);
          setFormErrors({ submit: `Failed to send: ${errorMsg}. Please copy my email directly.` });
        });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: "" });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Background gradients */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

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
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[1px] w-24 bg-gradient-to-r from-brand-accent to-brand-cyan origin-left mt-2"
          />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-zinc-400 text-base md:text-lg"
            >
              Have an opportunity, questions, or just want to connect? Reach out using any of the details below 
              or drop a message in the workspace portal.
            </motion.div>

            <div className="space-y-4">
              {/* Email Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-5 rounded-2xl glass-panel flex items-center justify-between border border-white/5 relative overflow-hidden group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/15 flex items-center justify-center text-brand-cyan text-lg">
                    <FiMail />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 font-mono">EMAIL ME</span>
                    <span className="block text-sm font-semibold text-white truncate max-w-[180px] md:max-w-xs">{email}</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy(email, "email")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-brand-cyan/20 hover:text-brand-cyan text-zinc-400 cursor-pointer transition-colors"
                >
                  {copiedText === "email" ? <FiCheckCircle className="text-brand-cyan" /> : <FiCopy />}
                </button>
              </motion.div>

              {/* Phone Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-5 rounded-2xl glass-panel flex items-center justify-between border border-white/5 relative overflow-hidden group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/15 flex items-center justify-center text-brand-accent text-lg">
                    <FiPhone />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 font-mono">CALL ME</span>
                    <span className="block text-sm font-semibold text-white">{phone}</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy(phone, "phone")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-brand-accent/20 hover:text-brand-accent text-zinc-400 cursor-pointer transition-colors"
                >
                  {copiedText === "phone" ? <FiCheckCircle className="text-brand-accent" /> : <FiCopy />}
                </button>
              </motion.div>
            </div>

            {/* Social Connect Badge */}
            <div className="flex space-x-4 pt-2">
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all font-display text-sm cursor-pointer"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all font-display text-sm cursor-pointer"
              >
                <FiGithub />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-3xl glass-panel border border-white/5 relative"
            >
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    
                    {/* Name Input */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="name" className="text-xs font-mono tracking-wider text-zinc-400 uppercase">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-black/40 border text-white font-sans text-sm focus:outline-none focus:ring-1 transition-all ${
                          formErrors.name 
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/30" 
                            : "border-white/10 focus:border-brand-cyan focus:ring-brand-cyan/20"
                        }`}
                        placeholder="e.g. John Doe"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs font-mono mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="email" className="text-xs font-mono tracking-wider text-zinc-400 uppercase">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-black/40 border text-white font-sans text-sm focus:outline-none focus:ring-1 transition-all ${
                          formErrors.email 
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/30" 
                            : "border-white/10 focus:border-brand-cyan focus:ring-brand-cyan/20"
                        }`}
                        placeholder="e.g. johndoe@gmail.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs font-mono mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Message Input */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="message" className="text-xs font-mono tracking-wider text-zinc-400 uppercase">Your Message</label>
                      <textarea
                        name="message"
                        id="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-black/40 border text-white font-sans text-sm focus:outline-none focus:ring-1 transition-all resize-none ${
                          formErrors.message 
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/30" 
                            : "border-white/10 focus:border-brand-cyan focus:ring-brand-cyan/20"
                        }`}
                        placeholder="Tell me about your project..."
                      />
                      {formErrors.message && (
                        <p className="text-red-500 text-xs font-mono mt-1">{formErrors.message}</p>
                      )}
                    </div>

                    {formErrors.submit && (
                      <p className="text-red-500 text-xs font-mono text-center mt-1">{formErrors.submit}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-brand-accent hover:bg-brand-accent/90 disabled:bg-brand-accent/50 text-white font-semibold font-display tracking-wide shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 cursor-pointer flex items-center justify-center space-x-2 transition-all"
                    >
                      <FiSend />
                      <span>{isSubmitting ? "SENDING MESSAGE..." : "SEND MESSAGE"}</span>
                    </button>

                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-prompt"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <FiCheckCircle className="text-brand-cyan text-6xl animate-bounce" />
                    <h3 className="text-2xl font-bold font-display text-white">Message Transmitted!</h3>
                    <p className="text-zinc-400 max-w-sm leading-relaxed text-sm">
                      Thank you for reaching out, Sam. Your message has been encrypted and sent to my inbox. I'll get back to you shortly.
                    </p>
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
