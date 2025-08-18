'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import BackgroundLayer from "@/components/BackgroundLayer";
import BackgroundElements from "@/components/BackgroundElements";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 text-foreground overflow-x-hidden relative">
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted text-foreground">
      {/* Background Layers */}
      <BackgroundLayer />

      {/* Cursor Follower */}
      {/* <div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      /> */}

      {/* Geometric Background Elements */}
      <BackgroundElements />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* Testimonials */}

      <Contact />
      <Footer />

      {/* Back to Top */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-black text-white hover:bg-black/90 shadow-2xl z-40"
          size="icon"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}
