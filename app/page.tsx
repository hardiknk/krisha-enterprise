import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PremiumBackground from "@/components/PremiumBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050c1a] text-slate-100 selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      {/* Dynamic Animated Luxury Background (Aurora, Cyber Dots, Shooting Stars, Particles) */}
      <PremiumBackground />

      {/* Header Navigation */}
      <Header />

      {/* Main Content landmark for accessibility */}
      <main id="main-content" className="relative z-10 flex-1">
        {/* Hero Section with Interactive 3-Slide Showcase */}
        <Hero />

        {/* 8 Core Services Grid with Interactive Filter & Mouse Hover Glow */}
        <Services />

        {/* Why Choose Us & Interactive FAQ */}
        <WhyUs />

        {/* About Krisha Enterprises & Service Philosophy */}
        <About />

        {/* Contact, Full Address, and Directions */}
        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Quick CTA Bar */}
      <FloatingCTA />
    </div>
  );
}
