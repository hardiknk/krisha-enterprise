"use client";

import React from "react";
import { MessageCircle, Phone, ShieldCheck, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessInfo";
import PosterCarousel from "@/components/PosterCarousel";

interface HeroProps {
  onOpenOriginalPoster?: () => void;
}

export default function Hero({ onOpenOriginalPoster }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 bg-gradient-to-b from-[#0c1c38] via-[#08152c] to-slate-900 text-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl filter" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl filter" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-200 text-xs sm:text-sm font-bold tracking-wide uppercase">
            <ShieldCheck className="w-4 h-4 text-red-400" aria-hidden="true" />
            {BUSINESS_INFO.tagline}
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans leading-tight"
          >
            Credit Card Bill Payment, Ticket Bookings, Recharge &amp; PF Services
          </h1>

          {/* Short supporting sentence using only supplied information */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Fast, secure, and trusted service for your flight, train, and bus
            reservations, credit card payments, all types of recharge, and PF
            assistance at Baroi Road, Mundra - Kutch.
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Chat with Krisha Enterprises on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-base shadow-xl shadow-red-600/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label={`Call Krisha Enterprises at ${BUSINESS_INFO.phoneFormatted}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Neighborhood Location Indicator */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-400">
            <MapPin className="w-4 h-4 text-red-400 shrink-0" aria-hidden="true" />
            <span>Adeshvar Complex, Baroi Road, Mundra - Kutch</span>
          </div>
        </div>

        {/* Poster Carousel Section */}
        <div className="mt-8 sm:mt-10">
          <PosterCarousel onOpenOriginalPoster={onOpenOriginalPoster} />
        </div>
      </div>
    </section>
  );
}
