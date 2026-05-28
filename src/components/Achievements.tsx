"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, FileBadge } from "lucide-react";

const achievements = [
  {
    title: "PromptWars",
    subtitle: "Google Antigravity AI Challenge",
    year: "2026",
    icon: <Trophy className="text-yellow-400" size={32} />
  },
  {
    title: "AB PM-JAY Hackathon",
    subtitle: "Auto-Adjudication Healthcare",
    year: "2026",
    icon: <Medal className="text-blue-400" size={32} />
  },
  {
    title: "AMD Developer Hackathon",
    subtitle: "Advanced Innovation Challenge",
    year: "2026",
    icon: <Award className="text-cyan-400" size={32} />
  }
];

const certifications = [
  { title: "Google AI Essentials", desc: "Foundations of AI & Machine Learning" },
  { title: "Prompt Engineering", desc: "Advanced Prompt Design & Optimization" },
  { title: "Full Stack Development", desc: "HTML, CSS, JavaScript & Firebase" },
  { title: "Python for Data Science", desc: "Data Analysis & Visualization" },
  { title: "Power BI Analytics", desc: "Business Intelligence & Dashboards" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 relative border-t border-white/5 bg-[#03050a]/50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 font-mono text-sm mb-4 uppercase tracking-widest border border-yellow-400/20">
            Recognition
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Achievements & Hackathons</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-yellow-400/30 transition-all duration-500 text-center group relative overflow-hidden"
            >
              {/* Rotating glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent,rgba(250,204,21,0.05),transparent,rgba(0,180,255,0.05),transparent)] animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-6">{item.subtitle}</p>
                <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-bold border border-yellow-400/20 shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Marquee */}
      <div className="relative border-y border-white/5 bg-black/20 py-16">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#03050a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#03050a] to-transparent z-10 pointer-events-none"></div>
        
        <div className="text-center mb-10">
          <h3 className="text-2xl font-heading font-bold text-white">Certifications</h3>
        </div>

        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-6 whitespace-nowrap px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            style={{ width: "max-content" }}
            whileHover={{ animationPlayState: "paused" }} // Wait, framer motion whileHover doesn't pause x animation easily like this. We will use CSS for marquee instead.
          >
            {/* We double the array for seamless infinite scroll */}
            {[...certifications, ...certifications].map((cert, idx) => (
              <div key={idx} className="glass-card flex-shrink-0 w-80 p-6 rounded-2xl border border-white/5 hover:border-cyan/30 transition-colors group cursor-pointer flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/10 to-primary/10 border border-cyan/20 flex items-center justify-center flex-shrink-0">
                  <FileBadge className="text-cyan group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div className="whitespace-normal">
                  <h4 className="text-white font-heading font-bold mb-1">{cert.title}</h4>
                  <p className="text-sm text-gray-400">{cert.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
