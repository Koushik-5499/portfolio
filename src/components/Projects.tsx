"use client";

import { motion } from "framer-motion";
<<<<<<< HEAD
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
=======
import { ExternalLink, Layers, Car, BotMessageSquare, Globe } from "lucide-react";
import Image from "next/image";

const heroProject = {
  id: "fastpark",
  title: "FASTPARK",
  tagline: "AI-Powered Smart Parking System",
  problem: "Traditional parking systems are inefficient, time-consuming, and lack modern automation features.",
  solution: "FASTPARK revolutionizes parking management with QR-based entry/exit, AI voice assistant, real-time tracking, and automated billing.",
  features: [
    { name: "QR Entry & Exit", desc: "Contactless vehicle management" },
    { name: "Voice Assistant", desc: "AI-powered parking guidance" },
    { name: "Firebase Backend", desc: "Real-time data synchronization" },
    { name: "Automated Billing", desc: "Seamless payment processing" },
    { name: "Slot Reservation", desc: "Pre-book parking spots" },
    { name: "Admin Dashboard", desc: "Complete management control" },
    { name: "Google Maps", desc: "Location-based services" },
    { name: "Razorpay Integration", desc: "Secure payment gateway" },
  ],
  tech: ["React", "Firebase", "Node.js", "Google Maps API", "Razorpay", "AI/ML", "QR Technology"],
  liveUrl: "https://info.fastpark.online/",
  githubUrl: "https://github.com/Koushik-5499/parking",
  architectureUrl: "https://github.com/Koushik-5499/parking#architecture",
  image: "/assets/project-fastpark.png",
};

const otherProjects = [
  {
    id: "election",
    title: "AI Election Assistant",
    description: "Generative AI-powered election information assistant built for PromptWars challenge",
    tech: ["Next.js", "OpenAI", "Prompt Engineering", "TypeScript"],
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
    liveUrl: "https://election-assistant-ai.vercel.app/",
    githubUrl: "https://github.com/Koushik-5499/election-assistant-ai",
    image: "/assets/project-election.png",
    icon: BotMessageSquare,
    gradient: "from-purple-500 to-pink-500",
  },
  {
<<<<<<< HEAD
    id: "carbon",
    title: "Carbon Footprint Platform",
    description: "Responsive web platform to promote environmental sustainability by helping users understand, estimate, and reduce their carbon footprint.",
    tech: ["HTML/CSS", "JavaScript", "Firebase", "Render"],
    liveUrl: "https://carbon-footprint-awareness.onrender.com/",
    githubUrl: "https://github.com/Koushik-5499/Carbon-Footprint-Awareness",
    image: "/assets/holographic-bg.png",
    icon: Leaf,
    gradient: "from-pink-500 to-cyan",
=======
    id: "portfolio",
    title: "Portfolio Website",
    description: "Premium futuristic AI engineer portfolio with glassmorphism and 3D effects",
    tech: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://portfolio-koushik.vercel.app/",
    githubUrl: "https://github.com/Koushik-5499/portfolio",
    image: "/assets/holographic-bg.png",
    icon: Globe,
    gradient: "from-cyan to-blue-500",
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
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

<<<<<<< HEAD
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {allProjects.map((project, idx) => (
=======
        {/* Hero Project - FASTPARK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="glass-card rounded-3xl overflow-hidden border-2 border-cyan/20 hover:border-cyan/40 transition-all duration-500 group relative">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="grid lg:grid-cols-2 gap-0">
              
              {/* Image Section */}
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                <Image
                  src={heroProject.image}
                  alt={heroProject.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-8 left-8 px-4 py-2 rounded-full glass-card border border-cyan/30">
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-cyan" />
                    <span className="text-sm font-semibold text-white">Hero Project</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
                <h3 className="text-4xl lg:text-5xl font-bold font-heading mb-3 group-hover:text-cyan transition-colors">
                  {heroProject.title}
                </h3>
                <p className="text-xl text-cyan mb-8">{heroProject.tagline}</p>

                {/* Problem & Solution */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Problem</h4>
                    <p className="text-gray-300 leading-relaxed">{heroProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Solution</h4>
                    <p className="text-gray-300 leading-relaxed">{heroProject.solution}</p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {heroProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-white">{feature.name}</p>
                        <p className="text-xs text-gray-400">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {heroProject.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-cyan/10 border border-cyan/20 text-cyan text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={heroProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-cyan to-blue-500 rounded-full font-semibold text-white hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={heroProject.githubUrl}
                    className="px-6 py-3 glass-card rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={heroProject.architectureUrl}
                    className="px-6 py-3 glass-card rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                  >
                    <Layers className="w-4 h-4" />
                    Architecture
                  </a>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, idx) => (
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
<<<<<<< HEAD
              className="glass-card rounded-2xl overflow-hidden hover:border-cyan/30 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden shrink-0">
=======
              className="glass-card rounded-2xl overflow-hidden hover:border-cyan/30 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
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
<<<<<<< HEAD
              <div className="p-6 flex flex-col grow">
=======
              <div className="p-6">
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
                <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
<<<<<<< HEAD
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
=======
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
<<<<<<< HEAD
                <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-white/10">
=======
                <div className="flex gap-4">
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
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
<<<<<<< HEAD
                    target="_blank"
                    rel="noopener noreferrer"
=======
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
                    className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
<<<<<<< HEAD
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
=======
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
