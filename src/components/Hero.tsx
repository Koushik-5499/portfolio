"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, Mail, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(false); // start unmuted
  const [hasEnded, setHasEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasPlayedOnce = useRef(false);

  // Attempt to play with audio on load
  const attemptPlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    try {
      await video.play();
      setIsMuted(false);
      hasPlayedOnce.current = true;
    } catch {
      // Browser blocked unmuted autoplay — fall back to muted
      video.muted = true;
      setIsMuted(true);
      try {
        await video.play();
        hasPlayedOnce.current = true;
      } catch {
        // autoplay fully blocked
      }
    }
  }, []);

  useEffect(() => {
    attemptPlay();
  }, [attemptPlay]);

  // When video ends — stop, don't loop
  const handleEnded = () => {
    setHasEnded(true);
  };

  // IntersectionObserver: when user scrolls back to hero, clicking plays again
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;
          // If scrolled away, pause
          if (!entry.isIntersecting) {
            video.pause();
          }
          // Don't auto-replay when scrolling back — user must click
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Click on section to replay after video has ended
  const handleSectionClick = async () => {
    const video = videoRef.current;
    if (!video || !hasEnded) return;
    video.currentTime = 0;
    video.muted = isMuted;
    try {
      await video.play();
      setHasEnded(false);
    } catch {
      // play failed
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // don't trigger section click
    const video = videoRef.current;
    if (!video) return;
    const next = !isMuted;
    video.muted = next;
    setIsMuted(next);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onClick={handleSectionClick}
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      style={{ cursor: hasEnded ? "pointer" : "default" }}
    >
      {/* Video Background — cropped to exclude watermark area */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          playsInline
          muted={isMuted}
          onEnded={handleEnded}
          className="absolute object-cover"
          style={{
            width: "110%",
            height: "110%",
            top: "0%",
            left: "0%",
            objectPosition: "left center",
          }}
        >
          <source src="/assets/presenter.mp4" type="video/mp4" />
        </video>

        {/* Left gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/70 via-[#0a0a0f]/20 to-transparent z-10" />

        {/* Top subtle fade */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0a0f]/50 to-transparent z-10" />

        {/* Bottom subtle fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10" />
      </div>

      {/* Content - Left Side */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl pt-16 pb-24">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
            <span className="text-sm font-mono text-cyan">Available for Opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-5 leading-tight"
          >
            <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,212,255,0.5)]">KOUSHIK S</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl font-semibold mb-5 h-14 flex items-center"
          >
            <TypeAnimation
              sequence={[
                "Building AI-Powered Solutions",
                2000,
                "Creating Real-World Products",
                2000,
                "Innovating with Technology",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-gray-200 mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            CSE Student | AI Developer | Creator of FASTPARK | Hackathon Builder
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xs md:text-sm text-gray-400 mb-7 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Full Stack Developer • Prompt Engineer • Generative AI Specialist
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-3 mb-7"
          >
            <Link
              href="#projects"
              onClick={(e) => e.stopPropagation()}
              className="group px-5 py-2.5 bg-gradient-to-r from-cyan to-blue-500 rounded-full font-semibold text-white text-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 flex items-center gap-2"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Link>

            <a
              href="/assets/Koushik_S_Resume.docx"
              download
              onClick={(e) => e.stopPropagation()}
              className="px-5 py-2.5 glass-card backdrop-blur-md rounded-full font-semibold text-white text-sm hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>

            <Link
              href="#contact"
              onClick={(e) => e.stopPropagation()}
              className="px-5 py-2.5 glass-card backdrop-blur-md rounded-full font-semibold text-white text-sm hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/Koushik-5499/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-11 h-11 glass-card backdrop-blur-md rounded-full flex items-center justify-center hover:bg-cyan/20 hover:border-cyan/50 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-white group-hover:text-cyan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/koushik-s-22122a386/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-11 h-11 glass-card backdrop-blur-md rounded-full flex items-center justify-center hover:bg-cyan/20 hover:border-cyan/50 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-white group-hover:text-cyan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-cyan rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Audio Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={toggleMute}
        className="absolute bottom-8 right-8 w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-cyan/20 hover:border-cyan/50 transition-all duration-300 z-20 group"
        aria-label="Toggle Audio"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-cyan transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 text-cyan" />
        )}
      </motion.button>
    </section>
  );
}
