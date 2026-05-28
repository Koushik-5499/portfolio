"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const setupVolumeBoost = () => {
    try {
      if (!audioCtxRef.current && videoRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
          const ctx = new AudioContextClass();
          audioCtxRef.current = ctx;
          
          const track = ctx.createMediaElementSource(videoRef.current);
          const gainNode = ctx.createGain();
          
          // Boost volume to 400%
          gainNode.gain.value = 4.0;
          
          track.connect(gainNode);
          gainNode.connect(ctx.destination);
        }
      }
      if (audioCtxRef.current?.state === "suspended") {
        audioCtxRef.current.resume();
      }
    } catch (error) {
      console.error("Audio boost failed:", error);
    }
  };

  const attemptPlay = async () => {
    if (!videoRef.current) return;
    
    try {
      // Try to autoplay WITH sound first
      videoRef.current.muted = false;
      await videoRef.current.play();
      setIsMuted(false);
      setIsPlaying(true);
      setupVolumeBoost();
    } catch (error) {
      // Browser blocked unmuted autoplay.
      // The video will remain paused on the first frame because the user requested NO MUTING on load.
      setIsPlaying(false);
      setIsMuted(false);

      // Add a global click listener: the moment the user clicks ANYWHERE on the page,
      // it will unmute, boost volume, and restart the video.
      const handleGlobalClick = async () => {
        if (!videoRef.current) return;
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.currentTime = 0; // restart from beginning
        
        setupVolumeBoost();
        await videoRef.current.play().catch(() => {});
        
        // Remove listener after first interaction
        document.removeEventListener('click', handleGlobalClick);
        document.removeEventListener('touchstart', handleGlobalClick);
      };
      
      document.addEventListener('click', handleGlobalClick);
      document.addEventListener('touchstart', handleGlobalClick);
    }
  };

  // Initial Autoplay Attempt
  useEffect(() => {
    attemptPlay();
  }, []);

  // Restart video when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;

          if (entry.isIntersecting) {
            // User scrolled back to the hero section, restart from beginning
            videoRef.current.currentTime = 0;
            // Only try to play if it was already playing before, or try playing anyway
            videoRef.current.play().catch(() => {});
          } else {
            // Paused when out of view
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const isNowMuted = !videoRef.current.muted;
      videoRef.current.muted = isNowMuted;
      setIsMuted(isNowMuted);

      if (!isNowMuted) {
        setupVolumeBoost();
      }
    }
  };

  return (
    <section ref={containerRef} id="hero" className="relative h-screen w-full overflow-hidden">
      
      {/* Fullscreen Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#050505]">
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted={isMuted}
          loop={false}
          className="w-full h-full object-cover object-center scale-[1.25] md:scale-[1.35] translate-y-10 md:translate-y-16"
          onEnded={() => setIsPlaying(false)}
        >
          <source src="/assets/presenter.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03050a]/95 via-[#03050a]/40 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30 z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-8 md:px-16 h-full flex flex-col justify-center pointer-events-none">
        
        {/* Main Typography Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl pt-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-white/60 uppercase">Portfolio · 2026</span>
          </div>

          <h1 className="font-heading text-[10vw] md:text-[80px] lg:text-[100px] font-black leading-tight tracking-tighter text-white drop-shadow-2xl mb-8 pointer-events-auto">
            KOUSHIK S
          </h1>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm font-bold tracking-[0.2em] text-white/80 uppercase">
            <span>Developer</span>
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/50"></span>
            <span>Designer</span>
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/50"></span>
            <span>GenAI Integration</span>
          </div>
        </motion.div>

        {/* Scroll Indicator (Bottom Left) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-8 md:left-16 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase rotate-[-90deg] mb-8 origin-bottom">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
              animate={{ y: [0, 64, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Mute/Unmute Toggle (Bottom Right) */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          onClick={toggleMute}
          className="absolute bottom-12 right-8 md:right-16 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-md hover:bg-white/10 hover:scale-110 transition-all cursor-pointer z-30 pointer-events-auto"
          aria-label="Toggle Audio"
        >
          {isMuted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
        </motion.button>
      </div>
    </section>
  );
}
