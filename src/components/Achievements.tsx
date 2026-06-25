"use client";

import { motion } from "framer-motion";
<<<<<<< HEAD
import { Award, Trophy, Rocket, Zap, Code, Brain, ExternalLink, ShieldCheck } from "lucide-react";
=======
import { Award, Trophy, Rocket, Zap, Code, Brain } from "lucide-react";
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { icon: Award, label: "Certifications", value: 15, suffix: "+", color: "from-cyan to-blue-500" },
  { icon: Trophy, label: "Hackathons", value: 3, suffix: "+", color: "from-purple-500 to-pink-500" },
  { icon: Rocket, label: "Major Projects", value: 3, suffix: "+", color: "from-blue-500 to-cyan" },
  { icon: Zap, label: "AI Integrations", value: 5, suffix: "+", color: "from-pink-500 to-purple-500" },
  { icon: Code, label: "Technologies", value: 15, suffix: "+", color: "from-cyan to-purple-500" },
  { icon: Brain, label: "Live Deployments", value: 3, suffix: "+", color: "from-purple-500 to-cyan" },
];

const achievements = [
  {
<<<<<<< HEAD
    title: "AB-PMJAY Hackathon",
    description: "Built ClaimIQ for clinical document classification using LLM + keyword hybrid pipeline (IISc Bengaluru).",
    year: "2026",
    category: "Healthcare AI",
  },
  {
    title: "ET AI Hackathon Phase 2",
    description: "Advanced to Phase 2 among 61,000+ participants after attending Google 'Build with AI' Bootcamp.",
    year: "2026",
    category: "Generative AI",
  },
  {
    title: "AI for Social Impact Challenge",
    description: "Innovated solutions for social good with StartupTN, HCL Foundation, and Anna University CED.",
    year: "2026",
    category: "Social Impact",
  },
  {
    title: "Multiple National Hackathons",
    description: "Actively submitted FastPark to Hack The Matrix, FAR AWAY 2026, StoxraHack 2026, and YUKTI-MIC.",
    year: "2026",
    category: "Full Stack Innovation",
  },
];

const certifications = [
  { title: "AWS Certified Cloud Practitioner (CLF-C02)", issuer: "Amazon Web Services (AWS)" },
  { title: "The Joy of Computing Using Python", issuer: "NPTEL – IIT Madras" },
  { title: "Building Generative AI Skills for Developers", issuer: "LinkedIn Learning" },
  { title: "Advance Your Skills in AI and Machine Learning", issuer: "LinkedIn Learning" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy" },
  { title: "Google Build with AI Bootcamp", issuer: "Google Developers" },
  { title: "AI Fluency for Students", issuer: "Anthropic" },
  { title: "Google Developer Program", issuer: "Google Developers" },
  { title: "HP LIFE Certifications", issuer: "HP LIFE" },
  { title: "Udemy Professional Courses", issuer: "Udemy" }
];

=======
    title: "PromptWars Challenge",
    description: "Built AI Election Assistant using advanced prompt engineering",
    year: "2024",
    category: "Generative AI",
  },
  {
    title: "AB PM-JAY Hackathon",
    description: "Developed healthcare solution for government initiative",
    year: "2024",
    category: "Healthcare Tech",
  },
  {
    title: "AMD Developer Hackathon",
    description: "Created innovative solution leveraging AMD technologies",
    year: "2024",
    category: "Hardware Innovation",
  },
];

>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10" ref={ref}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Trophy className="w-4 h-4 text-cyan" />
            <span className="text-sm font-mono text-cyan uppercase tracking-widest">Achievement Dashboard</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="gradient-text">Impact & Recognition</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Metrics that showcase dedication, innovation, and real-world impact
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300 group relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${metric.color} p-0.5`}>
                <div className="w-full h-full bg-[#0a0a0f] rounded-xl flex items-center justify-center">
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="text-3xl font-bold font-heading mb-2">
                {isInView && (
                  <CountUp
                    end={metric.value}
                    duration={2.5}
                    suffix={metric.suffix}
                    className={`bg-gradient-to-r ${metric.color} text-transparent bg-clip-text`}
                  />
                )}
              </div>
              
              <p className="text-sm text-gray-400 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold font-heading text-center mb-12">
            Hackathons & <span className="gradient-text">Recognition</span>
          </h3>
        </motion.div>

<<<<<<< HEAD
        <div className="grid md:grid-cols-2 gap-6">
=======
        <div className="grid md:grid-cols-3 gap-6">
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
<<<<<<< HEAD
              className="glass-card p-8 rounded-2xl hover:border-cyan/30 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
            >
              {/* Card Header (Category + Year) */}
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
                  {achievement.category}
                </div>
                <div className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-mono shrink-0">
                  {achievement.year}
                </div>
=======
              className="glass-card p-8 rounded-2xl hover:border-cyan/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Year Badge */}
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-mono">
                {achievement.year}
              </div>
              
              {/* Category */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4">
                {achievement.category}
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
              </div>
              
              <h4 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-cyan transition-colors">
                {achievement.title}
              </h4>
              
              <p className="text-gray-400 leading-relaxed">
                {achievement.description}
              </p>
              
              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-32 mb-12"
          id="certifications"
        >
          <h3 className="text-3xl font-bold font-heading text-center mb-12">
            Professional <span className="gradient-text">Certifications</span>
          </h3>
        </motion.div>

        <div className="relative w-full overflow-hidden flex group">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-100%); }
            }
          `}</style>
          
          {/* First Marquee Block */}
          <div className="flex gap-6 min-w-full shrink-0 animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] pr-6">
            {certifications.map((cert, idx) => (
              <div
                key={`cert-1-${idx}`}
                className="glass-card p-5 rounded-2xl border border-white/5 hover:border-cyan/30 transition-all duration-300 flex items-center gap-4 w-[320px] shrink-0"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-blue-500 p-0.5 shrink-0">
                  <div className="w-full h-full bg-[#0a0a0f] rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-cyan" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading text-white line-clamp-2 leading-tight mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-cyan text-xs font-medium line-clamp-1">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Marquee Block (Duplicate for infinite scroll) */}
          <div className="flex gap-6 min-w-full shrink-0 animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] pr-6" aria-hidden="true">
            {certifications.map((cert, idx) => (
              <div
                key={`cert-2-${idx}`}
                className="glass-card p-5 rounded-2xl border border-white/5 hover:border-cyan/30 transition-all duration-300 flex items-center gap-4 w-[320px] shrink-0"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-blue-500 p-0.5 shrink-0">
                  <div className="w-full h-full bg-[#0a0a0f] rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-cyan" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading text-white line-clamp-2 leading-tight mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-cyan text-xs font-medium line-clamp-1">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

=======
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
      </div>
    </section>
  );
}
