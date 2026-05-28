"use client";

import { motion } from "framer-motion";
import { Code2, Globe2, Cpu } from "lucide-react";
import React, { useRef } from "react";

const skillsData = [
  {
    title: "Programming",
    icon: <Code2 size={24} className="text-cyan" />,
    skills: ["C", "Java", "Python", "JavaScript"],
    gradient: "from-cyan/20 to-primary/10",
    borderHover: "hover:border-cyan/40"
  },
  {
    title: "Web & Development",
    icon: <Globe2 size={24} className="text-purple" />,
    skills: ["HTML", "CSS", "Firebase", "GitHub", "Vercel"],
    gradient: "from-purple/20 to-indigo/10",
    borderHover: "hover:border-purple/40"
  },
  {
    title: "AI & Tools",
    icon: <Cpu size={24} className="text-pink-400" />,
    skills: ["Prompt Engineering", "Generative AI", "AI Chatbot Integration", "Power BI", "Razorpay", "Resend", "Google Workspace"],
    gradient: "from-pink-500/20 to-purple/10",
    borderHover: "hover:border-pink-500/40"
  }
];

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-300 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative border-t border-white/5 bg-[#03050a]/50">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple/10 text-purple-400 font-mono text-sm mb-4 uppercase tracking-widest border border-purple/20">
            Skills & Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Technology Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A diverse toolkit spanning programming, web development, and AI technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <TiltCard className="h-full">
                <div className={`glass-card rounded-3xl p-8 h-full border border-white/5 ${category.borderHover} group relative overflow-hidden`}>
                  {/* Hover gradient glow */}
                  <div className={`absolute -inset-10 bg-gradient-to-br ${category.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold text-white mb-6">{category.title}</h3>
                    
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all flex items-center gap-2 cursor-default shadow-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-70"></span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
