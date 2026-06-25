"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers, Car, BotMessageSquare, ShoppingCart, Leaf } from "lucide-react";
import Image from "next/image";

const allProjects = [
  {
    id: "fastpark",
    title: "FASTPARK",
    description: "Production-ready Smart Campus Parking System featuring concurrent real-time slot management, automated billing, and an AI voice chatbot.",
    tech: ["HTML/CSS", "JavaScript", "Firebase", "Razorpay", "Vercel"],
    liveUrl: "https://info.fastpark.online/",
    githubUrl: "https://github.com/Koushik-5499/parking",
    architectureUrl: "https://github.com/Koushik-5499/parking#architecture",
    image: "/assets/project-fastpark.png",
    icon: Car,
    gradient: "from-cyan to-blue-500",
  },
  {
    id: "saravana",
    title: "Saravana Agency – Crackers Shop",
    description: "Full-stack fireworks e-commerce platform with real-time stock and order pipeline (Confirmed → Packed → Shipped → Delivered).",
    tech: ["HTML/CSS", "JavaScript", "Supabase", "Vercel"],
    liveUrl: "#",
    githubUrl: "https://github.com/Koushik-5499/",
    image: "/assets/holographic-bg.png",
    icon: ShoppingCart,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    id: "election",
    title: "Election Assistant AI",
    description: "Multilingual AI conversational assistant for first-time voters with intent-based classification and Google Maps polling booth finder.",
    tech: ["HTML/CSS", "JavaScript", "Vercel", "AI APIs"],
    liveUrl: "https://election-assistant-ai.vercel.app/",
    githubUrl: "https://github.com/Koushik-5499/election-assistant-ai",
    image: "/assets/project-election.png",
    icon: BotMessageSquare,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "carbon",
    title: "Carbon Footprint Platform",
    description: "Responsive web platform to promote environmental sustainability by helping users understand, estimate, and reduce their carbon footprint.",
    tech: ["HTML/CSS", "JavaScript", "Firebase", "Render"],
    liveUrl: "https://carbon-footprint-awareness.onrender.com/",
    githubUrl: "https://github.com/Koushik-5499/Carbon-Footprint-Awareness",
    image: "/assets/holographic-bg.png",
    icon: Leaf,
    gradient: "from-pink-500 to-cyan",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />
      
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
            <Layers className="w-4 h-4 text-cyan" />
            <span className="text-sm font-mono text-cyan uppercase tracking-widest">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="gradient-text">Innovation Lab</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world AI solutions that solve actual problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {allProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-cyan/30 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-6 left-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} p-0.5`}>
                    <div className="w-full h-full bg-[#0a0a0f] rounded-xl flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-white/10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-cyan hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  {project.architectureUrl && (
                    <a
                      href={project.architectureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                    >
                      <Layers className="w-4 h-4" />
                      Architecture
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
