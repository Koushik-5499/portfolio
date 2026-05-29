"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Rocket, Zap, Code, Brain } from "lucide-react";
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

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:border-cyan/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Year Badge */}
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-mono">
                {achievement.year}
              </div>
              
              {/* Category */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4">
                {achievement.category}
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

      </div>
    </section>
  );
}
