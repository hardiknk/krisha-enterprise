import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950">
      {/* Header Navigation */}
      <Header />

      {/* Main Content landmark for accessibility */}
      <main id="main-content" className="flex-1">
        {/* Hero Section with 3-Slide Interactive Poster-Style Carousel */}
        <Hero />

        {/* 4 Core Services Grid */}
        <Services />

        {/* About Krisha Enterprises */}
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
