"use client";

import React from "react";
import {
  MessageCircle,
  Phone,
  MapPin,
  Sparkles,
  Layers,
  Lock,
  Clock,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";
import PosterCarousel from "@/components/PosterCarousel";
import GlowCard from "@/components/GlowCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-[#050c1a] via-[#08152e] to-[#050c1a] text-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Ambient Atmospheric Lighting Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-rose-600/15 to-amber-500/15 rounded-full blur-[130px] animate-pulse-glow" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-float-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Badge */}
        <div className="flex items-center justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-lg shadow-black/40 text-xs sm:text-sm font-semibold tracking-wide text-amber-300 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-amber-400" aria-hidden="true" />
            <span>{BUSINESS_INFO.tagline}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
          </div>
        </div>

        {/* Hero Title & Mission Copy */}
        <div className="text-center max-w-4xl mx-auto">
          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white font-sans leading-tight sm:leading-none"
          >
            Krisha Enterprises
            <span className="block mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400">
              Your One-Stop Solution
            </span>
          </h1>

          {/* Supporting mission copy provided by user */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {BUSINESS_INFO.missionStatement}
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 text-slate-950 font-black text-base shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Chat with Krisha Enterprises on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-black text-base border border-white/10 shadow-xl transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-rose-400"
              aria-label={`Call Krisha Enterprises at ${BUSINESS_INFO.phoneFormatted}`}
            >
              <Phone className="w-5 h-5 text-rose-500" aria-hidden="true" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Neighborhood Full Address Bar */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 text-center px-4">
            <MapPin className="w-4 h-4 text-rose-500 shrink-0" aria-hidden="true" />
            <span className="leading-relaxed">{BUSINESS_INFO.address}</span>
          </div>

          {/* 4 Interactive Trust Value Badges with Mouse Over Glow */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <GlowCard glowColor="red" className="bg-[#0a1733]/50 border border-white/10 p-3.5">
              <div className="flex items-center gap-2 text-rose-400 mb-1">
                <Layers className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">8+ Services</span>
              </div>
              <p className="text-[11px] text-slate-400">All everyday essentials under one roof</p>
            </GlowCard>

            <GlowCard glowColor="emerald" className="bg-[#0a1733]/50 border border-white/10 p-3.5">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">100% Secure</span>
              </div>
              <p className="text-[11px] text-slate-400">Complete privacy &amp; safe transactions</p>
            </GlowCard>

            <GlowCard glowColor="gold" className="bg-[#0a1733]/50 border border-white/10 p-3.5">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Fast Response</span>
              </div>
              <p className="text-[11px] text-slate-400">Quick WhatsApp &amp; in-person assistance</p>
            </GlowCard>

            <GlowCard glowColor="blue" className="bg-[#0a1733]/50 border border-white/10 p-3.5">
              <div className="flex items-center gap-2 text-sky-400 mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Prime Mundra</span>
              </div>
              <p className="text-[11px] text-slate-400">Adeshvar Complex, Baroi Road counter</p>
            </GlowCard>
          </div>
        </div>

        {/* Carousel Showcase Section */}
        <div className="mt-10 sm:mt-12">
          <PosterCarousel />
        </div>
      </div>
    </section>
  );
}
