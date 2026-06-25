"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cpu, Sparkles, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    gradient: "from-cyan to-blue-500",
    skills: [
      { name: "JavaScript/TS", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 85 },
      { name: "C", level: 80 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Frontend",
    icon: Sparkles,
    gradient: "from-pink-500 to-cyan",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Database,
    gradient: "from-blue-500 to-purple-500",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "Firebase", level: 90 },
      { name: "Supabase", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "JWT Auth", level: 80 },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: Wrench,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "AWS (CLF-C02)", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    title: "Integrations",
    icon: Cpu,
    gradient: "from-cyan to-purple-500",
    skills: [
      { name: "Razorpay", level: 85 },
      { name: "QR Code Systems", level: 90 },
      { name: "Google Maps API", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
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
            <Cpu className="w-4 h-4 text-cyan" />
            <span className="text-sm font-mono text-cyan uppercase tracking-widest">Tech Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building next-generation solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:border-cyan/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} p-0.5`}>
                  <div className="w-full h-full bg-[#0a0a0f] rounded-xl flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-heading">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-white">{skill.name}</span>
                      <span className="text-xs font-mono text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 + skillIdx * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Corner */}
              <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg">
            Constantly learning and adapting to emerging technologies
          </p>
        </motion.div>

      </div>
    </section>
  );
}
