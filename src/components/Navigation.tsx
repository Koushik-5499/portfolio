"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "py-4 bg-[#03050a]/90 backdrop-blur-md border-b border-white/5 shadow-2xl" : "py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-8 md:px-16 flex items-center justify-between">
          
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-xs font-bold tracking-[0.2em] text-white/70 hover:text-white uppercase transition-colors relative group">
              About
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-xs font-bold tracking-[0.2em] text-white/70 hover:text-white uppercase transition-colors relative group">
              Projects
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-xs font-bold tracking-[0.2em] text-white/70 hover:text-white uppercase transition-colors relative group">
              Contact
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Empty div for mobile spacing */}
          <div className="md:hidden font-heading text-lg font-bold tracking-widest text-white">
            KS
          </div>

          {/* Email Me Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="mailto:koushik4680@gmail.com"
              className="px-8 py-3 rounded-full border border-white/30 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Email Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-[#03050a]/95 z-40 flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-10">
              {["About", "Projects", "Contact"].map((item, idx) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold tracking-[0.2em] text-white uppercase hover:text-cyan transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <a
                  href="mailto:koushik4680@gmail.com"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-4 rounded-full border border-white text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
                >
                  Email Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
