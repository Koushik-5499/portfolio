"use client";

import { motion } from "framer-motion";
import { Mail, Link, GitBranch, Send, Download } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-sm mb-4 uppercase tracking-widest border border-primary/20">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Let&apos;s Build Something Amazing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let&apos;s collaborate and create something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-heading font-bold text-white mb-4">Connect with me</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:koushik4680@gmail.com" className="flex items-center gap-6 p-6 rounded-2xl glass-card border border-white/5 hover:border-cyan/30 hover:bg-white/5 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="text-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-semibold mb-1 text-lg">Email</h4>
                  <p className="text-gray-400 group-hover:text-cyan transition-colors">koushik4680@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/koushik-s-22122a386" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 rounded-2xl glass-card border border-white/5 hover:border-blue-500/30 hover:bg-white/5 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Link className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-semibold mb-1 text-lg">LinkedIn</h4>
                  <p className="text-gray-400 group-hover:text-blue-400 transition-colors">koushik-s-22122a386</p>
                </div>
              </a>

              <a href="https://github.com/Koushik-5499" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 rounded-2xl glass-card border border-white/5 hover:border-purple-500/30 hover:bg-white/5 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GitBranch className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-semibold mb-1 text-lg">GitHub</h4>
                  <p className="text-gray-400 group-hover:text-purple-400 transition-colors">Koushik-5499</p>
                </div>
              </a>

              {/* Download Resume Button */}
              <a href="/assets/resume.pdf" download="Koushik_S_Resume.pdf" className="flex items-center gap-6 p-6 rounded-2xl glass-card border border-cyan/20 hover:border-cyan/50 hover:bg-cyan/5 hover:shadow-[0_0_30px_rgba(0,180,255,0.2)] transition-all group mt-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 rounded-xl bg-cyan/20 border border-cyan/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-translate-y-1 transition-transform relative z-10">
                  <Download className="text-cyan" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-white font-heading font-bold mb-1 text-lg">Download Resume</h4>
                  <p className="text-gray-300 group-hover:text-white transition-colors">Grab a copy of my latest CV</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-cyan to-purple"></div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    required 
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={formStatus !== "idle"}
                  className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-white transition-all ${
                    formStatus === "success" 
                      ? "bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]" 
                      : "bg-gradient-to-r from-primary to-indigo hover:shadow-[0_0_25px_rgba(0,180,255,0.4)] hover:-translate-y-1"
                  }`}
                >
                  {formStatus === "idle" && (
                    <>Send Message <Send size={18} /></>
                  )}
                  {formStatus === "submitting" && (
                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  )}
                  {formStatus === "success" && "Message Sent! ✓"}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
