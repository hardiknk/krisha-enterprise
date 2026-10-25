"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PosterModal from "@/components/PosterModal";

export default function Home() {
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950">
      {/* Header Navigation */}
      <Header onOpenPoster={() => setIsPosterModalOpen(true)} />

      {/* Main Content landmark for accessibility */}
      <main id="main-content" className="flex-1">
        {/* Hero Section with Prominent Poster-Style Carousel */}
        <Hero onOpenOriginalPoster={() => setIsPosterModalOpen(true)} />

        {/* 4 Core Services Grid */}
        <Services />

        {/* About Krisha Enterprises */}
        <About onOpenOriginalPoster={() => setIsPosterModalOpen(true)} />

        {/* Contact, Full Address, and Directions */}
        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer onOpenOriginalPoster={() => setIsPosterModalOpen(true)} />

      {/* Mobile Floating Quick CTA Bar */}
      <FloatingCTA />

      {/* Original Poster Lightbox Modal */}
      <PosterModal
        isOpen={isPosterModalOpen}
        onClose={() => setIsPosterModalOpen(false)}
      />
    </div>
  );
}
