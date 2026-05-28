"use client";

import { motion } from "framer-motion";
import { ExternalLink, Car, BotMessageSquare } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "fastpark",
    title: "FASTPARK — AI Smart Parking",
    category: "AI",
    link: "https://info.fastpark.online/",
    icon: <Car className="text-cyan" />,
    description: "An AI-powered smart parking system featuring QR-based entry/exit, voice-enabled AI assistant, real-time slot tracking, automated billing, and seamless payment integration.",
    features: ["AI Parking", "QR Entry/Exit", "Voice AI", "Real-time Tracking", "Auto Billing", "Firebase", "Razorpay", "Google Maps"],
    image: "/assets/project-fastpark.png",
    gradient: "from-cyan/20 to-primary/20",
    border: "group-hover:border-cyan/40"
  },
  {
    id: "election",
    title: "AI Election Assistant",
    category: "Generative AI",
    link: "https://election-assistant-ai.vercel.app/",
    icon: <BotMessageSquare className="text-purple-400" />,
    description: "An AI-powered election information assistant built for the PromptWars challenge, delivering intelligent, real-time election insights through conversational AI.",
    features: ["Generative AI", "NLP", "Prompt Engineering", "Real-time Data", "Chat Interface"],
    image: "/assets/project-election.png",
    gradient: "from-purple/20 to-pink-500/20",
    border: "group-hover:border-purple/40"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-cyan font-mono text-sm mb-4 uppercase tracking-widest border border-cyan/20">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Project Showcase</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world AI solutions built with passion and precision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group"
            >
              <div className={`glass-card rounded-3xl overflow-hidden border border-white/5 ${project.border} transition-all duration-500 h-full flex flex-col relative`}>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                {/* Image Section */}
                <div className="relative h-[240px] overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/40 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-semibold uppercase tracking-wider">
                    {project.icon}
                    {project.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-cyan transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-gray-300 text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan transition-colors group/link w-fit">
                    View Details
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
