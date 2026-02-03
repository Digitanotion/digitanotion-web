"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TechStackCarousel from "./Techstack";
import { GradientButton } from "../component/gradient-button";
import Link from "next/link";
import { ArrowRight, Shield, Code, Users, Zap, PlayCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1]
    }
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const services = [
  { icon: Shield, label: "Cyber Security", color: "from-cyan-500 to-blue-600" },
  { icon: Code, label: "Software Dev", color: "from-purple-500 to-pink-600" },
  { icon: Users, label: "Talent Growth", color: "from-orange-500 to-red-500" },
  { icon: Zap, label: "Digital Transformation", color: "from-green-500 to-emerald-600" },
];

// Background options
const backgroundOptions = {
  IMAGE: 'image',
  VIDEO: 'video',
  GRADIENT: 'gradient'
};

// Predefined background options
const backgrounds = [
  {
    type: backgroundOptions.VIDEO,
    src: "/videos/hero-background.mp4", // Your video path
    thumbnail: "/images/tech-community.jpg", // Fallback thumbnail
    alt: "Modern technology animation showing cybersecurity and digital innovation"
  },
  {
    type: backgroundOptions.IMAGE,
    src: "/images/tech-community.jpg", // Your image path
    alt: "Modern digital workspace with cybersecurity and technology elements"
  },
  {
    type: backgroundOptions.IMAGE,
    src: "/images/tech-community.jpg", // Alternative image
    alt: "Advanced technology infrastructure and network security visualization"
  }
];

export default function DigitanotionHeroFB() {
  const [currentBackground, setCurrentBackground] = useState(backgrounds[1]);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const backgroundContainerRef = useRef(null);

  // Handle video loading
  useEffect(() => {
    if (currentBackground.type === backgroundOptions.VIDEO && videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        setIsVideoReady(true);
        setIsVideoLoading(false);
      };

      const handleError = () => {
        console.error("Video failed to load");
        setIsVideoLoading(false);
        // Fallback to gradient background
        setCurrentBackground(backgrounds.find(bg => bg.type === backgroundOptions.IMAGE) || backgrounds[2]);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      
      // Set video to loop and mute by default for autoplay
      video.loop = true;
      video.muted = true;
      video.playsInline = true;

      // Try to autoplay
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay prevented, show fallback
          setIsPlaying(false);
        });
      }

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, [currentBackground.type]);

  // Toggle video play/pause
  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(e => console.log("Video play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Cycle through backgrounds (optional feature)
  const cycleBackground = () => {
    const currentIndex = backgrounds.findIndex(bg => 
      bg.src === currentBackground.src && bg.type === currentBackground.type
    );
    const nextIndex = (currentIndex + 1) % backgrounds.length;
    setCurrentBackground(backgrounds[nextIndex]);
    setIsVideoLoading(currentBackground.type === backgroundOptions.VIDEO);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with Semantic HTML */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16"
        role="banner"
        aria-label="Digitanotion - Secure Digital Infrastructure and Talent Solutions for Business Growth"
        itemScope
        itemType="https://schema.org/Organization"
      >
        {/* Structured Data for SEO */}
        <div itemScope itemType="https://schema.org/WebSite" className="sr-only">
          <meta itemProp="name" content="Digitanotion Limited" />
          <meta itemProp="url" content="https://digitanotion.com" />
          <meta itemProp="description" content="Leading Cybersecurity and Tech Innovation Center providing digital resilience through Security, Innovation, and Skills Development. We secure businesses from online threats while building custom applications and developing tech talent." />
        </div>

        {/* Background Container */}
        <div 
          ref={backgroundContainerRef}
          className="absolute inset-0 overflow-hidden bg-slate-950"
          aria-hidden="true"
        >
          {/* Dynamic Background - Video or Image */}
          {currentBackground.type === backgroundOptions.VIDEO ? (
            <>
              {/* Video Background */}
              <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  isVideoReady ? 'opacity-100' : 'opacity-0'
                }`}
                src={currentBackground.src}
                poster={currentBackground.thumbnail}
                aria-label={currentBackground.alt}
                title="Digitanotion Technology Background"
                preload="metadata"
                playsInline
                muted
                autoPlay
                loop
              />
              
              {/* Loading State */}
              {isVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-white/20 border-t-cyan-500 rounded-full animate-spin" />
                </div>
              )}

              {/* Video Controls */}
              <div className="absolute bottom-8 right-8 z-20 hidden md:block">
                <button
                  onClick={toggleVideoPlayback}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-black/70 transition-all group"
                  aria-label={isPlaying ? "Pause background video" : "Play background video"}
                >
                  <PlayCircle className={`w-5 h-5 text-white ${!isPlaying ? 'fill-white' : ''}`} />
                  <span className="text-sm text-white/80 group-hover:text-white">
                    {isPlaying ? 'Pause' : 'Play'}
                  </span>
                </button>
              </div>
            </>
          ) : (
            /* Image Background */
            <Image
              src={currentBackground.src}
              alt={currentBackground.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
              quality={90}
              loading="eager"
              onError={(e) => {
                console.error("Image failed to load:", e);
                // Fallback to gradient
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                if (parent) {
                  parent.classList.add('bg-gradient-to-br', 'from-slate-950', 'via-purple-950/30', 'to-slate-950');
                }
              }}
            />
          )}

          {/* Background Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-slate-950/30 to-slate-950/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/50" />
          
          {/* Subtle Animated Gradient Overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 animate-pulse-slow" />
          </div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, #ffffff22 1px, transparent 1px),
                               linear-gradient(to bottom, #302B2B22 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.sin(i) * 10, 0],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Hero Content with Proper Contrast */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Left Column - Main Content */}
            <motion.div
              className="flex-1"
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Badge with SEO Microdata */}
              <motion.div
                variants={itemVariant}
                className="inline-flex items-center mt-4 gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 mb-8"
                itemProp="brand"
                itemScope
                itemType="https://schema.org/Brand"
              >
                <div className="w-2 h-2  rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse" />
                <span className="text-sm font-semibold text-white">
                  <span itemProp="name">Trusted by 50+ Businesses</span>
                </span>
              </motion.div>

              {/* Main Heading with SEO Keywords */}
              <motion.h1
                variants={itemVariant}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
                itemProp="name"
              >
                <span className="block text-white leading-[1.1]">
                  Scale Your Business
                </span>
                <span className="block mt-2 leading-[1.1]">
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    With Secure Digital
                  </span>
                  <span className="text-white"> Infrastructure</span>
                </span>
              </motion.h1>

              {/* Subheading with Description */}
              <motion.p
                variants={itemVariant}
                className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-medium"
                itemProp="description"
              >
                Digitanotion combines cutting-edge cybersecurity, custom software development, 
                and tech talent training to build resilient, future-proof businesses. 
                Innovation, security, and growth—unified through our SASI principles.
              </motion.p>

              {/* Services Pill with SEO Keywords */}
              <motion.div
                variants={itemVariant}
                className="mt-8 flex flex-wrap gap-3"
                itemScope
                itemType="https://schema.org/ItemList"
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <div className={`p-2 rounded-full bg-gradient-to-r ${service.color} shadow-lg`}>
                      <service.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {service.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons with Schema Markup.  */}
              <motion.div
                variants={itemVariant}
                className="mt-10 flex flex-col sm:flex-row gap-4"
                itemProp="potentialAction"
                itemScope
                itemType="https://schema.org/Action"
              >
                <Link 
                  href="/services" 
                  className="group"
                  itemProp="url"
                  aria-label="Start Your Secure Software Development Project - Get a Quote"
                >
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-px shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-slate-950/95 backdrop-blur-sm rounded-[11px] hover:bg-transparent transition-all duration-300 group-hover:bg-slate-950/80">
                      <span className="text-white font-bold text-lg">
                        Our Services/Programs
                      </span>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>

                <Link 
                  href="/academy" 
                  className="group"
                  aria-label="Explore Digitanotion Academy Tech Training Programs"
                >
                  <button className="px-8 py-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <span className="text-white font-bold text-lg">
                      Explore Academy
                    </span>
                  </button>
                </Link>
              </motion.div>

              {/* Trust Signals with Microdata */}
              <motion.div
                variants={itemVariant}
                className="mt-12"
                itemScope
                itemType="https://schema.org/AggregateRating"
              >
                <div className="inline-flex items-center gap-4 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Shield key={i} className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-white">
                      <span itemProp="ratingValue">4.9</span>/5
                    </span>
                  </div>
                  <div className="h-6 w-px bg-white/20" />
                  <div className="text-sm text-white/80">
                    <span itemProp="ratingCount">10+</span> Secure Projects
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Optional Future Content */}
            {/* <motion.div
              className="flex-1 hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
            Placeholder for future 3D/Interactive element
              <div className="relative w-full max-w-md h-96 rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm">
             Interactive Element Placeholder 
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm mb-4">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Interactive Demo
                    </h3>
                    <p className="text-white/80 text-sm">
                      Coming Soon - 3D Visualization of Our Security Infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>

        {/* Background Toggle (Optional Feature) */}
        {/* <button
          onClick={cycleBackground}
          className="absolute bottom-8 left-8 z-20 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-black/70 transition-all group"
          aria-label="Change background view"
        >
          <span className="text-sm text-white/80 group-hover:text-white">
            Change View
          </span>
        </button> */}

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          aria-label="Scroll down to learn more"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1 backdrop-blur-sm">
            <div className="w-1.5 h-4 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500" />
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <div className="relative mt-6">
        <TechStackCarousel />
      </div>

      {/* Enhanced SEO Content - Structured Data & Semantic HTML */}
      <div className="sr-only" aria-hidden="false">
        <h2>Digitanotion Limited - Core Services and Solutions</h2>
        <div itemScope itemType="https://schema.org/Service">
          <h3 itemProp="name">Cyber Security Solutions</h3>
          <ul>
            <li itemProp="description">Managed Cybersecurity Services (CyBouncer)</li>
            <li itemProp="description">Security Operations Center (SOC) Services</li>
            <li itemProp="description">Vulnerability Assessment and Penetration Testing</li>
            <li itemProp="description">Incident Response & Digital Forensics</li>
            <li itemProp="description">DevSecOps Implementation</li>
            <li itemProp="description">Cybersecurity Awareness Training (CySAP Africa)</li>
          </ul>
        </div>
        
        <div itemScope itemType="https://schema.org/Service">
          <h3 itemProp="name">Software Development Services</h3>
          <ul>
            <li itemProp="description">Custom Software Development</li>
            <li itemProp="description">Web Application Development</li>
            <li itemProp="description">Mobile App Development (iOS & Android)</li>
            <li itemProp="description">Digital Product Design & UX/UI</li>
            <li itemProp="description">Cloud Migration & Infrastructure</li>
            <li itemProp="description">API Development & Integration</li>
          </ul>
        </div>
        
        <div itemScope itemType="https://schema.org/Service">
          <h3 itemProp="name">Talent Development Programs</h3>
          <ul>
            <li itemProp="description">Digitanotion Academy Tech Training</li>
            <li itemProp="description">Tech6Project Intensive Internship</li>
            <li itemProp="description">DILS Innovation Labs for Schools</li>
            <li itemProp="description">Corporate Training Programs</li>
            <li itemProp="description">Career Mentorship & Placement</li>
          </ul>
        </div>
        
        <div itemScope itemType="https://schema.org/Service">
          <h3 itemProp="name">Digital Transformation Consulting</h3>
          <ul>
            <li itemProp="description">IT Strategy & Roadmap Planning</li>
            <li itemProp="description">Digital Infrastructure Assessment</li>
            <li itemProp="description">Technology Stack Optimization</li>
            <li itemProp="description">Business Process Automation</li>
            <li itemProp="description">Data Analytics & AI Solutions</li>
          </ul>
        </div>

        <p><strong>Location:</strong> Southeastern Nigeria, Serving Clients Worldwide</p>
        <p><strong>Founded:</strong> 2019 by Divine Ezelibe</p>
        <p><strong>Mission:</strong> Building digital resilience through Security, Innovation, and Skills Development</p>
        <p><strong>Core Principles (SASI):</strong> Simplicity, Affordability, Security, Impact</p>
      </div>
    </div>
  );
}