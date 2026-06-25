"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Lightbulb, User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <User className="w-4 h-4 text-cyan" />
            <span className="text-sm font-mono text-cyan uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="gradient-text">Building the Future</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Transforming ideas into intelligent, scalable solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-bold font-heading mb-6">
                Hi, I'm <span className="gradient-text">Koushik S</span>
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a first-year Computer Science Engineering student at Rathinam Technical Campus with a passion for Full Stack Development and AI. My journey in tech is driven by a commitment to problem-solving and building robust, scalable systems that make a real-world impact.
                </p>
                <p>
                  With experience deploying full-stack applications like <span className="text-cyan font-semibold">FASTPARK</span>, I specialize in combining modern web technologies, AI, and user-centric design to modernize traditional systems. I am constantly expanding my expertise in software engineering and cloud systems.
                </p>
                <p>
                  I thrive in hackathons and competitive programming, always eager for continuous learning. I believe in a pragmatic engineering approach: <span className="text-cyan font-semibold">build fast, iterate quickly, and write clean, maintainable code</span>.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl border-cyan/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-heading mb-3">Mission</h4>
                  <p className="text-gray-300 leading-relaxed">
                    To leverage software engineering and modern web technologies to create robust solutions that bridge the gap between complex real-world problems and efficient, user-friendly products.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Timeline & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            
            {/* Education Card */}
            <div className="glass-card p-8 rounded-2xl hover:border-cyan/30 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan to-blue-500 p-0.5">
                  <div className="w-full h-full bg-[#0a0a0f] rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-cyan" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-mono">
                      2025 – 2029
                    </span>
                  </div>
                  <h4 className="text-xl font-bold font-heading text-white mb-2">
                    B.E Computer Science Engineering
                  </h4>
                  <p className="text-gray-400">
                    Rathinam Technical Campus, Coimbatore
                  </p>
                </div>
              </div>

              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  <span>Specialization in AI & Machine Learning</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  <span>Active in hackathons and tech competitions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  <span>Building real-world projects</span>
                </div>
              </div>
            </div>

            {/* What I Do */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-cyan" />
                <h4 className="text-xl font-bold font-heading">What I Do</h4>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: "Full Stack Development", desc: "Creating end-to-end scalable web applications" },
                  { title: "Software Engineering", desc: "Writing clean, maintainable, and efficient code" },
                  { title: "AI Integration", desc: "Building intelligent systems with Generative AI" },
                  { title: "Problem Solving", desc: "Tackling complex challenges through technology" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan to-purple-500 mt-2 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-white mb-1">{item.title}</h5>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
