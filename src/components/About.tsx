"use client";

import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, Code, Terminal, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-sm mb-4 uppercase tracking-widest border border-primary/20">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Crafting the Future with AI</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate about building intelligent solutions that push the boundaries of technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-heading font-semibold text-white">Computer Science Engineering Student & AI Enthusiast</h3>
            <p className="text-gray-400 text-lg leading-relaxed text-balance">
              I&apos;m <strong className="text-white">Koushik S</strong>, a Computer Science Engineering student with a deep passion for <strong className="text-cyan">Artificial Intelligence</strong>, <strong className="text-cyan">Full Stack Development</strong>, <strong className="text-cyan">Smart Automation Systems</strong>, and <strong className="text-cyan">Generative AI</strong>.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed text-balance">
              I thrive on transforming complex challenges into elegant, user-centric digital experiences. My approach combines cutting-edge technology with creative problem-solving to deliver solutions that make a real-world impact.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { label: "Projects Built", value: "5+", icon: <Code size={20} className="text-primary" /> },
                { label: "Technologies", value: "15+", icon: <Terminal size={20} className="text-cyan" /> },
                { label: "Hackathons", value: "3+", icon: <Sparkles size={20} className="text-purple" /> },
                { label: "Primary Focus", value: "AI", icon: <BrainCircuit size={20} className="text-indigo" /> },
              ].map((stat, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl border-white/5 hover:border-primary/30 hover:-translate-y-1 transition-all group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-bold font-heading bg-gradient-to-r from-primary to-cyan text-transparent bg-clip-text">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple/20 blur-3xl opacity-30 rounded-full"></div>
            
            <div className="glass-card p-10 rounded-3xl relative overflow-hidden group border-white/10 hover:border-cyan/30 transition-colors">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-purple"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple/20 flex items-center justify-center mb-8 border border-white/10">
                <GraduationCap size={32} className="text-cyan" />
              </div>
              
              <h4 className="text-2xl font-heading font-bold text-white mb-2">B.E Computer Science Engineering</h4>
              <p className="text-xl text-gray-300 mb-6">Rathinam Technical Campus, Coimbatore</p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-cyan text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
                2025 – 2029
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
